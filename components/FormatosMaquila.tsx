"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

/**
 * Galería de formatos que Nature Smith desarrolla bajo maquila.
 * Para agregar un producto: subir la foto a /public/maquilas y añadir
 * una línea aquí con su formato.
 */
type Formato =
  | "Polvos"
  | "Proteínas"
  | "Líquidos"
  | "Cápsulas"
  | "Sachets y sticks"
  | "Fibras";

const productos: Array<{ src: string; alt: string; detalle: string; formato: Formato }> = [
  { src: "resveratrol-bebida", alt: "Bebida de resveratrol con colágeno en botella de 1000 mL", detalle: "Bebida 1000 mL", formato: "Líquidos" },
  { src: "shilajit-bebida", alt: "Bebida de shilajit con borojó, chontaduro, maca y noni en botella de 1000 mL", detalle: "Bebida 1000 mL", formato: "Líquidos" },
  { src: "complex16-bebida", alt: "Bebida Complex 16 en 1 con seis tipos de magnesio en botella de 1000 mL", detalle: "Bebida 1000 mL", formato: "Líquidos" },
  { src: "powsure-bebida", alt: "Bebida saborizada con colágeno y cúrcuma, botella de 400 mL con estuche", detalle: "Bebida 400 mL + estuche", formato: "Líquidos" },
  { src: "fitogastril-jarabe", alt: "Jarabe fitoterapéutico en frasco de 360 mL", detalle: "Jarabe 360 mL", formato: "Líquidos" },
  { src: "cloruro-magnesio-polvo", alt: "Cloruro de magnesio en polvo, tarro de 700 g", detalle: "Tarro 700 g", formato: "Polvos" },
  { src: "tres-kalostrum-lata", alt: "Alimento en polvo con tres calostros, lata de 1000 g", detalle: "Lata 1000 g", formato: "Polvos" },
  { src: "colageno-hidrolizado-lata", alt: "Colágeno hidrolizado en polvo, lata de 1000 g", detalle: "Lata 1000 g", formato: "Polvos" },
  { src: "remolacha-polvo", alt: "Proteína con remolacha en polvo, tarro de 300 g", detalle: "Tarro 300 g", formato: "Polvos" },
  { src: "colahlth-colageno", alt: "Colágeno hidrolizado saborizado en polvo, tarro de 400 g", detalle: "Tarro 400 g", formato: "Polvos" },
  { src: "whey-pro-proteina", alt: "Proteína de suero en polvo, tarro de 1500 g", detalle: "Tarro 1500 g", formato: "Proteínas" },
  { src: "nutrifactors-proteina", alt: "Proteína aislada de soya con calostro y colágeno, tarro de 700 g", detalle: "Tarro 700 g", formato: "Proteínas" },
  { src: "cloru-mg-capsulas", alt: "Suplemento de cloruro de magnesio con vitamina D, frasco de 90 cápsulas", detalle: "Frasco x90", formato: "Cápsulas" },
  { src: "clormagtrin-capsulas", alt: "Cápsulas de cloruro de magnesio con estuche, 90 unidades", detalle: "Frasco + estuche x90", formato: "Cápsulas" },
  { src: "colageno-biotina-capsulas", alt: "Cápsulas de colágeno hidrolizado y biotina con estuche, 60 unidades", detalle: "Frasco + estuche x60", formato: "Cápsulas" },
  { src: "bilalax-sachet", alt: "Sachet de alimento a base de linaza, 20 g", detalle: "Sachet 20 g", formato: "Sachets y sticks" },
  { src: "vitcalpro-sticks", alt: "Caja de sticks de bebida vitamínica de 15 mL", detalle: "Caja x15 sticks", formato: "Sachets y sticks" },
  { src: "cloruro-magnesio-sticks", alt: "Caja de sticks de cloruro de magnesio con colágeno de 15 mL", detalle: "Caja x15 sticks", formato: "Sachets y sticks" },
  { src: "colnclin-fibra", alt: "Fibra a base de linaza con frutas en doypack de 450 g", detalle: "Doypack 450 g", formato: "Fibras" },
  { src: "linaza-dorada-fibra", alt: "Linaza dorada con fibras de frutas, semillas de chía y psyllium en doypack de 450 g", detalle: "Doypack 450 g", formato: "Fibras" },
  { src: "clorofila-bebida", alt: "Bebida con clorofila y vitaminas en botella de 500 mL", detalle: "Bebida 500 mL", formato: "Líquidos" },
  { src: "nrgy10-shot", alt: "Shot energético de 60 mL con caja de 6 unidades", detalle: "Shot 60 mL · caja x6", formato: "Líquidos" },
  { src: "cloruro-magnesio-sachets", alt: "Cloruro de magnesio en polvo, sachet de 15 g con caja de 15 unidades", detalle: "Sachet 15 g · caja x15", formato: "Sachets y sticks" },
];

const formatos: Array<"Todos" | Formato> = [
  "Todos",
  "Polvos",
  "Proteínas",
  "Líquidos",
  "Cápsulas",
  "Sachets y sticks",
  "Fibras",
];

export default function FormatosMaquila() {
  const [filtro, setFiltro] = useState<(typeof formatos)[number]>("Todos");
  const visibles =
    filtro === "Todos" ? productos : productos.filter((p) => p.formato === filtro);

  return (
    <div className="mt-16 border-t border-line pt-12">
      <Reveal>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.75rem] font-semibold tracking-[0.22em] text-green uppercase">
              Formatos que desarrollamos
            </p>
            <h3 className="mt-3 max-w-xl text-2xl text-ink">
              Polvos, proteínas, líquidos, cápsulas, sachets y fibras.
            </h3>
          </div>
          <p className="max-w-sm text-[0.85rem] leading-relaxed text-muted">
            Productos reales desarrollados bajo maquila para clientes y marcas
            del sector.
          </p>
        </div>
      </Reveal>

      {/* Filtro por formato */}
      <Reveal delay={0.1}>
        <div className="mt-7 flex flex-wrap gap-2">
          {formatos.map((f) => {
            const on = filtro === f;
            const total = f === "Todos" ? productos.length : productos.filter((p) => p.formato === f).length;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFiltro(f)}
                aria-pressed={on}
                className={`rounded-full border px-4 py-2 text-[0.82rem] font-semibold transition-all duration-200 ${
                  on
                    ? "border-green bg-green text-white"
                    : "border-line bg-white text-ink/70 hover:border-green/50 hover:text-ink"
                }`}
              >
                {f}
                <span className={`ml-1.5 text-[0.72rem] font-medium ${on ? "text-white/70" : "text-muted"}`}>
                  {total}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Galería */}
      <motion.div layout className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <AnimatePresence mode="popLayout">
          {visibles.map((p) => (
            <motion.figure
              key={p.src}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="group overflow-hidden rounded-xl border border-line bg-white"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-white p-3">
                <Image
                  src={`/maquilas/${p.src}.jpg`}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-2 border-t border-line px-3.5 py-2.5">
                <span className="text-[0.75rem] font-semibold text-ink">{p.formato}</span>
                <span className="text-[0.72rem] text-muted">{p.detalle}</span>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>

      <Reveal delay={0.1}>
        <p className="mt-6 text-[0.75rem] leading-relaxed text-muted/70">
          Referencias desarrolladas bajo procesos de maquila con aliados y
          laboratorios. Cada producto se ajusta a los registros y la
          normatividad sanitaria aplicable.
        </p>
      </Reveal>
    </div>
  );
}
