import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/**
 * Categorías con lenguaje responsable (sin claims médicos).
 * Los patrones SVG son texturas abstractas, no fotos de stock.
 */
const categorias = [
  { nombre: "Bienestar general", desc: "Líneas enfocadas en rutinas diarias de bienestar." },
  { nombre: "Energía y enfoque", desc: "Productos que acompañan el rendimiento del día a día." },
  { nombre: "Belleza y cuidado personal", desc: "Líneas que favorecen el cuidado de piel, cabello y cuerpo." },
  { nombre: "Salud digestiva", desc: "Referencias que apoyan hábitos digestivos saludables." },
  { nombre: "Apoyo articular", desc: "Líneas que acompañan la movilidad y el bienestar articular." },
  { nombre: "Vitaminas y minerales", desc: "Suplementos que contribuyen a complementar la alimentación." },
  { nombre: "Líneas para ecommerce", desc: "Referencias con enfoque de performance para canal digital." },
  { nombre: "Productos exclusivos", desc: "Líneas propias disponibles solo a través de Nature Smith." },
];

export default function Productos() {
  return (
    <section id="productos" className="border-t border-cream/6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          kicker="Productos y categorías"
          title="Un catálogo de bienestar construido con criterio comercial."
          subtitle="Categorías pensadas para tiendas naturistas y canales digitales, con lenguaje responsable y productos ajustados a la normatividad aplicable."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categorias.map((c, i) => (
            <Reveal key={c.nombre} delay={(i % 4) * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-cream/8 bg-graphite/40 p-6 transition-all duration-300 hover:border-sage/40">
                {/* Marca de agua orgánica */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute -top-4 -right-4 h-24 w-24 text-sage/[0.08] transition-transform duration-500 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  aria-hidden="true"
                >
                  <path d="M50 90C30 70 20 50 30 30S60 5 75 20 85 60 50 90Z" />
                  <path d="M50 88C55 60 60 45 72 25" />
                </svg>
                <p className="font-display text-xl text-cream">{c.nombre}</p>
                <p className="mt-3 text-[0.85rem] leading-relaxed text-mineral">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-3xl text-[0.75rem] leading-relaxed text-mineral/70">
            La información de productos debe ajustarse a registros, etiquetas
            autorizadas y normatividad sanitaria aplicable. Los suplementos no
            reemplazan una alimentación balanceada ni el criterio de un
            profesional de la salud.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
