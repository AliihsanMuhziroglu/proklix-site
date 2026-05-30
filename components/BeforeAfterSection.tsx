import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
  className?: string;
};

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function BeforeAfterSection({ dict, className = "bg-[#F9F9F8]" }: Props) {
  const { beforeAfter } = dict;

  return (
    <section className={`overflow-hidden py-10 sm:py-14 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-navy-950 sm:text-2xl lg:text-3xl">
            {beforeAfter.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[760px] text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            {beforeAfter.subtitle}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch lg:gap-5">
          <div className="rounded-2xl border border-red-200/80 bg-red-50/60 p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-red-200 bg-red-100/80 text-red-700">
                <IconX className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-base font-bold text-red-950 sm:text-lg">{beforeAfter.without.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-red-900/70 sm:text-sm">
                  {beforeAfter.without.subtitle}
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 sm:space-y-2.5">
              {beforeAfter.without.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[13px] leading-relaxed text-red-950/80 sm:text-sm"
                >
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <IconX className="h-2.5 w-2.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center py-1 lg:px-1 lg:py-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-[11px] font-semibold text-slate-600 shadow-sm sm:text-xs lg:flex-col lg:gap-1 lg:px-3 lg:py-3">
              {beforeAfter.transformLabel.split(" → ").map((part, i, arr) => (
                <span key={part} className="inline-flex items-center gap-2 lg:flex-col">
                  <span>{part}</span>
                  {i < arr.length - 1 && (
                    <span className="text-slate-300 lg:rotate-90" aria-hidden="true">
                      →
                    </span>
                  )}
                </span>
              ))}
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex-1 rounded-2xl border border-emerald-200/80 bg-emerald-50/60 p-5 shadow-sm sm:p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-100/80 text-emerald-700">
                  <IconCheck className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-emerald-950 sm:text-lg">{beforeAfter.with.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-emerald-900/70 sm:text-sm">
                    {beforeAfter.with.subtitle}
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 sm:space-y-2.5">
                {beforeAfter.with.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] leading-relaxed text-emerald-950/80 sm:text-sm"
                  >
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <IconCheck className="h-2.5 w-2.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4">
              {beforeAfter.resultChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-emerald-200/80 bg-emerald-50/80 px-2.5 py-1 text-[10px] font-medium text-emerald-800 sm:text-[11px]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:mt-8 sm:p-5">
          <h3 className="text-sm font-bold text-navy-950 sm:text-base">{beforeAfter.callout.title}</h3>
        </div>
      </div>
    </section>
  );
}
