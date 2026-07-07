"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Mayoristas", href: "#mayoristas" },
  { label: "Ecommerce & Dropshipping", href: "#ecommerce" },
  { label: "Maquilas", href: "#maquilas" },
  { label: "Productos", href: "#productos" },
  { label: "Operación", href: "#operacion" },
  { label: "Confianza", href: "#confianza" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquear scroll del body con el drawer abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-cream/8 bg-ink/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:h-[72px] lg:px-8">
        <Link href="#inicio" aria-label="Nature Smith — inicio" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {nav.slice(1, 7).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.8rem] font-medium tracking-wide text-mineral transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="#contacto?intent=maquila"
            className="rounded-full border border-champagne/40 px-5 py-2.5 text-[0.8rem] font-medium text-champagne transition-all hover:border-champagne hover:bg-champagne/5"
          >
            Cotizar maquila
          </Link>
          <Link
            href="#contacto"
            className="rounded-full bg-cream px-5 py-2.5 text-[0.8rem] font-semibold text-ink transition-all hover:bg-white"
          >
            Solicitar catálogo
          </Link>
        </div>

        {/* Toggle móvil */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] xl:hidden"
        >
          <span
            className={`block h-px w-5 bg-cream transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-cream transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Drawer móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 flex flex-col bg-ink/98 backdrop-blur-lg xl:hidden"
          >
            <nav aria-label="Menú móvil" className="flex-1 overflow-y-auto px-6 pt-8">
              <ul className="space-y-1">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-cream/6 py-4 font-display text-2xl text-cream"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="space-y-3 px-6 pt-6 pb-10">
              <Link
                href="#contacto"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-cream py-3.5 text-center text-sm font-semibold text-ink"
              >
                Solicitar catálogo
              </Link>
              <Link
                href="#contacto?intent=maquila"
                onClick={() => setOpen(false)}
                className="block rounded-full border border-champagne/40 py-3.5 text-center text-sm font-medium text-champagne"
              >
                Cotizar maquila
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
