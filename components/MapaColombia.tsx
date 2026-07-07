"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/** Nodos de distribución (coordenadas sobre el viewBox del mapa). */
const nodos = [
  { ciudad: "Barranquilla", x: 150, y: 60 },
  { ciudad: "Cartagena", x: 122, y: 82 },
  { ciudad: "Bucaramanga", x: 196, y: 168 },
  { ciudad: "Medellín", x: 142, y: 205 },
  { ciudad: "Pereira", x: 142, y: 252, labelIzq: true },
  { ciudad: "Bogotá", x: 186, y: 258, hub: true },
  { ciudad: "Cali", x: 122, y: 295 },
];

export default function MapaColombia() {
  const reduce = useReducedMotion();
  const hub = nodos.find((n) => n.hub)!;

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
              <ul className="mt-10 space-y-4 text-[0.92rem] leading-relaxed text-cream/75">
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
            <div className="relative mx-auto max-w-md">
              <svg viewBox="0 0 340 420" fill="none" className="w-full" role="img" aria-label="Mapa estilizado de Colombia con nodos de distribución">
                {/* Silueta estilizada de Colombia */}
                <path
                  d="M132 28c14-6 30-4 40 6l16 16c8 8 22 8 32 4l20-8c10-4 20 2 22 12l6 34c2 10-2 20-10 26l-14 12c-6 6-8 14-6 22l10 36c2 10 0 20-8 26l-10 10c-6 6-8 16-6 24l14 58c2 12-4 24-16 28l-22 8c-10 4-22 0-28-8l-18-26c-6-8-16-12-26-10l-14 2c-12 2-24-6-26-18l-4-28c-2-10 2-20 10-26l6-6c8-6 10-16 8-26l-8-38c-2-10 0-22 8-30l14-16c6-8 8-18 4-28l-2-8c-4-12 2-26 14-30l14-6Z"
                  stroke="#6F8065"
                  strokeWidth="1.2"
                  fill="rgba(111,128,101,0.05)"
                />

                {/* Líneas de distribución desde el hub */}
                {nodos
                  .filter((n) => !n.hub)
                  .map((n, i) => (
                    <motion.line
                      key={n.ciudad}
                      x1={hub.x}
                      y1={hub.y}
                      x2={n.x}
                      y2={n.y}
                      stroke="#CBBF9A"
                      strokeWidth="0.7"
                      strokeDasharray="3 4"
                      opacity="0.45"
                      initial={reduce ? undefined : { pathLength: 0 }}
                      whileInView={reduce ? undefined : { pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
                    />
                  ))}

                {/* Nodos */}
                {nodos.map((n) => (
                  <g key={n.ciudad}>
                    {!reduce && (
                      <circle cx={n.x} cy={n.y} r={n.hub ? 10 : 6} fill="none" stroke={n.hub ? "#CBBF9A" : "#6F8065"} strokeWidth="0.8" opacity="0.5">
                        <animate attributeName="r" values={n.hub ? "6;14;6" : "4;9;4"} dur="3.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="3.5s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <circle cx={n.x} cy={n.y} r={n.hub ? 4 : 2.5} fill={n.hub ? "#CBBF9A" : "#A3A678"} />
                    <text
                      x={"labelIzq" in n && n.labelIzq ? n.x - 9 : n.x + 9}
                      y={n.y + 3.5}
                      textAnchor={"labelIzq" in n && n.labelIzq ? "end" : "start"}
                      fill="#8C8C84"
                      fontSize="9.5"
                      fontFamily="var(--font-sans)"
                      letterSpacing="0.06em"
                    >
                      {n.ciudad}
                    </text>
                  </g>
                ))}

                {/* Flecha sutil hacia LATAM */}
                <g opacity="0.4">
                  <path d="M60 380c40 14 120 16 220-4" stroke="#8C8C84" strokeWidth="0.7" strokeDasharray="2 5" />
                  <text x="118" y="408" fill="#8C8C84" fontSize="8.5" letterSpacing="0.25em">
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
