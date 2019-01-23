import { element, by  } from "protractor";

let category: any = (text: string) => element(by.xpath(`//li[a[text()='${text}']]`))

class HomePage{

    goToCategoryByName(categoryName: string) : HomePage{
        category(categoryName).click();
        return this;
    }
}

module.exports = new HomePage();
