type Props = {
  title: string;
  feedItems: string[];
};

const feedIcons = ["📥", "📅", "📄", "💳", "✈️"];

export function SectorDashboardMockup({ title, feedItems }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-1 shadow-2xl shadow-navy-900/10">
      <div className="overflow-hidden rounded-xl bg-navy-950">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 truncate text-xs font-medium text-slate-400">{title}</span>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {feedItems.slice(0, 3).map((item, i) => (
              <div key={item} className="rounded-xl bg-white/5 px-3 py-2.5">
                <div className="mb-1.5 text-[10px] text-slate-500">#{i + 1}</div>
                <div className="text-[10px] font-semibold leading-snug text-white sm:text-[11px]">
                  {item}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Activity
            </p>
            <div className="space-y-2.5">
              {feedItems.map((item, i) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-xs" aria-hidden="true">
                    {feedIcons[i % feedIcons.length]}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-medium text-slate-200">{item}</p>
                    <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-blue-500"
                        style={{ width: `${100 - i * 12}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-2">
            <span className="text-sm" aria-hidden="true">
              ✈️
            </span>
            <span className="text-[11px] font-medium text-emerald-300">
              {feedItems[feedItems.length - 1]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
