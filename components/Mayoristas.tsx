import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const puntos = [
  "Catálogo con referencias de rotación probada, pensado para mostrador y margen de tienda física.",
  "Un asesor comercial que resuelve dudas, cotiza y cierra el pedido contigo.",
  "Cobertura nacional: más de 15 años abasteciendo al canal naturista en toda Colombia.",
];

const idealPara = [
  "Tiendas naturistas",
  "Distribuidores locales",
  "Comercios de salud y bienestar",
  "Emprendedores con punto físico",
];

export default function Mayoristas() {
  return (
    <section id="mayoristas" className="border-t border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              kicker="Distribución mayorista"
              title="Catálogo mayorista para tiendas naturistas que necesitan rotación, respaldo y atención real."
            />
            <Reveal delay={0.1}>
              <ul className="mt-9 space-y-4">
                {puntos.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
                    <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-green" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M3 8.5l3.2 3L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="#contacto"
                className="mt-9 inline-block rounded-lg bg-green px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-dark"
              >
                Solicitar catálogo mayorista
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:pt-16">
            <div className="rounded-2xl border border-line bg-soft p-8 lg:p-10">
              <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-green uppercase">
                Ideal para
              </p>
              <ul className="mt-5 divide-y divide-line">
                {idealPara.map((item, i) => (
                  <li key={item} className="flex items-baseline gap-4 py-3.5">
                    <span className="text-[0.8rem] font-semibold text-green">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-medium text-ink">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.85rem] leading-relaxed text-muted">
                Si tu negocio vende bienestar en punto físico, el catálogo
                mayorista de Nature Smith está construido para tu vitrina y tu
                margen.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
