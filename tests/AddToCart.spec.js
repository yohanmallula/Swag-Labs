const { test, expect } = require("../fixtures/baseTest");
const AddToCart = require("../Pages/AddToCart");

test.describe("add the cart products", () => {
  test("add the cart productss", async ({ loginPage, loginData, page }) => {
    await loginPage.login(loginData.username, loginData.password);
    await loginPage.loginButton_Click();

    const Cart = new AddToCart(page);

    await Cart.selectproduct();

    await Cart.GetProductAddToCart();

    await page.goBack();

    await Cart.getRemoveButton();

    await Cart.getAddTheCartProduct2();

    await Cart.getClickAddToCart();

    await Cart.ClickCheckOut();

    await Cart.inputCheckOut();

    await Cart.scrollPage();

    await Cart.FinishButton1();
  });
});
