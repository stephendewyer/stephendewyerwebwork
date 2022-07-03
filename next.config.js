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