import { NextRequest, NextResponse } from "next/server";
import { cerrarSesion } from "@/lib/panelAuth";

export async function POST(req: NextRequest) {
  await cerrarSesion();
  return NextResponse.redirect(new URL("/panel", req.url), 303);
}
