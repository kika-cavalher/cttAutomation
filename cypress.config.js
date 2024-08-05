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
    //QA
    "qaSite": 'https://api.qa.ctt.pt/qualidade-01/internal',
    "qaAuth": 'http://www2.ctt.pt/fecas/oauth20',
    "qaServer": 'https://appserver.qa.ctt.pt',
    "qaExtAuth": 'https://auth.brain24.b13cb2f04ef8484bbf67.westeurope.aksapp.io',
    "qaExtService": 'https://terminal-service.brain24.b13cb2f04ef8484bbf67.westeurope.aksapp.io',
    "qaOutSystem": 'https://outsystems.dev.ctt.pt',
    //PRD
    "prdSite": 'https://api.ctt.pt/cttorg/internal',
    "prdAuth": 'http://www.ctt.pt/fecas/oauth20',
    "prdServer": 'https://appserver.ctt.pt',
    "prdExtAuth": '',
    "prdExtService": '',
    "prdOutSystem": ''
  },
  "env": "qa"
});
