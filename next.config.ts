import type { NextConfig } from "next";
import { REPO_NAME } from "./config";

const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? `/${REPO_NAME}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    if (isProduction) {
      config.output.publicPath = `${basePath}/_next/`;
    }

    return config;
  },
};

export default nextConfig;
