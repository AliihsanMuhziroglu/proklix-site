"use client";

import { useState } from "react";
import Link from "next/link";
import { ProklixLogo } from "@/components/ProklixLogo";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { TELEGRAM_URL } from "@/lib/constants";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function Header({ locale, dict }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { href: "#solutions", label: dict.header.solutions },
    { href: "#processes", label: dict.header.processes },
    { href: "#sectors", label: dict.header.forWhom },
    { href: "#contact", label: dict.header.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex shrink-0 items-center gap-2.5">
          <ProklixLogo size={36} className="h-9 w-9 shrink-0" />
          <span className="text-lg font-bold tracking-tight text-navy-950">Proklix</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitcher locale={locale} />
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:inline-flex"
          >
            {dict.header.cta}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex rounded-lg border border-slate-200 p-2 text-navy-900 md:hidden"
            aria-expanded={menuOpen}
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-navy-900 transition hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white"
            >
              {dict.header.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
