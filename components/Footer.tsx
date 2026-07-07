import Link from "next/link";
import Logo from "./Logo";
import { site, waLink } from "@/lib/site";

const enlaces = [
  { label: "Inicio", href: "#inicio" },
  { label: "Mayoristas", href: "#mayoristas" },
  { label: "Ecommerce", href: "#ecommerce" },
  { label: "Maquilas", href: "#maquilas" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
];

const legales = [
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Términos y condiciones", href: "/terminos" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const redes = [
    { label: "Instagram", href: site.redes.instagram },
    { label: "Facebook", href: site.redes.facebook },
    { label: "TikTok", href: site.redes.tiktok },
  ].filter((r) => r.href);

  return (
    <footer className="border-t border-cream/8 bg-ink-2">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-[0.85rem] leading-relaxed text-mineral">
              Nature Smith es una empresa colombiana de distribución de
              productos naturales, catálogo mayorista, ecommerce, dropshipping
              y maquilas.
            </p>
            <p className="mt-5 text-[0.8rem] text-mineral/80">{site.ciudad}</p>
          </div>

          <nav aria-label="Enlaces del sitio">
            <p className="text-[0.7rem] font-semibold tracking-[0.25em] text-cream/50 uppercase">
              Navegación
            </p>
            <ul className="mt-5 space-y-2.5">
              {enlaces.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} className="text-[0.85rem] text-mineral transition-colors hover:text-cream">
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.7rem] font-semibold tracking-[0.25em] text-cream/50 uppercase">
              Contacto
            </p>
            <ul className="mt-5 space-y-2.5 text-[0.85rem]">
              <li>
                <a
                  href={waLink("Hola, vengo del sitio web de Nature Smith.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mineral transition-colors hover:text-cream"
                >
                  WhatsApp comercial
                </a>
              </li>
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className="text-mineral transition-colors hover:text-cream">
                    {site.email}
                  </a>
                </li>
              )}
              {redes.map((r) => (
                <li key={r.label}>
                  <a href={r.href} target="_blank" rel="noopener noreferrer" className="text-mineral transition-colors hover:text-cream">
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline mt-14" />

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <p className="max-w-2xl text-[0.7rem] leading-relaxed text-mineral/60">
            Aviso sanitario: los productos naturales y suplementos dietarios no
            son medicamentos y no están destinados a diagnosticar, tratar,
            curar ni prevenir enfermedades. La información de este sitio se
            ajusta a los registros y etiquetas autorizadas por la normatividad
            sanitaria aplicable en Colombia.
          </p>
          <ul className="flex shrink-0 gap-6">
            {legales.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[0.75rem] text-mineral transition-colors hover:text-cream">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-[0.72rem] text-mineral/50">
          © {year} Nature Smith. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
