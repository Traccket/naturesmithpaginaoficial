import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="texture-mineral relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 text-center">
      <Image
        src="/ns-firma.png"
        alt=""
        width={700}
        height={700}
        className="pointer-events-none absolute top-1/2 left-1/2 h-[80vh] w-auto -translate-x-1/2 -translate-y-1/2 opacity-10"
        aria-hidden="true"
      />
      <p className="relative font-display text-8xl text-champagne/80">404</p>
      <h1 className="relative mt-4 max-w-md font-display text-3xl text-white">
        Esta página no está en nuestro catálogo.
      </h1>
      <p className="relative mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
        El enlace puede haber cambiado. Vuelve al inicio y encuentra lo que
        buscas desde ahí.
      </p>
      <Link
        href="/"
        className="relative mt-10 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
