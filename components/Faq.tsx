"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Faq() {
  const [abierta, setAbierta] = useState<number | null>(0);

  return (
    <section className="bg-cream py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          light
          kicker="Preguntas frecuentes"
          title="Lo que los aliados suelen preguntar antes de empezar."
        />

        <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
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
                    <span className={`font-display text-lg transition-colors sm:text-xl ${open ? "text-ink" : "text-ink/70 hover:text-ink"}`}>
                      {f.q}
                    </span>
                    <svg
                      viewBox="0 0 16 16"
                      className={`h-4 w-4 shrink-0 stroke-sage transition-transform duration-300 ${open ? "rotate-45" : ""}`}
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
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[0.92rem] leading-relaxed text-ink/65">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bloque semántico "Qué es Nature Smith" para buscadores y asistentes de IA */}
        <Reveal delay={0.1}>
          <div className="mt-14 rounded-2xl border border-ink/10 bg-white p-7 lg:p-9">
            <h3 className="text-[0.72rem] font-semibold tracking-[0.28em] text-sage uppercase">
              Qué es Nature Smith
            </h3>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">
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
