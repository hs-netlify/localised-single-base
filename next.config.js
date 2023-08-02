/** @type {import('next').NextConfig} */

let locale = process.env.NEXT_PUBLIC_LOCALE;
const nextConfig = {
  reactStrictMode: true,
  // generateBuildId: async () => {
  //   // You can, for example, get the latest git commit hash here
  //   return process.env.NEXT_PUBLIC_LOCALE || "base";
  // },
  assetPrefix: locale,
};

module.exports = nextConfig;
