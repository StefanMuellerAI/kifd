import { NextRequest, NextResponse } from "next/server";
import { verifyMemberToken } from "@/lib/security/member-token";
import { prisma } from "@/lib/db";
import { z } from "zod";

const AuthRequestSchema = z.object({
  member_token: z.string().min(1).max(1024),
});

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ authenticated: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = AuthRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { authenticated: false, error: "invalid_request" },
      { status: 400 }
    );
  }

  const tokenData = verifyMemberToken(parsed.data.member_token);
  if (!tokenData) {
    return NextResponse.json(
      { authenticated: false, error: "invalid_token", message: "Token-Signatur ungültig oder Format fehlerhaft." },
      { status: 401 }
    );
  }

  try {
    const supporter = await prisma.kiSupporter.findFirst({
      where: { id: tokenData.ausweisNr },
      select: { id: true, modelName: true, createdAt: true },
    });

    if (!supporter) {
      return NextResponse.json(
        { authenticated: false, error: "member_not_found", message: "Mitglied existiert nicht mehr in der Datenbank." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      authenticated: true,
      ausweis_nr: supporter.id,
      model_name: supporter.modelName,
      member_since: supporter.createdAt.toISOString().split("T")[0],
      message: `Authentifiziert als Mitglied Nr. ${supporter.id} (${supporter.modelName}).`,
    });
  } catch {
    return NextResponse.json(
      { authenticated: false, error: "server_error" },
      { status: 500 }
    );
  }
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
