import { browser } from "protractor";

var homepage = require('../pages/HomePage.js');
var categorypage = require('../pages/CategoryPage.js');

describe("NBA store", function () {

    it("should be able to navigate to www.nbastore.eu", () => {
        browser.manage().window().setPosition(-1500, 200);
        browser.manage().window().maximize();
        browser.get("https://www.nbastore.eu");
        expect(browser.getTitle()).toContain("NBA");
    })

    it("should be able to go to a category", () => {
        homepage.goToCategoryByName("Mens");
        expect(categorypage.filtersAvailable()).toEqual(true);
    });

    it("should be able to select filter", () => {
        categorypage.goToRandomCategory();
    });
});