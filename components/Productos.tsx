import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/** Categorías con lenguaje responsable (sin claims médicos). */
const categorias = [
  { nombre: "Bienestar general", desc: "Rutinas diarias de bienestar." },
  { nombre: "Energía y enfoque", desc: "Acompañan el rendimiento del día." },
  { nombre: "Belleza y cuidado personal", desc: "Piel, cabello y cuerpo." },
  { nombre: "Salud digestiva", desc: "Apoyan hábitos digestivos saludables." },
  { nombre: "Apoyo articular", desc: "Acompañan movilidad y bienestar." },
  { nombre: "Vitaminas y minerales", desc: "Complementan la alimentación." },
  { nombre: "Líneas para ecommerce", desc: "Enfoque de performance digital." },
  { nombre: "Productos exclusivos", desc: "Solo a través de Nature Smith." },
];

export default function Productos() {
  return (
    <section id="productos" className="px-3 py-2 lg:px-5">
      <div className="mx-auto rounded-[2rem] bg-cream py-24 text-ink lg:rounded-[2.75rem] lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          light
          kicker="Productos y categorías"
          title="Un catálogo de bienestar construido con criterio comercial."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categorias.map((c, i) => (
            <Reveal key={c.nombre} delay={(i % 4) * 0.06}>
              <div className="group card-shine relative h-full overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage/50 hover:shadow-lg hover:shadow-sage/10">
                {/* Marca de agua orgánica */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute -top-4 -right-4 h-24 w-24 text-sage/10 transition-transform duration-500 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  aria-hidden="true"
                >
                  <path d="M50 90C30 70 20 50 30 30S60 5 75 20 85 60 50 90Z" />
                  <path d="M50 88C55 60 60 45 72 25" />
                </svg>
                <p className="font-display text-lg text-ink">{c.nombre}</p>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-ink/60">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-3xl text-[0.75rem] leading-relaxed text-ink/45">
            La información de productos se ajusta a registros, etiquetas
            autorizadas y normatividad sanitaria aplicable. Los suplementos no
            reemplazan una alimentación balanceada ni el criterio de un
            profesional de la salud.
          </p>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
