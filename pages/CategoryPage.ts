import { element, by, browser, until } from "protractor";
import {FiltersContainer} from '../controllers/FiltersContainer.js';

let filtersContainer = new FiltersContainer(element(by.id("productBrowsePageFilter")));

class CategoryPage{    
    filtersAvailable() : any {
        return filtersContainer.filterContainerElement.isPresent().then((isPresent: boolean) => {return isPresent;});
    }

    goToRandomCategory() : CategoryPage{
        filtersContainer.filtersElments.count().then(count => {
            let rand: number = 0;
            rand = Math.floor(Math.random() * count - 1);
            filtersContainer.getFilter(rand);
        });
        return this;
    }

    waitForFilterToBeSelected() : CategoryPage{
        element(by.css(".overlay")).getWebElement().then(spinnerElement => 
            browser.wait(until.elementIsNotVisible(spinnerElement), 10000));
        return this;
    }
}

module.exports = new CategoryPage();