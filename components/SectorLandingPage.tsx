import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import type { SectorSlug } from "@/lib/sectors";
import { getSectorUrl, sectorIcons } from "@/lib/sectors";
import { TELEGRAM_URL, PHONE } from "@/lib/constants";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileStickyCta } from "./MobileStickyCta";
import { ContactForm } from "./ContactForm";
import { SectorDashboardMockup } from "./sector/SectorDashboardMockup";
import { SectorWorkflowSection } from "./sector/SectorWorkflowSection";

type Props = {
  locale: Locale;
  dict: Dictionary;
  sector: SectorSlug;
};

export function SectorLandingPage({ locale, dict, sector }: Props) {
  const page = dict.sectorPages[sector];
  const labels = dict.sectorPageLabels;

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="border-b border-slate-100 bg-white py-3"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
              <li>
                <Link href={`/${locale}`} className="font-medium text-blue-600 hover:underline">
                  {labels.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-300">
                /
              </li>
              <li>
                <Link
                  href={`/${locale}#sectors`}
                  className="font-medium text-blue-600 hover:underline"
                >
                  {labels.breadcrumbSectors}
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-300">
                /
              </li>
              <li className="font-medium text-navy-950">{page.breadcrumb.sectorName}</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.07),_transparent_55%)]" />
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-20">
            <div>
              <h1 className="text-[1.65rem] font-bold leading-tight tracking-tight text-navy-950 sm:text-4xl lg:text-[2.4rem] lg:leading-[1.12]">
                {page.hero.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
                {page.hero.subtitle}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  {dict.hero.ctaTelegram}
                </a>
                <a
                  href="#mini-offer"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border-2 border-navy-900 px-6 py-4 text-base font-semibold text-navy-900 transition hover:bg-navy-950 hover:text-white"
                >
                  {dict.hero.ctaAnalysis}
                </a>
              </div>
            </div>
            <div className="lg:pl-2">
              <SectorDashboardMockup
                title={page.breadcrumb.sectorName}
                feedItems={page.hero.mockupFeed}
              />
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mx-auto max-w-3xl text-center text-xl font-bold tracking-tight text-navy-950 sm:text-3xl">
              {page.problem.title}
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.problem.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-sm">
                    ⚠️
                  </div>
                  <h3 className="text-sm font-semibold text-navy-950 sm:text-base">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="bg-slate-50 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mx-auto max-w-3xl text-center text-xl font-bold tracking-tight text-navy-950 sm:text-3xl">
              {page.solution.title}
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {page.solution.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-sm">
                    ✓
                  </div>
                  <h3 className="text-sm font-semibold text-navy-950 sm:text-base">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <SectorWorkflowSection
          title={page.workflow.title}
          steps={page.workflow.steps}
          stepLabel={labels.step}
        />

        {/* Use Cases */}
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mx-auto max-w-3xl text-center text-xl font-bold tracking-tight text-navy-950 sm:text-3xl">
              {page.useCases.title}
            </h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {page.useCases.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/30"
                >
                  <h3 className="text-sm font-semibold text-navy-950">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className="bg-slate-50 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mx-auto max-w-3xl text-center text-xl font-bold tracking-tight text-navy-950 sm:text-3xl">
              {page.beforeAfter.title}
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-red-100 bg-white p-6 sm:p-8">
                <h3 className="text-lg font-bold text-red-700">{page.beforeAfter.before.title}</h3>
                <ul className="mt-5 space-y-3">
                  {page.beforeAfter.before.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-0.5 text-red-400" aria-hidden="true">
                        ✕
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-8">
                <h3 className="text-lg font-bold text-emerald-700">
                  {page.beforeAfter.after.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {page.beforeAfter.after.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-0.5 text-emerald-500" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mini Offer */}
        <section id="mini-offer" className="py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 sm:p-10">
              <h2 className="text-xl font-bold text-navy-950 sm:text-2xl">{page.miniOffer.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {page.miniOffer.description}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white"
                >
                  {dict.hero.ctaTelegram}
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-2xl border-2 border-navy-900 px-6 py-4 text-base font-semibold text-navy-900"
                >
                  {dict.cta.ctaCall}: {dict.cta.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Sectors */}
        <section className="bg-slate-50 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mx-auto max-w-3xl text-center text-xl font-bold tracking-tight text-navy-950 sm:text-3xl">
              {page.relatedSectors.title}
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.relatedSectors.items.map((item) => (
                <Link
                  key={`${item.sector}-${item.title}`}
                  href={getSectorUrl(locale, item.sector)}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {sectorIcons[item.sector]}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-navy-950 group-hover:text-blue-600 sm:text-base">
                    {item.title}
                  </h3>
                  <span className="mt-2 inline-flex text-sm font-semibold text-blue-600 group-hover:underline">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-7 shadow-xl sm:p-12">
              <h2 className="text-xl font-bold text-white sm:text-2xl">{page.finalCta.title}</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
                {page.finalCta.description}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-blue-700"
                >
                  {dict.cta.ctaTelegram}
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border-2 border-white/30 px-6 py-4 text-base font-semibold text-white"
                >
                  {dict.cta.ctaCall}
                </a>
              </div>
              <ContactForm dict={dict} />
            </div>
          </div>
        </section>
      </main>
      <Footer dict={dict} locale={locale} />
      <MobileStickyCta dict={dict} />
    </>
  );
}
