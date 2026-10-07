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
    <main className="flex min-h-svh flex-col items-center justify-center bg-paper px-5 text-center">
      <Logo compact />
      <h1 className="mt-8 max-w-xl text-3xl leading-[1.12] text-ink sm:text-4xl">
        Recibimos tu solicitud.
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
        Para que un asesor te atienda de inmediato, envíanos tu solicitud por
        WhatsApp: ya te la dejamos escrita, solo tienes que darle enviar.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <a
          href={waLink(mensaje)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-green px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-dark"
        >
          Enviar mi solicitud por WhatsApp
        </a>
        <Link
          href="/"
          className="rounded-lg border border-line px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink/30"
        >
          Volver al inicio
        </Link>
      </div>
      <p className="mt-7 max-w-sm text-[0.78rem] leading-relaxed text-muted/70">
        Tu solicitud también quedó registrada en nuestro sistema con tus datos
        de contacto.
      </p>
    </main>
  );
}
