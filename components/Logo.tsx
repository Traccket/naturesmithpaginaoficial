import Image from "next/image";

/** Logo oficial de Nature Smith (archivo original de marca, blanco sobre transparente). */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return compact ? (
    <Image
      src="/ns-firma.png"
      alt="Nature Smith"
      width={56}
      height={56}
      priority
    />
  ) : (
    <Image
      src="/logo-lockup.png"
      alt="Nature Smith"
      width={150}
      height={56}
      className="h-11 w-auto"
      priority
    />
  );
}
