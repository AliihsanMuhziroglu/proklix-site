import type { Dictionary } from "@/dictionaries";
import { PHONE, TELEGRAM_URL } from "@/lib/constants";
import { Button } from "./ui/Button";

type Props = {
  dict: Dictionary;
};

export function MobileStickyCta({ dict }: Props) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-4px_24px_rgba(10,22,40,0.08)] backdrop-blur-md md:hidden dark:border-slate-800 dark:bg-slate-950/95"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-lg gap-3">
        <Button
          variant="primary"
          size="md"
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          {dict.mobileCta.telegram}
        </Button>
        <Button variant="ghost" size="md" href={`tel:${PHONE}`} className="flex-1">
          {dict.mobileCta.call}
        </Button>
      </div>
    </div>
  );
}
