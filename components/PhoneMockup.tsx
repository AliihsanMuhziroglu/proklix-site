import type { Dictionary } from "@/dictionaries";
import { ProklixLogo } from "./ProklixLogo";

type Props = {
  dict: Dictionary;
  size?: "md" | "lg";
  className?: string;
};

const FRAME = {
  md: { width: 220, radius: 36, screenRadius: 24, padding: 10, minHeight: 400 },
  lg: { width: 272, radius: 40, screenRadius: 26, padding: 11, minHeight: 460 },
} as const;

const DOT_COLORS = {
  green: "#1D9E75",
  amber: "#BA7517",
} as const;

const PRIMARY_BTN = {
  green: "#1D9E75",
  amber: "#185FA5",
} as const;

const BOT_COLORS = {
  default: "#185FA5",
  success: "#1D9E75",
} as const;

function BotAvatar({ color }: { color?: string }) {
  return (
    <div
      className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-0.5"
      style={{ boxShadow: `0 0 0 1.5px ${color}` }}
    >
      <ProklixLogo variant="icon" className="h-full w-full object-contain" />
    </div>
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
      className="animate-slide-up flex items-start gap-2 rounded-xl border border-gray-100 bg-white p-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span
        className="mt-1 h-2 w-2 flex-shrink-0 rounded-full"
        style={{ background: DOT_COLORS[color] }}
      />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-medium leading-tight text-gray-800">{title}</p>
        <p className="mt-0.5 text-[8px] text-gray-400">{subtitle}</p>
        <div className="mt-1.5 flex gap-1">
          <button
            type="button"
            className="rounded px-2 py-0.5 text-[9px] font-medium text-white"
            style={{ background: PRIMARY_BTN[color] }}
          >
            {actionPrimary}
          </button>
          <button
            type="button"
            className="rounded bg-gray-100 px-2 py-0.5 text-[9px] text-gray-500"
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
      {isBot && <BotAvatar color={color} />}
      {isBot ? (
        <div className="max-w-[130px] rounded-xl rounded-tl-sm border border-gray-100 bg-white p-2">
          {label && (
            <p className="mb-0.5 text-[9px] font-medium" style={{ color }}>
              {label}
            </p>
          )}
          <p className="text-[10px] leading-snug text-gray-700">{text}</p>
          <p className="mt-1 text-right text-[8px] text-gray-400">{time}</p>
        </div>
      ) : (
        <div
          className="max-w-[130px] rounded-xl rounded-tr-sm p-2"
          style={{ background: "#e3f1fd", border: "0.5px solid #B5D4F4" }}
        >
          <p className="text-[10px] leading-snug text-gray-700">{text}</p>
          <p className="mt-1 text-right text-[8px] text-gray-400">{time}</p>
        </div>
      )}
    </div>
  );
}

export function PhoneMockup({ dict, size = "md", className = "" }: Props) {
  const m = dict.phoneMockup;
  const frame = FRAME[size];
  let animIndex = 0;
  const nextDelay = () => animIndex++ * 80;

  return (
    <div className={`flex-shrink-0 ${className}`} style={{ width: frame.width }}>
      <div
        style={{ background: "#2a2a2e", borderRadius: frame.radius, padding: frame.padding }}
      >
        <div
          className="mx-auto mb-2 h-[10px] rounded-b-lg"
          style={{ background: "#1a1a1c", width: frame.width * 0.25 }}
        />

        <div
          className="overflow-hidden"
          style={{
            background: "#ffffff",
            minHeight: frame.minHeight,
            borderRadius: frame.screenRadius,
          }}
        >
          <div
            className="flex items-center justify-between px-3 py-2"
            style={{ background: "#185FA5" }}
          >
            <div className="flex items-center gap-1.5">
              <div
                className="flex h-[22px] w-[22px] items-center justify-center overflow-hidden rounded-md bg-white p-0.5"
              >
                <ProklixLogo variant="icon" className="h-full w-full object-contain" />
              </div>
              <span className="text-xs font-medium text-white">Proklix</span>
            </div>
            <span className="text-[10px] text-white/60">{m.statusTime}</span>
          </div>

          <div className="space-y-2 p-3" style={{ background: "#f5f7fa" }}>
            <p className="animate-slide-up py-0.5 text-center text-[8px] text-gray-400">
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
              className="animate-slide-up pt-1 text-center text-[8px] text-gray-400"
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

        <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-gray-600" />
      </div>
    </div>
  );
}
