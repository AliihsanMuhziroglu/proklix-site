"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { locales, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <>
      <div ref={rootRef} className="relative lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold uppercase text-navy-950"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-label="Language"
        >
          {locale}
          <svg className="h-3 w-3 text-slate-400" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        {open && (
          <div
            role="listbox"
            className="absolute right-0 top-[calc(100%+4px)] z-[60] min-w-[88px] rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
          >
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 text-xs font-semibold uppercase transition hover:bg-slate-50 ${
                  l === locale ? "text-brand-600" : "text-slate-600"
                }`}
                aria-current={l === locale ? "page" : undefined}
              >
                {l}
              </Link>
            ))}
          </div>
        )}
      </div>

      <nav
        aria-label="Language"
        className="hidden shrink-0 rounded-lg border border-slate-200 bg-slate-50 p-0.5 lg:flex"
      >
        {locales.map((l) => (
          <Link
            key={l}
            href={`/${l}`}
            className={`rounded-md px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
              l === locale
                ? "bg-brand-50 text-brand-800 shadow-sm"
                : "text-slate-500 hover:text-brand-600"
            }`}
            aria-current={l === locale ? "page" : undefined}
          >
            {l}
          </Link>
        ))}
      </nav>
    </>
  );
}
