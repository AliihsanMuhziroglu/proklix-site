import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { getSectorUrl, sectorSlugs } from "@/lib/sectors";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

const icons = ["🏢", "📦", "🌾", "🔧", "🚚", "🏗️"];

export function SectorsSection({ dict, locale }: Props) {
  return (
    <section id="sectors" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-xl font-bold tracking-tight text-navy-950 sm:text-3xl">
          {dict.sectors.title}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {dict.sectors.items.map((item, i) => (
            <Link
              key={item.title}
              href={getSectorUrl(locale, sectorSlugs[i])}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <span className="text-2xl" aria-hidden="true">
                {icons[i]}
              </span>
              <h3 className="mt-3 text-sm font-semibold leading-snug text-navy-950 sm:text-base">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              <span className="mt-3 inline-flex text-sm font-semibold text-blue-600 group-hover:underline">
                {dict.sectors.viewSector} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
