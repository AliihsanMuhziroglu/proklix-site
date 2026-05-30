import type { Dictionary } from "@/dictionaries";
import { TELEGRAM_URL } from "@/lib/constants";
import { Button } from "./ui/Button";

type Props = {
  dict: Dictionary;
  className?: string;
};

export function PricingSection({ dict, className = "bg-white" }: Props) {
  const { pricing } = dict;

  return (
    <section id="pricing" className={`border-t border-slate-100 py-10 sm:py-14 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-lg font-bold tracking-tight text-navy-950 sm:text-2xl">
            {pricing.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {pricing.subtitle}
          </p>
          <p className="mx-auto mt-3 inline-flex max-w-xl rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium leading-snug text-slate-600 sm:text-xs">
            {pricing.startNote}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {pricing.plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col rounded-2xl border bg-white p-5 shadow-sm sm:p-6 ${
                plan.highlighted
                  ? "border-brand-600 shadow-md shadow-brand-600/5 ring-1 ring-brand-600/20"
                  : "border-slate-200"
              }`}
            >
              {plan.badge ? (
                <span className="mb-3 inline-flex w-fit rounded-full bg-brand-600 px-2.5 py-1 text-[10px] font-semibold text-white sm:text-[11px]">
                  {plan.badge}
                </span>
              ) : (
                <span className="mb-3 block h-[26px]" aria-hidden="true" />
              )}

              <h3 className="text-base font-bold text-navy-950 sm:text-lg">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{plan.subtitle}</p>

              <p className="mt-3 rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-2.5 text-[12px] leading-relaxed text-slate-600 sm:text-[13px]">
                <span className="font-semibold text-navy-950">{pricing.bestForLabel}:</span>{" "}
                {plan.bestFor}
              </p>

              <ul className="mt-4 flex-1 space-y-1.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-[13px] text-slate-700 sm:text-sm">
                    <span className="mt-0.5 shrink-0 text-success" aria-hidden="true">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "primary" : "ghost"}
                size="md"
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full sm:mt-6"
              >
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <h3 className="text-sm font-bold text-navy-950 sm:text-base">{pricing.explanation.title}</h3>
          <p className="mt-2 max-w-3xl text-[13px] leading-relaxed text-slate-600 sm:text-sm">
            {pricing.explanation.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {pricing.explanation.factors.map((factor) => (
              <span
                key={factor}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 sm:text-xs"
              >
                {factor}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
