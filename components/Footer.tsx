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
    <footer className="bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-sm text-[0.85rem] leading-relaxed text-white/60">
              Nature Smith es una empresa colombiana de distribución de
              productos naturales, catálogo mayorista, ecommerce, dropshipping
              y maquilas.
            </p>
            <p className="mt-5 text-[0.8rem] text-white/45">{site.ciudad}</p>
          </div>

          <nav aria-label="Enlaces del sitio">
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-white/40 uppercase">
              Navegación
            </p>
            <ul className="mt-5 space-y-2.5">
              {enlaces.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} className="text-[0.85rem] text-white/65 transition-colors hover:text-white">
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-white/40 uppercase">
              Contacto
            </p>
            <ul className="mt-5 space-y-2.5 text-[0.85rem]">
              <li>
                <a
                  href={waLink("Hola, vengo del sitio web de Nature Smith.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/65 transition-colors hover:text-white"
                >
                  WhatsApp comercial
                </a>
              </li>
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className="text-white/65 transition-colors hover:text-white">
                    {site.email}
                  </a>
                </li>
              )}
              {redes.map((r) => (
                <li key={r.label}>
                  <a href={r.href} target="_blank" rel="noopener noreferrer" className="text-white/65 transition-colors hover:text-white">
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <p className="max-w-2xl text-[0.72rem] leading-relaxed text-white/40">
              Aviso sanitario: los productos naturales y suplementos dietarios no
              son medicamentos y no están destinados a diagnosticar, tratar,
              curar ni prevenir enfermedades. La información de este sitio se
              ajusta a los registros y etiquetas autorizadas por la normatividad
              sanitaria aplicable en Colombia.
            </p>
            <ul className="flex shrink-0 gap-6">
              {legales.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[0.78rem] text-white/55 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-7 text-[0.72rem] text-white/35">
            © {year} Nature Smith. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
