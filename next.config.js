/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
console.log("isProd is: ", isProd);

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/decentra-world-web' : '',
  basePath: isProd ? '/decentra-world-web' : '',
};

module.exports = nextConfig;
