import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { isValidSectorSlug, sectorSlugs } from "@/lib/sectors";
import { SectorLandingPage } from "@/components/SectorLandingPage";

type Props = {
  params: Promise<{ locale: string; sector: string }>;
};

export async function generateStaticParams() {
  const locales = ["tr", "ru", "uz", "en"] as const;
  return locales.flatMap((locale) =>
    sectorSlugs.map((sector) => ({ locale, sector })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, sector } = await params;
  if (!isValidLocale(locale) || !isValidSectorSlug(sector)) return {};
  const dict = getDictionary(locale);
  const page = dict.sectorPages[sector];
  return buildMetadata(locale, page.meta, `/${locale}/${sector}`);
}

export default async function SectorPage({ params }: Props) {
  const { locale, sector } = await params;
  if (!isValidLocale(locale) || !isValidSectorSlug(sector)) notFound();

  const dict = getDictionary(locale);

  return <SectorLandingPage locale={locale as Locale} dict={dict} sector={sector} />;
}
