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