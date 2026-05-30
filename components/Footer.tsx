import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { PHONE, PHONE_DISPLAY, TELEGRAM_URL } from "@/lib/constants";

type Props = {
  dict: Dictionary;
};

export function Footer({ dict }: Props) {
  return (
    <footer className="border-t border-slate-200 bg-navy-950 py-10 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <div className="flex items-center justify-center gap-2.5 sm:justify-start">
              <Image
                src="/proklix-logo.png"
                alt="Proklix"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-lg font-bold text-white">Proklix</span>
            </div>
            <p className="mt-2 max-w-sm text-sm leading-relaxed">{dict.footer.tagline}</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-sm sm:items-end">
            <a href={`tel:${PHONE}`} className="transition hover:text-white">
              {dict.footer.phone}
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              {dict.footer.telegram}
            </a>
            <span>{dict.footer.location}</span>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Proklix · {PHONE_DISPLAY}
        </div>
      </div>
    </footer>
  );
}
