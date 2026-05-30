import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

export function DashboardMockup({ dict }: Props) {
  const stats = [
    { label: dict.dashboard.requests, value: "24", color: "bg-blue-500" },
    { label: dict.dashboard.offers, value: "12", color: "bg-indigo-500" },
    { label: dict.dashboard.approvals, value: "5", color: "bg-amber-500" },
    { label: dict.dashboard.tasks, value: "18", color: "bg-emerald-500" },
  ];

  const rows = [
    { name: "REQ-1042", status: dict.dashboard.statusNew, color: "bg-blue-100 text-blue-700" },
    { name: "OFF-883", status: dict.dashboard.statusPending, color: "bg-amber-100 text-amber-700" },
    { name: "APR-221", status: dict.dashboard.statusApproved, color: "bg-emerald-100 text-emerald-700" },
    { name: "TSK-556", status: dict.dashboard.statusDone, color: "bg-slate-100 text-slate-600" },
  ];

  const activities = [dict.dashboard.activity1, dict.dashboard.activity2, dict.dashboard.activity3];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-1 shadow-2xl shadow-navy-900/10">
      <div className="rounded-xl bg-navy-950 p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-medium text-slate-400">{dict.dashboard.title}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-white/5 p-3">
              <div className={`mb-2 h-1 w-8 rounded-full ${stat.color}`} />
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="mt-0.5 text-[10px] leading-tight text-slate-400 sm:text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          {rows.map((row) => (
            <div
              key={row.name}
              className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"
            >
              <span className="text-xs font-mono text-slate-300">{row.name}</span>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold sm:text-xs ${row.color}`}>
                {row.status}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="mb-2 text-xs font-semibold text-slate-300">{dict.dashboard.recentActivity}</div>
          <div className="space-y-2">
            {activities.map((activity, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                <span className="text-[11px] leading-snug text-slate-400 sm:text-xs">{activity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
