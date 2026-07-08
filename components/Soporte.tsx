import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const pilares = [
  "Comunicación ágil por WhatsApp y canales digitales",
  "Acompañamiento a tiendas, vendedores y marcas para cerrar negocios",
  "Seguimiento y relación a largo plazo",
];

/** Conversación abstracta, sin datos reales de clientes. */
const mensajes = [
  { de: "aliado", texto: "Necesito reponer dos referencias antes del fin de semana, ¿hay stock?" },
  { de: "ns", texto: "Confirmado: ambas disponibles en bodega. Te paso la cotización ahora mismo." },
  { de: "ns", texto: "Cotización enviada ✓ — Si apruebas hoy, despachamos mañana en la mañana." },
  { de: "aliado", texto: "Aprobado. Gracias por la velocidad." },
  { de: "ns", texto: "Pedido en alistamiento. Te comparto la guía apenas salga de bodega." },
];

export default function Soporte() {
  return (
    <section className="border-t border-cream/6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              kicker="Servicio como diferencial"
              title="El soporte que convierte una bodega en un aliado."
              subtitle="Distribuir es fácil de prometer. Responder rápido, resolver y acompañar cada cierre es lo que sostiene una relación comercial."
            />
            <Reveal delay={0.15}>
              <ul className="mt-10 space-y-4">
                {pilares.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.92rem] leading-relaxed text-cream/75">
                    <span className="mt-2 h-px w-5 shrink-0 bg-sage" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Centro de operaciones: inbox abstracto */}
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-cream/10 bg-graphite/70">
              <div className="flex items-center justify-between border-b border-cream/8 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
                  </span>
                  <p className="text-[0.78rem] font-semibold tracking-[0.18em] text-cream/80 uppercase">
                    Mesa comercial — en línea
                  </p>
                </div>
                <p className="text-[0.7rem] text-mineral">respuesta ágil</p>
              </div>

              <div className="space-y-3 px-6 py-7">
                {mensajes.map((m, i) => (
                  <Reveal key={i} delay={0.15 + i * 0.12}>
                    <div className={`flex ${m.de === "ns" ? "justify-end" : "justify-start"}`}>
                      <p
                        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[0.82rem] leading-relaxed ${
                          m.de === "ns"
                            ? "rounded-br-sm bg-sage/20 text-cream/90"
                            : "rounded-bl-sm bg-ink text-mineral"
                        }`}
                      >
                        {m.texto}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <p className="border-t border-cream/8 px-6 py-3 text-[0.68rem] tracking-wide text-mineral/60">
                Conversación ilustrativa. Sin datos reales de clientes.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
