"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { locales, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

const MENU_WIDTH = 96;

export function LanguageSwitcher({ locale }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updatePosition = () => {
    const button = buttonRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const left = Math.min(
      Math.max(8, rect.right - MENU_WIDTH),
      window.innerWidth - MENU_WIDTH - 8,
    );
    setMenuPos({ top: rect.bottom + 6, left });
  };

  useLayoutEffect(() => {
    if (!open) return;
    updatePosition();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (buttonRef.current?.contains(target) || menuRef.current?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("touchstart", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("touchstart", close);
    };
  }, [open]);

  const mobileMenu =
    open &&
    mounted &&
    createPortal(
      <div
        ref={menuRef}
        role="listbox"
        className="fixed z-[200] rounded-xl border border-slate-200 bg-white py-1 shadow-xl"
        style={{ top: menuPos.top, left: menuPos.left, width: MENU_WIDTH }}
      >
        {locales.map((l) => (
          <Link
            key={l}
            href={`/${l}`}
            onClick={() => setOpen(false)}
            className={`block px-3 py-2.5 text-xs font-semibold uppercase transition hover:bg-slate-50 ${
              l === locale ? "bg-brand-50 text-brand-700" : "text-slate-600"
            }`}
            aria-current={l === locale ? "page" : undefined}
          >
            {l}
          </Link>
        ))}
      </div>,
      document.body,
    );

  return (
    <>
      <div className="relative lg:hidden">
        <button
          ref={buttonRef}
          type="button"
          onClick={() => {
            setOpen((v) => !v);
          }}
          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold uppercase text-navy-950"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-label="Language"
        >
          {locale}
          <svg
            className={`h-3 w-3 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden
          >
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        {mobileMenu}
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
