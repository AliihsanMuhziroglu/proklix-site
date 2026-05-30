import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { buildSectorMetadata } from "@/lib/metadata";
import { isValidLocale, type Locale } from "@/lib/i18n";
import {
  getAllSectorUrlParams,
  getSectorUrl,
  resolveSectorFromUrlSlug,
} from "@/lib/sectors";
import { SectorLandingPage } from "@/components/SectorLandingPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/constants";

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
  const page = dict.sectorPages[sectorKey];
  const sectorUrl = `${SITE_URL}${getSectorUrl(locale, sectorKey)}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Proklix", url: `${SITE_URL}/${locale}` },
            { name: page.breadcrumb.sectorName, url: sectorUrl },
          ]),
          serviceSchema({
            name: page.meta.title,
            description: page.meta.description,
            url: sectorUrl,
            locale,
          }),
        ]}
      />
      <SectorLandingPage
        locale={locale as Locale}
        dict={dict}
        sector={sectorKey}
      />
    </>
  );
}
