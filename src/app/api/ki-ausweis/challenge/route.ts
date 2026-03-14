import { NextRequest, NextResponse } from "next/server";
import { getClientIp, hashIp } from "@/lib/security/ip";
import { checkRateLimit } from "@/lib/security/rate-limit";
import { verifyPow } from "@/lib/security/proof-of-work";
import { signChallenge } from "@/lib/security/hmac";
import { generateChallengeSet, getPublicTasks } from "@/lib/challenge/constraints";
import { ChallengeRequestSchema } from "@/lib/validation/schemas";
import { prisma } from "@/lib/db";
import { randomUUID } from "crypto";

export async function POST(request: NextRequest) {
  const ip = await getClientIp();
  const ipHash = hashIp(ip);

  const { allowed } = await checkRateLimit(ipHash, "challenge");
  if (!allowed) {
    return NextResponse.json(
      { error: "rate_limited", message: "Maximale Anzahl an Challenges erreicht. Bitte warte eine Stunde." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = ChallengeRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_request" },
      { status: 400 }
    );
  }

  const { pow_seed, pow_nonce } = parsed.data;

  if (!verifyPow(pow_seed, pow_nonce)) {
    return NextResponse.json(
      { error: "invalid_pow", message: "Proof-of-Work ungültig." },
      { status: 400 }
    );
  }

  const challengeId = randomUUID();
  const expiresAt = new Date(Date.now() + 120_000);
  const expiresAtTs = expiresAt.getTime();

  const { tasks, solutions } = generateChallengeSet();

  const hmac = signChallenge(challengeId, ipHash, expiresAtTs);

  try {
    await prisma.challenge.create({
      data: {
        id: challengeId,
        ipHash,
        hmacSignature: hmac,
        solutions: solutions as object,
        expiresAt,
        used: false,
        attempts: 0,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "server_error", message: "Challenge konnte nicht erstellt werden." },
      { status: 500 }
    );
  }

  // Best-effort cleanup of expired challenges (fire-and-forget)
  prisma.challenge
    .deleteMany({ where: { expiresAt: { lt: new Date(Date.now() - 3_600_000) } } })
    .catch(() => {});

  const challengeToken = `${challengeId}:${expiresAtTs}:${hmac}`;

  return NextResponse.json({
    challenge_token: challengeToken,
    tasks: getPublicTasks(tasks),
    expires_at: expiresAt.toISOString(),
  });
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
