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