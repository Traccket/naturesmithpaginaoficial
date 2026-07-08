import { NextRequest, NextResponse } from "next/server";
import { contrasenaValida, iniciarSesion } from "@/lib/panelAuth";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const pass = String(form.get("password") ?? "").slice(0, 200);

  if (!contrasenaValida(pass)) {
    return NextResponse.redirect(new URL("/panel?error=1", req.url), 303);
  }
  await iniciarSesion();
  return NextResponse.redirect(new URL("/panel", req.url), 303);
}
