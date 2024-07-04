const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://practice.expandtesting.com/notes/app',
    setupNodeEvents(on, config){
      // implement node event listeners here

    },
  },
  env:{
    URL:'https://practice.expandtesting.com/notes/app'
  }
});
