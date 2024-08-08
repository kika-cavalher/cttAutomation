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
  baseUrls: {
    qa: {
      site: 'https://api.qa.ctt.pt/qualidade-01/internal',
      auth: 'http://www2.ctt.pt/fecas/oauth20',
      server: 'https://appserver.qa.ctt.pt',
      extAuth: 'https://auth.brain24.b13cb2f04ef8484bbf67.westeurope.aksapp.io',
      extService: 'https://terminal-service.brain24.b13cb2f04ef8484bbf67.westeurope.aksapp.io',
      outSystem: 'https://outsystems.dev.ctt.pt',
      track: '',
    },
    prd: {
      site: 'https://api.ctt.pt/cttorg/internal',
      auth: 'http://www.ctt.pt/fecas/oauth20',
      server: 'https://appserver.ctt.pt',
      extAuth: '',
      extService: '',
      outSystem: '',
      track: 'https://api.17track.net/track',
    }
  },
  env: {
    environment: 'prd', // ou 'prd' dependendo do ambiente que você quer usar
    variables: {
      qa: {
        TOKEN_LOCKER: 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJPeDY2SzhmOWl3YmJoNjJxelFEYXRkaVJFNjBlNW9VbC1WMDI3RWJlSks4In0.eyJleHAiOjE3MjEzOTA0ODgsImlhdCI6MTcyMTM5MDE4OCwianRpIjoiNGYyZmUxMjAtMDAxMy00YTMyLTg5M2EtNTQ5ZTIzY2Q1NjkyIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmJyYWluMjQuYjEzY2IyZjA0ZWY4NDg0YmJmNjcud2VzdGV1cm9wZS5ha3NhcHAuaW8vYXV0aC9yZWFsbXMvYnJhaW4yNCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJhODUwYjg5Ny0yODRlLTQ3YmMtOTgyOS1iNzZjNjUzYjM5MjkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjdHQtYXJlYS1jbGllbnRlIiwiYWNyIjoiMSIsInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImNsaWVudEhvc3QiOiI5NC42MC44MS4xODAiLCJjbGllbnRJZCI6ImN0dC1hcmVhLWNsaWVudGUiLCJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtamhpcHN0ZXIiLCJST0xFX1RFUk1JTkFMX1ZJRVciLCJ1bWFfYXV0aG9yaXphdGlvbiIsIlJPTEVfQ1VTVE9NRVJfVEVSTUlOQUxfVklFVyJdLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtY3R0LWFyZWEtY2xpZW50ZSIsImNsaWVudEFkZHJlc3MiOiI5NC42MC44MS4xODAifQ.0xPNfNgEyRmedJ0ITRKUH3JynKG9sJawxHAvlWWpmeH8U0nqfiOG-j2ZnBm33pmYwVlPlzgHeYVwdjSoeh6UJ2gglNUtIQXaP2WFlBWdtUQEldr6NgyA9P4oaUN0CeaEZyudCv4NR0xZUCtIwM2a8l0axr4kslMxhwTcqrQrGdSLTY8EvjVE-H-1paBLLJ8sgjxHBwmOiVVCUYVr1gh0Jox9avUpQUYjRVnwmOZK09vzcKR4TSYzIX83IZgO21TiPD9ccZ2l6iRfJy5IBmYgGevbnir4Emb6PyyZDT-wB9WstCp8CS8KaPSO-T3T4KNmz7-EhmOBqBqOPEz1CROTUw',
        DECISION_CONFIG_ID: '5705322685530112',
        NOTIFICATION_ID: '1F145027-93AE-029C-E063-0A030B771553',
        SAP_CODE: 'EMSE015',
        STORE_ID: '8810555',
        STORE_CATEGORY_ID: '0006',
        SERVICE_ID: '901',
        CARRIER_TRACK: '',
      },
      prd: {
        TOKEN_LOCKER: 'default-prd-token',
        DECISION_CONFIG_ID: 'default-prd-decisionId',
        NOTIFICATION_ID: 'default-prd-notificationId',
        SAP_CODE: 'default-prd-sapCode',
        STORE_ID: '',
        STORE_CATEGORY_ID: '',
        SERVICE_ID: '',
        CARRIER_TRACK: '',
      }
    }
  }
});