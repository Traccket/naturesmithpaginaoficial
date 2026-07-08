"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type Item = { titulo: string; texto: string };

/**
 * Lista de desplegables (acordeón) reutilizable.
 * `light` invierte los colores para secciones de fondo claro.
 */
export default function Desplegable({
  items,
  light = false,
}: {
  items: readonly Item[];
  light?: boolean;
}) {
  const [abierto, setAbierto] = useState<number | null>(0);

  const borde = light ? "divide-ink/10 border-ink/10" : "divide-cream/10 border-cream/10";
  const titulo = (open: boolean) =>
    light
      ? open ? "text-ink" : "text-ink/70 hover:text-ink"
      : open ? "text-white" : "text-cream/75 hover:text-white";
  const cuerpo = light ? "text-ink/65" : "text-cream/70";

  return (
    <div className={`divide-y border-y ${borde}`}>
      {items.map((item, i) => {
        const open = abierto === i;
        return (
          <div key={item.titulo}>
            <h3>
              <button
                type="button"
                onClick={() => setAbierto(open ? null : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-6 py-4 text-left"
              >
                <span className={`font-display text-base transition-colors sm:text-lg ${titulo(open)}`}>
                  {item.titulo}
                </span>
                <svg
                  viewBox="0 0 16 16"
                  className={`h-3.5 w-3.5 shrink-0 stroke-champagne transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                  fill="none"
                  strokeWidth="1.4"
                  aria-hidden="true"
                >
                  <path d="M8 2v12M2 8h12" />
                </svg>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className={`pb-5 text-[0.9rem] leading-relaxed ${cuerpo}`}>
                    {item.texto}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
