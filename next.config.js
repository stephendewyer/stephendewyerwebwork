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