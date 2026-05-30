import type { Dictionary } from "@/dictionaries";
import { TELEGRAM_URL } from "@/lib/constants";
import { DashboardMockup } from "./DashboardMockup";

type Props = {
  dict: Dictionary;
};

export function Hero({ dict }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8 lg:py-12">
        <div className="max-w-[620px]">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-navy-900">
            {dict.hero.trustTag}
          </div>
          <h1 className="text-[1.6rem] font-semibold leading-[1.2] tracking-tight text-navy-950 sm:text-[2rem] lg:text-[2.25rem] lg:leading-[1.15]">
            {dict.hero.title}
          </h1>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            {dict.hero.subtitle}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
            {dict.hero.integrationChips.map((chip) => {
              const isTelegram = chip.toLowerCase() === "telegram";
              return (
                <span
                  key={chip}
                  className={`inline-flex rounded-full border bg-white px-2.5 py-1 text-[11px] font-medium sm:px-3 sm:text-xs ${
                    isTelegram
                      ? "border-blue-200 text-blue-700"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
                  {chip}
                </span>
              );
            })}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:gap-3">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
            >
              {dict.hero.ctaTelegram}
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl border border-navy-900 px-6 py-3.5 text-base font-semibold text-navy-900 transition hover:bg-navy-950 hover:text-white sm:w-auto"
            >
              {dict.hero.ctaAnalysis}
            </a>
          </div>
          <p className="mt-3 text-sm text-slate-500">{dict.hero.ctaHelper}</p>
        </div>
        <div className="min-w-0 lg:pl-1">
          <DashboardMockup dict={dict} />
        </div>
      </div>
    </section>
  );
}
