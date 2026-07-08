import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Desplegable from "./Desplegable";

const beneficios = [
  {
    titulo: "Productos con potencial de venta",
    texto: "Referencias seleccionadas por comportamiento comercial real en canales digitales, no por intuición.",
  },
  {
    titulo: "Operación de bodega diaria",
    texto: "Inventario visible, alistamiento y despacho pensados para el ritmo del ecommerce. Sabes qué hay antes de pautar.",
  },
  {
    titulo: "Comunicación rápida",
    texto: "Acompañamiento directo por WhatsApp: antes de pautar, durante la venta y en la posventa.",
  },
  {
    titulo: "Catálogo para dropshipping",
    texto: "Líneas disponibles para dropshippers y tiendas digitales con condiciones claras, enfocadas en despacho, soporte y recompra.",
  },
];

export default function Ecommerce() {
  return (
    <section id="ecommerce" className="texture-mineral border-t border-cream/6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              kicker="Ecommerce & Dropshipping"
              title="Una bodega preparada para vendedores digitales."
              subtitle="Trabaja con Nature Smith en plataformas como MasterShop, Droppi y canales ecommerce aliados."
            />

            {/* Sello insignia oro */}
            <Reveal delay={0.15}>
              <div className="mt-10 inline-flex items-center gap-4 rounded-xl border border-champagne/30 bg-graphite/70 px-6 py-5">
                <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
                  <circle cx="24" cy="20" r="13" stroke="#D6CBAA" strokeWidth="1.4" />
                  <circle cx="24" cy="20" r="9.5" stroke="#D6CBAA" strokeWidth="0.8" opacity="0.5" />
                  <path d="M24 14.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6L24 14.5Z" fill="#D6CBAA" />
                  <path d="M18 31l-3 9 5-2.6L24 42l4-4.6 5 2.6-3-9" stroke="#D6CBAA" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-champagne uppercase">
                    Insignia oro
                  </p>
                  <p className="mt-1 max-w-[200px] text-[0.82rem] leading-snug text-cream/85">
                    Bodega destacada en MasterShop
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                href="#contacto"
                className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5"
              >
                Quiero trabajar con Nature Smith como bodega
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:pt-20">
            <Desplegable items={beneficios} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
