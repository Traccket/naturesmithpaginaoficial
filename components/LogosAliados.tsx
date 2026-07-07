/**
 * Logos de plataformas aliadas recreados en SVG a partir de la marca oficial.
 * Si las plataformas entregan sus archivos vectoriales oficiales,
 * reemplazar estos componentes por <Image> con el asset original.
 */

export function MasterShopLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 64"
      className={className}
      role="img"
      aria-label="MasterShop"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="118"
        y="43"
        textAnchor="end"
        fill="currentColor"
        fontFamily="var(--font-manrope), Manrope, sans-serif"
        fontSize="34"
        fontWeight="700"
        letterSpacing="0.5"
      >
        master
      </text>
      {/* Rayo verde */}
      <path
        d="M141 8 L128 34 L138 34 L131 56 L152 28 L141 28 L150 8 Z"
        fill="#1FD760"
      />
      <text
        x="160"
        y="43"
        fill="currentColor"
        fontFamily="var(--font-manrope), Manrope, sans-serif"
        fontSize="34"
        fontWeight="700"
        letterSpacing="0.5"
      >
        shop
      </text>
    </svg>
  );
}

export function DroppiLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Droppi"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="droppi-naranja" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F79433" />
          <stop offset="1" stopColor="#EF7D1A" />
        </linearGradient>
      </defs>
      {/* Disco naranja */}
      <circle cx="32" cy="32" r="30" fill="url(#droppi-naranja)" />
      {/* Antena */}
      <circle cx="17" cy="13" r="3.2" fill="#fff" />
      <path d="M19 15.5 L24 21" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M27 14 L38 22 M31 11.5 L41 19" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      {/* Cabeza del robot */}
      <path
        d="M20 40 C15 32 20 22 31 20.5 C42 19 50 25 50.5 33 C51 40 45 45.5 36 45.5 C29 45.5 23.5 43.5 20 40 Z"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Audífono / oreja */}
      <circle cx="17.5" cy="36" r="8.5" fill="none" stroke="#fff" strokeWidth="3" />
      <ellipse cx="17.5" cy="36" rx="3" ry="4.6" fill="#fff" />
      {/* Ojos */}
      <ellipse cx="33.5" cy="33" rx="3.4" ry="5.2" fill="#fff" />
      <ellipse cx="44" cy="33" rx="3.4" ry="5.2" fill="#fff" />
      {/* Flecha circular inferior */}
      <path
        d="M14 46 C20 53.5 32 56.5 42 52.5"
        fill="none"
        stroke="#fff"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path d="M40 46.5 L47 50.5 L39.5 55 Z" fill="#fff" />
    </svg>
  );
}
