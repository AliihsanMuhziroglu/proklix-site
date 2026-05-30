import type { Dictionary } from "@/dictionaries";
import { TELEGRAM_URL } from "@/lib/constants";
import { HeroVisual } from "./HeroVisual";
import { TelegramIcon } from "./ui/Button";

type Props = {
  dict: Dictionary;
};

function HeroText({ dict }: { dict: Dictionary }) {
  return (
    <div className="mx-auto w-full max-w-[600px] text-center lg:mx-0 lg:text-left">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-600 sm:mb-4">
        {dict.hero.trustTag}
      </p>

      <h1 className="text-[1.75rem] font-bold leading-[1.15] tracking-tight text-navy-950 sm:text-4xl lg:text-[2.625rem] lg:leading-[1.12]">
        {dict.hero.title}
      </h1>

      <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg lg:max-w-[540px]">
        {dict.hero.subtitle}
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-7 lg:justify-start">
        {dict.hero.integrationChips.map((tag) => {
          const isTelegram = tag.toLowerCase() === "telegram";
          return (
            <span
              key={tag}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                isTelegram
                  ? "border-brand-200 bg-brand-50 text-brand-800"
                  : "border-slate-200 bg-white text-slate-600 shadow-sm"
              }`}
            >
              {tag}
            </span>
          );
        })}
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-stretch sm:justify-center lg:justify-start">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#185FA5] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0C447C] sm:w-auto sm:min-w-[200px]"
        >
          <TelegramIcon className="h-4 w-4 shrink-0" />
          {dict.hero.ctaTelegram}
        </a>
        <a
          href="#contact"
          className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-600 hover:text-brand-600 sm:w-auto"
        >
          {dict.hero.ctaAnalysis}
        </a>
      </div>

      <p className="mt-3 text-sm text-slate-500">{dict.hero.ctaHelper}</p>
    </div>
  );
}

export function Hero({ dict }: Props) {
  return (
    <section className="border-b border-slate-100 bg-gradient-to-b from-white to-slate-50/60 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,440px)] lg:gap-x-10 xl:grid-cols-[minmax(0,620px)_1fr] xl:gap-x-14">
        <HeroText dict={dict} />
        <HeroVisual dict={dict} />
      </div>
    </section>
  );
}
