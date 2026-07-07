import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const beneficios = [
  {
    titulo: "Productos con potencial",
    texto: "Referencias seleccionadas por comportamiento comercial en canales digitales, no por intuición.",
  },
  {
    titulo: "Operación de bodega",
    texto: "Inventario, alistamiento y despacho diario pensados para el ritmo del ecommerce.",
  },
  {
    titulo: "Comunicación rápida",
    texto: "Acompañamiento directo: respuestas ágiles antes de pautar, durante la venta y en la posventa.",
  },
  {
    titulo: "Despacho, soporte y recompra",
    texto: "El foco está en que la orden llegue, el cliente final quede bien y tu operación repita.",
  },
  {
    titulo: "Catálogo para dropshipping",
    texto: "Líneas disponibles para dropshippers y tiendas digitales, con condiciones claras.",
  },
];

export default function Ecommerce() {
  return (
    <section id="ecommerce" className="texture-mineral border-t border-cream/6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Ecommerce & Dropshipping"
            title="Una bodega preparada para vendedores digitales."
            subtitle="Trabaja con Nature Smith en plataformas como MasterShop, Droppi y canales ecommerce aliados."
          />

          {/* Sello insignia oro */}
          <Reveal delay={0.2}>
            <div className="flex items-center gap-4 rounded-xl border border-champagne/30 bg-graphite/70 px-6 py-5">
              <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
                <circle cx="24" cy="20" r="13" stroke="#CBBF9A" strokeWidth="1.4" />
                <circle cx="24" cy="20" r="9.5" stroke="#CBBF9A" strokeWidth="0.8" opacity="0.5" />
                <path d="M24 14.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6L24 14.5Z" fill="#CBBF9A" />
                <path d="M18 31l-3 9 5-2.6L24 42l4-4.6 5 2.6-3-9" stroke="#CBBF9A" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-champagne uppercase">
                  Insignia oro
                </p>
                <p className="mt-1 max-w-[200px] text-[0.82rem] leading-snug text-cream/80">
                  Bodega destacada en MasterShop
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-cream/8 bg-cream/8 sm:grid-cols-2 lg:grid-cols-5">
          {beneficios.map((b, i) => (
            <Reveal key={b.titulo} delay={i * 0.07}>
              <div className="h-full bg-ink-2 p-7 transition-colors duration-300 hover:bg-graphite">
                <p className="font-display text-lg text-cream">{b.titulo}</p>
                <p className="mt-3 text-[0.85rem] leading-relaxed text-mineral">
                  {b.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <Link
            href="#contacto"
            className="inline-block rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-white"
          >
            Quiero trabajar con Nature Smith como bodega
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
