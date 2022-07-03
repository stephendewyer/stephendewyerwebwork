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