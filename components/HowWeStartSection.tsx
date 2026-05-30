import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

const TELEGRAM_STEP_INDEX = 3;

function stepNumberClass(index: number) {
  if (index === TELEGRAM_STEP_INDEX) {
    return "border-blue-200 bg-blue-600 text-white ring-4 ring-blue-100";
  }
  return "border-slate-200 bg-navy-950 text-white";
}

function stepCardClass(index: number) {
  if (index === TELEGRAM_STEP_INDEX) {
    return "border-blue-200 ring-1 ring-blue-100";
  }
  return "border-slate-200";
}

export function HowWeStartSection({ dict }: Props) {
  const { howWeStart } = dict;
  const { steps } = howWeStart;

  return (
    <section id="how-we-start" className="overflow-hidden bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-navy-950 sm:text-2xl lg:text-3xl">
            {howWeStart.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[760px] text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            {howWeStart.subtitle}
          </p>
        </div>

        {/* Mobile / tablet vertical timeline */}
        <div className="relative mt-8 sm:mt-10 lg:hidden">
          <div
            className="absolute bottom-4 left-[15px] top-4 w-px bg-slate-200"
            aria-hidden="true"
          />
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li key={step.title} className="relative pl-10">
                <span
                  className={`absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold ${stepNumberClass(i)}`}
                >
                  {i + 1}
                </span>
                <div
                  className={`rounded-2xl border bg-white p-4 shadow-sm sm:p-5 ${stepCardClass(i)}`}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    {step.label}
                  </p>
                  <h3
                    className={`mt-1 text-sm font-bold leading-snug sm:text-[15px] ${
                      i === TELEGRAM_STEP_INDEX ? "text-blue-900" : "text-navy-950"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="relative mt-8 hidden sm:mt-10 lg:block">
          <div
            className="absolute left-[8%] right-[8%] top-[18px] h-px bg-slate-200"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-5 gap-3">
            {steps.map((step, i) => (
              <li key={step.title} className="relative pt-0">
                <div className="flex flex-col items-center">
                  <span
                    className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border text-sm font-bold ${stepNumberClass(i)}`}
                  >
                    {i + 1}
                  </span>
                  <div
                    className={`mt-4 w-full rounded-2xl border bg-white p-4 shadow-sm ${stepCardClass(i)}`}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                      {step.label}
                    </p>
                    <h3
                      className={`mt-1.5 text-[13px] font-bold leading-snug ${
                        i === TELEGRAM_STEP_INDEX ? "text-blue-900" : "text-navy-950"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <span
                    className="pointer-events-none absolute right-0 top-[18px] hidden translate-x-1/2 text-slate-300 xl:inline"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:mt-10 sm:p-5 lg:p-6">
          <h3 className="text-sm font-bold text-navy-950 sm:text-base">{howWeStart.callout.title}</h3>
          <p className="mt-2 max-w-3xl text-[13px] leading-relaxed text-slate-600 sm:text-sm">
            {howWeStart.callout.description}
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-navy-900 px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-navy-950 hover:text-white"
          >
            {howWeStart.callout.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
