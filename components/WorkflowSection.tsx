import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

export function WorkflowSection({ dict }: Props) {
  return (
    <section id="processes" className="bg-gradient-to-b from-navy-950 to-navy-900 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-xl font-bold tracking-tight sm:text-3xl">
          {dict.workflow.title}
        </h2>

        {/* Mobile: vertical stepper */}
        <ol className="relative mt-10 space-y-0 md:hidden">
          {dict.workflow.steps.map((step, i) => (
            <li key={step} className="relative flex gap-4 pb-8 last:pb-0">
              {i < dict.workflow.steps.length - 1 && (
                <span
                  className="absolute left-[15px] top-8 bottom-0 w-px bg-blue-500/40"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                {i + 1}
              </div>
              <p className="pt-1 text-sm font-medium leading-relaxed text-slate-200">{step}</p>
            </li>
          ))}
        </ol>

        {/* Desktop: horizontal cards */}
        <div className="mt-12 hidden md:block">
          <div className="grid grid-cols-7 gap-2 lg:gap-3">
            {dict.workflow.steps.map((step, i) => (
              <div key={step} className="relative flex flex-col">
                {i < dict.workflow.steps.length - 1 && (
                  <span
                    className="absolute left-[calc(50%+1rem)] top-5 hidden h-0.5 w-[calc(100%-2rem)] bg-blue-500/40 lg:block"
                    aria-hidden="true"
                  />
                )}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold shadow-lg shadow-blue-900/30">
                  {i + 1}
                </div>
                <p className="mt-3 text-xs font-medium leading-snug text-slate-200 lg:text-sm">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
