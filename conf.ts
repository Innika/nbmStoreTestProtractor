import { Config, browser } from "protractor";
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter')


export let config: Config = {
  framework: "jasmine",
  capbilities: {
    browserName: "chrome",
  },

  seleniumAddress: "http://localhost:4444/wd/hub",
  onPrepare: () => {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots'
      })
    );
  },
  suites: {
    shopping: './specs/shoppingSpec.js' ,
  },
  jasmineNodeOpts: {
    showColors: true
  }
}