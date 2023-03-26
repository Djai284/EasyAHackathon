/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

return {
  webpack: (config) => {
    config.optimization.splitChunks.cacheGroups = {
      common: {
        name: "common",
        chunks: "all",
      },
    };

    return config;
  },
};