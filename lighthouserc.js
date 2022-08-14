// Budget to check the mininum in each step
const PERFORMANCE = 0.8;
const ACCESSIBILITY = 0.8;
const BEST_PRACTICES = 0.8;
const SEO = 0.8;

// Extra headers
const headers = {};

// URLs to check
const URL = process.env.URL;

module.exports = {
  ci: {
    collect: {
      url: [URL],
    },
    settings: {
      maxWaitForFcp: 15 * 1000,
      maxWaitForLoad: 35 * 1000,
      skipAudits: ["uses-http2"],
      options: {
        networkQuietThresholdMs: 10 * 1000,
      },
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      chromeFlags: "--no-sandbox",
      extraHeaders: JSON.stringify(headers),
    },
    assert: {
      assertions: {
        "categories:performance": [
          "error",
          { minScore: PERFORMANCE, aggregationMethod: "median-run" },
        ],
        "categories:accessibility": [
          "error",
          {
            minScore: ACCESSIBILITY,
            aggregationMethod: "pessimistic",
          },
        ],
        "categories:best-practices": [
          "error",
          {
            minScore: BEST_PRACTICES,
            aggregationMethod: "pessimistic",
          },
        ],
        "categories:seo": [
          "error",
          { minScore: SEO, aggregationMethod: "pessimistic" },
        ],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
