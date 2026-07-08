"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

const badges = [
  "+15 años en distribución naturista",
  "+3 años impulsando ecommerce",
  "Bodega insignia oro en MasterShop",
  "Dropshipping · Maquilas · Mayoristas",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Parallax sutil de la firma NS siguiendo el mouse
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
      {/* Firma NS real como pieza artística de fondo */}
      <motion.div
        style={reduce ? undefined : { x: tx, y: ty }}
        initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-1/2 right-[-4%] hidden -translate-y-1/2 md:block"
        aria-hidden="true"
      >
        <Image
          src="/ns-firma.png"
          alt=""
          width={700}
          height={700}
          priority
          className="h-[64vh] w-auto opacity-20 lg:h-[76vh]"
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
          className="max-w-4xl font-display text-[2.4rem] leading-[1.06] text-white sm:text-5xl lg:text-6xl"
        >
          Productos naturales.
          <br />
          Distribución real.
          <br />
          <span className="text-olive">Operación lista para escalar.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg"
        >
          Bodega confiable, catálogo mayorista y productos exclusivos para
          tiendas naturistas, vendedores ecommerce, dropshippers y marcas.
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
              className="flex items-center gap-2 text-[0.78rem] font-medium text-cream/80"
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
            className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-ink transition-all hover:-translate-y-0.5"
          >
            Quiero el catálogo mayorista
          </Link>
          <Link
            href="#ecommerce"
            className="rounded-full border border-cream/40 px-7 py-3.5 text-center text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-cream"
          >
            Quiero vender por ecommerce
          </Link>
          <Link
            href="#maquilas"
            className="rounded-full border border-champagne/50 px-7 py-3.5 text-center text-sm font-medium text-champagne transition-all hover:-translate-y-0.5 hover:border-champagne"
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
