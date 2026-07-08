import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solicitud recibida | Nature Smith",
  robots: { index: false, follow: false },
};

export default async function Gracias({
  searchParams,
}: {
  searchParams: Promise<{ wa?: string }>;
}) {
  const { wa } = await searchParams;
  // Mensaje con la solicitud completa (viene del formulario) o genérico
  const mensaje =
    wa && wa.length < 1800
      ? wa
      : "Hola, acabo de enviar el formulario en la web de Nature Smith.";

  return (
    <main className="texture-mineral flex min-h-svh flex-col items-center justify-center px-5 text-center">
      <Logo compact />
      <h1 className="mt-10 max-w-xl font-display text-4xl leading-[1.1] text-white sm:text-5xl">
        Recibimos tu solicitud.
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-cream/80">
        Para que un asesor te atienda de inmediato, envíanos tu solicitud por
        WhatsApp: ya te la dejamos escrita, solo tienes que darle enviar.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href={waLink(mensaje)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5"
        >
          Enviar mi solicitud por WhatsApp
        </a>
        <Link
          href="/"
          className="rounded-full border border-cream/25 px-7 py-3.5 text-sm font-medium text-cream transition-all hover:border-cream/60"
        >
          Volver al inicio
        </Link>
      </div>
      <p className="mt-8 max-w-sm text-[0.78rem] leading-relaxed text-cream/50">
        Tu solicitud también quedó registrada en nuestro sistema con tus datos
        de contacto.
      </p>
    </main>
  );
}
