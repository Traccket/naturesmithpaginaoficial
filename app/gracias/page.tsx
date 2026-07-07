import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solicitud recibida | Nature Smith",
  robots: { index: false, follow: false },
};

export default function Gracias() {
  return (
    <main className="texture-mineral flex min-h-svh flex-col items-center justify-center px-5 text-center">
      <Logo compact />
      <h1 className="mt-10 max-w-xl font-display text-4xl leading-[1.1] text-cream sm:text-5xl">
        Recibimos tu solicitud.
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-mineral">
        Un asesor de Nature Smith revisará tu caso y te contactará por
        WhatsApp.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href={waLink("Hola, acabo de enviar el formulario en la web de Nature Smith.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-white"
        >
          Adelantar la conversación por WhatsApp
        </a>
        <Link
          href="/"
          className="rounded-full border border-cream/20 px-7 py-3.5 text-sm font-medium text-cream transition-all hover:border-cream/50"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
