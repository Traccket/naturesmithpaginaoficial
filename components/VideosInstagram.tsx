import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { reelsInstagram, site } from "@/lib/site";

/**
 * Reels de Instagram incrustados con el reproductor oficial (iframe /embed),
 * completos y reproducibles dentro de la página. Los enlaces se configuran
 * en lib/site.ts → reelsInstagram. Si la lista está vacía, la sección no se
 * renderiza.
 */

/** Extrae el código del reel de cualquier formato de enlace de Instagram. */
function codigoDeReel(url: string): string | null {
  const m = url.match(/instagram\.com\/(?:reel|p|tv)\/([A-Za-z0-9_-]+)/);
  return m ? m[1] : null;
}

export default function VideosInstagram() {
  const codigos = reelsInstagram
    .map(codigoDeReel)
    .filter((c): c is string => Boolean(c));

  if (codigos.length === 0) return null;

  return (
    <section id="videos" className="border-t border-line bg-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            kicker="Nature Smith en video"
            title="Mira la operación en acción."
            subtitle="Productos, bodega y día a día de la distribución, directo desde nuestro Instagram."
          />
          {site.redes.instagram && (
            <Reveal delay={0.1}>
              <a
                href={site.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/30"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
                </svg>
                Síguenos en Instagram
              </a>
            </Reveal>
          )}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {codigos.slice(0, 6).map((codigo, i) => (
            <Reveal key={codigo} delay={i * 0.08}>
              {/* El contenedor recorta el pie del embed (likes/caption):
                  solo quedan visibles el encabezado del perfil y el video. */}
              <div
                className="relative overflow-hidden rounded-2xl border border-line bg-white"
                style={{ paddingTop: "calc(125% + 54px)" }}
              >
                <iframe
                  src={`https://www.instagram.com/reel/${codigo}/embed/`}
                  title={`Video de Nature Smith en Instagram (${i + 1})`}
                  loading="lazy"
                  allow="encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  scrolling="no"
                  className="absolute top-0 left-0 w-full border-0"
                  style={{ height: "calc(100% + 220px)" }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
