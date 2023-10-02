/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/decentra-world-web' : '',
  basePath: isProd ? '/decentra-world-web' : '',
};

module.exports = nextConfig;
