import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Proklix: CRM, workflow и Telegram-интеграции для бизнеса в Узбекистане",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Proklix строит CRM, системы заявок, согласований и Telegram-интеграции для компаний в Узбекистане. Запуск с MVP, а не с «большой платформы на год».",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  keywords: [
    "Proklix",
    "CRM Узбекистан",
    "workflow",
    "автоматизация бизнеса",
    "Telegram интеграция",
    "система заявок",
    "согласования",
    "B2B каталог",
    "CRM Tashkent",
  ],
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/proklix-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    site: "@proklix",
    creator: "@proklix",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1f44",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
