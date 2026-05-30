import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <html lang={locale}>
      <body className="bg-white text-navy-950 antialiased">{children}</body>
    </html>
  );
}
