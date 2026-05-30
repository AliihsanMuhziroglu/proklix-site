"use client";

import { useState } from "react";
import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

const TELEGRAM_STEP_INDEX = 4;
const RESULT_STEP_INDEX = 5;
const HISTORY_STEP_INDEX = 6;

function stepCardClass(index: number) {
  if (index === TELEGRAM_STEP_INDEX) {
    return "border-blue-400/40 bg-blue-600/10 ring-1 ring-blue-500/20";
  }
  if (index === RESULT_STEP_INDEX) {
    return "border-emerald-400/30 bg-emerald-600/10";
  }
  if (index === HISTORY_STEP_INDEX) {
    return "border-emerald-400/25 bg-emerald-600/5";
  }
  return "border-white/10 bg-white/[0.06]";
}

function stepNumberClass(index: number) {
  if (index === TELEGRAM_STEP_INDEX) {
    return "border-blue-400/40 bg-blue-600 text-white";
  }
  if (index === RESULT_STEP_INDEX || index === HISTORY_STEP_INDEX) {
    return "border-emerald-400/40 bg-emerald-600/90 text-white";
  }
  return "border-white/15 bg-white/10 text-white";
}

function StepCard({
  step,
  index,
}: {
  step: Dictionary["workflow"]["tabs"][number]["steps"][number];
  index: number;
}) {
  return (
    <div className={`rounded-2xl border p-3.5 shadow-sm sm:p-4 ${stepCardClass(index)}`}>
      <div className="flex items-start justify-between gap-2">
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${stepNumberClass(index)}`}
        >
          {index + 1}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-300">
          {step.badge}
        </span>
      </div>
      <h3
        className={`mt-2.5 text-[13px] font-semibold leading-snug sm:text-sm ${
          index === TELEGRAM_STEP_INDEX ? "text-blue-100" : "text-white"
        }`}
      >
        {step.title}
      </h3>
      <p className="mt-1.5 text-[12px] leading-relaxed text-slate-300 sm:text-[13px]">
        {step.description}
      </p>
    </div>
  );
}

function HorizontalArrow({ direction = "right" }: { direction?: "right" | "left" | "down" }) {
  const symbol = direction === "down" ? "↓" : direction === "left" ? "←" : "→";
  return (
    <span className="flex shrink-0 items-center justify-center text-slate-500" aria-hidden="true">
      {symbol}
    </span>
  );
}

export function WorkflowSection({ dict }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const { workflow } = dict;
  const tabs = workflow.tabs;
  const steps = tabs[activeTab]?.steps ?? [];

  return (
    <section id="processes" className="overflow-hidden bg-navy-950 py-12 text-white sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">{workflow.title}</h2>
          <p className="mx-auto mt-3 max-w-[760px] text-sm leading-relaxed text-slate-300 sm:mt-4 sm:text-base">
            {workflow.subtitle}
          </p>
        </div>

        <div className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-1 sm:mt-10 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`shrink-0 rounded-xl border px-3.5 py-2.5 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                activeTab === i
                  ? "border-blue-500 bg-blue-600 text-white shadow-sm"
                  : "border-white/15 bg-white/5 text-slate-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div key={tabs[activeTab]?.id ?? activeTab} className="mt-8 min-h-[720px] sm:mt-10 lg:min-h-[420px]">
          {/* Mobile vertical timeline */}
          <ol className="relative space-y-3 lg:hidden">
            <div
              className="absolute bottom-4 left-[15px] top-4 w-px bg-white/15"
              aria-hidden="true"
            />
            {steps.map((step, i) => (
              <li key={step.title} className="relative pl-10">
                <span
                  className={`absolute left-0 top-3 flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold ${stepNumberClass(i)}`}
                >
                  {i + 1}
                </span>
                <StepCard step={step} index={i} />
              </li>
            ))}
          </ol>

          {/* Desktop snake timeline */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-2">
              {steps.slice(0, 4).map((step, i) => (
                <div key={step.title} className="contents">
                  <StepCard step={step} index={i} />
                  {i < 3 && <HorizontalArrow direction="right" />}
                </div>
              ))}
            </div>

            <div className="flex justify-end py-2 pr-[6%]">
              <HorizontalArrow direction="down" />
            </div>

            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 pl-[8%]">
              {[steps[6], steps[5], steps[4]].map((step, i) => {
                const index = 6 - i;
                if (!step) return null;
                return (
                  <div key={step.title} className="contents">
                    <StepCard step={step} index={index} />
                    {i < 2 && <HorizontalArrow direction="left" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:mt-10 sm:p-5 lg:p-6">
          <h3 className="text-sm font-bold text-white sm:text-base">{workflow.summary.title}</h3>
          <p className="mt-2 max-w-3xl text-[13px] leading-relaxed text-slate-300 sm:text-sm">
            {workflow.summary.description}
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
          >
            {workflow.summary.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
