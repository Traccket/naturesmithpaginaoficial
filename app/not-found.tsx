import Link from "next/link";
import NSMonogram from "@/components/NSMonogram";

export default function NotFound() {
  return (
    <main className="texture-mineral relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 text-center">
      <NSMonogram
        className="pointer-events-none absolute top-1/2 left-1/2 h-[90vh] w-auto -translate-x-1/2 -translate-y-1/2 text-cream/[0.04]"
      />
      <p className="relative font-display text-8xl text-champagne/80">404</p>
      <h1 className="relative mt-4 max-w-md font-display text-3xl text-cream">
        Esta página no está en nuestro catálogo.
      </h1>
      <p className="relative mt-4 max-w-sm text-sm leading-relaxed text-mineral">
        El enlace puede haber cambiado. Vuelve al inicio y encuentra lo que
        buscas desde ahí.
      </p>
      <Link
        href="/"
        className="relative mt-10 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-white"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
