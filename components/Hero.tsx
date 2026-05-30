import type { Dictionary } from "@/dictionaries";
import { TELEGRAM_URL } from "@/lib/constants";
import { PhoneMockup } from "./PhoneMockup";
import { TelegramIcon } from "./ui/Button";

type Props = {
  dict: Dictionary;
};

function HeroText({ dict }: { dict: Dictionary }) {
  return (
    <div className="mx-auto max-w-lg text-center md:mx-0 md:text-left">
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#185FA5]">
        {dict.hero.trustTag}
      </p>

      <h1 className="mb-5 text-3xl font-medium leading-tight text-gray-900 md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
        {dict.hero.title}
      </h1>

      <p className="mb-7 text-base leading-relaxed text-gray-500">{dict.hero.subtitle}</p>

      <div className="mb-8 flex flex-wrap justify-center gap-2 md:justify-start">
        {dict.hero.integrationChips.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#185FA5] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0C447C]"
        >
          <TelegramIcon className="h-4 w-4 shrink-0" />
          {dict.hero.ctaTelegram}
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-600 transition-colors hover:border-[#185FA5] hover:text-[#185FA5]"
        >
          {dict.hero.ctaAnalysis}
        </a>
      </div>

      <p className="mt-3 text-xs text-gray-400">{dict.hero.ctaHelper}</p>
    </div>
  );
}

export function Hero({ dict }: Props) {
  return (
    <section className="w-full bg-white px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-12 lg:gap-x-16">
        <HeroText dict={dict} />
        <div className="flex justify-center md:justify-end">
          <PhoneMockup dict={dict} />
        </div>
      </div>
    </section>
  );
}
