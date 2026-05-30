import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

const metricColors = [
  "bg-blue-500",
  "bg-indigo-500",
  "bg-amber-500",
  "bg-emerald-500",
];

const feedDotColors = [
  "bg-blue-400",
  "bg-amber-400",
  "bg-sky-400",
  "bg-indigo-400",
  "bg-emerald-400",
];

export function DashboardMockup({ dict }: Props) {
  const metrics = [
    dict.dashboard.metricRequests,
    dict.dashboard.metricInProgress,
    dict.dashboard.metricPendingApproval,
    dict.dashboard.metricCompleted,
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-1 shadow-2xl shadow-navy-900/10">
      <div className="rounded-xl bg-navy-950 p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="truncate text-xs font-medium text-slate-400">{dict.dashboard.title}</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {metrics.map((label, i) => (
            <div key={label} className="rounded-xl bg-white/5 px-3 py-2.5">
              <div className={`mb-2 h-1 w-7 rounded-full ${metricColors[i]}`} />
              <div className="text-[11px] font-semibold leading-snug text-white sm:text-xs">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="space-y-2.5">
            {dict.dashboard.feedItems.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div
                  className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${feedDotColors[i]}`}
                />
                <span className="text-[11px] leading-snug text-slate-300 sm:text-xs">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
