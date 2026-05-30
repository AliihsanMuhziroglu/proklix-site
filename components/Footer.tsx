import Link from "next/link";
import { ProklixLogo } from "@/components/ProklixLogo";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { PHONE, TELEGRAM_URL } from "@/lib/constants";

type Props = {
  dict: Dictionary;
  locale?: Locale;
};

function FooterLink({ href, label }: { href: string; label: string }) {
  const isHash = href.startsWith("#");

  const className =
    "text-[13px] leading-snug text-slate-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";

  if (isHash) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function Footer({ dict, locale = "tr" }: Props) {
  const { footer } = dict;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="order-1 sm:col-span-2 lg:col-span-1">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-3 rounded-lg transition-opacity hover:opacity-90"
            >
              <ProklixLogo className="h-9 w-9 shrink-0" />
              <span className="text-lg font-bold leading-none tracking-tight text-white">Proklix</span>
            </Link>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-slate-400 sm:text-sm">
              {footer.tagline}
            </p>
            <p className="mt-3 text-xs text-slate-500">{footer.location}</p>
          </div>

          {/* Contact - early on mobile */}
          <div className="order-2 lg:order-4">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              {footer.contactTitle}
            </h3>
            <a
              href={`tel:${PHONE}`}
              className="mt-3 block text-sm font-semibold text-white transition hover:text-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              {footer.phone}
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 sm:w-auto"
            >
              {footer.telegramCta}
            </a>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">{footer.telegramHelper}</p>
          </div>

          {/* Platform */}
          <div className="order-3 lg:order-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              {footer.platformTitle}
            </h3>
            <ul className="mt-3 space-y-2.5">
              {footer.platformLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="order-4 lg:order-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              {footer.solutionsTitle}
            </h3>
            <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {footer.solutionsLinks.map((link) => (
                <li key={link.href + link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-slate-500 sm:mt-10 sm:flex-row sm:text-left">
          <p>{footer.copyright.replace("{year}", String(year))}</p>
          <p className="text-slate-500">{footer.bottomTagline}</p>
        </div>
      </div>
    </footer>
  );
}
