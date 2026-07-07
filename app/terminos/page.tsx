import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Términos y condiciones | Nature Smith",
  description:
    "Términos y condiciones de uso del sitio web de Nature Smith, distribuidora de productos naturales en Colombia.",
  alternates: { canonical: "/terminos" },
};

export default function Terminos() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <Link href="/" aria-label="Volver al inicio">
        <Logo />
      </Link>
      <h1 className="mt-12 font-display text-4xl text-cream">
        Términos y condiciones
      </h1>
      <div className="mt-8 space-y-6 text-[0.92rem] leading-relaxed text-mineral">
        <p>
          Este sitio web presenta los servicios de Nature Smith: distribución
          mayorista de productos naturales, operación de bodega para ecommerce
          y dropshipping, productos exclusivos y gestión de maquilas. La
          información publicada tiene carácter comercial e informativo y no
          constituye oferta vinculante; precios, disponibilidad y condiciones
          se confirman directamente con el equipo comercial.
        </p>
        <p>
          Los productos naturales y suplementos dietarios mencionados en este
          sitio no son medicamentos y no están destinados a diagnosticar,
          tratar, curar ni prevenir enfermedades. Su comercialización se ajusta
          a los registros y la normatividad sanitaria aplicable en Colombia.
        </p>
        <p>
          El contenido de este sitio (textos, marca, monograma y piezas
          gráficas) pertenece a Nature Smith y no puede reproducirse sin
          autorización.
        </p>
        <p className="text-[0.8rem] text-mineral/60">
          [Pendiente de completar por Nature Smith: razón social, NIT,
          jurisdicción y fecha de actualización.]
        </p>
      </div>
    </main>
  );
}
