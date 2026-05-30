"use client";

import { useState } from "react";
import type { Dictionary } from "@/dictionaries";
import { TELEGRAM_URL } from "@/lib/constants";
import { Button } from "./ui/Button";

type Props = {
  dict: Dictionary;
  className?: string;
};

const TELEGRAM_STEP_INDEX = 4;
const DEFAULT_TAB_INDEX = 1;

function stepCardClass(index: number) {
  if (index === TELEGRAM_STEP_INDEX) {
    return "border-brand-400/40 bg-brand-50 ring-1 ring-brand-500/20";
  }
  if (index >= 5) {
    return "border-success/30 bg-success-50";
  }
  return "border-slate-200 bg-white";
}

function stepNumberClass(index: number) {
  if (index === TELEGRAM_STEP_INDEX) {
    return "border-brand-400 bg-brand-600 text-white";
  }
  if (index >= 5) {
    return "border-success/40 bg-success text-white";
  }
  return "border-slate-200 bg-gray-100 text-gray-400";
}

export function WorkflowSection({ dict, className = "bg-brand-tint" }: Props) {
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB_INDEX);
  const { workflow } = dict;
  const tabs = workflow.tabs;
  const steps = tabs[activeTab]?.steps ?? [];

  return (
    <section id="processes" className={`overflow-hidden py-10 sm:py-14 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-navy-950 sm:text-2xl lg:text-3xl">
            {workflow.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[640px] text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            {workflow.subtitle}
          </p>
        </div>

        <div className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-1 sm:mt-8 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`shrink-0 rounded-xl border px-3.5 py-2 text-xs font-semibold transition sm:px-4 sm:py-2.5 sm:text-sm ${
                activeTab === i
                  ? "border-brand-600 bg-brand-600 text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <ol key={tabs[activeTab]?.id ?? activeTab} className="relative mt-6 space-y-0 sm:mt-8">
          <div
            className="absolute bottom-4 left-[15px] top-4 w-px bg-slate-200 md:hidden"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-0 md:flex-row md:flex-wrap md:items-stretch md:gap-2">
            {steps.map((step, i) => (
              <li key={step.title} className="relative flex flex-1 flex-col md:min-w-0 md:flex-[1_1_13%]">
                <div className="relative pl-10 md:pl-0 md:pt-0">
                  <span
                    className={`absolute left-0 top-3 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-medium md:relative md:left-auto md:top-auto md:mb-2 md:inline-flex ${stepNumberClass(i)}`}
                  >
                    {i + 1}
                  </span>
                  <div className={`rounded-xl border p-3 shadow-sm sm:p-3.5 ${stepCardClass(i)}`}>
                    <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-medium text-brand-800">
                      {step.badge}
                    </span>
                    <h3
                      className={`mt-2 text-[13px] font-semibold leading-snug ${
                        i === TELEGRAM_STEP_INDEX ? "text-brand-800" : "text-navy-950"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[12px] leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <span
                    className="my-1.5 flex justify-center text-slate-300 md:absolute md:-right-3 md:top-1/2 md:my-0 md:-translate-y-1/2 md:text-xs"
                    aria-hidden="true"
                  >
                    <span className="md:hidden">↓</span>
                    <span className="hidden md:inline">→</span>
                  </span>
                )}
              </li>
            ))}
          </div>
        </ol>

        <p className="mx-auto mt-6 max-w-[640px] text-center text-[13px] leading-relaxed text-slate-500 sm:mt-8 sm:text-sm">
          {workflow.summary.description}
        </p>
        <div className="mt-4 text-center">
          <Button variant="secondary" size="md" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
            {workflow.summary.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
