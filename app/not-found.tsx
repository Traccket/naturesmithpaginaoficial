import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-paper px-5 text-center">
      <Image
        src="/ns-firma-dark.png"
        alt=""
        width={700}
        height={700}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[80vh] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
      />
      <p className="relative text-7xl font-semibold tracking-tight text-green">404</p>
      <h1 className="relative mt-4 max-w-md text-2xl text-ink">
        Esta página no está en nuestro catálogo.
      </h1>
      <p className="relative mt-4 max-w-sm text-sm leading-relaxed text-muted">
        El enlace puede haber cambiado. Vuelve al inicio y encuentra lo que
        buscas desde ahí.
      </p>
      <Link
        href="/"
        className="relative mt-9 rounded-lg bg-green px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-dark"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
