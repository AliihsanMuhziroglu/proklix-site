import type { Dictionary } from "@/dictionaries";
import { PHONE, TELEGRAM_URL } from "@/lib/constants";

type Props = {
  dict: Dictionary;
};

export function CtaSection({ dict }: Props) {
  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 shadow-xl shadow-blue-600/20 sm:p-12">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {dict.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-blue-100">
            {dict.cta.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              {dict.cta.ctaTelegram}
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center rounded-2xl border-2 border-white/30 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              {dict.cta.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
