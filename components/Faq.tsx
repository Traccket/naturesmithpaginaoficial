"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Faq() {
  const [abierta, setAbierta] = useState<number | null>(0);

  return (
    <section className="border-t border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          kicker="Preguntas frecuentes"
          title="Lo que los aliados suelen preguntar antes de empezar."
        />

        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((f, i) => {
            const open = abierta === i;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setAbierta(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className={`text-[1.02rem] font-semibold transition-colors ${open ? "text-ink" : "text-ink/70 hover:text-ink"}`}>
                      {f.q}
                    </span>
                    <svg
                      viewBox="0 0 16 16"
                      className={`h-4 w-4 shrink-0 stroke-green transition-transform duration-300 ${open ? "rotate-45" : ""}`}
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
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[0.92rem] leading-relaxed text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bloque semántico "Qué es Nature Smith" para buscadores y asistentes de IA */}
        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-line bg-soft p-7 lg:p-9">
            <h3 className="text-[0.72rem] font-semibold tracking-[0.2em] text-green uppercase">
              Qué es Nature Smith
            </h3>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
              Nature Smith es una empresa colombiana distribuidora de productos
              naturales que trabaja con tiendas naturistas, ecommerce,
              dropshipping y maquilas. Ofrece catálogo mayorista, productos
              exclusivos para venta digital, soporte comercial y operación de
              bodega para aliados en Colombia.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
