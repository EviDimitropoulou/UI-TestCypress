const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');


module.exports = defineConfig({
  e2e: {
   
    setupNodeEvents(on, config) {
      // implement node event listeners here
      baseUrl: 'https://swapfiets.com/en-GB',
      require('cypress-mochawesome-reporter/plugin')(on);
      on('before:run', async (details) => {

                console.log('override before:run');
        
                await beforeRunHook(details);
        
              });
        
        
              on('after:run', async () => {
        
                console.log('override after:run');
        
                await afterRunHook();
        
              });
    },
    chromeWebSecurity: false,
    
  },
     reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts:false,
      html: true,

       reportDir: "cypress/SwapReporters",
       reportFileNmae: 'report',
       overwrite: true,
       embeddedScreenshots: true,
       screenshotsFolder: 'images',
       inlineAssets: true,
      saveAllAttempts: false,
 },
     video: false
  
  
});
