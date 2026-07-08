import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { faqs, site } from "@/lib/site";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Nature Smith | Distribuidora de productos naturales, ecommerce y maquilas en Colombia",
  description:
    "Nature Smith distribuye productos naturales en Colombia, ofrece catálogo mayorista para tiendas naturistas, bodega para ecommerce y dropshipping, productos exclusivos y maquilas para marcas.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: site.url,
    siteName: "Nature Smith",
    title: "Nature Smith | Distribuidora de productos naturales, ecommerce y maquilas en Colombia",
    description:
      "Catálogo mayorista para tiendas naturistas, bodega para ecommerce y dropshipping, productos exclusivos y maquilas para marcas en Colombia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nature Smith | Distribuidora de productos naturales en Colombia",
    description:
      "Catálogo mayorista, bodega para ecommerce y dropshipping, y maquilas para marcas en Colombia.",
  },
  robots: { index: true, follow: true },
};

const sameAs = [site.redes.instagram, site.redes.facebook, site.redes.tiktok].filter(Boolean);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: "Nature Smith",
      alternateName: "NatureSmith",
      url: site.url,
      logo: `${site.url}/logo-lockup.png`,
      description: site.descripcion,
      areaServed: { "@type": "Country", name: "Colombia" },
      ...(sameAs.length ? { sameAs } : {}),
      ...(site.email ? { email: site.email } : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: "Nature Smith",
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "es-CO",
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${site.url}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
        { "@type": "ListItem", position: 2, name: "Mayoristas", item: `${site.url}/#mayoristas` },
        { "@type": "ListItem", position: 3, name: "Ecommerce y Dropshipping", item: `${site.url}/#ecommerce` },
        { "@type": "ListItem", position: 4, name: "Maquilas", item: `${site.url}/#maquilas` },
        { "@type": "ListItem", position: 5, name: "Productos", item: `${site.url}/#productos` },
        { "@type": "ListItem", position: 6, name: "Contacto", item: `${site.url}/#contacto` },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CO" className={`${grotesk.variable} ${manrope.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
