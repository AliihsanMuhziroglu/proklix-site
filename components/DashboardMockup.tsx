import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

const DEMO_VIDEO_URL = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL;

const metricColors = [
  "bg-blue-500",
  "bg-indigo-500",
  "bg-amber-500",
  "bg-emerald-500",
];

const tableRows = [
  { client: "Alpha Trade LLC", statusKey: "statusNew" as const, manager: "Aziza K." },
  { client: "AgroLine", statusKey: "statusInProgress" as const, manager: "Rustam T." },
  { client: "BuildPro", statusKey: "statusApproved" as const, manager: "Dilnoza M." },
];

export function DashboardMockup({ dict }: Props) {
  const metrics = [
    dict.dashboard.metricRequests,
    dict.dashboard.metricInProgress,
    dict.dashboard.metricPendingApproval,
    dict.dashboard.metricCompleted,
  ];

  const statusLabels = {
    statusNew: dict.dashboard.statusNew,
    statusInProgress: dict.dashboard.statusInProgress,
    statusApproved: dict.dashboard.statusApproved,
  };

  if (DEMO_VIDEO_URL) {
    const isYoutube = DEMO_VIDEO_URL.includes("youtube.com") || DEMO_VIDEO_URL.includes("youtu.be");
    const embedUrl = isYoutube
      ? DEMO_VIDEO_URL.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")
      : DEMO_VIDEO_URL;

    return (
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-navy-900/10">
        <div className="aspect-video">
          <iframe
            src={embedUrl}
            title={dict.dashboard.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-1 shadow-2xl shadow-navy-900/10">
      <div className="overflow-hidden rounded-xl bg-navy-950">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 truncate text-xs font-medium text-slate-400">{dict.dashboard.title}</span>
        </div>

        <div className="flex">
          <aside className="hidden w-28 shrink-0 border-r border-white/10 p-3 sm:block">
            <nav className="space-y-1.5">
              {[dict.dashboard.sidebarRequests, dict.dashboard.sidebarClients, dict.dashboard.sidebarReports].map(
                (label, i) => (
                  <div
                    key={label}
                    className={`rounded-lg px-2 py-1.5 text-[10px] font-medium ${
                      i === 0 ? "bg-blue-600/30 text-blue-200" : "text-slate-500"
                    }`}
                  >
                    {label}
                  </div>
                ),
              )}
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
                    <th className="px-3 py-2 font-medium">{dict.dashboard.tableHeaderClient}</th>
                    <th className="px-3 py-2 font-medium">{dict.dashboard.tableHeaderStatus}</th>
                    <th className="hidden px-3 py-2 font-medium sm:table-cell">
                      {dict.dashboard.tableHeaderManager}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row) => (
                    <tr key={row.client} className="border-b border-white/5 last:border-0">
                      <td className="px-3 py-2 font-medium text-slate-200">{row.client}</td>
                      <td className="px-3 py-2">
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                            row.statusKey === "statusNew"
                              ? "bg-blue-500/20 text-blue-300"
                              : row.statusKey === "statusInProgress"
                                ? "bg-amber-500/20 text-amber-300"
                                : "bg-emerald-500/20 text-emerald-300"
                          }`}
                        >
                          {statusLabels[row.statusKey]}
                        </span>
                      </td>
                      <td className="hidden px-3 py-2 text-slate-400 sm:table-cell">{row.manager}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-2.5">
              <div className="space-y-2">
                {dict.dashboard.feedItems.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    <span className="truncate text-[10px] text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
