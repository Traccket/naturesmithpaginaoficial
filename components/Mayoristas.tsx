import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const puntos = [
  "Productos naturales y suplementos para bienestar, con referencias de rotación probada.",
  "Catálogo construido para tiendas naturistas: presentaciones, precios y surtido pensados para mostrador.",
  "Atención comercial real: un asesor que resuelve dudas, cotiza y cierra el pedido contigo.",
  "Cobertura nacional en Colombia, de capitales a municipios intermedios.",
  "Relación de largo plazo: más de 15 años abasteciendo al canal naturista.",
];

const idealPara = [
  "Tiendas naturistas",
  "Distribuidores locales",
  "Comercios de salud y bienestar",
  "Emprendedores con punto físico",
];

export default function Mayoristas() {
  return (
    <section id="mayoristas" className="bg-cream py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              light
              kicker="Distribución mayorista"
              title="Catálogo mayorista para tiendas naturistas que necesitan rotación, respaldo y atención real."
            />
            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-5">
                {puntos.map((p) => (
                  <li key={p} className="flex gap-4 text-[0.95rem] leading-relaxed text-ink/75">
                    <span className="mt-2.5 h-px w-6 shrink-0 bg-sage" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="#contacto"
                className="mt-10 inline-block rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-all hover:-translate-y-0.5 hover:bg-graphite"
              >
                Solicitar catálogo mayorista
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:pt-24">
            <div className="rounded-2xl border border-ink/10 bg-white/60 p-8 lg:p-10">
              <p className="text-[0.72rem] font-semibold tracking-[0.28em] text-sage uppercase">
                Ideal para
              </p>
              <ul className="mt-6 divide-y divide-ink/8">
                {idealPara.map((item, i) => (
                  <li key={item} className="flex items-baseline gap-4 py-4">
                    <span className="font-display text-lg text-champagne">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl text-ink">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.85rem] leading-relaxed text-ink/55">
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
