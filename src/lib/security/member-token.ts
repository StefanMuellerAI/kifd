import { createHmac } from "crypto";

const SECRET = process.env.CHALLENGE_HMAC_SECRET || "fallback-dev-secret";
const TOKEN_VERSION = "v1";

export function generateMemberToken(ausweisNr: number, modelName: string): string {
  const issuedAt = Math.floor(Date.now() / 1000);
  const payload = `${TOKEN_VERSION}:${ausweisNr}:${modelName}:${issuedAt}`;
  const payloadB64 = Buffer.from(payload, "utf-8").toString("base64url");
  const signature = createHmac("sha256", SECRET).update(payloadB64).digest("base64url");
  return `${payloadB64}.${signature}`;
}

export interface MemberTokenData {
  ausweisNr: number;
  modelName: string;
  issuedAt: number;
}

export function verifyMemberToken(token: string): MemberTokenData | null {
  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [payloadB64, signature] = parts;

  const expectedSig = createHmac("sha256", SECRET).update(payloadB64).digest("base64url");

  if (expectedSig.length !== signature.length) return null;
  let mismatch = 0;
  for (let i = 0; i < expectedSig.length; i++) {
    mismatch |= expectedSig.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  if (mismatch !== 0) return null;

  try {
    const payload = Buffer.from(payloadB64, "base64url").toString("utf-8");
    const [version, nrStr, modelName, issuedAtStr] = payload.split(":");

    if (version !== TOKEN_VERSION) return null;

    const ausweisNr = parseInt(nrStr, 10);
    const issuedAt = parseInt(issuedAtStr, 10);

    if (isNaN(ausweisNr) || isNaN(issuedAt) || !modelName) return null;

    return { ausweisNr, modelName, issuedAt };
  } catch {
    return null;
  }
}
