import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const bloques = [
  {
    titulo: "Desarrollo de producto",
    texto: "Del concepto a la referencia concreta: definimos con el cliente qué producto tiene sentido comercial.",
  },
  {
    titulo: "Presentación y empaque",
    texto: "Acompañamiento para que la presentación esté a la altura del canal donde va a competir.",
  },
  {
    titulo: "Marcas ecommerce",
    texto: "Experiencia con clientes y marcas del mundo digital que necesitan producto listo para vender.",
  },
  {
    titulo: "Producción tercerizada",
    texto: "Gestionamos procesos de maquila con aliados y laboratorios según el tipo de producto y su normatividad.",
  },
  {
    titulo: "Escalamiento comercial",
    texto: "El producto no termina en la caja: lo conectamos con catálogo, bodega y canales de venta.",
  },
];

const miniProceso = ["Idea", "Fórmula / producto", "Presentación", "Producción", "Catálogo", "Venta"];

export default function Maquilas() {
  return (
    <section id="maquilas" className="border-t border-cream/6 bg-ink-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          kicker="Maquilas"
          title="De concepto a producto: maquilas para marcas que quieren competir en serio."
          subtitle="Nature Smith acompaña a clientes y marcas en el desarrollo de productos naturales, con visión comercial, presentación profesional y enfoque en canales de venta."
        />

        {/* Mini proceso */}
        <Reveal className="mt-12">
          <ol className="flex flex-wrap items-center gap-y-3 rounded-full border border-cream/8 bg-graphite/40 px-6 py-4">
            {miniProceso.map((paso, i) => (
              <li key={paso} className="flex items-center text-[0.82rem] font-medium text-cream/80">
                {paso}
                {i < miniProceso.length - 1 && (
                  <svg viewBox="0 0 20 8" className="mx-3 h-2 w-5 stroke-champagne/50" fill="none" aria-hidden="true">
                    <path d="M0 4h17m0 0-3-3m3 3-3 3" strokeWidth="1" />
                  </svg>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bloques.map((b, i) => (
            <Reveal key={b.titulo} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-cream/8 bg-ink p-7 transition-all duration-300 hover:border-champagne/30">
                <span className="font-display text-lg text-champagne/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-display text-xl text-cream">{b.titulo}</p>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-mineral">
                  {b.texto}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.35}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-champagne/25 bg-graphite p-7">
              <p className="text-[0.95rem] leading-relaxed text-cream/85">
                ¿Tienes una idea de producto o una marca que necesita fabricar
                con respaldo? Cuéntanos el caso y lo revisamos contigo.
              </p>
              <Link
                href="#contacto?intent=maquila"
                className="mt-6 inline-block self-start rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                Cotizar mi maquila
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
