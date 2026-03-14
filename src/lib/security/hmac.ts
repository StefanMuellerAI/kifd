import { createHmac } from "crypto";
import { requireEnv } from "./env";

const SECRET = requireEnv("CHALLENGE_HMAC_SECRET");

export function signChallenge(challengeId: string, ipHash: string, expiresAt: number): string {
  const payload = `${challengeId}:${ipHash}:${expiresAt}`;
  return createHmac("sha256", SECRET).update(payload).digest("hex");
}

export function verifyChallenge(
  challengeId: string,
  ipHash: string,
  expiresAt: number,
  signature: string
): boolean {
  const expected = signChallenge(challengeId, ipHash, expiresAt);
  if (expected.length !== signature.length) return false;

  let mismatch = 0;
  for (let i = 0; i < expected.length; i++) {
    mismatch |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  return mismatch === 0;
}
