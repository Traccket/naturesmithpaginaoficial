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
    <section className="border-t border-line bg-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              kicker="Servicio como diferencial"
              title="El soporte que convierte una bodega en un aliado."
              subtitle="Distribuir es fácil de prometer. Responder rápido, resolver y acompañar cada cierre es lo que sostiene una relación comercial."
            />
            <Reveal delay={0.15}>
              <ul className="mt-9 space-y-4">
                {pilares.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
                    <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-green" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M3 8.5l3.2 3L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Mesa comercial: conversación ilustrativa */}
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              <div className="flex items-center justify-between border-b border-line px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                  </span>
                  <p className="text-[0.78rem] font-semibold tracking-[0.14em] text-ink uppercase">
                    Mesa comercial — en línea
                  </p>
                </div>
                <p className="text-[0.72rem] text-muted">respuesta ágil</p>
              </div>

              <div className="space-y-3 px-6 py-7">
                {mensajes.map((m, i) => (
                  <Reveal key={i} delay={0.15 + i * 0.1}>
                    <div className={`flex ${m.de === "ns" ? "justify-end" : "justify-start"}`}>
                      <p
                        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[0.84rem] leading-relaxed ${
                          m.de === "ns"
                            ? "rounded-br-sm bg-green text-white"
                            : "rounded-bl-sm bg-soft text-ink/75"
                        }`}
                      >
                        {m.texto}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <p className="border-t border-line px-6 py-3 text-[0.7rem] text-muted/70">
                Conversación ilustrativa. Sin datos reales de clientes.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
