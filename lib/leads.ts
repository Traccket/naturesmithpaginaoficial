import "server-only";

/**
 * Almacén privado de leads sobre un repositorio GitHub privado.
 * Cada lead se guarda como un archivo JSON en /leads. Volúmenes de
 * decenas de solicitudes al día funcionan sin problema; si el negocio
 * crece, este módulo se puede reemplazar por Supabase/Postgres sin
 * tocar el panel ni el formulario.
 */

const REPO = process.env.LEADS_REPO ?? "";
const TOKEN = process.env.LEADS_GITHUB_TOKEN ?? "";
const API = `https://api.github.com/repos/${REPO}/contents/leads`;

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

export type Lead = {
  fecha: string;
  tipo: string;
  nombre: string;
  empresa: string;
  ciudad: string;
  whatsapp: string;
  correo: string;
  necesidad: string;
  volumen: string;
  plataforma: string;
  mensaje: string;
};

export const almacenConfigurado = () => Boolean(REPO && TOKEN);

export async function guardarLead(lead: Omit<Lead, "fecha">): Promise<void> {
  if (!almacenConfigurado()) return;
  const fecha = new Date().toISOString();
  const id = `${fecha.slice(0, 19).replace(/[:T]/g, "-")}-${crypto
    .randomUUID()
    .slice(0, 8)}`;
  const contenido = Buffer.from(
    JSON.stringify({ ...lead, fecha }, null, 2)
  ).toString("base64");

  const res = await fetch(`${API}/${id}.json`, {
    method: "PUT",
    headers,
    body: JSON.stringify({
      message: `lead: ${lead.nombre} (${lead.tipo})`,
      content: contenido,
    }),
  });
  if (!res.ok) {
    throw new Error(`No se pudo guardar el lead (${res.status})`);
  }
}

export async function listarLeads(): Promise<Lead[]> {
  if (!almacenConfigurado()) return [];
  const res = await fetch(`${API}?per_page=100`, {
    headers,
    cache: "no-store",
  });
  if (res.status === 404) return []; // aún no hay carpeta /leads
  if (!res.ok) throw new Error(`No se pudo leer el almacén (${res.status})`);

  const archivos: Array<{ url: string; name: string }> = await res.json();
  const leads = await Promise.all(
    archivos
      .filter((a) => a.name.endsWith(".json"))
      .map(async (a) => {
        const r = await fetch(a.url, {
          headers: { ...headers, Accept: "application/vnd.github.raw+json" },
          cache: "no-store",
        });
        return (await r.json()) as Lead;
      })
  );
  return leads.sort((a, b) => b.fecha.localeCompare(a.fecha));
}
