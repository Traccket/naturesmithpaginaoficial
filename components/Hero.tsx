"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const badges = [
  "+15 años en distribución naturista",
  "+3 años impulsando ecommerce",
  "Bodega insignia oro en MasterShop",
];

const entrada = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-paper">
      {/* Firma NS en tinta, como marca de agua sutil */}
      <Image
        src="/ns-firma-dark.png"
        alt=""
        width={700}
        height={700}
        priority
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-6%] hidden h-[150%] w-auto -translate-y-1/2 opacity-[0.04] md:block"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-36 pb-20 lg:px-8 lg:pt-44 lg:pb-28">
        <motion.p
          {...entrada(0)}
          className="mb-5 text-[0.78rem] font-semibold tracking-[0.22em] text-green uppercase"
        >
          Nature Smith · Distribuidora de productos naturales en Colombia
        </motion.p>

        <motion.h1
          {...entrada(0.1)}
          className="max-w-3xl text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-[3.6rem]"
        >
          Productos naturales, distribución real y una operación{" "}
          <span className="text-green">lista para escalar.</span>
        </motion.h1>

        <motion.p
          {...entrada(0.2)}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          Bodega confiable, catálogo mayorista y productos exclusivos para
          tiendas naturistas, vendedores ecommerce, dropshippers y marcas.
        </motion.p>

        <motion.div
          {...entrada(0.3)}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <Link
            href="#contacto"
            className="rounded-lg bg-green px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-green-dark"
          >
            Solicitar catálogo mayorista
          </Link>
          <Link
            href="#ecommerce"
            className="rounded-lg border border-line px-7 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-ink/30"
          >
            Vender por ecommerce
          </Link>
          <a
            href="#contacto-maquila"
            className="rounded-lg border border-line px-7 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-ink/30"
          >
            Fabricar mi marca
          </a>
        </motion.div>

        <motion.ul
          {...entrada(0.45)}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6"
        >
          {badges.map((b) => (
            <li key={b} className="flex items-center gap-2.5 text-[0.85rem] font-medium text-muted">
              <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-green" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M3 8.5l3.2 3L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {b}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
