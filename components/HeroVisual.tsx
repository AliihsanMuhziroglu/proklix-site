import type { Dictionary } from "@/dictionaries";
import { PhoneMockup } from "./PhoneMockup";

type Props = {
  dict: Dictionary;
};

const CARD_DOTS = ["bg-brand-400", "bg-pending", "bg-brand-600", "bg-success"] as const;

const CARD_LAYOUT = [
  "left-2 top-3 sm:left-3 sm:top-4",
  "right-0 top-12 sm:right-2 sm:top-16",
  "bottom-20 left-0 sm:bottom-24 sm:-left-2",
  "bottom-6 right-1 sm:bottom-8 sm:right-0",
] as const;

function FloatingCard({ label, dotClass, className }: { label: string; dotClass: string; className: string }) {
  return (
    <div
      className={`absolute z-10 max-w-[148px] rounded-xl border border-white/10 bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotClass}`} aria-hidden />
        <span className="text-[11px] font-medium leading-snug text-navy-950 sm:text-xs">{label}</span>
      </div>
    </div>
  );
}

export function HeroVisual({ dict }: Props) {
  const cards = dict.hero.visualCards;

  return (
    <div className="relative mx-auto w-full max-w-[min(100%,420px)] lg:max-w-none">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-navy-950 px-5 py-8 shadow-lg sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(24,95,165,0.18),transparent_55%)]"
          aria-hidden
        />

        {cards.map((label, i) => (
          <FloatingCard
            key={label}
            label={label}
            dotClass={CARD_DOTS[i] ?? "bg-brand-400"}
            className={`hidden sm:block ${CARD_LAYOUT[i] ?? ""}`}
          />
        ))}

        <div className="relative z-[1] flex justify-center">
          <PhoneMockup dict={dict} size="lg" />
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2 sm:hidden">
          {cards.slice(0, 2).map((label, i) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white/90"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${CARD_DOTS[i]}`} aria-hidden />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
