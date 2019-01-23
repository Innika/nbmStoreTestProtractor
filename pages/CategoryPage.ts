import { element, by } from "protractor";
import {FiltersContainer} from '../controllers/FiltersContainer.js';

let filtersContainer = new FiltersContainer(element(by.id("productBrowsePageFilter")));

class CategoryPage{    
    filtersAvailable() : any {
        return filtersContainer.filterContainerElement.isPresent().then((isPresent: boolean) => {return isPresent;});
    }

    goToRandomCategory(){
        filtersContainer.filtersElments.count().then(count => {
            let rand: number = 0;
            rand = Math.floor(Math.random() * count - 1);
            filtersContainer.getFilter(rand);
        });
    }
}

module.exports = new CategoryPage();