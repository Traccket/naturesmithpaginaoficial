import NSMonogram from "./NSMonogram";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <NSMonogram className="h-8 w-[52px] text-cream" />
      {!compact && (
        <span className="text-[0.8rem] font-medium tracking-[0.35em] text-cream uppercase">
          Nature&nbsp;Smith
        </span>
      )}
    </span>
  );
}
