"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Perfil = {
  id: string;
  titulo: string;
  resumen: string;
  cta: { label: string; href: string };
  beneficios: string[];
  proceso: string[];
};

const perfiles: Perfil[] = [
  {
    id: "tienda",
    titulo: "Tengo una tienda naturista",
    resumen:
      "Accede a catálogo mayorista, productos de alta rotación y soporte comercial.",
    cta: { label: "Ver solución mayorista", href: "#mayoristas" },
    beneficios: [
      "Catálogo mayorista con productos naturales y suplementos de rotación probada.",
      "Asesor comercial asignado que responde, cotiza y cierra el pedido contigo.",
      "Cobertura nacional: tu pedido llega a tu ciudad, no solo a las capitales.",
    ],
    proceso: [
      "Solicitas el catálogo",
      "Un asesor revisa tu caso",
      "Cotización y primer pedido",
      "Reposición y acompañamiento",
    ],
  },
  {
    id: "ecommerce",
    titulo: "Vendo por ecommerce",
    resumen:
      "Trabaja con una bodega preparada para ventas digitales, dropshipping y operación diaria.",
    cta: { label: "Escalar mi ecommerce", href: "#ecommerce" },
    beneficios: [
      "Bodega activa en MasterShop (insignia oro), Droppi y otras plataformas.",
      "Inventario real y comunicación rápida: sabes qué hay antes de pautar.",
      "Acompañamiento comercial para elegir productos con potencial de venta digital.",
    ],
    proceso: [
      "Nos encuentras en tu plataforma o nos escribes",
      "Revisamos catálogo y condiciones",
      "Conectas tu operación",
      "Vendes con bodega respaldándote",
    ],
  },
  {
    id: "marca",
    titulo: "Quiero lanzar una marca",
    resumen:
      "Desarrolla productos bajo maquila con acompañamiento y enfoque comercial.",
    cta: { label: "Cotizar maquila", href: "#maquilas" },
    beneficios: [
      "Gestión de maquila con aliados y laboratorios según el tipo de producto.",
      "Visión comercial desde el día uno: el producto nace pensado para venderse.",
      "Experiencia con marcas y clientes del mundo ecommerce.",
    ],
    proceso: [
      "Cuentas tu idea de producto",
      "Definimos fórmula y presentación",
      "Producción con aliados",
      "Tu marca lista para el canal de venta",
    ],
  },
  {
    id: "exclusivos",
    titulo: "Busco productos exclusivos",
    resumen:
      "Encuentra líneas pensadas para performance comercial en canales digitales.",
    cta: { label: "Explorar oportunidades", href: "#contacto" },
    beneficios: [
      "Líneas exclusivas desarrolladas para el canal ecommerce.",
      "Productos seleccionados por comportamiento comercial, no por moda.",
      "Menos competencia directa: referencias que no están en cualquier bodega.",
    ],
    proceso: [
      "Nos cuentas tu canal y tu público",
      "Te mostramos las líneas disponibles",
      "Acuerdas condiciones",
      "Lanzas con producto diferenciado",
    ],
  },
];

export default function ClientSelector() {
  const [activo, setActivo] = useState<Perfil>(perfiles[0]);

  return (
    <section className="relative border-t border-cream/6 bg-ink-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          kicker="Empieza por aquí"
          title="¿Qué necesitas construir con Nature Smith?"
          subtitle="Cada aliado opera distinto. Elige tu perfil y mira exactamente cómo trabajamos contigo."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
          {/* Selector */}
          <Reveal>
            <div
              role="tablist"
              aria-label="Perfiles de aliado"
              className="flex flex-col gap-2"
            >
              {perfiles.map((p) => {
                const isActive = activo.id === p.id;
                return (
                  <button
                    key={p.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${p.id}`}
                    id={`tab-${p.id}`}
                    onClick={() => setActivo(p)}
                    className={`group rounded-xl border px-5 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-champagne/50 bg-graphite"
                        : "border-cream/8 bg-transparent hover:border-cream/20"
                    }`}
                  >
                    <span
                      className={`block font-display text-lg transition-colors ${
                        isActive ? "text-cream" : "text-mineral group-hover:text-cream/80"
                      }`}
                    >
                      {p.titulo}
                    </span>
                    <span className="mt-1 block text-[0.8rem] leading-relaxed text-mineral/80">
                      {p.resumen}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Panel dinámico */}
          <div
            role="tabpanel"
            id={`panel-${activo.id}`}
            aria-labelledby={`tab-${activo.id}`}
            className="relative min-h-[420px] rounded-2xl border border-cream/8 bg-graphite/60 p-7 lg:p-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activo.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <h3 className="font-display text-2xl text-cream lg:text-3xl">
                  {activo.titulo}
                </h3>

                <ul className="mt-7 space-y-4">
                  {activo.beneficios.map((b) => (
                    <li key={b} className="flex gap-3 text-[0.92rem] leading-relaxed text-cream/75">
                      <span
                        className="mt-2 h-px w-5 shrink-0 bg-champagne/60"
                        aria-hidden="true"
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <p className="text-[0.72rem] font-semibold tracking-[0.25em] text-sage uppercase">
                    Cómo funciona
                  </p>
                  <ol className="mt-4 flex flex-wrap items-center gap-y-3">
                    {activo.proceso.map((paso, i) => (
                      <li key={paso} className="flex items-center text-[0.82rem] text-mineral">
                        <span className="mr-2 font-display text-base text-champagne">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {paso}
                        {i < activo.proceso.length - 1 && (
                          <span className="mx-4 hidden h-px w-6 bg-cream/15 sm:block" aria-hidden="true" />
                        )}
                      </li>
                    ))}
                  </ol>
                </div>

                <Link
                  href={activo.cta.href}
                  className="mt-9 inline-block rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-white"
                >
                  {activo.cta.label}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
