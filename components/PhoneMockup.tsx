import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

const DOT_COLORS = {
  green: "bg-success",
  amber: "bg-pending",
} as const;

const BOT_COLORS = {
  default: "#185FA5",
  success: "#1D9E75",
} as const;

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
    </svg>
  );
}

function NotifCard({
  color,
  title,
  subtitle,
  actionPrimary,
  actionSecondary,
  delay,
}: {
  color: "amber" | "green";
  title: string;
  subtitle: string;
  actionPrimary: string;
  actionSecondary: string;
  delay: number;
}) {
  return (
    <div
      className="animate-slide-up flex items-start gap-2 rounded-xl border border-black/5 bg-white p-2 dark:border-white/10 dark:bg-slate-800"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className={`mt-1 h-2 w-2 flex-shrink-0 animate-pulse rounded-full ${DOT_COLORS[color]}`} />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-medium leading-tight text-gray-800 dark:text-slate-100">{title}</p>
        <p className="mt-0.5 text-[8px] text-gray-400 dark:text-slate-400">{subtitle}</p>
        <div className="mt-1.5 flex gap-1">
          <button
            type="button"
            className="rounded bg-brand-600 px-2 py-0.5 text-[9px] font-medium text-white"
          >
            {actionPrimary}
          </button>
          <button
            type="button"
            className="rounded bg-gray-100 px-2 py-0.5 text-[9px] text-gray-500 dark:bg-slate-700 dark:text-slate-300"
          >
            {actionSecondary}
          </button>
        </div>
      </div>
    </div>
  );
}

function TgBubble({
  from,
  color,
  label,
  text,
  time,
  delay,
}: {
  from: "bot" | "user";
  color?: string;
  label?: string;
  text: string;
  time: string;
  delay: number;
}) {
  const isBot = from === "bot";

  return (
    <div
      className={`animate-slide-up flex gap-1.5 ${isBot ? "" : "flex-row-reverse"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {isBot && (
        <div
          className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-medium text-white"
          style={{ background: color }}
        >
          PX
        </div>
      )}
      <div
        className={`max-w-[130px] rounded-xl border border-black/5 p-2 dark:border-white/10 ${
          isBot
            ? "rounded-tl-sm bg-white dark:bg-slate-800"
            : "rounded-tr-sm bg-[#e3f1fd] dark:bg-slate-700"
        }`}
      >
        {isBot && label && (
          <p className="mb-0.5 text-[9px] font-medium" style={{ color }}>
            {label}
          </p>
        )}
        <p className="text-[10px] leading-snug text-gray-700 dark:text-slate-200">{text}</p>
        <p className="mt-1 text-right text-[8px] text-gray-400 dark:text-slate-400">{time}</p>
      </div>
    </div>
  );
}

export function PhoneMockup({ dict }: Props) {
  const m = dict.phoneMockup;
  let animIndex = 0;
  const nextDelay = () => animIndex++ * 80;

  return (
    <div className="mx-auto w-[200px] flex-shrink-0 md:mx-0">
      <div className="relative rounded-[32px] bg-[#1a1a1e] p-[10px] dark:bg-[#0e0e10]">
        <div className="mx-auto mb-2 h-[10px] w-[60px] rounded-b-lg bg-[#0e0e10]" />

        <div className="min-h-[380px] overflow-hidden rounded-[22px] bg-[#f0f4f8] dark:bg-slate-900">
          <div className="flex items-center justify-between bg-brand-600 px-3 py-2">
            <div className="flex items-center gap-1.5">
              <div className="flex h-[22px] w-[22px] items-center justify-center rounded-md bg-white/20">
                <BoltIcon className="h-3 w-3 text-white" />
              </div>
              <span className="text-xs font-medium text-white">Proklix</span>
            </div>
            <span className="text-[10px] text-white/60">{m.statusTime}</span>
          </div>

          <div className="space-y-2 p-2.5">
            <p className="animate-slide-up text-center text-[8px] text-gray-400 dark:text-slate-500">
              {m.notifHeader}
            </p>

            {m.notifications.map((notif) => {
              const delay = nextDelay();
              return (
                <NotifCard
                  key={notif.title}
                  color={notif.color}
                  title={notif.title}
                  subtitle={notif.subtitle}
                  actionPrimary={notif.actionPrimary}
                  actionSecondary={notif.actionSecondary}
                  delay={delay}
                />
              );
            })}

            <p
              className="animate-slide-up pt-1 text-center text-[8px] text-gray-400 dark:text-slate-500"
              style={{ animationDelay: `${nextDelay()}ms` }}
            >
              {m.chatHeader}
            </p>

            {m.messages.map((msg) => {
              const delay = nextDelay();
              const botColor =
                msg.from === "bot"
                  ? BOT_COLORS[msg.variant === "success" ? "success" : "default"]
                  : undefined;

              return (
                <TgBubble
                  key={`${msg.text}-${msg.time}`}
                  from={msg.from}
                  color={botColor}
                  label={msg.from === "bot" ? m.botLabel : undefined}
                  text={msg.text}
                  time={msg.time}
                  delay={delay}
                />
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-2 h-1 w-[50px] rounded-full bg-gray-600" />
      </div>
    </div>
  );
}
