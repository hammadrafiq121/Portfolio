/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  server:{
    host:true,
    strictPort:true,
    port:5000,

  }
};

module.exports = nextConfig;

const withVideos = require("next-videos");
module.exports = withVideos();
