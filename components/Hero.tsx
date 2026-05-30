import type { Dictionary } from "@/dictionaries";
import { TELEGRAM_URL } from "@/lib/constants";
import { DashboardMockup } from "./DashboardMockup";

type Props = {
  dict: Dictionary;
};

export function Hero({ dict }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.07),_transparent_55%)]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-24">
        <div>
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
            {dict.hero.trustTag}
          </div>
          <h1 className="text-[1.65rem] font-bold leading-tight tracking-tight text-navy-950 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
            {dict.hero.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
            {dict.hero.subtitle}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              {dict.hero.ctaTelegram}
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border-2 border-navy-900 px-6 py-4 text-base font-semibold text-navy-900 transition hover:bg-navy-950 hover:text-white"
            >
              {dict.hero.ctaAnalysis}
            </a>
          </div>
        </div>
        <div className="lg:pl-2">
          <DashboardMockup dict={dict} />
        </div>
      </div>
    </section>
  );
}
