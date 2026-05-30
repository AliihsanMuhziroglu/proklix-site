import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { getSectorUrl } from "@/lib/sectors";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

const sectorIcons = ["📦", "🧹", "🏭", "🔧", "🏗️", "🚚", "🏢", "🏥", "🍽️", "⚙️"];

function SectorCard({
  item,
  icon,
  viewSector,
  locale,
}: {
  item: Dictionary["sectors"]["items"][number];
  icon: string;
  viewSector: string;
  locale: Locale;
}) {
  const content = (
    <>
      <span className="text-xl" aria-hidden="true">
        {icon}
      </span>
      <h3 className="mt-3 text-sm font-semibold leading-snug text-navy-950 sm:text-base">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
      {item.sectorSlug && (
        <span className="mt-3 inline-flex text-sm font-semibold text-blue-600 group-hover:underline">
          {viewSector} →
        </span>
      )}
    </>
  );

  const className =
    "group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md";

  if (item.sectorSlug) {
    return (
      <Link href={getSectorUrl(locale, item.sectorSlug)} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}

export function SectorsSection({ dict, locale }: Props) {
  return (
    <section id="sectors" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-xl font-bold tracking-tight text-navy-950 sm:text-3xl">
          {dict.sectors.title}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {dict.sectors.items.map((item, i) => (
            <SectorCard
              key={item.title}
              item={item}
              icon={sectorIcons[i] ?? "📋"}
              viewSector={dict.sectors.viewSector}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
