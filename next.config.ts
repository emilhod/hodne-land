/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: false, // Disable App Router (Azure Static Apps doesn't support it yet)
  },
};

module.exports = nextConfig;
