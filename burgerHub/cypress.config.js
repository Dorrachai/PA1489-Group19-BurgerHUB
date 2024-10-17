const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:8008',  // Dynamically set base URL
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});