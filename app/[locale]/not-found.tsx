import type { Metadata } from "next";
import Link from "next/link";
import { defaultLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "404",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <html lang={defaultLocale}>
      <body className="flex min-h-screen items-center justify-center bg-white text-navy-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="mt-2 text-slate-600">Page not found</p>
          <Link
            href={`/${defaultLocale}`}
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            Proklix
          </Link>
        </div>
      </body>
    </html>
  );
}
