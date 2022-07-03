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