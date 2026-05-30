import type { Dictionary } from "@/dictionaries";
import { TELEGRAM_URL } from "@/lib/constants";
import { PhoneMockup } from "./PhoneMockup";
import { Button, TelegramIcon } from "./ui/Button";

type Props = {
  dict: Dictionary;
  className?: string;
};

export function Hero({ dict, className = "bg-white dark:bg-slate-950" }: Props) {
  return (
    <section
      className={`relative overflow-hidden border-b border-slate-100 dark:border-slate-800 ${className}`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 px-6 py-20 md:flex-row md:py-28 lg:px-8">
        <div className="max-w-[620px] text-center md:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-600">
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
                      ? "border-brand-600/30 bg-brand-50 text-brand-800 dark:bg-brand-900/30 dark:text-brand-100"
                      : "border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-400"
                  }`}
                >
                  {chip}
                </span>
              );
            })}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Button
              variant="primary"
              size="lg"
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              icon={<TelegramIcon className="h-5 w-5" />}
              className="cta-pulse w-full sm:w-auto"
            >
              {dict.hero.ctaTelegram}
            </Button>
            <Button variant="ghost" size="lg" href="#contact" className="w-full sm:w-auto">
              {dict.hero.ctaAnalysis}
            </Button>
          </div>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{dict.hero.ctaHelper}</p>
        </div>

        <PhoneMockup dict={dict} />
      </div>
    </section>
  );
}
