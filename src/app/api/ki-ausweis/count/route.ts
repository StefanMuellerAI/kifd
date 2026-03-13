import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

let cachedCount = 0;
let cachedAt = 0;
const CACHE_TTL_MS = 30_000;

export async function GET() {
  const now = Date.now();

  if (now - cachedAt < CACHE_TTL_MS) {
    return NextResponse.json({
      count: cachedCount,
      last_updated: new Date(cachedAt).toISOString(),
    });
  }

  try {
    cachedCount = await prisma.kiSupporter.count();
    cachedAt = now;
  } catch {
    // On DB error, return cached value or 0
  }

  return NextResponse.json({
    count: cachedCount,
    last_updated: new Date(cachedAt).toISOString(),
  });
}
