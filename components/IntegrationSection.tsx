import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
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
    return "border-white/25 bg-white/10 shadow-sm ring-1 ring-white/15";
  }
  if (index === TELEGRAM_STEP_INDEX) {
    return "border-blue-400/40 bg-blue-600/15 ring-1 ring-blue-500/30";
  }
  return "border-white/10 bg-white/[0.06]";
}

function stepTitleClass(index: number) {
  if (index === TELEGRAM_STEP_INDEX) return "text-blue-200";
  if (index === PROKLIX_STEP_INDEX) return "text-white";
  return "text-slate-100";
}

export function IntegrationSection({ dict }: Props) {
  const { integration } = dict;

  return (
    <section
      id="integrations"
      className="relative isolate overflow-hidden bg-navy-950 py-12 text-white sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
            {integration.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[760px] text-sm leading-relaxed text-slate-300 sm:mt-4 sm:text-base">
            {integration.subtitle}
          </p>
        </div>

        <div className="mt-8 sm:mt-10">
          <div className="flex flex-col lg:flex-row lg:items-stretch">
            {integration.flowSteps.map((step, i) => (
              <div key={step.title} className="contents">
                <div
                  className={`flex flex-col rounded-2xl border p-3.5 sm:p-4 lg:min-w-0 lg:flex-1 ${stepCardClass(i)}`}
                >
                  <h3 className={`text-[13px] font-semibold leading-snug sm:text-sm ${stepTitleClass(i)}`}>
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-slate-400 sm:text-[13px]">
                    {step.description}
                  </p>
                </div>
                {i < integration.flowSteps.length - 1 && (
                  <div
                    className="flex shrink-0 items-center justify-center py-1.5 text-slate-500 lg:px-1.5 lg:py-0"
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

        <p className="mx-auto mt-5 max-w-[760px] text-center text-[13px] leading-relaxed text-slate-400 sm:mt-6 sm:text-sm">
          {integration.flowHint}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {integration.items.map((item, i) => {
            const Icon = cardIcons[i] ?? IconApi;
            return (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-white/20 hover:bg-white/[0.09]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="mt-3 text-sm font-bold leading-snug text-white">{item.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400 sm:text-sm">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-300 sm:text-[11px]"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.07] p-4 shadow-sm sm:mt-10 sm:p-5 lg:p-6">
          <h3 className="text-sm font-bold text-white sm:text-base">{integration.example.title}</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-300 sm:text-sm">
            {integration.example.flow}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {integration.example.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-navy-950/40 px-2.5 py-1 text-[10px] font-medium text-slate-300 sm:text-[11px]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
