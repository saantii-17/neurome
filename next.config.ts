import type { NextConfig } from "next";

const  repoName = "neurome";

const basePath =
  process.env.NODE_ENV === 'production'
    ? `/${repoName}`
    : ''

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  /* predefined */
  cacheComponents: false,
  partialPrefetching: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
