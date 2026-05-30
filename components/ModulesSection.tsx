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

const categoryIcons = {
  build: IconBuild,
  daily: IconDaily,
  control: IconControl,
  integration: IconIntegration,
} as const;

export function ModulesSection({ dict }: Props) {
  const { modules } = dict;

  return (
    <section id="modules" className="overflow-hidden bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-navy-950 sm:text-2xl lg:text-3xl">
            {modules.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[640px] text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            {modules.subtitle}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
          {modules.categories.map((category) => {
            const CategoryIcon = categoryIcons[category.id as keyof typeof categoryIcons] ?? IconBuild;

            return (
              <div
                key={category.id}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-navy-800/80">
                    <CategoryIcon className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-950">{category.title}</h3>
                    <p className="text-[12px] leading-relaxed text-slate-500">{category.description}</p>
                  </div>
                </div>

                <ul className="mt-3 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item.title}
                      title={item.description}
                      className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 sm:text-xs"
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
