import type { Metadata } from "next";
import { listarLeads, almacenConfigurado, type Lead } from "@/lib/leads";
import { sesionValida, panelConfigurado } from "@/lib/panelAuth";
import Logo from "@/components/Logo";

// Panel privado: sin enlaces desde el sitio público y sin indexación.
export const metadata: Metadata = {
  title: "Panel | Nature Smith",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

function FormLogin({ error }: { error: boolean }) {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-soft px-5">
      <Logo compact />
      <h1 className="mt-6 text-xl font-semibold text-ink">Panel privado</h1>
      <form
        method="POST"
        action="/api/panel/login"
        className="mt-7 w-full max-w-xs space-y-3 rounded-2xl border border-line bg-white p-6"
      >
        <label htmlFor="password" className="block text-[0.82rem] font-medium text-ink/80">
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink focus:border-green focus:outline-none"
        />
        {error && (
          <p role="alert" className="text-[0.8rem] text-red-600">
            Contraseña incorrecta.
          </p>
        )}
        <button
          type="submit"
          className="w-full rounded-lg bg-green py-3 text-sm font-semibold text-white transition-colors hover:bg-green-dark"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}

function FilaLead({ lead }: { lead: Lead }) {
  const fecha = new Date(lead.fecha).toLocaleString("es-CO", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  const wa = lead.whatsapp.replace(/\D/g, "");
  const waIntl = wa.startsWith("57") ? wa : `57${wa}`;
  return (
    <details className="group border-b border-line">
      <summary className="grid cursor-pointer grid-cols-[1fr_auto] items-center gap-3 py-4 sm:grid-cols-[160px_1fr_180px_auto]">
        <span className="hidden text-[0.78rem] text-muted sm:block">{fecha}</span>
        <span className="font-medium text-ink">
          {lead.nombre}
          {lead.empresa && <span className="text-muted"> · {lead.empresa}</span>}
        </span>
        <span className="hidden text-[0.8rem] font-medium text-green sm:block">{lead.tipo}</span>
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 stroke-muted transition-transform group-open:rotate-45" fill="none" strokeWidth="1.5" aria-hidden="true">
          <path d="M8 2v12M2 8h12" />
        </svg>
      </summary>
      <div className="grid gap-2 pb-5 text-[0.85rem] text-ink/80 sm:grid-cols-2">
        <p className="sm:hidden"><span className="text-muted">Fecha:</span> {fecha}</p>
        <p className="sm:hidden"><span className="text-muted">Tipo:</span> {lead.tipo}</p>
        <p><span className="text-muted">Ciudad:</span> {lead.ciudad}</p>
        <p><span className="text-muted">Necesidad:</span> {lead.necesidad}</p>
        {lead.volumen && <p><span className="text-muted">Volumen:</span> {lead.volumen}</p>}
        {lead.plataforma && <p><span className="text-muted">Plataforma:</span> {lead.plataforma}</p>}
        <p><span className="text-muted">Correo:</span> <a className="text-green underline underline-offset-2" href={`mailto:${lead.correo}`}>{lead.correo}</a></p>
        <p><span className="text-muted">WhatsApp:</span> {lead.whatsapp}</p>
        {lead.mensaje && (
          <p className="sm:col-span-2"><span className="text-muted">Mensaje:</span> {lead.mensaje}</p>
        )}
        <div className="mt-2 sm:col-span-2">
          <a
            href={`https://wa.me/${waIntl}?text=${encodeURIComponent(`Hola ${lead.nombre}, te escribimos de Nature Smith por la solicitud que dejaste en nuestra página.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-green px-5 py-2 text-[0.8rem] font-semibold text-white transition-colors hover:bg-green-dark"
          >
            Responder por WhatsApp
          </a>
        </div>
      </div>
    </details>
  );
}

export default async function Panel({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  if (!panelConfigurado()) {
    return (
      <main className="flex min-h-svh items-center justify-center bg-paper px-5">
        <p className="max-w-sm text-center text-sm text-muted">
          El panel no está configurado: falta la variable ADMIN_PASSWORD.
        </p>
      </main>
    );
  }

  if (!(await sesionValida())) {
    return <FormLogin error={error === "1"} />;
  }

  const leads = almacenConfigurado() ? await listarLeads() : [];

  return (
    <main className="mx-auto min-h-svh max-w-5xl bg-paper px-5 py-14 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo compact />
          <div>
            <h1 className="text-xl font-semibold text-ink">Solicitudes recibidas</h1>
            <p className="mt-1 text-[0.8rem] text-muted">
              {leads.length} registro{leads.length === 1 ? "" : "s"} · privado
            </p>
          </div>
        </div>
        <form method="POST" action="/api/panel/logout">
          <button
            type="submit"
            className="rounded-lg border border-line px-5 py-2 text-[0.8rem] font-medium text-ink/70 transition-colors hover:border-ink/30"
          >
            Cerrar sesión
          </button>
        </form>
      </div>

      <div className="mt-10">
        {leads.length === 0 ? (
          <p className="rounded-xl border border-line bg-soft px-6 py-10 text-center text-sm text-muted">
            Aún no hay solicitudes. Cuando alguien llene el formulario de la
            página, aparecerá aquí automáticamente.
          </p>
        ) : (
          <div className="border-t border-line">
            {leads.map((l) => (
              <FilaLead key={l.fecha + l.correo} lead={l} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
