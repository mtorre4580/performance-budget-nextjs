const { ANALYZE } = process.env;

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: ANALYZE === "true",
});

// Configuration for Next.js
const configuration = {};

module.exports = withBundleAnalyzer(configuration);
