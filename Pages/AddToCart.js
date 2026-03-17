const { expect } = require("@playwright/test");
const CommenActions = require("../utils/commenActions");
const productData =require("../data/loginData.json")

class AddToCart {
  constructor(page) {
    this.page = page;

    this.productSelect = page.locator('//a[@id="item_4_title_link"]');
    this.productAddToCart = page.locator('//button[@id="add-to-cart"]');
    this.RemoveButton = page.locator(
      '//button[@id="remove-sauce-labs-backpack"]',
    );
    this.AddTheCartProduct2 = page.locator(
      '//button[@id="add-to-cart-sauce-labs-bike-light"]',
    );
    this.ClickAddCart = page.locator('//a[@class="shopping_cart_link"]');
    this.CheckOutProduts = page.locator('//button[@id="checkout"]');

    this.CheckOutFirstName = page.locator('//input[@id="first-name"]');

    this.CheckOutLastName = page.locator('//input[@id="last-name"]');

    this.CheckOutPinCode = page.locator('//input[@id="postal-code"]');

    this.CheckOutContinue = page.locator('//input[@id="continue"]');

    this.FinishButton = page.locator('//button[@id="finish"]');

    this.actions = new CommenActions(page)
  }

  async selectproduct() {
    await this.actions.click(this.productSelect)
    //await this.productSelect.click();
  }

  async GetProductAddToCart() {
    await this.actions.click(this.productAddToCart)
    //await this.productAddToCart.click();
  }

  async getRemoveButton() {

    const getRemove = await this.actions.getText(this.RemoveButton);

    //const getRemove = await this.RemoveButton.textContent();
    console.log(getRemove);

    expect(getRemove).toBe(productData.RemoveButton);
    //  expect(getTittle[0]).toBe("Sauce Labs Backpack")
  }

  async getAddTheCartProduct2() {
    await this.actions.click(this.AddTheCartProduct2)
   // await this.AddTheCartProduct2.click();
  }

  async getClickAddToCart() {
    await this.ClickAddCart.click();
  }

  async ClickCheckOut() {
    await this.CheckOutProduts.click();
  }

  async inputCheckOut() {

    //await this.actions.type(this.CheckOutFirstName , `text=${productData.productName}` )

    await this.actions.type(this.CheckOutFirstName , productData.ChecckOutName )
    await this.actions.type(this.CheckOutLastName , "mallula")

    //await this.CheckOutFirstName.fill("Yohan");
   // await this.CheckOutLastName.fill("mallula");
    await this.CheckOutPinCode.fill(productData.PinCode);
    await this.CheckOutContinue.click();
  }

  async scrollPage() {
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight),
    );
  }

  async FinishButton1() {
    await this.FinishButton.click();
  }
}

module.exports = AddToCart;
