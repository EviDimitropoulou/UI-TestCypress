const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    projectId: "m72qmb",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    
  },
    reporter: "mochawesome",
    reporterOptions: {
       reportDir: "cypress/results",
       overwrite: false,
       html: false,
       json: true
    
 }
  
  
});
