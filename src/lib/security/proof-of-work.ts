import { createHash, randomBytes } from "crypto";

const DIFFICULTY = "0000";
const POW_TTL_MS = 120_000;

export function generatePowChallenge(): { seed: string; difficulty: string; expiresAt: string } {
  const seed = randomBytes(16).toString("hex");
  return {
    seed,
    difficulty: DIFFICULTY,
    expiresAt: new Date(Date.now() + POW_TTL_MS).toISOString(),
  };
}

export function verifyPow(seed: string, nonce: string, difficulty: string = DIFFICULTY): boolean {
  if (!seed || !nonce || nonce.length > 64) return false;
  const hash = createHash("sha256").update(`${seed}:${nonce}`).digest("hex");
  return hash.startsWith(difficulty);
}
