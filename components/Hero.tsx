import type { Dictionary } from "@/dictionaries";
import { TELEGRAM_URL } from "@/lib/constants";
import { PhoneMockup } from "./PhoneMockup";

type Props = {
  dict: Dictionary;
};

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  );
}

export function Hero({ dict }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 px-6 py-20 md:flex-row md:py-28 lg:px-8">
        <div className="max-w-[620px] text-center md:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-proklix">
            {dict.hero.trustTag}
          </p>
          <h1 className="text-3xl font-medium leading-snug text-navy-950 dark:text-white md:text-4xl">
            {dict.hero.title}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base">
            {dict.hero.subtitle}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
            {dict.hero.integrationChips.map((chip) => {
              const isTelegram = chip.toLowerCase() === "telegram";
              return (
                <span
                  key={chip}
                  className={`inline-flex rounded-full border bg-white px-2.5 py-1 text-[11px] font-medium sm:px-3 sm:text-xs dark:bg-slate-900 ${
                    isTelegram
                      ? "border-proklix/30 text-proklix"
                      : "border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-400"
                  }`}
                >
                  {chip}
                </span>
              );
            })}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-proklix px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-proklix-dark sm:w-auto"
            >
              <TelegramIcon className="h-4 w-4" />
              {dict.hero.ctaTelegram}
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-navy-900 px-5 py-3 text-sm font-medium text-navy-900 transition hover:bg-navy-950 hover:text-white dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 sm:w-auto"
            >
              {dict.hero.ctaAnalysis}
            </a>
          </div>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{dict.hero.ctaHelper}</p>
        </div>

        <PhoneMockup dict={dict} />
      </div>
    </section>
  );
}
