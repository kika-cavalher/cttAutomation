const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    configFile: 'reporter-config.json',
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
  "baseUrls": {
    "qa": {
      "qaSite": 'https://api.qa.ctt.pt/qualidade-01/internal',
      "qaServer": 'https://appserver.qa.ctt.pt',
      "qaExtAuth": 'https://auth.brain24.b13cb2f04ef8484bbf67.westeurope.aksapp.io',
      "qaExtService": 'https://terminal-service.brain24.b13cb2f04ef8484bbf67.westeurope.aksapp.io'
    },
    "prd": {
      "prdSite": 'https://api.ctt.pt/cttorg/internal',
      "prdServer": 'https://appserver.ctt.pt',
      "prdExtAuth": '',
      "prdExtService": ''
    }
  },
  "env": "qa"
});
