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
    <section id="ecommerce" className="border-t border-line bg-soft py-20 lg:py-28">
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
              <div className="mt-9 inline-flex items-center gap-4 rounded-xl border border-line bg-white px-6 py-5">
                <svg viewBox="0 0 48 48" className="h-11 w-11 text-green" fill="none" aria-hidden="true">
                  <circle cx="24" cy="20" r="13" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M24 14.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6L24 14.5Z" fill="currentColor" />
                  <path d="M18 31l-3 9 5-2.6L24 42l4-4.6 5 2.6-3-9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-green uppercase">
                    Insignia oro
                  </p>
                  <p className="mt-1 max-w-[220px] text-[0.85rem] leading-snug text-ink">
                    Bodega destacada en MasterShop
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                href="#contacto"
                className="mt-7 inline-block rounded-lg bg-green px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-dark"
              >
                Trabajar con Nature Smith como bodega
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:pt-16">
            <Desplegable items={beneficios} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
