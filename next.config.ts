/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Fixes image issues with static export
  },
};

module.exports = nextConfig;
