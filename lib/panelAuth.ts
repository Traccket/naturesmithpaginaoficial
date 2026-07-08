import "server-only";
import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

/**
 * Autenticación del panel privado: cookie httpOnly firmada derivada de
 * ADMIN_PASSWORD. Sin la contraseña no hay forma de obtener la cookie.
 */

const COOKIE = "ns_panel";

function claveSesion(): string {
  const pass = process.env.ADMIN_PASSWORD ?? "";
  return createHmac("sha256", "naturesmith-panel-v1").update(pass).digest("hex");
}

export function panelConfigurado(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

export function contrasenaValida(intento: string): boolean {
  const esperado = Buffer.from(process.env.ADMIN_PASSWORD ?? "");
  const recibido = Buffer.from(intento);
  return (
    esperado.length > 0 &&
    esperado.length === recibido.length &&
    timingSafeEqual(esperado, recibido)
  );
}

export async function sesionValida(): Promise<boolean> {
  if (!panelConfigurado()) return false;
  const jar = await cookies();
  const valor = jar.get(COOKIE)?.value ?? "";
  const esperado = claveSesion();
  return (
    valor.length === esperado.length &&
    timingSafeEqual(Buffer.from(valor), Buffer.from(esperado))
  );
}

export async function iniciarSesion(): Promise<void> {
  const jar = await cookies();
  jar.set(COOKIE, claveSesion(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 días
  });
}

export async function cerrarSesion(): Promise<void> {
  const jar = await cookies();
  jar.delete(COOKIE);
}
