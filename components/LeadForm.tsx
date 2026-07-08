"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const TURNSTILE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const tiposAliado = [
  "Tienda naturista",
  "Vendedor ecommerce",
  "Dropshipper",
  "Marca interesada en maquila",
  "Distribuidor",
  "Otro",
] as const;

const necesidades = [
  "Catálogo mayorista",
  "Trabajar con la bodega (ecommerce / dropshipping)",
  "Cotizar una maquila",
  "Productos exclusivos",
  "Otro tema comercial",
] as const;

const ctaPorTipo: Record<string, string> = {
  "Tienda naturista": "Solicitar catálogo",
  "Vendedor ecommerce": "Quiero ser aliado",
  Dropshipper: "Quiero ser aliado",
  "Marca interesada en maquila": "Cotizar maquila",
  Distribuidor: "Solicitar catálogo",
  Otro: "Hablar con asesor",
};

type Datos = {
  tipo: string;
  nombre: string;
  empresa: string;
  ciudad: string;
  whatsapp: string;
  correo: string;
  necesidad: string;
  volumen: string;
  plataforma: string;
  mensaje: string;
  website: string; // honeypot
};

const inicial: Datos = {
  tipo: "",
  nombre: "",
  empresa: "",
  ciudad: "",
  whatsapp: "",
  correo: "",
  necesidad: "",
  volumen: "",
  plataforma: "",
  mensaje: "",
  website: "",
};

const inputCls =
  "w-full rounded-lg border border-cream/12 bg-ink px-4 py-3 text-sm text-cream placeholder:text-mineral/50 transition-colors focus:border-champagne/60 focus:outline-none";
const labelCls = "mb-1.5 block text-[0.78rem] font-medium text-cream/70";

export default function LeadForm() {
  const router = useRouter();
  const [paso, setPaso] = useState(0);
  const [datos, setDatos] = useState<Datos>(inicial);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState("");

  const esEcommerce =
    datos.tipo === "Vendedor ecommerce" || datos.tipo === "Dropshipper";
  const cta = ctaPorTipo[datos.tipo] ?? "Enviar solicitud";

  // Los botones "Cotizar maquila" llegan con #contacto-maquila:
  // preseleccionamos el perfil y saltamos directo a los datos de contacto.
  useEffect(() => {
    function aplicarIntencion() {
      if (window.location.hash === "#contacto-maquila") {
        setDatos((d) => ({ ...d, tipo: "Marca interesada en maquila" }));
        setPaso(1);
      }
    }
    aplicarIntencion();
    window.addEventListener("hashchange", aplicarIntencion);
    return () => window.removeEventListener("hashchange", aplicarIntencion);
  }, []);

  const set = (k: keyof Datos) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setDatos((d) => ({ ...d, [k]: e.target.value }));

  const paso2Valido = useMemo(() => {
    const correoOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo);
    const waOk = /^[\d\s()+-]{7,17}$/.test(datos.whatsapp);
    return (
      datos.nombre.trim().length > 1 &&
      datos.ciudad.trim().length > 1 &&
      waOk &&
      correoOk
    );
  }, [datos]);

  /** Mensaje de WhatsApp con la solicitud completa para el asesor. */
  function mensajeWhatsApp(): string {
    const lineas = [
      `Hola, soy ${datos.nombre} y acabo de enviar una solicitud en la web de Nature Smith.`,
      ``,
      `• Tipo de aliado: ${datos.tipo}`,
      datos.empresa && `• Empresa/marca: ${datos.empresa}`,
      `• Ciudad: ${datos.ciudad}`,
      `• Necesidad: ${datos.necesidad}`,
      datos.volumen && `• Volumen estimado: ${datos.volumen}`,
      datos.plataforma && `• Plataforma: ${datos.plataforma}`,
      datos.mensaje && `• Mensaje: ${datos.mensaje}`,
      ``,
      `Mi correo: ${datos.correo}`,
    ];
    return lineas.filter(Boolean).join("\n");
  }

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setEnviando(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "No pudimos enviar tu solicitud.");
      }
      router.push(`/gracias?wa=${encodeURIComponent(mensajeWhatsApp())}`);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp."
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section id="contacto" className="texture-mineral relative border-t border-cream/6 bg-ink-2 py-24 lg:py-32">
      {/* Ancla para los CTAs de maquila (en flujo, altura cero) */}
      <span id="contacto-maquila" className="block h-0" aria-hidden="true" />
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          kicker="Contacto comercial"
          title="Cuéntanos qué quieres construir."
          subtitle="Tres pasos cortos. Un asesor de Nature Smith revisa tu caso y te contacta por WhatsApp."
        />

        <Reveal delay={0.1}>
          <form onSubmit={enviar} className="mt-12 rounded-2xl border border-cream/10 bg-graphite/50 p-6 sm:p-9" noValidate>
            {/* Indicador de pasos */}
            <div className="mb-8 flex items-center gap-2" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                    i <= paso ? "bg-champagne" : "bg-cream/10"
                  }`}
                />
              ))}
            </div>

            {/* Honeypot anti-spam (oculto para humanos) */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">No llenar este campo</label>
              <input
                id="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={datos.website}
                onChange={set("website")}
              />
            </div>

            <AnimatePresence mode="wait">
              {paso === 0 && (
                <motion.fieldset
                  key="p0"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <legend className="mb-5 font-display text-xl text-cream">
                    ¿Qué tipo de aliado eres?
                  </legend>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {tiposAliado.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => {
                          setDatos((d) => ({ ...d, tipo: t }));
                          setPaso(1);
                        }}
                        className={`rounded-lg border px-4 py-3.5 text-left text-sm transition-all ${
                          datos.tipo === t
                            ? "border-champagne/60 bg-ink text-cream"
                            : "border-cream/12 text-cream/75 hover:border-cream/30 hover:text-cream"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </motion.fieldset>
              )}

              {paso === 1 && (
                <motion.fieldset
                  key="p1"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <legend className="mb-5 font-display text-xl text-cream">
                    Datos de contacto
                  </legend>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="nombre" className={labelCls}>Nombre *</label>
                      <input id="nombre" required autoComplete="name" className={inputCls} value={datos.nombre} onChange={set("nombre")} />
                    </div>
                    <div>
                      <label htmlFor="empresa" className={labelCls}>Empresa / marca</label>
                      <input id="empresa" autoComplete="organization" className={inputCls} value={datos.empresa} onChange={set("empresa")} />
                    </div>
                    <div>
                      <label htmlFor="ciudad" className={labelCls}>Ciudad *</label>
                      <input id="ciudad" required autoComplete="address-level2" className={inputCls} value={datos.ciudad} onChange={set("ciudad")} />
                    </div>
                    <div>
                      <label htmlFor="whatsapp" className={labelCls}>WhatsApp *</label>
                      <input id="whatsapp" required type="tel" inputMode="tel" placeholder="300 000 0000" autoComplete="tel" className={inputCls} value={datos.whatsapp} onChange={set("whatsapp")} />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="correo" className={labelCls}>Correo *</label>
                      <input id="correo" required type="email" autoComplete="email" className={inputCls} value={datos.correo} onChange={set("correo")} />
                    </div>
                  </div>
                  <div className="mt-7 flex justify-between">
                    <button type="button" onClick={() => setPaso(0)} className="text-sm text-mineral transition-colors hover:text-cream">
                      ← Atrás
                    </button>
                    <button
                      type="button"
                      disabled={!paso2Valido}
                      onClick={() => setPaso(2)}
                      className="rounded-full bg-cream px-6 py-2.5 text-sm font-semibold text-ink transition-all enabled:hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Continuar
                    </button>
                  </div>
                </motion.fieldset>
              )}

              {paso === 2 && (
                <motion.fieldset
                  key="p2"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <legend className="mb-5 font-display text-xl text-cream">
                    Tu operación
                  </legend>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="necesidad" className={labelCls}>Tipo de necesidad *</label>
                      <select id="necesidad" required className={inputCls} value={datos.necesidad} onChange={set("necesidad")}>
                        <option value="" disabled>Selecciona…</option>
                        {necesidades.map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="volumen" className={labelCls}>Volumen estimado mensual</label>
                      <select id="volumen" className={inputCls} value={datos.volumen} onChange={set("volumen")}>
                        <option value="">Prefiero contarlo con el asesor</option>
                        <option>Estoy empezando</option>
                        <option>1 – 50 unidades</option>
                        <option>50 – 200 unidades</option>
                        <option>200 – 1.000 unidades</option>
                        <option>Más de 1.000 unidades</option>
                      </select>
                    </div>
                    {esEcommerce && (
                      <div className="sm:col-span-2">
                        <label htmlFor="plataforma" className={labelCls}>¿En qué plataforma vendes?</label>
                        <input id="plataforma" placeholder="MasterShop, Droppi, Shopify, redes…" className={inputCls} value={datos.plataforma} onChange={set("plataforma")} />
                      </div>
                    )}
                    <div className="sm:col-span-2">
                      <label htmlFor="mensaje" className={labelCls}>Mensaje</label>
                      <textarea
                        id="mensaje"
                        rows={3}
                        placeholder="Cuéntanos brevemente qué buscas…"
                        className={`${inputCls} resize-none`}
                        value={datos.mensaje}
                        onChange={set("mensaje")}
                      />
                    </div>
                  </div>

                  {TURNSTILE_KEY && (
                    <div className="cf-turnstile mt-5" data-sitekey={TURNSTILE_KEY} />
                  )}

                  {error && (
                    <p role="alert" className="mt-5 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                      {error}
                    </p>
                  )}

                  <div className="mt-7 flex items-center justify-between">
                    <button type="button" onClick={() => setPaso(1)} className="text-sm text-mineral transition-colors hover:text-cream">
                      ← Atrás
                    </button>
                    <button
                      type="submit"
                      disabled={enviando || !datos.necesidad}
                      className="rounded-full bg-cream px-7 py-3 text-sm font-semibold text-ink transition-all enabled:hover:-translate-y-0.5 enabled:hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {enviando ? "Enviando…" : cta}
                    </button>
                  </div>
                </motion.fieldset>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
