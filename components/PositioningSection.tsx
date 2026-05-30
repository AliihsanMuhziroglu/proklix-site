import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

type IconProps = { className?: string };

function IconForm({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
    </svg>
  );
}

function IconCheck({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconTask({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h4" />
    </svg>
  );
}

function IconTelegram({ className }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  );
}

function IconPlug({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4H7a2 2 0 00-2 2v3m16 5v3a2 2 0 01-2 2h-4m-5-8l-2-2m0 0l-2 2m2-2v12" />
    </svg>
  );
}

function IconEye({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

const cardIcons = [IconForm, IconCheck, IconTask, IconTelegram, IconPlug, IconEye];
const TELEGRAM_FLOW_STEP_INDEX = 2;

export function PositioningSection({ dict }: Props) {
  const { title, subtitle, flowSteps, items } = dict.positioning;

  return (
    <section id="platform" className="border-b border-slate-100 bg-slate-50 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-navy-950 sm:text-2xl lg:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-[640px] text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            {subtitle}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-1.5 sm:mt-8 lg:flex-row lg:items-stretch lg:gap-1">
          {flowSteps.map((step, i) => {
            const isTelegram = i === TELEGRAM_FLOW_STEP_INDEX;
            return (
              <div key={step.title} className="contents">
                <div
                  className={`flex flex-col rounded-xl border bg-white p-3 shadow-sm lg:min-w-0 lg:flex-1 ${
                    isTelegram ? "border-blue-200 ring-1 ring-blue-100" : "border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                        isTelegram ? "bg-blue-600 text-white" : "bg-slate-100 text-navy-900"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <h3
                      className={`text-[12px] font-semibold leading-snug sm:text-[13px] ${
                        isTelegram ? "text-blue-800" : "text-navy-950"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600 sm:text-xs">
                    {step.description}
                  </p>
                </div>
                {i < flowSteps.length - 1 && (
                  <div
                    className="flex shrink-0 items-center justify-center py-0.5 text-slate-300 lg:px-1 lg:py-0"
                    aria-hidden="true"
                  >
                    <span className="text-sm leading-none lg:hidden">↓</span>
                    <span className="hidden text-xs leading-none lg:inline">→</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
          {items.map((item, i) => {
            const Icon = cardIcons[i] ?? IconForm;
            const isTelegram = i === 3;
            return (
              <div
                key={item.title}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                    isTelegram
                      ? "border-blue-200 bg-blue-50 text-blue-600"
                      : "border-slate-200 bg-slate-50 text-navy-800/80"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-2 text-[12px] font-bold leading-snug text-navy-950 sm:text-[13px]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-600 sm:text-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
