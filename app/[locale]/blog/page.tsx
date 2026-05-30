import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { BlogListPage } from "@/components/BlogListPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  return buildMetadata(locale, dict.blog.meta, `/${locale}/blog`);
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return <BlogListPage locale={locale as Locale} dict={dict} />;
}
