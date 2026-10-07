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
    <section id="maquilas" className="border-t border-line bg-paper py-20 lg:py-28">
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
              <ol className="mt-9 inline-flex flex-wrap items-center gap-y-2 rounded-xl border border-line bg-soft px-5 py-3.5">
                {miniProceso.map((paso, i) => (
                  <li key={paso} className="flex items-center text-[0.85rem] font-medium text-ink">
                    {paso}
                    {i < miniProceso.length - 1 && (
                      <span className="mx-3 text-muted/50" aria-hidden="true">→</span>
                    )}
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <a
                  href="#contacto-maquila"
                  className="mt-7 inline-block rounded-lg bg-green px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-dark"
                >
                  Cotizar mi maquila
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:pt-16">
            <Desplegable items={bloques} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
