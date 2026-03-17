const { test, expect } = require("../fixtures/baseTest");
const AllProducts = require("../Pages/AllProducts");

test.describe("all products Home page", () => {
  test("verfiy the all product home page ", async ({
    loginPage,
    loginData,
    page,
  }) => {
    await loginPage.login(loginData.username, loginData.password);
    await loginPage.loginButton_Click();

    const products = new AllProducts(page);

    await products.getproductsTitle();

    await products.getproductCount();

    await products.getproductShortName();

    await products.selectSortOption();
  });

  test("select the filter drop down", async ({
    loginPage,
    loginData,
    page,
  }) => {
    await loginPage.login(loginData.username, loginData.password);
    await loginPage.loginButton_Click();

    const filter = new AllProducts(page);

    await filter.selectSortOption();

    await filter.getFilterOptions();

    await filter.Set_FilterOptions();

    await filter.FilterVerfication();

    await page.reload();

    await filter.productSelectget();

    //await filter.getSingleProduct();
  });
});
