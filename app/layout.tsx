import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://proklix.uz"),
  icons: {
    icon: [{ url: "/proklix-icon-512.png", type: "image/png" }],
    apple: [{ url: "/proklix-avatar.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
