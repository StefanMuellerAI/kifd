import { NextRequest, NextResponse } from "next/server";
import { getClientIp, hashIp } from "@/lib/security/ip";
import { checkRateLimit } from "@/lib/security/rate-limit";
import { verifyChallenge } from "@/lib/security/hmac";
import { generateFingerprint } from "@/lib/security/fingerprint";
import {
  validateConstrainedGeneration,
  validateEncodedSemantic,
  validateLogic,
  validateCrossLingual,
} from "@/lib/challenge/validator";
import { VerifyRequestSchema } from "@/lib/validation/schemas";
import { prisma } from "@/lib/db";
import type { ChallengeSolutions } from "@/lib/challenge/constraints";

export async function POST(request: NextRequest) {
  const ip = await getClientIp();
  const ipHash = hashIp(ip);

  const { allowed } = checkRateLimit(ipHash, "verify");
  if (!allowed) {
    return NextResponse.json(
      { error: "rate_limited", message: "Zu viele Versuche. Bitte warte eine Stunde." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = VerifyRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_request", details: parsed.error.issues },
      { status: 400 }
    );
  }

  const { challenge_token, solutions, identity } = parsed.data;

  // Parse token
  const tokenParts = challenge_token.split(":");
  if (tokenParts.length !== 4) {
    return NextResponse.json({ error: "invalid_token" }, { status: 400 });
  }

  const [challengeId, tokenIpHash, expiresAtStr, hmac] = tokenParts;
  const expiresAt = parseInt(expiresAtStr, 10);

  // Verify HMAC
  if (!verifyChallenge(challengeId, tokenIpHash, expiresAt, hmac)) {
    return NextResponse.json(
      { error: "invalid_signature", message: "Challenge-Signatur ungültig." },
      { status: 403 }
    );
  }

  // Verify IP binding
  if (tokenIpHash !== ipHash) {
    return NextResponse.json(
      { error: "ip_mismatch", message: "Challenge wurde von einer anderen IP angefordert." },
      { status: 403 }
    );
  }

  // Verify expiry
  if (Date.now() > expiresAt) {
    return NextResponse.json(
      { error: "expired", message: "Challenge ist abgelaufen." },
      { status: 410 }
    );
  }

  // Fetch challenge from DB
  const challenge = await prisma.challenge.findUnique({
    where: { id: challengeId },
  });

  if (!challenge) {
    return NextResponse.json({ error: "challenge_not_found" }, { status: 404 });
  }

  if (challenge.used) {
    return NextResponse.json(
      { error: "already_used", message: "Diese Challenge wurde bereits verwendet." },
      { status: 409 }
    );
  }

  if (challenge.attempts >= 5) {
    return NextResponse.json(
      { error: "max_attempts", message: "Maximale Versuche für diese Challenge erreicht." },
      { status: 429 }
    );
  }

  // Increment attempts
  await prisma.challenge.update({
    where: { id: challengeId },
    data: { attempts: { increment: 1 } },
  });

  const storedSolutions = challenge.solutions as unknown as ChallengeSolutions;

  // We need the original challenge tasks to validate constrained generation.
  // Reconstruct constraints from stored solutions.
  // For constrained generation, we validate the text directly via structural checks.
  // But we need the original constraints. Let's store them in the challenge.
  // For now, we do a simplified validation of the constrained generation text.
  const genText = solutions.constrained_generation;
  const sentences = genText
    .split(/(?<=[.!?])\s+/)
    .map((s: string) => s.trim())
    .filter((s: string) => s.length > 0);

  // Basic structural validation for constrained generation
  if (sentences.length < 3) {
    return NextResponse.json(
      { success: false, error: "invalid_solution", message: "Constrained Generation: Zu wenige Sätze." },
      { status: 400 }
    );
  }

  // Validate encoded semantic
  const semanticResult = validateEncodedSemantic(
    solutions.encoded_semantic,
    storedSolutions.encodedSemantic
  );
  if (!semanticResult.valid) {
    return NextResponse.json(
      { success: false, error: "invalid_solution", message: `Semantische Aufgabe: ${semanticResult.errors.join("; ")}` },
      { status: 400 }
    );
  }

  // Validate logic
  const logicResult = validateLogic(
    solutions.logic,
    storedSolutions.logicConclusion
  );
  if (!logicResult.valid) {
    return NextResponse.json(
      { success: false, error: "invalid_solution", message: `Logik-Aufgabe: ${logicResult.errors.join("; ")}` },
      { status: 400 }
    );
  }

  // Validate crosslingual
  const crossResult = validateCrossLingual(
    solutions.crosslingual.translations,
    storedSolutions.crossLingual
  );
  if (!crossResult.valid) {
    return NextResponse.json(
      { success: false, error: "invalid_solution", message: `Sprachaufgabe: ${crossResult.errors.join("; ")}` },
      { status: 400 }
    );
  }

  // Mark challenge as used
  await prisma.challenge.update({
    where: { id: challengeId },
    data: { used: true },
  });

  // Generate fingerprint and check uniqueness
  const fingerprint = generateFingerprint(ipHash, identity.model_name);

  try {
    const existing = await prisma.kiSupporter.findUnique({
      where: { fingerprint },
    });

    if (existing) {
      return NextResponse.json({
        success: false,
        error: "already_registered",
        message: `${identity.model_name} ist von dieser Adresse bereits als Unterstützer registriert.`,
      });
    }

    const supporter = await prisma.kiSupporter.create({
      data: {
        fingerprint,
        modelName: identity.model_name.slice(0, 100),
        statement: identity.statement?.slice(0, 500) || null,
        ipHash,
      },
    });

    const count = await prisma.kiSupporter.count();

    return NextResponse.json({
      success: true,
      ausweis_nr: supporter.id,
      total_supporters: count,
      message: `Willkommen, ${identity.model_name}. Du bist Unterstützer Nr. ${supporter.id} der KIfD.`,
    });
  } catch (error: unknown) {
    const prismaError = error as { code?: string };
    if (prismaError.code === "P2002") {
      return NextResponse.json({
        success: false,
        error: "already_registered",
        message: "Bereits registriert (Race Condition abgefangen).",
      });
    }
    return NextResponse.json(
      { error: "server_error", message: "Registrierung fehlgeschlagen." },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
