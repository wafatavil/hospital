import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves this project from /hospital. Set NEXT_BASE_PATH to an
  // empty string when publishing at a custom domain's root.
  output: "export",
  ...(process.env.NEXT_BASE_PATH
    ? { basePath: process.env.NEXT_BASE_PATH }
    : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
