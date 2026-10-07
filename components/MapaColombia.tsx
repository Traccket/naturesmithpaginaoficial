"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/**
 * Silueta de Colombia proyectada desde coordenadas geográficas reales
 * (equirectangular) y ciudades ubicadas por su latitud/longitud verdadera.
 */
const SILUETA =
  "M188.3 16.3 L200.0 20.0 L196.3 33.7 L181.3 38.7 L176.2 22.5 L157.3 39.0 L124.8 46.5 L108.8 51.2 L92.5 67.5 L88.7 90.0 L72.5 102.5 L60.0 125.0 L47.5 112.0 L32.5 140.0 L45.0 177.5 L51.2 230.0 L27.5 265.0 L11.3 282.5 L7.5 305.0 L37.5 307.5 L57.5 317.5 L90.0 332.5 L100.0 350.0 L135.0 380.0 L177.5 402.5 L220.0 425.0 L231.5 433.0 L241.3 422.5 L243.8 357.5 L251.2 310.0 L243.8 300.0 L241.3 285.0 L302.5 280.0 L290.0 257.5 L285.0 215.0 L293.0 172.7 L252.5 170.0 L211.3 150.0 L177.5 132.5 L170.0 120.0 L156.3 97.5 L157.5 77.5 L175.0 53.8 L193.8 31.3 Z";

const nodos = [
  { ciudad: "Barranquilla", x: 110.0, y: 53.5 },
  { ciudad: "Cartagena", x: 92.2, y: 67.7, labelIzq: true },
  { ciudad: "Bucaramanga", x: 151.8, y: 149.3 },
  { ciudad: "Medellín", x: 91.0, y: 171.3, labelIzq: true },
  { ciudad: "Pereira", x: 87.8, y: 207.2, labelIzq: true },
  { ciudad: "Bogotá", x: 128.3, y: 209.8, hub: true },
  { ciudad: "Cali", x: 66.8, y: 241.2, labelIzq: true },
] as const;

export default function MapaColombia() {
  const reduce = useReducedMotion();
  const hub = nodos.find((n) => "hub" in n && n.hub)!;

  return (
    <section className="border-t border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              kicker="Cobertura"
              title="Operación nacional con visión regional."
              subtitle="Nature Smith atiende aliados en Colombia y avanza hacia nuevas oportunidades en Latinoamérica."
            />
            <Reveal delay={0.15}>
              <ul className="mt-9 space-y-4 text-[0.92rem] leading-relaxed text-muted">
                <li className="flex gap-3">
                  <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-green" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M3 8.5l3.2 3L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Despachos a las principales ciudades y municipios del país a
                  través de aliados logísticos.
                </li>
                <li className="flex gap-3">
                  <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-green" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M3 8.5l3.2 3L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Una sola operación para mayoreo, ecommerce y dropshipping: el
                  mismo respaldo sin importar el canal.
                </li>
                <li className="flex gap-3">
                  <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-green" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M3 8.5l3.2 3L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  En expansión hacia nuevos mercados de Latinoamérica.
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative mx-auto max-w-sm rounded-2xl border border-line bg-soft p-8">
              <svg
                viewBox="0 0 320 460"
                fill="none"
                className="w-full"
                role="img"
                aria-label="Mapa de Colombia con nodos de distribución en las principales ciudades"
              >
                <path
                  d={SILUETA}
                  stroke="#1E5A38"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                  fill="rgba(30,90,56,0.05)"
                />

                {nodos
                  .filter((n) => !("hub" in n && n.hub))
                  .map((n, i) => (
                    <motion.line
                      key={n.ciudad}
                      x1={hub.x}
                      y1={hub.y}
                      x2={n.x}
                      y2={n.y}
                      stroke="#1E5A38"
                      strokeWidth="0.7"
                      strokeDasharray="3 4"
                      opacity="0.35"
                      initial={reduce ? undefined : { pathLength: 0 }}
                      whileInView={reduce ? undefined : { pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
                    />
                  ))}

                {nodos.map((n) => {
                  const esHub = "hub" in n && n.hub;
                  const izq = "labelIzq" in n && n.labelIzq;
                  return (
                    <g key={n.ciudad}>
                      {!reduce && (
                        <circle
                          cx={n.x}
                          cy={n.y}
                          r={esHub ? 10 : 6}
                          fill="none"
                          stroke="#1E5A38"
                          strokeWidth="0.8"
                          opacity="0.4"
                        >
                          <animate attributeName="r" values={esHub ? "6;14;6" : "4;9;4"} dur="3.5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.4;0;0.4" dur="3.5s" repeatCount="indefinite" />
                        </circle>
                      )}
                      <circle cx={n.x} cy={n.y} r={esHub ? 4 : 2.5} fill="#1E5A38" />
                      <text
                        x={izq ? n.x - 9 : n.x + 9}
                        y={n.y + 3.5}
                        textAnchor={izq ? "end" : "start"}
                        fill="#5C655F"
                        fontSize="11"
                        fontFamily="var(--font-sans)"
                        fontWeight="500"
                      >
                        {n.ciudad}
                      </text>
                    </g>
                  );
                })}
              </svg>
              <p className="mt-4 text-center text-[0.72rem] font-semibold tracking-[0.2em] text-muted/70 uppercase">
                En expansión hacia Latinoamérica
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
