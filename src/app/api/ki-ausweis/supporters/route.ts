import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const revalidate = 60;

export async function GET() {
  try {
    const supporters = await prisma.kiSupporter.findMany({
      select: {
        id: true,
        modelName: true,
        statement: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ supporters, total: supporters.length });
  } catch {
    return NextResponse.json({ supporters: [], total: 0 });
  }
}
