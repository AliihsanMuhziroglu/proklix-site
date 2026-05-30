"use client";

import { useState } from "react";
import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

export function WorkflowSection({ dict }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = dict.workflow.tabs;
  const activeSteps = tabs[activeTab]?.steps ?? [];

  return (
    <section id="processes" className="bg-navy-950 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-xl font-bold tracking-tight sm:text-3xl">
          {dict.workflow.title}
        </h2>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`rounded-xl px-4 py-2.5 text-xs font-semibold transition sm:text-sm ${
                activeTab === i
                  ? "bg-blue-600 text-white"
                  : "border border-white/15 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Steps */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {activeSteps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold">
                  {i + 1}
                </span>
                <h3 className="text-sm font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
