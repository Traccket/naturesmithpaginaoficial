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

/** Posición real proyectada de cada ciudad. labelIzq: etiqueta a la izquierda del punto. */
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
    <section className="texture-mineral border-t border-cream/6 bg-ink-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              kicker="Cobertura"
              title="Operación nacional con visión regional."
              subtitle="Nature Smith atiende aliados en Colombia y avanza hacia nuevas oportunidades en Latinoamérica."
            />
            <Reveal delay={0.15}>
              <ul className="mt-10 space-y-4 text-[0.92rem] leading-relaxed text-cream/80">
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-5 shrink-0 bg-champagne/60" aria-hidden="true" />
                  Despachos a las principales ciudades y municipios del país a
                  través de aliados logísticos.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-5 shrink-0 bg-champagne/60" aria-hidden="true" />
                  Una sola operación para mayoreo, ecommerce y dropshipping: el
                  mismo respaldo sin importar el canal.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-5 shrink-0 bg-champagne/60" aria-hidden="true" />
                  En expansión hacia nuevos mercados de Latinoamérica.
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative mx-auto max-w-sm">
              <svg
                viewBox="0 0 320 500"
                fill="none"
                className="w-full"
                role="img"
                aria-label="Mapa de Colombia con nodos de distribución en las principales ciudades"
              >
                {/* Silueta de Colombia (coordenadas reales) */}
                <path
                  d={SILUETA}
                  stroke="#6F8065"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                  fill="rgba(111,128,101,0.06)"
                />

                {/* Líneas de distribución desde Bogotá */}
                {nodos
                  .filter((n) => !("hub" in n && n.hub))
                  .map((n, i) => (
                    <motion.line
                      key={n.ciudad}
                      x1={hub.x}
                      y1={hub.y}
                      x2={n.x}
                      y2={n.y}
                      stroke="#DDD3B4"
                      strokeWidth="0.7"
                      strokeDasharray="3 4"
                      opacity="0.45"
                      initial={reduce ? undefined : { pathLength: 0 }}
                      whileInView={reduce ? undefined : { pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
                    />
                  ))}

                {/* Nodos de ciudad */}
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
                          stroke={esHub ? "#DDD3B4" : "#6F8065"}
                          strokeWidth="0.8"
                          opacity="0.5"
                        >
                          <animate attributeName="r" values={esHub ? "6;14;6" : "4;9;4"} dur="3.5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.5;0;0.5" dur="3.5s" repeatCount="indefinite" />
                        </circle>
                      )}
                      <circle cx={n.x} cy={n.y} r={esHub ? 4 : 2.5} fill={esHub ? "#DDD3B4" : "#BCBF93"} />
                      <text
                        x={izq ? n.x - 9 : n.x + 9}
                        y={n.y + 3.5}
                        textAnchor={izq ? "end" : "start"}
                        fill="#C9C9C1"
                        fontSize="11"
                        fontFamily="var(--font-sans)"
                        letterSpacing="0.05em"
                      >
                        {n.ciudad}
                      </text>
                    </g>
                  );
                })}

                {/* Expansión LATAM */}
                <g opacity="0.45">
                  <path
                    d="M40 462c70 18 170 18 250-6"
                    stroke="#BDBDB5"
                    strokeWidth="0.7"
                    strokeDasharray="2 5"
                  />
                  <text x="102" y="492" fill="#BDBDB5" fontSize="9.5" letterSpacing="0.25em">
                    EXPANSIÓN LATAM
                  </text>
                </g>
              </svg>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
