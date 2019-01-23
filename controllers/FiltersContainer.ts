import {browser, element, by, ElementFinder } from "protractor";

export class FiltersContainer{
    filtersElments = element.all(by.repeater("option in filter.Options"));
    filterContainerElement: ElementFinder;

    public constructor (public el: ElementFinder) {
        if (el.element(by.css("[ng-if='hasFilters()']")))
            this.filterContainerElement = el;
            else {
                throw new Error('The element is not a valid filterContainer')
            }
    }

    getFilter(index: number){
        let elem = this.filtersElments.get(index);        
        browser.executeScript("arguments[0].scrollIntoView();", elem.getWebElement());
        browser.wait(() => elem.isDisplayed(), 5000);

        elem.element(by.css(".description")).getText().then((str: string) => {
            elem.element(by.className("filterTick")).click();

            expect(element(by.xpath(`//*[contains(@class, 'filterItem') and span[text()='${str}']]`))
                .element(by.className("filterSelected"))).toBeDefined();
            });
    }
}