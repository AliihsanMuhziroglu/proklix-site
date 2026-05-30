import type { Dictionary } from "@/dictionaries";
import { PHONE, TELEGRAM_URL } from "@/lib/constants";
import { Button } from "./ui/Button";

type Props = {
  dict: Dictionary;
};

export function MobileStickyCta({ dict }: Props) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 box-border w-full max-w-[100vw] border-t border-slate-200 bg-white/95 px-3 py-3 shadow-[0_-4px_24px_rgba(10,22,40,0.08)] backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex w-full min-w-0 max-w-lg gap-2">
        <Button
          variant="primary"
          size="md"
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-0 flex-1 basis-0 px-3"
        >
          <span className="truncate">{dict.mobileCta.telegram}</span>
        </Button>
        <Button variant="ghost" size="md" href={`tel:${PHONE}`} className="min-w-0 flex-1 basis-0 px-3">
          <span className="truncate">{dict.mobileCta.call}</span>
        </Button>
      </div>
    </div>
  );
}
