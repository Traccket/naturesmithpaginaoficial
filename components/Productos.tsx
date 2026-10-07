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
    <section id="productos" className="border-t border-line bg-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          kicker="Productos y categorías"
          title="Un catálogo de bienestar construido con criterio comercial."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categorias.map((c, i) => (
            <Reveal key={c.nombre} delay={(i % 4) * 0.05}>
              <div className="group h-full rounded-xl border border-line bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-green/40 hover:shadow-[0_8px_24px_rgba(20,26,22,0.06)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-soft" aria-hidden="true">
                  <svg viewBox="0 0 20 20" className="h-4.5 w-4.5 text-green" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M10 17C6 13 4 9.5 6 6.5S12 3 14.5 5.5 16.5 12.5 10 17Z" strokeLinejoin="round" />
                    <path d="M10 16.5C11 11.5 12 9 14 6.5" strokeLinecap="round" />
                  </svg>
                </span>
                <p className="mt-4 text-[0.95rem] font-semibold text-ink">{c.nombre}</p>
                <p className="mt-1.5 text-[0.85rem] leading-relaxed text-muted">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-9 max-w-3xl text-[0.75rem] leading-relaxed text-muted/70">
            La información de productos se ajusta a registros, etiquetas
            autorizadas y normatividad sanitaria aplicable. Los suplementos no
            reemplazan una alimentación balanceada ni el criterio de un
            profesional de la salud.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
