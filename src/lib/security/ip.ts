import { createHash } from "crypto";
import { headers } from "next/headers";
import { requireEnv } from "./env";

export async function getClientIp(): Promise<string> {
  const h = await headers();
  return (
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "127.0.0.1"
  );
}

export function hashIp(ip: string): string {
  return createHash("sha256").update(`${ip}:${requireEnv("IP_HASH_SALT")}`).digest("hex");
}
