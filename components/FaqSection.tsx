"use client";

import { useState } from "react";
import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

export function FaqSection({ dict }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl font-bold tracking-tight text-navy-950 sm:text-3xl">
          {dict.faq.title}
        </h2>
        <div className="mt-10 space-y-3">
          {dict.faq.items.map((item, i) => (
            <div
              key={item.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-semibold leading-snug text-navy-950 sm:text-base">
                  {item.question}
                </span>
                <svg
                  className={`mt-0.5 h-5 w-5 shrink-0 text-slate-400 transition ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="border-t border-slate-100 px-5 py-4">
                  <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
