# Nature Smith — sitio web oficial

Landing corporativa y comercial de **Nature Smith**, distribuidora colombiana de productos naturales: catálogo mayorista, bodega para ecommerce/dropshipping, productos exclusivos y maquilas.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion

## Desarrollo

```bash
npm install
cp .env.example .env.local   # completar con datos reales
npm run dev                  # http://localhost:3000
npm run build && npm start   # producción
```

## Variables de entorno

Todas documentadas en [.env.example](.env.example). Imprescindibles antes de lanzar:

| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Dominio final (canonical, sitemap, OG, JSON-LD) |
| `NEXT_PUBLIC_WHATSAPP` | Número del asesor comercial (formato `57XXXXXXXXXX`) |
| `NEXT_PUBLIC_EMAIL` | Correo comercial (footer, schema, política de datos) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY` | Anti-spam del formulario (opcional; sin ellas opera con honeypot) |
| `LEADS_WEBHOOK_URL` | Respaldo de leads a CRM/Sheets/Make/n8n (opcional) |
| `SECURITY_HSTS=1` | Activar HSTS **solo cuando el SSL esté estable** |

## Pendientes de contenido (marcados en el código)

- Logos reales de MasterShop, Droppi y aliados → `components/Confianza.tsx`
- Trazo vectorial original del monograma (si se exporta del archivo fuente) → `components/NSMonogram.tsx` y `public/logo-ns.svg`
- Razón social, NIT y fechas en `/privacidad` y `/terminos`
- Métricas nuevas confirmadas → `components/Metrics.tsx`
- Fotos reales de bodega/productos cuando existan (usar `next/image`, formato WebP/AVIF)

## Guía de lanzamiento (DNS y dominio)

1. **Dominio raíz:** registro `A` apuntando a la IP del hosting (o `ALIAS`/`ANAME` si el proveedor lo soporta). En Vercel: `A 76.76.21.21`.
2. **www:** registro `CNAME` de `www` al dominio del hosting (en Vercel: `cname.vercel-dns.com`). Elegir versión canónica (recomendado: sin `www`) y configurar redirección 301 hacia ella en el hosting.
3. **HTTPS:** el hosting emite el certificado automáticamente. Verificar que `http://` redirige 301 a `https://`. Con Cloudflare: SSL en modo **Full (Strict)** con certificado válido en origen; activar DNSSEC si el registrador lo permite.
4. **HSTS:** cuando el certificado lleve unos días estable, poner `SECURITY_HSTS=1` y redeployar.
5. **Google Search Console:** verificar propiedad con registro `TXT` en el DNS y enviar `https://TU-DOMINIO/sitemap.xml`.
6. **Correo corporativo:** configurar `SPF`, `DKIM` y `DMARC` según el proveedor de correo (Google Workspace, Zoho, etc.).
7. **Analítica y píxeles:** Google Analytics/Tag Manager y píxeles de Meta/TikTok solo cuando se confirme su uso, y siempre detrás de un banner de consentimiento de cookies.

## Seguridad incluida

- Headers: CSP, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` y HSTS opt-in ([next.config.ts](next.config.ts)).
- Formulario: honeypot, validación y sanitización en servidor, verificación Turnstile opcional, respaldo de leads vía webhook ([app/api/lead/route.ts](app/api/lead/route.ts)).
- Sin llaves API en el frontend; todo secreto vive en variables de entorno del servidor.

## SEO incluido

Metadata completa + Open Graph + Twitter Card, imagen OG generada en build, `sitemap.xml`, `robots.txt`, canonical, JSON-LD (`Organization`, `WebSite`, `FAQPage`, `BreadcrumbList`), bloque semántico "Qué es Nature Smith", `public/llms.txt`, H1 único y jerarquía de encabezados, alt text y navegación accesible por teclado.
