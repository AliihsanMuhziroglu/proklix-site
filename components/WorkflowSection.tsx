"use client";

import { useState } from "react";
import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

export function WorkflowSection({ dict }: Props) {
  const [activeStep, setActiveStep] = useState(0);
  const details = dict.workflow.stepDetails;

  return (
    <section id="processes" className="bg-gradient-to-b from-navy-950 to-navy-900 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-xl font-bold tracking-tight sm:text-3xl">
          {dict.workflow.title}
        </h2>

        {/* Progress bar */}
        <div className="mx-auto mt-10 hidden max-w-4xl md:block">
          <div className="relative flex justify-between">
            <div className="absolute left-0 right-0 top-5 h-0.5 bg-blue-500/30" aria-hidden="true" />
            {dict.workflow.steps.map((step, i) => (
              <button
                key={step}
                type="button"
                onClick={() => setActiveStep(i)}
                className="group relative z-10 flex flex-col items-center gap-2"
                aria-expanded={activeStep === i}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition ${
                    activeStep >= i
                      ? "bg-blue-600 shadow-lg shadow-blue-900/40"
                      : "bg-navy-800 text-slate-400"
                  } ${activeStep === i ? "ring-2 ring-white/30 ring-offset-2 ring-offset-navy-950" : ""}`}
                >
                  {i + 1}
                </div>
                <span
                  className={`max-w-[5.5rem] text-center text-[10px] font-medium leading-tight lg:max-w-[7rem] lg:text-xs ${
                    activeStep === i ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                  }`}
                >
                  {step}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="mt-8 space-y-2 md:hidden">
          {dict.workflow.steps.map((step, i) => (
            <div key={step} className="overflow-hidden rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setActiveStep(activeStep === i ? -1 : i)}
                className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
                aria-expanded={activeStep === i}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                  {i + 1}
                </span>
                <span className="flex-1 text-sm font-medium">{step}</span>
                <svg
                  className={`h-4 w-4 shrink-0 transition ${activeStep === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeStep === i && details[i] && (
                <div className="border-t border-white/10 px-4 py-3 text-sm leading-relaxed text-slate-300">
                  {details[i]}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop detail panel */}
        <div className="mx-auto mt-8 hidden max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center md:block">
          <p className="text-lg font-semibold text-white">{dict.workflow.steps[activeStep]}</p>
          {details[activeStep] && (
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{details[activeStep]}</p>
          )}
        </div>
      </div>
    </section>
  );
}
