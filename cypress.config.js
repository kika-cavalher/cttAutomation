const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  },
  "env": {
    "url": {
      "qasite": 'https://api.qa.ctt.pt/qualidade-01/internal',
      "prdsite": 'https://api.ctt.pt/cttorg/internal',
      "qaserver": 'https://appserver.ctt.pt',
      "prdserver": 'https://api.ctt.pt/cttorg/internal',
      "qaextauth": 'https://auth.brain24.b13cb2f04ef8484bbf67.westeurope.aksapp.io',
      "prdextauth": 'https://auth.brain24.b13cb2f04ef8484bbf67.westeurope.aksapp.io',
      "qaextservice": 'https://terminal-service.brain24.b13cb2f04ef8484bbf67.westeurope.aksapp.io',
      "prdextservice": 'https://terminal-service.brain24.b13cb2f04ef8484bbf67.westeurope.aksapp.io',
    }
  }
});
