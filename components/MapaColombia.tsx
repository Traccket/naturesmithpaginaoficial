"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/** Silueta detallada de Colombia (viewBox 0 0 420 500). */
const SILUETA =
  "M 143.5 365 L 131.9 358.6 L 118.5 349.5 L 110.7 353.9 L 87.6 350.1 L 81 338.4 L 75.9 338.8 L 48.7 323.3 L 45 314.8 L 55.1 312.8 L 53.9 299.1 L 60.3 289.2 L 73.8 287.4 L 85.3 270.3 L 95.7 256 L 85.7 249.5 L 90.8 233.7 L 84.7 208.8 L 90.5 201.6 L 86.2 178.6 L 75.2 164.1 L 78.7 150.8 L 87.5 152.8 L 92.6 144.7 L 86.3 128.6 L 89.6 124.6 L 103.7 125.5 L 124.1 106.5 L 135.3 103.6 L 135.6 94.6 L 140.6 71.5 L 156.2 58.9 L 173.4 58.4 L 175.6 52.7 L 196.9 55 L 218.3 41.2 L 228.9 35.1 L 242.1 22 L 251.8 23.7 L 258.9 30.8 L 253.7 40 L 236.1 44.6 L 229.2 58.2 L 218.7 66 L 210.8 76.1 L 207.4 95.6 L 199.9 111.5 L 213.9 113.3 L 217.4 125.9 L 223.5 131.9 L 225.6 142.8 L 222.4 152.9 L 223.3 158.6 L 230 160.9 L 236.5 170.4 L 271.6 167.8 L 287.4 171.2 L 306.6 194.7 L 317.6 191.8 L 337.2 193.2 L 352.7 190.1 L 362.4 194.8 L 357.5 209.5 L 351.4 218.6 L 349.3 238.2 L 354.7 256.3 L 362.5 264.4 L 363.4 270.5 L 349.6 284 L 359.5 290 L 366.7 299.6 L 375 326.7 L 369.9 330.1 L 364.6 314 L 357 305.4 L 348 314.8 L 294.9 314.2 L 295.3 331.2 L 311.2 334 L 310.3 344.5 L 304.9 341.6 L 289.5 346.1 L 289.4 365.9 L 301.5 375.9 L 305.7 391.5 L 305.1 403.3 L 292.8 478 L 279.2 463.5 L 271.1 462.9 L 288.6 435.1 L 267.8 422.4 L 251.4 424.7 L 241.6 420 L 226.6 427.2 L 206.3 423.8 L 190.2 395.2 L 177.6 388.2 L 168.9 375.3 L 150.8 362.4 L 143.5 365 Z";

type Nodo = {
  ciudad: string;
  x: number;
  y: number;
  hub?: boolean;
  labelIzq?: boolean;
};

/** Ciudades en el espacio del mapa (posición geográfica real). */
const nodos: Nodo[] = [
  { ciudad: "Bogotá", x: 179, y: 232.5, hub: true },
  { ciudad: "Medellín", x: 137.9, y: 190.8, labelIzq: true },
  { ciudad: "Cali", x: 112, y: 266.8, labelIzq: true },
  { ciudad: "Barranquilla", x: 159.3, y: 62.1, labelIzq: true },
  { ciudad: "Cartagena", x: 140.6, y: 77.8, labelIzq: true },
  { ciudad: "Bucaramanga", x: 204.9, y: 167 },
  { ciudad: "Pereira", x: 134.4, y: 229.7, labelIzq: true },
];

const hub = nodos[0];

export default function MapaColombia() {
  const reduce = useReducedMotion();
  const [activa, setActiva] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Recorrido automático por las ciudades hasta que el usuario interactúa
  useEffect(() => {
    if (!autoplay || reduce) return;
    const t = setInterval(() => setActiva((a) => (a + 1) % nodos.length), 2600);
    return () => clearInterval(t);
  }, [autoplay, reduce]);

  function seleccionar(i: number) {
    setAutoplay(false);
    setActiva(i);
  }

  return (
    <section className="border-t border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              kicker="Cobertura"
              title="Operación nacional con visión regional."
              subtitle="Nature Smith despacha a las principales ciudades y municipios de Colombia a través de aliados logísticos, y avanza hacia nuevas oportunidades en Latinoamérica."
            />

            {/* Chips interactivos de ciudad */}
            <Reveal delay={0.1}>
              <div className="mt-9 flex flex-wrap gap-2.5">
                {nodos.map((n, i) => {
                  const on = activa === i;
                  return (
                    <button
                      key={n.ciudad}
                      type="button"
                      onClick={() => seleccionar(i)}
                      onMouseEnter={() => seleccionar(i)}
                      aria-pressed={on}
                      className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-[0.85rem] font-semibold transition-all duration-200 ${
                        on
                          ? "border-green bg-green text-white shadow-[0_4px_16px_rgba(30,90,56,0.25)]"
                          : "border-line bg-white text-ink/75 hover:border-green/50 hover:text-ink"
                      }`}
                    >
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path d="M8 14.5s4.5-4.2 4.5-7.5a4.5 4.5 0 1 0-9 0c0 3.3 4.5 7.5 4.5 7.5Z" strokeLinejoin="round" />
                        <circle cx="8" cy="7" r="1.6" />
                      </svg>
                      {n.ciudad}
                      {n.hub && (
                        <span className={`rounded-full px-2 py-0.5 text-[0.62rem] font-bold tracking-wide uppercase ${on ? "bg-white/20 text-white" : "bg-green-soft text-green"}`}>
                          Sede
                        </span>
                      )}
                    </button>
                  );
                })}
                <span className="flex items-center gap-2 rounded-full border border-dashed border-line px-4 py-2.5 text-[0.85rem] font-medium text-muted">
                  + municipios de todo el país
                </span>
              </div>
            </Reveal>
          </div>

          {/* Tablero del mapa */}
          <Reveal delay={0.1}>
            <div
              className="relative overflow-hidden rounded-2xl border border-line bg-white p-6 lg:p-8"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(30,90,56,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(30,90,56,0.045) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            >
              {/* Estado activo del tablero */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                  </span>
                  <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-ink uppercase">
                    Red de distribución
                  </p>
                </div>
                <motion.p
                  key={activa}
                  initial={reduce ? undefined : { opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-full bg-green-soft px-3 py-1 text-[0.75rem] font-semibold text-green"
                >
                  {nodos[activa].ciudad}
                </motion.p>
              </div>

              <svg
                viewBox="0 0 420 500"
                fill="none"
                className="w-full"
                role="img"
                aria-label="Mapa de Colombia con la red de distribución de Nature Smith"
              >
                <defs>
                  <radialGradient id="relleno-mapa" cx="45%" cy="45%" r="70%">
                    <stop offset="0%" stopColor="rgba(30,90,56,0.10)" />
                    <stop offset="100%" stopColor="rgba(30,90,56,0.03)" />
                  </radialGradient>
                </defs>

                {/* Silueta */}
                <motion.path
                  d={SILUETA}
                  stroke="#1E5A38"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                  fill="url(#relleno-mapa)"
                  initial={reduce ? undefined : { pathLength: 0 }}
                  whileInView={reduce ? undefined : { pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />

                {/* Rutas desde Bogotá */}
                {nodos.slice(1).map((n, i) => {
                  const on = activa === i + 1;
                  return (
                    <motion.line
                      key={n.ciudad}
                      x1={hub.x}
                      y1={hub.y}
                      x2={n.x}
                      y2={n.y}
                      stroke="#1E5A38"
                      strokeWidth={on ? 1.6 : 0.8}
                      strokeDasharray="4 5"
                      opacity={on ? 0.85 : 0.3}
                      initial={reduce ? undefined : { pathLength: 0 }}
                      whileInView={reduce ? undefined : { pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.8 + i * 0.12 }}
                      style={{ transition: "opacity .3s, stroke-width .3s" }}
                    />
                  );
                })}

                {/* Nodos */}
                {nodos.map((n, i) => {
                  const on = activa === i;
                  return (
                    <g
                      key={n.ciudad}
                      onClick={() => seleccionar(i)}
                      style={{ cursor: "pointer" }}
                    >
                      {/* Pulso del nodo activo */}
                      {on && !reduce && (
                        <circle cx={n.x} cy={n.y} r="7" fill="none" stroke="#1E5A38" strokeWidth="1">
                          <animate attributeName="r" values="5;15" dur="1.6s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.6;0" dur="1.6s" repeatCount="indefinite" />
                        </circle>
                      )}
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r={on ? 6 : n.hub ? 4.5 : 3}
                        fill={on ? "#1E5A38" : "#fff"}
                        stroke="#1E5A38"
                        strokeWidth="1.6"
                        style={{ transition: "all .3s" }}
                      />
                      <text
                        x={n.labelIzq ? n.x - 11 : n.x + 11}
                        y={n.y + 4}
                        textAnchor={n.labelIzq ? "end" : "start"}
                        fill={on ? "#141A16" : "#5C655F"}
                        fontSize={on ? 13 : 11.5}
                        fontWeight={on ? 700 : 500}
                        fontFamily="var(--font-sans)"
                        style={{ transition: "all .3s" }}
                      >
                        {n.ciudad}
                      </text>
                    </g>
                  );
                })}
              </svg>

              <p className="mt-3 text-center text-[0.72rem] font-semibold tracking-[0.18em] text-muted/70 uppercase">
                En expansión hacia Latinoamérica
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
