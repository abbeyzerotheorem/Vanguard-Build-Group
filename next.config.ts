import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 480, 640, 768, 1024, 1280, 1536, 1920],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
