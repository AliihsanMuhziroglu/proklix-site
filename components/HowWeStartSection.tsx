import type { Dictionary } from "@/dictionaries";
import { TELEGRAM_URL } from "@/lib/constants";
import { Button } from "./ui/Button";

type Props = {
  dict: Dictionary;
  className?: string;
};

const TELEGRAM_STEP_INDEX = 3;

function stepNumberClass(index: number) {
  if (index === TELEGRAM_STEP_INDEX) {
    return "border-brand-200 bg-brand-600 text-white ring-4 ring-brand-100";
  }
  return "border-slate-200 bg-gray-100 text-gray-400";
}

function stepCardClass(index: number) {
  if (index === TELEGRAM_STEP_INDEX) {
    return "border-brand-200 ring-1 ring-brand-100";
  }
  return "border-slate-200";
}

export function HowWeStartSection({ dict, className = "bg-white" }: Props) {
  const { howWeStart } = dict;
  const { steps } = howWeStart;

  return (
    <section id="how-we-start" className={`overflow-hidden py-10 sm:py-14 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-navy-950 sm:text-2xl lg:text-3xl">
            {howWeStart.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[680px] text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            {howWeStart.subtitle}
          </p>
        </div>

        <ol className="relative mt-8 space-y-4 sm:mt-10 lg:grid lg:grid-cols-5 lg:gap-3 lg:space-y-0">
          <div
            className="absolute bottom-4 left-[15px] top-4 w-px bg-slate-200 lg:left-[8%] lg:right-[8%] lg:top-[18px] lg:h-px lg:w-auto"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <li key={step.title} className="relative lg:flex lg:flex-col lg:items-center">
              <span
                className={`absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold lg:relative lg:left-auto lg:top-auto lg:z-10 lg:h-9 lg:w-9 lg:text-sm ${stepNumberClass(i)}`}
              >
                {i + 1}
              </span>
              <div
                className={`ml-10 rounded-2xl border bg-white p-4 shadow-sm lg:ml-0 lg:mt-4 lg:w-full ${stepCardClass(i)}`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                  {step.label}
                </p>
                <h3
                  className={`mt-1 text-sm font-bold leading-snug sm:text-[15px] ${
                    i === TELEGRAM_STEP_INDEX ? "text-brand-900" : "text-navy-950"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-6 max-w-[640px] text-center text-[13px] leading-relaxed text-slate-500 sm:mt-8 sm:text-sm">
          {howWeStart.callout.description}
        </p>
        <div className="mt-4 text-center">
          <Button variant="secondary" size="md" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
            {howWeStart.callout.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
