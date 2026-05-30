import type { Dictionary } from "@/dictionaries";
import { TELEGRAM_URL } from "@/lib/constants";

type Props = {
  dict: Dictionary;
};

export function PricingSection({ dict }: Props) {
  return (
    <section id="pricing" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-navy-950 sm:text-3xl">
            {dict.pricing.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {dict.pricing.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {dict.pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 shadow-sm ${
                plan.highlighted
                  ? "border-blue-600 bg-white shadow-lg shadow-blue-600/10 ring-2 ring-blue-600"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-0.5 text-xs font-semibold text-white">
                  ★
                </span>
              )}
              <h3 className="text-lg font-bold text-navy-950">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{plan.description}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-500" aria-hidden="true">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex min-h-[48px] items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border-2 border-navy-900 text-navy-900 hover:bg-navy-950 hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
