import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad | Nature Smith",
  description:
    "Política de tratamiento de datos personales de Nature Smith conforme a la Ley 1581 de 2012 de Colombia.",
  alternates: { canonical: "/privacidad" },
};

export default function Privacidad() {
  return (
    <main className="mx-auto max-w-3xl bg-paper px-5 py-20 lg:px-8">
      <Link href="/" aria-label="Volver al inicio">
        <Logo />
      </Link>
      <h1 className="mt-12 text-3xl text-ink">Política de privacidad</h1>
      <div className="mt-8 space-y-6 text-[0.95rem] leading-relaxed text-muted">
        <p>
          Nature Smith trata los datos personales que recibe a través de este
          sitio (nombre, empresa, ciudad, WhatsApp, correo y detalles de la
          solicitud comercial) con la única finalidad de atender solicitudes de
          catálogo, cotizaciones de maquila, vinculación de aliados y
          comunicación comercial relacionada.
        </p>
        <p>
          El tratamiento se realiza conforme a la Ley 1581 de 2012 y sus
          decretos reglamentarios (régimen de protección de datos personales de
          Colombia). Los datos no se venden ni se comparten con terceros ajenos
          a la operación comercial de Nature Smith.
        </p>
        <p>
          Como titular de los datos puedes conocer, actualizar, rectificar o
          solicitar la supresión de tu información, así como revocar la
          autorización de tratamiento, escribiendo a{" "}
          {site.email ? (
            <a href={`mailto:${site.email}`} className="text-green underline underline-offset-4">
              {site.email}
            </a>
          ) : (
            "nuestro correo de contacto"
          )}{" "}
          o a través del canal de WhatsApp publicado en este sitio.
        </p>
        <p className="text-[0.8rem] text-muted/70">
          [Pendiente de completar por Nature Smith: razón social, NIT, domicilio
          y fecha de entrada en vigencia de esta política.]
        </p>
      </div>
    </main>
  );
}
