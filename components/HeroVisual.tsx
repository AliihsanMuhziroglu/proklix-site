import type { Dictionary } from "@/dictionaries";
import { PhoneMockup } from "./PhoneMockup";

type Props = {
  dict: Dictionary;
};

const CARD_DOTS = ["bg-brand-400", "bg-pending", "bg-brand-600", "bg-success"] as const;

function WorkflowPill({ label, dotClass }: { label: string; dotClass: string }) {
  return (
    <div className="flex min-w-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-2.5 py-2 shadow-sm">
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotClass}`} aria-hidden />
      <span className="min-w-0 truncate text-[11px] font-medium text-navy-950 sm:text-xs">{label}</span>
    </div>
  );
}

export function HeroVisual({ dict }: Props) {
  const cards = dict.hero.visualCards;

  return (
    <div className="w-full min-w-0 max-w-full">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white shadow-sm">
        <div className="flex justify-center px-3 py-5 sm:px-5 sm:py-7 lg:px-6 lg:py-8">
          <div className="max-w-full origin-top scale-[0.88] sm:scale-95 lg:scale-100">
            <div className="lg:hidden">
              <PhoneMockup dict={dict} size="md" />
            </div>
            <div className="hidden lg:block">
              <PhoneMockup dict={dict} size="lg" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t border-slate-100 bg-white/80 p-3 sm:gap-2.5 sm:p-4">
          {cards.map((label, i) => (
            <WorkflowPill key={label} label={label} dotClass={CARD_DOTS[i] ?? "bg-brand-400"} />
          ))}
        </div>
      </div>
    </div>
  );
}
