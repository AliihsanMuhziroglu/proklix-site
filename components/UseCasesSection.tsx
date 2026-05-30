import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

export function UseCasesSection({ dict }: Props) {
  return (
    <section id="use-cases" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-navy-950 sm:text-3xl">
            {dict.useCases.title}
          </h2>
          <p className="mt-3 inline-flex rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 sm:text-sm">
            {dict.useCases.flowHint}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {dict.useCases.items.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-sm font-bold leading-snug text-navy-950 sm:text-base">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Form", "Approval", "Task", "Result"].map((step, i) => (
                  <span
                    key={step}
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium sm:text-xs ${
                      i === 3
                        ? "bg-navy-950 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {dict.useCases.flowHint.split(" → ")[i] ?? step}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
