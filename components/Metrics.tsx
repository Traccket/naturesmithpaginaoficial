"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

/**
 * Métricas confirmadas por la empresa. Las cifras numéricas animan un conteo;
 * las cualitativas se muestran como texto. Editar aquí cuando haya nuevos datos.
 */
const metricas = [
  { valor: 15, prefijo: "+", sufijo: " años", label: "en distribución naturista" },
  { valor: 3, prefijo: "+", sufijo: " años", label: "impulsando ecommerce" },
  { texto: "Nacional", label: "cobertura en Colombia" },
  { texto: "Oro", label: "insignia como bodega en MasterShop" },
  { texto: "Maquilas", label: "para marcas y clientes del sector" },
  { texto: "Activo", label: "equipo comercial y soporte" },
] as const;

function Contador({
  valor,
  prefijo,
  sufijo,
}: {
  valor: number;
  prefijo: string;
  sufijo: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? valor : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let frame: number;
    const t0 = performance.now();
    const dur = 1400;
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
    <section className="bg-cream py-20 text-ink lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
          {metricas.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06}>
              <div className="border-l-2 border-sage/40 pl-4">
                <p className="font-display text-3xl text-ink lg:text-4xl">
                  {"valor" in m ? (
                    <Contador valor={m.valor} prefijo={m.prefijo} sufijo={m.sufijo} />
                  ) : (
                    m.texto
                  )}
                </p>
                <p className="mt-2 text-[0.78rem] leading-snug text-ink/55">
                  {m.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
