const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'j4p4pn',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
