import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

const integrationIcons = ["🌐", "👥", "📦", "📊", "📋", "⚙️"];

export function IntegrationSection({ dict }: Props) {
  const { integration } = dict;

  return (
    <section id="integrations" className="bg-navy-950 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight sm:text-3xl">{integration.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            {integration.subtitle}
          </p>
        </div>

        {/* Flow diagram */}
        <div className="mt-10 overflow-x-auto pb-2">
          <div className="flex min-w-[640px] items-center justify-between gap-2 px-2 lg:min-w-0 lg:gap-3">
            {integration.flowLabels.map((label, i) => (
              <div key={label} className="flex flex-1 items-center gap-2 lg:gap-3">
                <div className="flex flex-1 flex-col items-center text-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold sm:h-12 sm:w-12 sm:text-sm ${
                      i === 1
                        ? "bg-blue-600 text-white"
                        : i === 2
                          ? "bg-blue-600/20 text-blue-300 ring-1 ring-blue-500/40"
                          : "bg-white/10 text-slate-200 ring-1 ring-white/10"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <p className="mt-2 max-w-[7rem] text-[10px] font-medium leading-tight text-slate-300 sm:max-w-none sm:text-xs">
                    {label}
                  </p>
                </div>
                {i < integration.flowLabels.length - 1 && (
                  <svg
                    className="h-4 w-4 shrink-0 text-slate-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Integration cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {integration.items.map((item, i) => (
            <div
              key={item.title}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <span className="text-xl" aria-hidden="true">
                {integrationIcons[i]}
              </span>
              <h3 className="mt-3 text-sm font-bold text-white sm:text-base">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
