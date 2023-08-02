/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return process.env.NEXT_PUBLIC_LOCALE;
  },
};

module.exports = nextConfig;
