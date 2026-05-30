import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      {
        source: "/uz/nedvizhimost",
        destination: "/uz/kochmas-mulk",
        permanent: true,
      },
      {
        source: "/tr/nedvizhimost",
        destination: "/tr/emlak",
        permanent: true,
      },
      {
        source: "/en/nedvizhimost",
        destination: "/en/real-estate",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
