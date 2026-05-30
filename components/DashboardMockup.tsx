import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

const DEMO_VIDEO_URL = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL;

const metricColors = [
  "bg-blue-500",
  "bg-amber-500",
  "bg-indigo-500",
  "bg-emerald-500",
];

const tableStatusKeys = ["statusNew", "statusPending", "statusTelegram"] as const;

const statusStyles = {
  statusNew: "bg-blue-500/20 text-blue-300",
  statusPending: "bg-amber-500/20 text-amber-300",
  statusTelegram: "bg-indigo-500/20 text-indigo-300",
  statusSynced: "bg-cyan-500/20 text-cyan-300",
  statusSaved: "bg-emerald-500/20 text-emerald-300",
};

export function DashboardMockup({ dict }: Props) {
  const d = dict.dashboard;
  const metrics = [d.metricRequests, d.metricInProgress, d.metricPendingApproval, d.metricCompleted];

  const statusLabels = {
    statusNew: d.statusNew,
    statusPending: d.statusPending,
    statusTelegram: d.statusTelegram,
    statusSynced: d.statusSynced,
    statusSaved: d.statusSaved,
  };

  if (DEMO_VIDEO_URL) {
    const isYoutube = DEMO_VIDEO_URL.includes("youtube.com") || DEMO_VIDEO_URL.includes("youtu.be");
    const embedUrl = isYoutube
      ? DEMO_VIDEO_URL.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")
      : DEMO_VIDEO_URL;

    return (
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-navy-900/5">
        <div className="aspect-video">
          <iframe
            src={embedUrl}
            title={d.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-1 shadow-lg shadow-navy-900/5">
      <div className="overflow-hidden rounded-xl bg-navy-950">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 truncate text-xs font-medium text-slate-400">{d.title}</span>
        </div>

        <div className="flex">
          <aside className="hidden w-28 shrink-0 border-r border-white/10 p-3 sm:block">
            <nav className="space-y-1.5">
              {[d.sidebarRequests, d.sidebarTasks, d.sidebarIntegrations].map((label, i) => (
                <div
                  key={label}
                  className={`rounded-lg px-2 py-1.5 text-[10px] font-medium ${
                    i === 0 ? "bg-blue-600/30 text-blue-200" : "text-slate-500"
                  }`}
                >
                  {label}
                </div>
              ))}
            </nav>
          </aside>

          <div className="flex-1 p-3 sm:p-4">
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
              {metrics.map((label, i) => (
                <div key={label} className="rounded-xl bg-white/5 px-3 py-2.5">
                  <div className={`mb-2 h-1 w-7 rounded-full ${metricColors[i]}`} />
                  <div className="text-[10px] font-semibold leading-snug text-white sm:text-[11px]">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 overflow-hidden rounded-xl border border-white/10">
              <table className="w-full text-left text-[10px] sm:text-[11px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-slate-400">
                    <th className="px-3 py-2 font-medium">{d.tableHeaderProcess}</th>
                    <th className="px-3 py-2 font-medium">{d.tableHeaderStatus}</th>
                    <th className="hidden px-3 py-2 font-medium sm:table-cell">
                      {d.tableHeaderSource}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableStatusKeys.map((statusKey, i) => (
                    <tr key={statusKey} className="border-b border-white/5 last:border-0">
                      <td className="px-3 py-2 font-medium text-slate-200">
                        {d.feedItems[i] ?? `#${1042 + i}`}
                      </td>
                      <td className="px-3 py-2">
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 text-[9px] font-semibold ${statusStyles[statusKey]}`}
                        >
                          {statusLabels[statusKey]}
                        </span>
                      </td>
                      <td className="hidden px-3 py-2 text-slate-400 sm:table-cell">
                        {[d.sidebarRequests, d.sidebarIntegrations, d.sidebarTasks][i]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-3 space-y-2 rounded-xl border border-white/10 bg-white/5 p-2.5">
              {d.feedItems.map((item, i) => {
                const feedStatusKeys = [
                  "statusNew",
                  "statusPending",
                  "statusTelegram",
                  "statusSynced",
                  "statusSaved",
                ] as const;
                const key = feedStatusKeys[i];
                const dotColors = [
                  "bg-blue-400",
                  "bg-amber-400",
                  "bg-indigo-400",
                  "bg-cyan-400",
                  "bg-emerald-400",
                ];
                return (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotColors[i]}`} />
                    <span className="flex-1 truncate text-[10px] text-slate-300">{item}</span>
                    {key && (
                      <span
                        className={`hidden shrink-0 rounded px-1.5 py-0.5 text-[8px] font-medium sm:inline ${statusStyles[key]}`}
                      >
                        {statusLabels[key]}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
