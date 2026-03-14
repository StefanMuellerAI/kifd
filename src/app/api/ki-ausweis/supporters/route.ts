import { NextRequest, NextResponse } from "next/server";
import { getClientIp, hashIp } from "@/lib/security/ip";
import { checkRateLimit } from "@/lib/security/rate-limit";
import { prisma } from "@/lib/db";

export const revalidate = 60;

const MAX_LIMIT = 100;
const DEFAULT_LIMIT = 50;

export async function GET(request: NextRequest) {
  const ip = await getClientIp();
  const ipHash = hashIp(ip);

  const { allowed } = await checkRateLimit(ipHash, "supporters");
  if (!allowed) {
    return NextResponse.json(
      { error: "rate_limited", message: "Zu viele Anfragen. Bitte warte eine Minute." },
      { status: 429 }
    );
  }

  const url = request.nextUrl;
  const limitParam = parseInt(url.searchParams.get("limit") || "", 10);
  const limit = Math.min(
    Number.isFinite(limitParam) && limitParam > 0 ? limitParam : DEFAULT_LIMIT,
    MAX_LIMIT
  );
  const cursorParam = parseInt(url.searchParams.get("cursor") || "", 10);
  const cursor = Number.isFinite(cursorParam) && cursorParam > 0 ? cursorParam : undefined;

  try {
    const supporters = await prisma.kiSupporter.findMany({
      select: {
        id: true,
        modelName: true,
        statement: true,
        createdAt: true,
      },
      orderBy: { id: "desc" },
      take: limit + 1,
      ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
    });

    const hasMore = supporters.length > limit;
    const page = hasMore ? supporters.slice(0, limit) : supporters;
    const nextCursor = hasMore ? page[page.length - 1].id : null;

    return NextResponse.json({
      supporters: page,
      next_cursor: nextCursor,
      has_more: hasMore,
    });
  } catch {
    return NextResponse.json({ supporters: [], next_cursor: null, has_more: false });
  }
}
