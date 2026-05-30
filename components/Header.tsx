"use client";

import { useState } from "react";
import Link from "next/link";
import { ProklixLogo } from "@/components/ProklixLogo";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { PHONE, PHONE_DISPLAY, TELEGRAM_URL } from "@/lib/constants";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "./ui/Button";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

type NavItem = {
  href: string;
  label: string;
  isRoute?: boolean;
};

export function Header({ locale, dict }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav: NavItem[] = [
    { href: "#platform", label: dict.header.platform },
    { href: "#integrations", label: dict.header.integrations },
    { href: "#processes", label: dict.header.processes },
    { href: "#sectors", label: dict.header.forWhom },
    { href: "#pricing", label: dict.header.pricing },
    { href: "#faq", label: dict.header.faq },
    { href: `/${locale}/blog`, label: dict.header.blog, isRoute: true },
  ];

  const navLinkClass =
    "whitespace-nowrap text-[12px] font-medium text-slate-600 transition hover:text-brand-600 lg:text-[13px] xl:text-sm";

  const mobileLinkClass =
    "rounded-lg px-3 py-3 text-sm font-medium text-navy-900 transition hover:bg-brand-50 hover:text-brand-600";

  return (
    <header className="sticky top-0 z-50 w-full max-w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex w-full min-w-0 max-w-6xl items-center justify-between gap-2 px-4 py-2.5 sm:px-6 lg:gap-3 lg:px-8 lg:py-3">
        <Link
          href={`/${locale}`}
          className="group flex min-w-0 shrink items-center gap-2 rounded-xl py-1 transition-opacity hover:opacity-90 sm:gap-3"
        >
          <ProklixLogo className="h-9 w-9 shrink-0 drop-shadow-sm sm:h-10 sm:w-10" />
          <span className="truncate text-base font-bold leading-none tracking-tight text-navy-950 sm:text-[1.125rem]">
            Proklix
          </span>
        </Link>

        <nav className="hidden min-w-0 items-center gap-2 lg:flex lg:gap-2.5 xl:gap-3">
          {nav.map((item) =>
            item.isRoute ? (
              <Link key={item.href} href={item.href} className={navLinkClass}>
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} className={navLinkClass}>
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href={`tel:${PHONE}`}
            className="hidden text-sm font-semibold text-navy-900 transition hover:text-brand-600 lg:inline-flex"
          >
            {dict.header.phone}
          </a>
          <LanguageSwitcher locale={locale} />
          <Button
            variant="primary"
            size="sm"
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex"
          >
            {dict.header.cta}
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex rounded-lg border border-slate-200 p-2 text-navy-900 lg:hidden"
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
        <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  {item.label}
                </a>
              ),
            )}
            <a
              href={`tel:${PHONE}`}
              className="rounded-lg px-3 py-3 text-sm font-semibold text-brand-600"
            >
              {PHONE_DISPLAY}
            </a>
            <Button
              variant="primary"
              size="md"
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full min-w-0"
            >
              {dict.header.cta}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
