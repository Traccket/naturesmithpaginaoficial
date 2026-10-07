"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

/** Métricas confirmadas por la empresa. Editar aquí cuando haya nuevos datos. */
const metricas = [
  { valor: 15, prefijo: "+", sufijo: "", label: "años en distribución naturista" },
  { valor: 3, prefijo: "+", sufijo: "", label: "años impulsando ecommerce" },
  { texto: "Nacional", label: "cobertura en Colombia" },
  { texto: "Oro", label: "insignia como bodega en MasterShop" },
] as const;

function Contador({ valor, prefijo, sufijo }: { valor: number; prefijo: string; sufijo: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? valor : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let frame: number;
    const t0 = performance.now();
    const dur = 1200;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      setN(Math.round(valor * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, valor, reduce]);

  return (
    <span ref={ref}>
      {prefijo}
      {n}
      {sufijo}
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="border-t border-line bg-paper py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {metricas.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06}>
              <div className={i > 0 ? "lg:border-l lg:border-line lg:pl-10" : ""}>
                <p className="text-4xl font-semibold tracking-tight text-ink lg:text-5xl">
                  {"valor" in m ? (
                    <Contador valor={m.valor} prefijo={m.prefijo} sufijo={m.sufijo} />
                  ) : (
                    m.texto
                  )}
                </p>
                <p className="mt-2 text-[0.85rem] leading-snug text-muted">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
