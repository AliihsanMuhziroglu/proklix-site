import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — CRM, workflow и Telegram-интеграции`,
    short_name: SITE_NAME,
    description:
      "Proklix строит CRM, системы заявок, согласований и Telegram-интеграции для компаний в Узбекистане.",
    start_url: "/ru",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a1f44",
    lang: "ru",
    icons: [
      {
        src: "/proklix-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/proklix-icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
