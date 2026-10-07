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

  // Bloquear scroll del body con el menú abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "border-b border-line shadow-[0_1px_12px_rgba(20,26,22,0.05)]" : ""
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
                  className="text-[0.82rem] font-medium text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href="#contacto-maquila"
            className="rounded-lg border border-line px-5 py-2.5 text-[0.82rem] font-semibold text-ink transition-colors hover:border-ink/30"
          >
            Cotizar maquila
          </a>
          <Link
            href="#contacto"
            className="rounded-lg bg-green px-5 py-2.5 text-[0.82rem] font-semibold text-white transition-colors hover:bg-green-dark"
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
            className={`block h-[1.5px] w-5 bg-ink transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 flex flex-col bg-paper xl:hidden"
          >
            <nav aria-label="Menú móvil" className="flex-1 overflow-y-auto px-6 pt-6">
              <ul>
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-line py-4 text-lg font-semibold text-ink"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="space-y-3 border-t border-line px-6 pt-5 pb-10">
              <Link
                href="#contacto"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-green py-3.5 text-center text-sm font-semibold text-white"
              >
                Solicitar catálogo
              </Link>
              <a
                href="#contacto-maquila"
                onClick={() => setOpen(false)}
                className="block rounded-lg border border-line py-3.5 text-center text-sm font-semibold text-ink"
              >
                Cotizar maquila
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
