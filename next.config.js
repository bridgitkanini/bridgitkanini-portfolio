/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "cdn.worldvectorlogo.com" },
      { protocol: "https", hostname: "www.vectorlogo.zone" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "uxwing.com" },
      { protocol: "https", hostname: "vitejs.dev" },
      { protocol: "https", hostname: "vitest.dev" },
      { protocol: "https", hostname: "playwright.dev" },
      { protocol: "https", hostname: "jestjs.io" },
    ],
  },
};

module.exports = nextConfig;
