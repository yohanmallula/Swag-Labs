

class CommenActions {
    constructor(page){
        this.page = page;
    }

    async click(locator){
        await locator.click();
    }

    async type(locator , text){
        await locator.fill(text);
    }

    async getText(loctaor){
        return await loctaor.textContent();
    }

    async getAllText(locator) {
        return await loctaor.allTextContents()
    }

    async scrollTo(locator) {
        await locator.scrollIntoViewIfNeeded()
    }

    async refreshPage(){
        await this.page.reload();
    }

}

module.exports = CommenActions;