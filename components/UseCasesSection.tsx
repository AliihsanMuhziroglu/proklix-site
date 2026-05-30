"use client";

import { useState } from "react";
import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

type IconProps = { className?: string };

function IconProcess({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h4" />
    </svg>
  );
}

export function UseCasesSection({ dict }: Props) {
  const { useCases } = dict;
  const [activeCategory, setActiveCategory] = useState(useCases.categories[0]?.id ?? "");

  const categoryMap = Object.fromEntries(useCases.categories.map((c) => [c.id, c.label]));
  const visibleItems = useCases.items.filter((item) => item.categoryId === activeCategory);

  return (
    <section id="use-cases" className="overflow-hidden bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-navy-950 sm:text-2xl lg:text-3xl">
            {useCases.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[760px] text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            {useCases.subtitle}
          </p>
          <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm sm:mt-5 sm:gap-x-2.5 sm:px-5 sm:py-2.5">
            {useCases.flowSteps.map((step, i) => (
              <span key={step} className="inline-flex items-center gap-2 sm:gap-2.5">
                <span className="text-xs font-semibold text-navy-900 sm:text-sm">{step}</span>
                {i < useCases.flowSteps.length - 1 && (
                  <span className="text-xs text-slate-300 sm:text-sm" aria-hidden="true">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mt-10 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
          {useCases.categories.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`shrink-0 rounded-full border px-3.5 py-2 text-[12px] font-semibold transition sm:px-4 sm:text-[13px] ${
                  isActive
                    ? "border-navy-900 bg-navy-950 text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-navy-950"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-navy-800/80">
                  <IconProcess className="h-[18px] w-[18px]" />
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-500 sm:text-[11px]">
                  {categoryMap[item.categoryId]}
                </span>
              </div>
              <h3 className="mt-3 text-sm font-bold leading-snug text-navy-950 sm:text-[15px]">
                {item.title}
              </h3>
              <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {useCases.flowSteps.map((step, i) => (
                  <span
                    key={step}
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium sm:text-[11px] ${
                      i === useCases.flowSteps.length - 1
                        ? "bg-navy-950 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {step}
                  </span>
                ))}
                {item.hasIntegration && (
                  <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-500 sm:text-[11px]">
                    {useCases.integrationLabel}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <article className="mt-6 rounded-2xl border border-navy-900/15 bg-white p-4 shadow-sm sm:mt-8 sm:p-5 lg:p-6">
          <h3 className="text-sm font-bold text-navy-950 sm:text-base">{useCases.customCard.title}</h3>
          <p className="mt-2 max-w-3xl text-[13px] leading-relaxed text-slate-600 sm:text-sm">
            {useCases.customCard.description}
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-navy-900 px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-navy-950 hover:text-white"
          >
            {useCases.customCard.cta}
          </a>
        </article>

        <p className="mx-auto mt-6 max-w-[760px] text-center text-[13px] leading-relaxed text-slate-500 sm:mt-8 sm:text-sm">
          {useCases.footerNote}
        </p>
      </div>
    </section>
  );
}
