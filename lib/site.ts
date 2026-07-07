/**
 * Configuración central del sitio. Todos los datos de contacto y dominio
 * se leen de variables de entorno para no dejar valores quemados en el código.
 */

export const site = {
  name: "Nature Smith",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://naturesmith.com.co",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "573206854344",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "naturesmith77@gmail.com",
  ciudad: process.env.NEXT_PUBLIC_CIUDAD ?? "Colombia",
  redes: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK ?? "",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK ?? "",
  },
  descripcion:
    "Nature Smith es una empresa colombiana distribuidora de productos naturales que trabaja con tiendas naturistas, ecommerce, dropshipping y maquilas. Ofrece catálogo mayorista, productos exclusivos para venta digital, soporte comercial y operación de bodega para aliados en Colombia.",
} as const;

export function waLink(text: string): string {
  const msg = encodeURIComponent(text);
  return site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${msg}`
    : `#contacto`;
}

export const faqs = [
  {
    q: "¿Qué es Nature Smith?",
    a: "Nature Smith es una empresa colombiana distribuidora de productos naturales y suplementos de bienestar. Trabaja con tiendas naturistas mediante catálogo mayorista, opera como bodega para vendedores de ecommerce y dropshipping, y desarrolla maquilas para marcas. Tiene más de 15 años de experiencia en distribución naturista y 3 años en ecommerce.",
  },
  {
    q: "¿Nature Smith vende al por mayor?",
    a: "Sí. Nature Smith maneja un catálogo mayorista de productos naturales y suplementos dirigido a tiendas naturistas, distribuidores locales y comercios de bienestar en toda Colombia, con atención comercial directa para cotizar y cerrar pedidos.",
  },
  {
    q: "¿Nature Smith trabaja con dropshipping?",
    a: "Sí. Nature Smith opera como bodega para vendedores de dropshipping y tiendas digitales: gestiona inventario, prepara despachos y acompaña al vendedor con comunicación rápida para que pueda concentrarse en vender.",
  },
  {
    q: "¿Nature Smith está en MasterShop?",
    a: "Sí. Nature Smith está presente en MasterShop como una de las bodegas destacadas de la plataforma, con insignia oro, atendiendo vendedores de ecommerce y dropshipping en Colombia.",
  },
  {
    q: "¿Nature Smith trabaja en Droppi?",
    a: "Sí. Nature Smith también opera en Droppi y en otras plataformas de ecommerce y dropshipping, poniendo su catálogo y su operación de bodega al servicio de vendedores digitales.",
  },
  {
    q: "¿Nature Smith hace maquilas?",
    a: "Sí. Nature Smith gestiona y acompaña procesos de maquila de productos naturales para clientes y marcas del mundo ecommerce: desarrollo del producto, presentación, producción con aliados y laboratorios según el caso, y enfoque comercial para que el producto llegue listo a vender.",
  },
  {
    q: "¿En qué ciudades entrega Nature Smith?",
    a: "Nature Smith tiene cobertura nacional en Colombia: despacha a las principales ciudades y municipios del país a través de su operación de bodega y aliados logísticos.",
  },
  {
    q: "¿Qué tipo de productos distribuye Nature Smith?",
    a: "Nature Smith distribuye productos naturales y suplementos orientados al bienestar: líneas de bienestar general, energía y enfoque, belleza y cuidado personal, salud digestiva, apoyo articular, vitaminas y minerales, además de productos exclusivos pensados para canales de ecommerce.",
  },
  {
    q: "¿Cómo solicito el catálogo mayorista?",
    a: "Puedes solicitar el catálogo mayorista a través del formulario de contacto de esta página o escribiendo directamente por WhatsApp. Un asesor comercial de Nature Smith te comparte el catálogo, resuelve tus dudas y te acompaña en tu primer pedido.",
  },
  {
    q: "¿Cómo puedo vender productos de Nature Smith en ecommerce?",
    a: "Si vendes por ecommerce o dropshipping, puedes trabajar con Nature Smith como tu bodega: encuentra sus productos en plataformas como MasterShop y Droppi, o contacta al equipo comercial para conocer el catálogo de productos exclusivos y las condiciones de operación.",
  },
] as const;
