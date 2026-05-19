import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rg-interiors",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
