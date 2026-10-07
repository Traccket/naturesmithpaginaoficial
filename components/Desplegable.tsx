"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type Item = { titulo: string; texto: string };

/** Lista de desplegables (acordeón) sobre fondo claro. */
export default function Desplegable({ items }: { items: readonly Item[] }) {
  const [abierto, setAbierto] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white px-6">
      {items.map((item, i) => {
        const open = abierto === i;
        return (
          <div key={item.titulo}>
            <h3>
              <button
                type="button"
                onClick={() => setAbierto(open ? null : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-6 py-4.5 text-left"
              >
                <span className={`text-[0.95rem] font-semibold transition-colors ${open ? "text-ink" : "text-ink/70 hover:text-ink"}`}>
                  {item.titulo}
                </span>
                <svg
                  viewBox="0 0 16 16"
                  className={`h-3.5 w-3.5 shrink-0 stroke-green transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                  fill="none"
                  strokeWidth="1.6"
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
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-[0.9rem] leading-relaxed text-muted">{item.texto}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
