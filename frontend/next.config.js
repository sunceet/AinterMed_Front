const withBundleAnalyzer = require("@next/bundle-analyzer");

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  // другие опции...
};

module.exports = bundleAnalyzer(nextConfig);
