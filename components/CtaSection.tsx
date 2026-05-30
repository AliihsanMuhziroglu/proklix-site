import type { Dictionary } from "@/dictionaries";
import { PHONE, PHONE_DISPLAY, TELEGRAM_URL } from "@/lib/constants";
import { Button, TelegramIcon } from "./ui/Button";

type Props = {
  dict: Dictionary;
  className?: string;
};

export function CtaSection({ dict, className = "bg-brand-600" }: Props) {
  const { cta } = dict;

  return (
    <section id="contact" className={`py-16 text-white sm:py-20 ${className}`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-medium tracking-tight sm:text-2xl lg:text-3xl">{cta.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-100 sm:text-base">{cta.description}</p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-medium text-brand-600 transition-colors hover:bg-brand-50 active:bg-brand-100 sm:w-auto sm:min-w-[220px]"
          >
            <TelegramIcon className="h-5 w-5 shrink-0 text-brand-600" />
            {cta.ctaTelegram}
          </a>
          <Button
            variant="ghost"
            size="lg"
            href={`tel:${PHONE}`}
            className="w-full border-white/40 text-white hover:border-white/60 hover:bg-white/10 hover:text-white sm:w-auto sm:min-w-[220px]"
          >
            {cta.ctaCall}: {PHONE_DISPLAY}
          </Button>
        </div>

        <p className="mt-4 text-center text-xs text-brand-100/80 sm:text-sm">{cta.helperLine}</p>

        <div className="mx-auto mt-8 max-w-[720px] rounded-2xl border border-white/15 bg-white/10 p-4 sm:p-5">
          <h3 className="text-sm font-semibold sm:text-[15px]">{cta.helper.title}</h3>
          <ul className="mt-3 space-y-2">
            {cta.helper.checklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[13px] leading-relaxed text-brand-100 sm:text-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-100" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-xl border border-white/10 bg-brand-800/40 px-3.5 py-3 text-[12px] leading-relaxed text-brand-100 sm:text-[13px]">
            {cta.helper.example}
          </p>
        </div>
      </div>
    </section>
  );
}
