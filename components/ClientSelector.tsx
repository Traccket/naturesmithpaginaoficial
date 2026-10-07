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
    resumen: "Catálogo mayorista, alta rotación y soporte comercial.",
    cta: { label: "Ver solución mayorista", href: "#mayoristas" },
    beneficios: [
      "Catálogo mayorista con productos naturales y suplementos de rotación probada.",
      "Asesor comercial asignado que responde, cotiza y cierra el pedido contigo.",
      "Cobertura nacional: tu pedido llega a tu ciudad, no solo a las capitales.",
    ],
    proceso: ["Solicitas el catálogo", "Un asesor revisa tu caso", "Cotización y primer pedido", "Reposición y acompañamiento"],
  },
  {
    id: "ecommerce",
    titulo: "Vendo por ecommerce",
    resumen: "Bodega preparada para ventas digitales y dropshipping.",
    cta: { label: "Escalar mi ecommerce", href: "#ecommerce" },
    beneficios: [
      "Bodega activa en MasterShop (insignia oro), Droppi y otras plataformas.",
      "Inventario real y comunicación rápida: sabes qué hay antes de pautar.",
      "Acompañamiento comercial para elegir productos con potencial de venta digital.",
    ],
    proceso: ["Nos encuentras en tu plataforma o nos escribes", "Revisamos catálogo y condiciones", "Conectas tu operación", "Vendes con bodega respaldándote"],
  },
  {
    id: "marca",
    titulo: "Quiero lanzar una marca",
    resumen: "Productos bajo maquila con acompañamiento comercial.",
    cta: { label: "Cotizar maquila", href: "#maquilas" },
    beneficios: [
      "Gestión de maquila con aliados y laboratorios según el tipo de producto.",
      "Visión comercial desde el día uno: el producto nace pensado para venderse.",
      "Experiencia con marcas y clientes del mundo ecommerce.",
    ],
    proceso: ["Cuentas tu idea de producto", "Definimos fórmula y presentación", "Producción con aliados", "Tu marca lista para el canal de venta"],
  },
  {
    id: "exclusivos",
    titulo: "Busco productos exclusivos",
    resumen: "Líneas pensadas para performance en canales digitales.",
    cta: { label: "Explorar oportunidades", href: "#contacto" },
    beneficios: [
      "Líneas exclusivas desarrolladas para el canal ecommerce.",
      "Productos seleccionados por comportamiento comercial, no por moda.",
      "Menos competencia directa: referencias que no están en cualquier bodega.",
    ],
    proceso: ["Nos cuentas tu canal y tu público", "Te mostramos las líneas disponibles", "Acuerdas condiciones", "Lanzas con producto diferenciado"],
  },
];

export default function ClientSelector() {
  const [activo, setActivo] = useState<Perfil>(perfiles[0]);

  return (
    <section className="border-t border-line bg-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          kicker="Empieza por aquí"
          title="¿Qué necesitas construir con Nature Smith?"
          subtitle="Cada aliado opera distinto. Elige tu perfil y mira exactamente cómo trabajamos contigo."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[360px_1fr] lg:gap-12">
          {/* Selector */}
          <Reveal>
            <div role="tablist" aria-label="Perfiles de aliado" className="flex flex-col gap-2.5">
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
                    className={`rounded-xl border px-5 py-4 text-left transition-all duration-200 ${
                      isActive
                        ? "border-green bg-white shadow-[0_2px_16px_rgba(30,90,56,0.08)]"
                        : "border-line bg-white/60 hover:border-ink/20 hover:bg-white"
                    }`}
                  >
                    <span className={`block text-[0.95rem] font-semibold ${isActive ? "text-ink" : "text-ink/75"}`}>
                      {p.titulo}
                    </span>
                    <span className="mt-1 block text-[0.82rem] leading-relaxed text-muted">
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
            className="min-h-[380px] rounded-2xl border border-line bg-white p-7 lg:p-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activo.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <h3 className="text-xl font-semibold text-ink lg:text-2xl">{activo.titulo}</h3>

                <ul className="mt-6 space-y-3.5">
                  {activo.beneficios.map((b) => (
                    <li key={b} className="flex gap-3 text-[0.92rem] leading-relaxed text-muted">
                      <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-green" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path d="M3 8.5l3.2 3L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-xl bg-soft px-5 py-4">
                  <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-green uppercase">
                    Cómo funciona
                  </p>
                  <ol className="mt-3 flex flex-wrap items-center gap-y-2">
                    {activo.proceso.map((paso, i) => (
                      <li key={paso} className="flex items-center text-[0.82rem] text-muted">
                        <span className="mr-1.5 font-semibold text-ink">{i + 1}.</span>
                        {paso}
                        {i < activo.proceso.length - 1 && (
                          <span className="mx-3 text-line" aria-hidden="true">→</span>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>

                <Link
                  href={activo.cta.href}
                  className="mt-8 inline-block rounded-lg bg-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-dark"
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
