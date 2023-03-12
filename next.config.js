/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'books.google.com',
      },
      {
        protocol: 'https',
        hostname: 'im.vsco.co',
      },
      {
        protocol: 'https',
        hostname: 's3.*.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
