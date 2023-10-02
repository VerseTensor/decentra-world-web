/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
console.log("isProd is: ", isProd);
console.log("isProd in next.config.js: ", isProd);
console.log("assetPrefix in next.config.js: ", isProd ? '/decentra-world-web' : '');


const nextConfig = {
  reactStrictMode: true,
  // assetPrefix: process.env.ASSET_PREFIX || '',
  basePath: isProd ? '/decentra-world-web' : '',
};

module.exports = nextConfig;
