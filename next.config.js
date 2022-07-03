const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      i18n: {
        locales: ["en-US"],
        defaultLocale: "en-US",
      },
      env: {
        SENDGRID_API_KEY: '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',
      },
    };
  }
  return {
    reactStrictMode: true,
    i18n: {
      locales: ["en-US"],
      defaultLocale: "en-US",
    },
    env: {
      SENDGRID_API_KEY: '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',
    },
  };
  
};