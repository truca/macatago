import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/macatago",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
