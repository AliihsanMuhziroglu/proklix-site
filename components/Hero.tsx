import type { Dictionary } from "@/dictionaries";
import { TELEGRAM_URL } from "@/lib/constants";
import { HeroVisual } from "./HeroVisual";
import { TelegramIcon } from "./ui/Button";

type Props = {
  dict: Dictionary;
};

function HeroText({ dict }: { dict: Dictionary }) {
  const mobileTitle = dict.hero.titleMobile ?? dict.hero.title;

  return (
    <div className="mx-auto w-full min-w-0 max-w-[600px] text-center lg:mx-0 lg:text-left">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-600 sm:mb-4">
        {dict.hero.trustTag}
      </p>

      <h1 className="text-[1.625rem] font-bold leading-tight tracking-tight text-navy-950 sm:hidden">
        {mobileTitle}
      </h1>
      <h1 className="hidden text-[1.75rem] font-bold leading-[1.15] tracking-tight text-navy-950 sm:block sm:text-4xl lg:text-[2.625rem] lg:leading-[1.12]">
        {dict.hero.title}
      </h1>

      <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg lg:max-w-[540px]">
        {dict.hero.subtitle}
      </p>

      <div className="mt-6 flex min-w-0 flex-wrap justify-center gap-2 sm:mt-7 lg:justify-start">
        {dict.hero.integrationChips.map((tag) => {
          const isTelegram = tag.toLowerCase() === "telegram";
          return (
            <span
              key={tag}
              className={`max-w-full rounded-full border px-3 py-1.5 text-xs font-medium ${
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

      <div className="mt-7 flex w-full min-w-0 flex-col gap-3 sm:mt-8 sm:flex-row sm:items-stretch sm:justify-center lg:justify-start">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-[#185FA5] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0C447C] sm:w-auto sm:min-w-[200px] sm:px-6"
        >
          <TelegramIcon className="h-4 w-4 shrink-0" />
          <span className="truncate">{dict.hero.ctaTelegram}</span>
        </a>
        <a
          href="#contact"
          className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-600 hover:text-brand-600 sm:w-auto sm:px-6"
        >
          <span className="text-center leading-snug">{dict.hero.ctaAnalysis}</span>
        </a>
      </div>

      <p className="mt-3 text-sm text-slate-500">{dict.hero.ctaHelper}</p>
    </div>
  );
}

export function Hero({ dict }: Props) {
  return (
    <section className="w-full max-w-full overflow-x-clip border-b border-slate-100 bg-gradient-to-b from-white to-slate-50/60 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto grid w-full min-w-0 max-w-6xl items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,440px)] lg:gap-x-10 xl:grid-cols-[minmax(0,620px)_1fr] xl:gap-x-14">
        <HeroText dict={dict} />
        <div className="min-w-0 max-w-full">
          <HeroVisual dict={dict} />
        </div>
      </div>
    </section>
  );
}
