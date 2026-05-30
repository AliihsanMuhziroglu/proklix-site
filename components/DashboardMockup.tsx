import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

const DEMO_VIDEO_URL = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL;

const metricAccents = [
  "border-t-brand-400",
  "border-t-pending",
  "border-t-brand-600",
  "border-t-success",
];

const statusStyles = {
  new: "border-brand-200 bg-brand-50 text-brand-800",
  pending: "border-pending/30 bg-pending-50 text-pending-900",
  telegram: "border-brand-200 bg-brand-50 text-brand-800",
  completed: "border-success/30 bg-success-50 text-success-900",
} as const;

export function DashboardMockup({ dict }: Props) {
  const d = dict.dashboard;

  const metrics = [d.metricRequests, d.metricInProgress, d.metricPendingApproval, d.metricCompleted];

  const statusLabels = {
    new: d.statusNew,
    pending: d.statusPending,
    telegram: d.statusTelegram,
    completed: d.statusCompleted,
  };

  if (DEMO_VIDEO_URL) {
    const isYoutube = DEMO_VIDEO_URL.includes("youtube.com") || DEMO_VIDEO_URL.includes("youtu.be");
    const embedUrl = isYoutube
      ? DEMO_VIDEO_URL.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")
      : DEMO_VIDEO_URL;

    return (
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
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
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <h3 className="text-sm font-semibold text-navy-950 sm:text-base">{d.title}</h3>

      <div className="mt-3.5 flex flex-wrap items-center gap-1 sm:mt-4 sm:gap-1.5">
        {d.flowLabels.map((label, i) => (
          <span key={label} className="flex items-center gap-1 sm:gap-1.5">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-700 sm:px-2.5 sm:py-1 sm:text-[11px]">
              {label}
            </span>
            {i < d.flowLabels.length - 1 && (
              <span className="text-[10px] text-slate-300 sm:text-xs" aria-hidden="true">
                →
              </span>
            )}
          </span>
        ))}
      </div>

      <div className="mt-3.5 grid grid-cols-2 gap-2 sm:mt-4 lg:grid-cols-4">
        {metrics.map((label, i) => (
          <div
            key={label}
            className={`rounded-xl border border-slate-100 bg-white px-2.5 py-2 border-t-2 ${metricAccents[i]}`}
          >
            <div className="text-[11px] font-semibold leading-snug text-navy-950 sm:text-xs">{label}</div>
          </div>
        ))}
      </div>

      <div className="mt-3.5 grid gap-2 sm:mt-4 sm:grid-cols-2">
        {d.cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-slate-100 bg-slate-50/60 p-3"
          >
            <div className="text-[13px] font-semibold leading-snug text-navy-950 sm:text-sm">
              {card.title}
            </div>
            <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
              {d.sourceLabel}: {card.source}
            </p>
            <span
              className={`mt-2 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold sm:text-[11px] ${statusStyles[card.statusKey]}`}
            >
              {statusLabels[card.statusKey]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
