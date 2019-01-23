"use strict";
exports.__esModule = true;
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    framework: "jasmine",
    capbilities: {
        browserName: "chrome"
    },
    seleniumAddress: "http://localhost:4444/wd/hub",
    onPrepare: function () {
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
        }));
    },
    suites: {
        shopping: './specs/shoppingSpec.js'
    },
    jasmineNodeOpts: {
        showColors: true
    }
};
