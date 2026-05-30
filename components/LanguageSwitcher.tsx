"use client";

import { useState } from "react";
import Link from "next/link";
import { locales, localeLabels, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-navy-900 transition hover:border-blue-500 hover:text-blue-600"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <GlobeIcon />
        <span className="hidden sm:inline">{localeLabels[locale]}</span>
        <span className="sm:hidden">{locale.toUpperCase()}</span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <ul
            role="listbox"
            className="absolute right-0 z-50 mt-2 min-w-[140px] overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
          >
            {locales.map((l) => (
              <li key={l} role="option" aria-selected={l === locale}>
                <Link
                  href={`/${l}`}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2.5 text-sm transition hover:bg-blue-50 ${
                    l === locale
                      ? "bg-blue-50 font-semibold text-blue-700"
                      : "text-navy-900"
                  }`}
                >
                  {localeLabels[l]}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3c2.2 2.4 3.4 5.5 3.4 9s-1.2 6.6-3.4 9c-2.2-2.4-3.4-5.5-3.4-9s1.2-6.6 3.4-9z" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
