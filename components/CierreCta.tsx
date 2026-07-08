import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import { waLink } from "@/lib/site";

export default function CierreCta() {
  return (
    <section className="relative overflow-hidden border-t border-cream/6 py-28 lg:py-36">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <Image
          src="/ns-firma.png"
          alt=""
          width={700}
          height={700}
          className="h-[120%] w-auto opacity-15"
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.08] text-white sm:text-5xl">
            Construyamos tu próximo
            <br />
            <span className="text-olive">canal de venta natural.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/80">
            Ya sea una tienda, un ecommerce o una marca propia, Nature Smith
            tiene la operación para acompañarte.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#contacto"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5"
            >
              Solicitar catálogo
            </Link>
            <a
              href={waLink("Hola, quiero hablar con un asesor de Nature Smith.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/40 px-8 py-4 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-cream"
            >
              Hablar por WhatsApp
            </a>
            <Link
              href="#contacto?intent=maquila"
              className="rounded-full border border-champagne/50 px-8 py-4 text-sm font-medium text-champagne transition-all hover:-translate-y-0.5 hover:border-champagne"
            >
              Cotizar maquila
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
