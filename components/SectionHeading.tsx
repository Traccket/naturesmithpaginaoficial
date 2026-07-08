import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  light = false,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <Reveal>
      <p
        className={`mb-4 text-[0.72rem] font-semibold tracking-[0.3em] uppercase ${
          light ? "text-sage" : "text-champagne"
        }`}
      >
        {kicker}
      </p>
      <h2
        className={`max-w-3xl font-display text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-ink" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed ${
            light ? "text-ink/60" : "text-cream/80"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
