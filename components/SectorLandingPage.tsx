import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import type { SectorSlug } from "@/lib/sectors";
import { TELEGRAM_URL, PHONE } from "@/lib/constants";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileStickyCta } from "./MobileStickyCta";
import { ContactForm } from "./ContactForm";

type Props = {
  locale: Locale;
  dict: Dictionary;
  sector: SectorSlug;
};

export function SectorLandingPage({ locale, dict, sector }: Props) {
  const page = dict.sectorPages[sector];

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold tracking-tight text-navy-950 sm:text-4xl">
              {page.hero.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {page.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white"
              >
                {dict.hero.ctaTelegram}
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border-2 border-navy-900 px-6 py-4 text-base font-semibold text-navy-900"
              >
                {dict.hero.ctaAnalysis}
              </a>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-navy-950 sm:text-2xl">{page.problem.title}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {page.problem.items.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 p-5">
                  <h3 className="text-sm font-semibold text-navy-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-navy-950 sm:text-2xl">{page.solution.title}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {page.solution.items.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-semibold text-navy-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-blue-200 bg-blue-50 p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                {page.caseStudy.title}
              </p>
              <p className="mt-2 text-sm font-semibold text-navy-950">{page.caseStudy.company}</p>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
                <div>
                  <p className="font-semibold text-navy-950">{dict.sectorPageLabels.challenge}</p>
                  <p className="mt-1">{page.caseStudy.challenge}</p>
                </div>
                <div>
                  <p className="font-semibold text-navy-950">{dict.sectorPageLabels.solution}</p>
                  <p className="mt-1">{page.caseStudy.solution}</p>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-4">
                  <p className="font-semibold text-emerald-800">{dict.sectorPageLabels.result}</p>
                  <p className="mt-1 text-emerald-700">{page.caseStudy.result}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-7 shadow-xl sm:p-12">
              <h2 className="text-xl font-bold text-white sm:text-2xl">{page.cta.title}</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
                {page.cta.description}
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

        <div className="pb-8 text-center">
          <Link href={`/${locale}`} className="text-sm font-medium text-blue-600 hover:underline">
            ← Proklix
          </Link>
        </div>
      </main>
      <Footer dict={dict} locale={locale} />
      <MobileStickyCta dict={dict} />
    </>
  );
}
