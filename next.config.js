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