import Image from "next/image";

/**
 * Logo oficial de Nature Smith (archivo original de marca).
 * dark=false → trazo tinta para fondos claros; dark=true → blanco para fondos oscuros.
 */
export default function Logo({
  compact = false,
  dark = false,
}: {
  compact?: boolean;
  dark?: boolean;
}) {
  const sufijo = dark ? "" : "-dark";
  return compact ? (
    <Image
      src={`/ns-firma${sufijo}.png`}
      alt="Nature Smith"
      width={56}
      height={56}
      priority
    />
  ) : (
    <Image
      src={`/logo-lockup${sufijo}.png`}
      alt="Nature Smith"
      width={150}
      height={56}
      className="h-10 w-auto"
      priority
    />
  );
}
