"use client";

import { useState } from "react";
import type { Dictionary } from "@/dictionaries";
import { TELEGRAM_URL } from "@/lib/constants";
import { Button } from "./ui/Button";

type Props = {
  dict: Dictionary;
  className?: string;
};

const FEATURED_CATEGORY_IDS = ["sales", "finance", "warehouse"];
const MAX_VISIBLE = 3;

export function UseCasesSection({ dict, className = "bg-brand-tint" }: Props) {
  const { useCases } = dict;
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categoryMap = Object.fromEntries(useCases.categories.map((c) => [c.id, c.label]));

  const visibleItems =
    activeCategory === null
      ? FEATURED_CATEGORY_IDS.flatMap((id) =>
          useCases.items.filter((item) => item.categoryId === id).slice(0, 1),
        ).slice(0, MAX_VISIBLE)
      : useCases.items.filter((item) => item.categoryId === activeCategory).slice(0, MAX_VISIBLE);

  return (
    <section id="use-cases" className={`overflow-hidden py-10 sm:py-14 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-navy-950 sm:text-2xl lg:text-3xl">
            {useCases.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[640px] text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            {useCases.subtitle}
          </p>
        </div>

        <div className="mt-6 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mt-8 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={`shrink-0 rounded-full border px-3.5 py-2 text-[12px] font-semibold transition sm:px-4 sm:text-[13px] ${
              activeCategory === null
                ? "border-brand-600 bg-brand-600 text-white shadow-sm"
                : "border-slate-200 bg-white text-slate-600 hover:border-brand-200 hover:text-brand-800"
            }`}
          >
            {useCases.featuredLabel ?? "Öne çıkanlar"}
          </button>
          {useCases.categories.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`shrink-0 rounded-full border px-3.5 py-2 text-[12px] font-semibold transition sm:px-4 sm:text-[13px] ${
                  isActive
                    ? "border-brand-600 bg-brand-600 text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:border-brand-200 hover:text-brand-800"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-500 sm:text-[11px]">
                {categoryMap[item.categoryId]}
              </span>
              <h3 className="mt-2.5 text-sm font-bold leading-snug text-navy-950 sm:text-[15px]">
                {item.title}
              </h3>
              <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                {item.description}
              </p>
              {item.hasIntegration && (
                <span className="mt-3 w-fit rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 sm:text-[11px]">
                  {useCases.integrationLabel}
                </span>
              )}
            </article>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-[640px] text-center text-[13px] leading-relaxed text-slate-500 sm:text-sm">
          {useCases.footerNote}
        </p>
        <div className="mt-4 text-center">
          <Button variant="secondary" size="md" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
            {useCases.customCard.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
