"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import NSMonogram from "./NSMonogram";

const badges = [
  "+15 años en distribución naturista",
  "+3 años impulsando ecommerce",
  "Bodega insignia oro en MasterShop",
  "Dropshipping · Maquilas · Mayoristas",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Parallax sutil del monograma siguiendo el mouse
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });
  const tx = useTransform(sx, [-1, 1], [-18, 18]);
  const ty = useTransform(sy, [-1, 1], [-12, 12]);

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  }

  return (
    <section
      id="inicio"
      ref={ref}
      onMouseMove={onMove}
      className="texture-mineral relative flex min-h-svh items-center overflow-hidden"
    >
      {/* Monograma de fondo como pieza artística */}
      <motion.div
        style={reduce ? undefined : { x: tx, y: ty }}
        className="pointer-events-none absolute top-1/2 right-[-8%] hidden -translate-y-1/2 md:block"
        aria-hidden="true"
      >
        <NSMonogram
          animated
          className="h-[70vh] w-auto text-cream/[0.06] lg:h-[85vh]"
        />
      </motion.div>

      {/* Halo de luz delicado */}
      <div
        className="pointer-events-none absolute top-[-20%] left-[10%] h-[60vh] w-[60vh] rounded-full bg-sage/[0.05] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-20 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-[0.75rem] font-semibold tracking-[0.3em] text-champagne uppercase"
        >
          Distribuidora de productos naturales · Colombia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-display text-[2.6rem] leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
        >
          Productos naturales.
          <br />
          Distribución real.
          <br />
          <span className="text-olive italic">
            Operación lista para escalar.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-mineral sm:text-lg"
        >
          Nature Smith conecta tiendas naturistas, vendedores ecommerce,
          dropshippers y marcas con una bodega confiable, catálogo mayorista,
          productos exclusivos y servicio comercial de alto nivel en Colombia.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-9 flex flex-wrap gap-x-6 gap-y-3"
        >
          {badges.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 text-[0.78rem] font-medium text-cream/70"
            >
              <span className="h-1 w-1 rounded-full bg-champagne" aria-hidden="true" />
              {b}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <Link
            href="#contacto"
            className="rounded-full bg-cream px-7 py-3.5 text-center text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-white"
          >
            Quiero el catálogo mayorista
          </Link>
          <Link
            href="#ecommerce"
            className="rounded-full border border-sage/50 px-7 py-3.5 text-center text-sm font-medium text-cream transition-all hover:-translate-y-0.5 hover:border-sage"
          >
            Quiero vender por ecommerce
          </Link>
          <Link
            href="#maquilas"
            className="rounded-full border border-champagne/40 px-7 py-3.5 text-center text-sm font-medium text-champagne transition-all hover:-translate-y-0.5 hover:border-champagne"
          >
            Quiero fabricar mi marca
          </Link>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        aria-hidden="true"
      >
        <div className="h-10 w-px animate-pulse bg-gradient-to-b from-transparent via-champagne/50 to-transparent" />
      </div>
    </section>
  );
}
