import type { Dictionary } from "@/dictionaries";
import { PHONE, PHONE_DISPLAY, TELEGRAM_URL } from "@/lib/constants";

type Props = {
  dict: Dictionary;
};

export function CtaSection({ dict }: Props) {
  const { cta } = dict;

  return (
    <section id="contact" className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-navy-950 p-6 shadow-lg sm:p-10 lg:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
              {cta.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              {cta.description}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 sm:w-auto sm:min-w-[220px]"
            >
              {cta.ctaTelegram}
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-2xl border-2 border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:min-w-[220px]"
            >
              {cta.ctaCall}: {PHONE_DISPLAY}
            </a>
          </div>

          <p className="mt-4 text-center text-xs text-slate-400 sm:text-sm">{cta.helperLine}</p>

          <div className="mx-auto mt-8 max-w-[720px] rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
            <h3 className="text-sm font-semibold text-white sm:text-[15px]">{cta.helper.title}</h3>
            <ul className="mt-3 space-y-2">
              {cta.helper.checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[13px] leading-relaxed text-slate-300 sm:text-sm"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl border border-white/10 bg-navy-900/60 px-3.5 py-3 text-[12px] leading-relaxed text-slate-300 sm:text-[13px]">
              {cta.helper.example}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
