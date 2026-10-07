import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import { waLink } from "@/lib/site";

/** Único bloque oscuro de la página: cierre de conversión en verde profundo. */
export default function CierreCta() {
  return (
    <section className="relative overflow-hidden bg-green-dark py-24 lg:py-32">
      <Image
        src="/ns-firma.png"
        alt=""
        width={700}
        height={700}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-4%] h-[160%] w-auto -translate-y-1/2 opacity-[0.07]"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="text-3xl leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            Construyamos tu próximo canal de venta natural.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75">
            Ya sea una tienda, un ecommerce o una marca propia, Nature Smith
            tiene la operación para acompañarte.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#contacto"
              className="rounded-lg bg-white px-8 py-4 text-sm font-semibold text-green-dark transition-colors hover:bg-white/90"
            >
              Solicitar catálogo
            </Link>
            <a
              href={waLink("Hola, quiero hablar con un asesor de Nature Smith.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white/60"
            >
              Hablar por WhatsApp
            </a>
            <a
              href="#contacto-maquila"
              className="rounded-lg border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white/60"
            >
              Cotizar maquila
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
