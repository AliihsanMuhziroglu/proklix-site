"use client";

import { useState } from "react";
import type { StepItem } from "@/dictionaries/types";

type Props = {
  title: string;
  steps: StepItem[];
  stepLabel: string;
};

export function SectorWorkflowSection({ title, steps, stepLabel }: Props) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-gradient-to-b from-navy-950 to-navy-900 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>

        <div className="mx-auto mt-10 hidden max-w-5xl lg:block">
          <div className="grid grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <button
                key={step.title}
                type="button"
                onClick={() => setActiveStep(i)}
                className={`rounded-2xl border p-4 text-left transition ${
                  activeStep === i
                    ? "border-blue-400/50 bg-blue-600/20 shadow-lg shadow-blue-900/30"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                  {stepLabel} {i + 1}
                </span>
                <p className="mt-2 text-sm font-semibold leading-snug">{step.title}</p>
              </button>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-lg font-semibold">{steps[activeStep].title}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {steps[activeStep].description}
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-2 lg:hidden">
          {steps.map((step, i) => (
            <div key={step.title} className="overflow-hidden rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setActiveStep(activeStep === i ? -1 : i)}
                className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
                aria-expanded={activeStep === i}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                  {i + 1}
                </span>
                <span className="flex-1 text-sm font-medium">{step.title}</span>
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
              {activeStep === i && (
                <div className="border-t border-white/10 px-4 py-3 text-sm leading-relaxed text-slate-300">
                  {step.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
