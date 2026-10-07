import Reveal from "./Reveal";

/** Encabezado de sección — diseño claro único; `dark` solo para el cierre. */
export default function SectionHeading({
  kicker,
  title,
  subtitle,
  dark = false,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <Reveal>
      <p
        className={`mb-4 text-[0.75rem] font-semibold tracking-[0.22em] uppercase ${
          dark ? "text-white/60" : "text-green"
        }`}
      >
        {kicker}
      </p>
      <h2
        className={`max-w-3xl text-3xl leading-[1.12] sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed ${
            dark ? "text-white/70" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
