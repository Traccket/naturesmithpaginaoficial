import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Desplegable from "./Desplegable";

const bloques = [
  {
    titulo: "Desarrollo de producto",
    texto: "Del concepto a la referencia concreta: definimos contigo qué producto tiene sentido comercial y cómo debe presentarse.",
  },
  {
    titulo: "Producción con aliados",
    texto: "Gestionamos procesos de maquila con aliados y laboratorios según el tipo de producto y su normatividad sanitaria.",
  },
  {
    titulo: "Enfoque en marcas ecommerce",
    texto: "Experiencia con clientes y marcas digitales que necesitan producto listo para vender, con empaque a la altura del canal.",
  },
  {
    titulo: "Escalamiento comercial",
    texto: "El producto no termina en la caja: lo conectamos con catálogo, bodega y canales de venta para que crezca.",
  },
];

const miniProceso = ["Idea", "Producto", "Presentación", "Producción", "Venta"];

export default function Maquilas() {
  return (
    <section id="maquilas" className="border-t border-cream/6 bg-ink-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              kicker="Maquilas"
              title="De concepto a producto: maquilas para marcas que quieren competir en serio."
              subtitle="Acompañamos a clientes y marcas en el desarrollo de productos naturales con visión comercial."
            />

            {/* Mini proceso */}
            <Reveal delay={0.15}>
              <ol className="mt-10 inline-flex flex-wrap items-center gap-y-3 rounded-full border border-cream/10 bg-graphite/40 px-6 py-3.5">
                {miniProceso.map((paso, i) => (
                  <li key={paso} className="flex items-center text-[0.82rem] font-medium text-cream/85">
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

            <Reveal delay={0.2}>
              <Link
                href="#contacto?intent=maquila"
                className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5"
              >
                Cotizar mi maquila
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:pt-20">
            <Desplegable items={bloques} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
