"use client";

import { useState } from "react";
import type { Dictionary } from "@/dictionaries";
import { PHONE, TELEGRAM_URL } from "@/lib/constants";

type Props = {
  dict: Dictionary;
};

export function FaqSection({ dict }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { faq } = dict;

  return (
    <section id="faq" className="border-t border-slate-100 bg-slate-50 py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-lg font-bold tracking-tight text-navy-950 sm:text-2xl">{faq.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{faq.subtitle}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(260px,320px)_1fr] lg:gap-8">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="text-sm font-bold text-navy-950 sm:text-base">{faq.intro.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                {faq.intro.description}
              </p>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {faq.intro.cta}
              </a>
              <a
                href={`tel:${PHONE}`}
                className="mt-3 block text-center text-sm font-medium text-slate-600 transition hover:text-navy-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {faq.intro.phone}
              </a>
            </div>
          </aside>

          <div className="space-y-2">
            {faq.items.map((item, i) => {
              const isOpen = openIndex === i;
              const showCategory =
                i === 0 || item.category !== faq.items[i - 1]?.category;

              return (
                <div key={item.question}>
                  {showCategory && (
                    <p
                      className={`mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400 ${i === 0 ? "" : "mt-5"}`}
                    >
                      {faq.categories[item.category]}
                    </p>
                  )}
                  <article
                    className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:border-slate-300 hover:shadow ${
                      isOpen ? "border-slate-300 ring-1 ring-slate-200/80" : "border-slate-200"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-start justify-between gap-3 px-4 py-3.5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-600 sm:px-5 sm:py-4"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[13px] font-semibold leading-snug text-navy-950 sm:text-sm">
                        {item.question}
                      </span>
                      <svg
                        className={`mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ease-out sm:h-5 sm:w-5 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="border-t border-slate-100 px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-3.5">
                        <p className="text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:mt-10 sm:p-5 lg:p-6">
          <h3 className="text-sm font-bold text-navy-950 sm:text-base">{faq.callout.title}</h3>
          <p className="mt-2 max-w-3xl text-[13px] leading-relaxed text-slate-600 sm:text-sm">
            {faq.callout.description}
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-2xl border border-navy-900 px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-navy-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
          >
            {faq.callout.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
