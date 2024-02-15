/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '202.166.198.129',
        port: '5028',
      },
    ],
  },
};

module.exports = nextConfig;
