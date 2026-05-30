import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

type IconProps = { className?: string };

function IconBuild({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function IconDaily({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h4" />
    </svg>
  );
}

function IconControl({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function IconIntegration({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4H7a2 2 0 00-2 2v3m16 5v3a2 2 0 01-2 2h-4m-5-8l-2-2m0 0l-2 2m2-2v12" />
    </svg>
  );
}

function IconModule({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

const categoryIcons = {
  build: IconBuild,
  daily: IconDaily,
  control: IconControl,
  integration: IconIntegration,
} as const;

function isTelegramModule(title: string) {
  return title.toLowerCase().includes("telegram");
}

export function ModulesSection({ dict }: Props) {
  const { modules } = dict;

  return (
    <section id="modules" className="overflow-hidden bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-navy-950 sm:text-2xl lg:text-3xl">
            {modules.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[760px] text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            {modules.subtitle}
          </p>
          <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 shadow-sm sm:mt-5 sm:gap-x-2 sm:px-4 sm:py-2.5">
            {modules.flowSteps.map((step, i) => (
              <span key={step} className="inline-flex items-center gap-1.5 sm:gap-2">
                <span className="text-[10px] font-semibold text-navy-900 sm:text-xs">{step}</span>
                {i < modules.flowSteps.length - 1 && (
                  <span className="text-[10px] text-slate-300 sm:text-xs" aria-hidden="true">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
          {modules.categories.map((category) => {
            const CategoryIcon = categoryIcons[category.id as keyof typeof categoryIcons] ?? IconModule;
            const isIntegration = category.id === "integration";

            return (
              <div
                key={category.id}
                className={`rounded-2xl border bg-white p-4 shadow-sm sm:p-5 ${
                  isIntegration ? "border-slate-300" : "border-slate-200"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                      isIntegration
                        ? "border-slate-300 bg-slate-100 text-navy-800"
                        : "border-slate-200 bg-slate-50 text-navy-800/80"
                    }`}
                  >
                    <CategoryIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-950 sm:text-base">{category.title}</h3>
                    <p className="mt-0.5 text-[12px] leading-relaxed text-slate-500 sm:text-[13px]">
                      {category.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {category.items.map((item) => {
                    const isTelegram = isTelegramModule(item.title);
                    return (
                      <li
                        key={item.title}
                        className={`rounded-xl border p-3 ${
                          isTelegram
                            ? "border-blue-200 bg-blue-50/40"
                            : "border-slate-100 bg-slate-50/60"
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${
                              isTelegram
                                ? "bg-blue-100 text-blue-700"
                                : "bg-white text-slate-500 ring-1 ring-slate-200"
                            }`}
                          >
                            <IconModule className="h-3 w-3" />
                          </span>
                          <div className="min-w-0">
                            <h4
                              className={`text-[13px] font-semibold leading-snug sm:text-sm ${
                                isTelegram ? "text-blue-900" : "text-navy-950"
                              }`}
                            >
                              {item.title}
                            </h4>
                            <p className="mt-1 text-[12px] leading-relaxed text-slate-600 sm:text-[13px]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:mt-8 sm:p-5 lg:p-6">
          <h3 className="text-sm font-bold text-navy-950 sm:text-base">{modules.callout.title}</h3>
          <p className="mt-2 max-w-3xl text-[13px] leading-relaxed text-slate-600 sm:text-sm">
            {modules.callout.description}
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-navy-900 px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-navy-950 hover:text-white"
          >
            {modules.callout.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
