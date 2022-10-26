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