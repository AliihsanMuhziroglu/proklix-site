import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { buildSectorMetadata } from "@/lib/metadata";
import { isValidLocale, type Locale } from "@/lib/i18n";
import {
  getAllSectorUrlParams,
  resolveSectorFromUrlSlug,
} from "@/lib/sectors";
import { SectorLandingPage } from "@/components/SectorLandingPage";

type Props = {
  params: Promise<{ locale: string; sector: string }>;
};

export async function generateStaticParams() {
  return getAllSectorUrlParams();
}

export async function generateMetadata({ params }: Props) {
  const { locale, sector: urlSlug } = await params;
  if (!isValidLocale(locale)) return {};
  const sectorKey = resolveSectorFromUrlSlug(locale, urlSlug);
  if (!sectorKey) return {};
  const dict = getDictionary(locale);
  const page = dict.sectorPages[sectorKey];
  return buildSectorMetadata(locale, sectorKey, page.meta);
}

export default async function SectorPage({ params }: Props) {
  const { locale, sector: urlSlug } = await params;
  if (!isValidLocale(locale)) notFound();

  const sectorKey = resolveSectorFromUrlSlug(locale, urlSlug);
  if (!sectorKey) notFound();

  const dict = getDictionary(locale);

  return (
    <SectorLandingPage
      locale={locale as Locale}
      dict={dict}
      sector={sectorKey}
    />
  );
}
