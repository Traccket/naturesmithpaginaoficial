"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/** Íconos lineales a medida, trazo fino, 24x24. */
const iconos: Record<string, React.ReactNode> = {
  seleccion: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5.5" />
    </>
  ),
  catalogo: (
    <>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" />
      <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z" />
      <path d="M7 8.5h2M15 8.5h2" />
    </>
  ),
  bodega: (
    <>
      <path d="M3 10l9-6 9 6v10H3V10Z" />
      <path d="M8 20v-6h8v6M8 17h8" />
    </>
  ),
  confirmacion: (
    <>
      <path d="M4 6h16v12H4z" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  despacho: (
    <>
      <path d="M2 7h12v10H2zM14 10h4l3 3v4h-7" />
      <circle cx="6" cy="17" r="1.6" />
      <circle cx="17.5" cy="17" r="1.6" />
    </>
  ),
  soporte: (
    <>
      <path d="M4 12a8 8 0 1 1 16 0" />
      <rect x="2.5" y="12" width="4" height="6" rx="1.5" />
      <rect x="17.5" y="12" width="4" height="6" rx="1.5" />
      <path d="M20 18a4 4 0 0 1-4 3h-2" />
    </>
  ),
  recompra: (
    <>
      <path d="M4 12a8 8 0 0 1 13.5-5.8M20 12a8 8 0 0 1-13.5 5.8" />
      <path d="M17 3v3.5h-3.5M7 21v-3.5h3.5" />
    </>
  ),
};

const pasos = [
  {
    icono: "seleccion",
    titulo: "Selección de productos",
    detalle: "Curaduría de referencias con rotación y demanda real, no relleno de catálogo.",
  },
  {
    icono: "catalogo",
    titulo: "Catálogo mayorista / ecommerce",
    detalle: "Dos catálogos, dos lógicas: mayoreo para tienda física y exclusivos para canal digital.",
  },
  {
    icono: "bodega",
    titulo: "Inventario y bodega",
    detalle: "Stock controlado y visible: sabes qué hay disponible antes de comprometer una venta.",
  },
  {
    icono: "confirmacion",
    titulo: "Confirmación comercial",
    detalle: "Un asesor valida pedido, condiciones y tiempos. Nada queda en el aire.",
  },
  {
    icono: "despacho",
    titulo: "Preparación y despacho",
    detalle: "Alistamiento y envío con aliados logísticos a todo el territorio nacional.",
  },
  {
    icono: "soporte",
    titulo: "Soporte al cliente",
    detalle: "Comunicación ágil durante y después de la venta, por WhatsApp y canales digitales.",
  },
  {
    icono: "recompra",
    titulo: "Recompra y escalamiento",
    detalle: "Seguimiento para reponer, ampliar líneas y crecer el canal contigo.",
  },
];

export default function SystemFlow() {
  const [activo, setActivo] = useState(0);

  return (
    <section id="operacion" className="texture-mineral border-t border-cream/6 bg-ink-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          kicker="El sistema Nature Smith"
          title="Detrás de cada venta hay una operación."
          subtitle="Nature Smith integra catálogo, inventario, atención comercial, despacho y acompañamiento para que cada aliado pueda vender con más confianza."
        />

        <Reveal className="mt-16">
          {/* Línea de proceso */}
          <div className="relative">
            <div className="hairline absolute top-6 right-0 left-0 hidden lg:block" aria-hidden="true" />
            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7 lg:gap-0">
              {pasos.map((p, i) => {
                const isActive = activo === i;
                return (
                  <li key={p.titulo} className="relative lg:px-2">
                    <button
                      type="button"
                      onClick={() => setActivo(i)}
                      aria-pressed={isActive}
                      className="group flex w-full flex-col items-start gap-3 rounded-lg p-2 text-left lg:items-center lg:text-center"
                    >
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "border-champagne bg-graphite text-champagne"
                            : "border-cream/15 bg-ink text-mineral group-hover:border-cream/35 group-hover:text-cream"
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          {iconos[p.icono]}
                        </svg>
                      </span>
                      <span
                        className={`text-[0.78rem] leading-snug font-medium transition-colors ${
                          isActive ? "text-cream" : "text-mineral group-hover:text-cream/80"
                        }`}
                      >
                        <span className="mr-1.5 font-display text-champagne/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {p.titulo}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Detalle del paso activo */}
          <motion.div
            key={activo}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-10 max-w-xl rounded-xl border border-cream/8 bg-graphite/50 px-6 py-5 text-center"
          >
            <p className="text-[0.92rem] leading-relaxed text-cream/80">
              {pasos[activo].detalle}
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
