/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '172.30.1.20',
        port: '3500',
      },
    ],
  },
};

module.exports = nextConfig;
