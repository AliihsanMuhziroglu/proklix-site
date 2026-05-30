import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
  className?: string;
};

type IconProps = { className?: string };

function IconWeb({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
    </svg>
  );
}

function IconCrm({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconWarehouse({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

function IconErp({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

function IconSheet({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M10 3v18M3 6a3 3 0 013-3h8l4 4v13a3 3 0 01-3 3H6a3 3 0 01-3-3V6z" />
    </svg>
  );
}

function IconApi({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

const cardIcons = [IconWeb, IconCrm, IconWarehouse, IconErp, IconSheet, IconApi];

const PROKLIX_STEP_INDEX = 1;
const TELEGRAM_STEP_INDEX = 2;

function stepCardClass(index: number) {
  if (index === PROKLIX_STEP_INDEX) {
    return "border-brand-200 bg-brand-50 ring-1 ring-brand-100";
  }
  if (index === TELEGRAM_STEP_INDEX) {
    return "border-brand-400/40 bg-brand-50 ring-1 ring-brand-500/20";
  }
  return "border-slate-200 bg-white";
}

function stepTitleClass(index: number) {
  if (index === TELEGRAM_STEP_INDEX) return "text-brand-800";
  if (index === PROKLIX_STEP_INDEX) return "text-brand-900";
  return "text-navy-950";
}

export function IntegrationSection({ dict, className = "bg-white" }: Props) {
  const { integration } = dict;

  return (
    <section id="integrations" className={`relative isolate overflow-hidden py-10 sm:py-14 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-navy-950 sm:text-2xl lg:text-3xl">
            {integration.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[760px] text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            {integration.subtitle}
          </p>
        </div>

        <div className="mt-8 sm:mt-10">
          <div className="flex flex-col lg:flex-row lg:items-stretch">
            {integration.flowSteps.map((step, i) => (
              <div key={step.title} className="contents">
                <div
                  className={`flex flex-col rounded-2xl border p-3.5 shadow-sm sm:p-4 lg:min-w-0 lg:flex-1 ${stepCardClass(i)}`}
                >
                  <h3 className={`text-[13px] font-semibold leading-snug sm:text-sm ${stepTitleClass(i)}`}>
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-slate-600 sm:text-[13px]">
                    {step.description}
                  </p>
                </div>
                {i < integration.flowSteps.length - 1 && (
                  <div
                    className="flex shrink-0 items-center justify-center py-1.5 text-slate-300 lg:px-1.5 lg:py-0"
                    aria-hidden="true"
                  >
                    <span className="text-base leading-none lg:hidden">↓</span>
                    <span className="hidden text-sm leading-none lg:inline">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-[760px] text-center text-[13px] leading-relaxed text-slate-500 sm:mt-6 sm:text-sm">
          {integration.flowHint}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {integration.items.map((item, i) => {
            const Icon = cardIcons[i] ?? IconApi;
            return (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-brand-200 hover:shadow-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-100 bg-brand-50 text-brand-600">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="mt-3 text-sm font-bold leading-snug text-navy-950">{item.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-medium text-brand-800 sm:text-[11px]"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
