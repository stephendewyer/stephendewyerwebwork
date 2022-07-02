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
        SendGrid_API_key: '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',
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
      SendGrid_API_key: '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',
    },
  };
  
};