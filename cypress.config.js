const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  },
  "env": {
    "url": {
      "qasite": 'https://api.qa.ctt.pt/qualidade-01/internal',
      "prdsite": 'https://api.ctt.pt/cttorg/internal'
    }
  }
});
