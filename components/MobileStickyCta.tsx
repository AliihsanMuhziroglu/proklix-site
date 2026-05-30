import type { Dictionary } from "@/dictionaries";
import { PHONE, TELEGRAM_URL } from "@/lib/constants";

type Props = {
  dict: Dictionary;
};

export function MobileStickyCta({ dict }: Props) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-4px_24px_rgba(10,22,40,0.08)] backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[48px] flex-1 items-center justify-center rounded-2xl bg-blue-600 text-sm font-semibold text-white"
        >
          {dict.mobileCta.telegram}
        </a>
        <a
          href={`tel:${PHONE}`}
          className="flex min-h-[48px] flex-1 items-center justify-center rounded-2xl border-2 border-navy-900 text-sm font-semibold text-navy-900"
        >
          {dict.mobileCta.call}
        </a>
      </div>
    </div>
  );
}
