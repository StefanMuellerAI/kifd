import { createHash, createHmac, randomBytes } from "crypto";
import { requireEnv } from "./env";

const DIFFICULTY = "0000";
const POW_TTL_MS = 120_000;

function signSeed(timestamp: number, random: string): string {
  return createHmac("sha256", requireEnv("CHALLENGE_HMAC_SECRET"))
    .update(`${timestamp}:${random}`)
    .digest("hex")
    .slice(0, 16);
}

/**
 * Seed format: {timestamp}.{random}.{mac}
 * The MAC prevents tampering; the timestamp enables server-side expiry checks.
 */
export function generatePowChallenge(): { seed: string; difficulty: string; expiresAt: string } {
  const timestamp = Date.now();
  const random = randomBytes(16).toString("hex");
  const mac = signSeed(timestamp, random);
  const seed = `${timestamp}.${random}.${mac}`;

  return {
    seed,
    difficulty: DIFFICULTY,
    expiresAt: new Date(timestamp + POW_TTL_MS).toISOString(),
  };
}

export function verifyPow(seed: string, nonce: string, difficulty: string = DIFFICULTY): boolean {
  if (!seed || !nonce || nonce.length > 64) return false;

  const parts = seed.split(".");
  if (parts.length !== 3) return false;

  const [timestampStr, random, mac] = parts;
  const timestamp = parseInt(timestampStr, 10);
  if (isNaN(timestamp)) return false;

  if (signSeed(timestamp, random) !== mac) return false;

  if (Date.now() - timestamp > POW_TTL_MS) return false;

  const hash = createHash("sha256").update(`${seed}:${nonce}`).digest("hex");
  return hash.startsWith(difficulty);
}
