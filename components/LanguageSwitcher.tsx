"use client";

import Link from "next/link";
import { locales, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: Props) {
  return (
    <nav
      aria-label="Language"
      className="flex shrink-0 rounded-lg border border-slate-200 bg-slate-50 p-0.5"
    >
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          className={`rounded-md px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition sm:px-2.5 sm:text-xs ${
            l === locale
              ? "bg-white text-blue-700 shadow-sm"
              : "text-slate-500 hover:text-navy-900"
          }`}
          aria-current={l === locale ? "page" : undefined}
        >
          {l}
        </Link>
      ))}
    </nav>
  );
}
