/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');


module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
});

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig
