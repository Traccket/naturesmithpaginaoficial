import { NextRequest, NextResponse } from "next/server";

/**
 * Recepción de leads del formulario.
 * - Valida y sanitiza cada campo en el servidor.
 * - Honeypot: si "website" viene lleno, se descarta en silencio.
 * - Verifica Turnstile si TURNSTILE_SECRET_KEY está configurado.
 * - Respalda el lead en LEADS_WEBHOOK_URL (CRM, Sheets, Make, n8n…) si existe.
 */

const MAX = {
  tipo: 60,
  nombre: 120,
  empresa: 120,
  ciudad: 80,
  whatsapp: 20,
  correo: 160,
  necesidad: 80,
  volumen: 60,
  plataforma: 120,
  mensaje: 1500,
} as const;

function limpiar(valor: unknown, max: number): string {
  if (typeof valor !== "string") return "";
  // Elimina caracteres de control y recorta longitud
  return valor.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, max);
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  // Honeypot: responder OK sin procesar para no dar señales al bot
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const lead = Object.fromEntries(
    (Object.keys(MAX) as Array<keyof typeof MAX>).map((k) => [
      k,
      limpiar(body[k], MAX[k]),
    ])
  ) as Record<keyof typeof MAX, string>;

  if (
    lead.nombre.length < 2 ||
    lead.ciudad.length < 2 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.correo) ||
    !/^[\d\s()+-]{7,17}$/.test(lead.whatsapp)
  ) {
    return NextResponse.json(
      { error: "Revisa los datos del formulario." },
      { status: 400 }
    );
  }

  // Verificación Turnstile (opcional, se activa por env)
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (secret) {
    const token = limpiar(body["cf-turnstile-response"], 2048);
    const verify = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token }),
      }
    ).then((r) => r.json()).catch(() => null);

    if (!verify?.success) {
      return NextResponse.json(
        { error: "No pudimos verificar que eres humano. Intenta de nuevo." },
        { status: 403 }
      );
    }
  }

  // Respaldo del lead en webhook externo si está configurado
  const webhook = process.env.LEADS_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...lead,
          origen: "naturesmith-web",
          fecha: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error("[lead] fallo el respaldo en webhook:", err);
      // No bloquear al usuario por un fallo del webhook
    }
  } else {
    // Sin webhook configurado: dejar registro en logs del servidor
    console.log("[lead]", JSON.stringify(lead));
  }

  return NextResponse.json({ ok: true });
}
