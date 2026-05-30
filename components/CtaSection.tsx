import type { Dictionary } from "@/dictionaries";
import { TELEGRAM_URL } from "@/lib/constants";
import { ContactForm } from "./ContactForm";

type Props = {
  dict: Dictionary;
};

export function CtaSection({ dict }: Props) {
  return (
    <section id="contact" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-navy-950 p-7 shadow-lg sm:p-12">
          <h2 className="text-center text-xl font-bold tracking-tight text-white sm:text-3xl">
            {dict.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-slate-400 sm:text-base">
            {dict.cta.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
            >
              {dict.cta.ctaTelegram}
            </a>
            <a
              href={`tel:${dict.cta.phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border-2 border-white/20 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              {dict.cta.ctaCall}: {dict.cta.phone}
            </a>
          </div>

          <div className="mx-auto mt-8 max-w-md">
            <p className="mb-2 text-center text-sm font-semibold text-slate-300">
              {dict.cta.formTitle}
            </p>
            <ContactForm dict={dict} />
          </div>
        </div>
      </div>
    </section>
  );
}
