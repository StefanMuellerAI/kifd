import { NextResponse } from "next/server";
import { generatePowChallenge } from "@/lib/security/proof-of-work";
import { getClientIp, hashIp } from "@/lib/security/ip";
import { checkRateLimit } from "@/lib/security/rate-limit";

export async function POST() {
  const ip = await getClientIp();
  const ipHash = hashIp(ip);

  const { allowed } = await checkRateLimit(ipHash, "init");
  if (!allowed) {
    return NextResponse.json(
      { error: "rate_limited", message: "Zu viele Anfragen. Bitte warte eine Stunde." },
      { status: 429 }
    );
  }

  const pow = generatePowChallenge();

  return NextResponse.json({
    pow_seed: pow.seed,
    difficulty: pow.difficulty,
    expires_at: pow.expiresAt,
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
