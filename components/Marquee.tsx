const items = [
  "Catálogo mayorista",
  "Dropshipping",
  "Maquilas",
  "Productos exclusivos",
  "Cobertura nacional",
  "Bodega insignia oro en MasterShop",
  "Soporte comercial",
  "+15 años de experiencia",
];

/** Cinta en movimiento con los servicios clave. Se pausa al pasar el mouse. */
export default function Marquee() {
  const fila = [...items, ...items]; // duplicada para el loop continuo
  return (
    <div
      className="overflow-hidden border-y border-cream/8 bg-ink-2 py-4"
      aria-hidden="true"
    >
      <div className="marquee flex items-center">
        {fila.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-8 pr-8 text-[0.8rem] font-medium tracking-[0.18em] text-cream/60 uppercase"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-champagne/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
