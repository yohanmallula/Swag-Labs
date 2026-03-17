const { test: base, expect } = require("@playwright/test");
const LoginPage = require("../Pages/LoginPage");


const loginDataJson = require("../data/loginData.json")

const test = base.extend({
  //Date Fixture
  loginData: async ({}, use) => {
   /* const data = {
      username: "standard_user",
      password: "secret_sauce",
    }; **/



    await use(loginDataJson);
  },

  loginPage: async ({ page }, use) => {
    await page.goto("https://www.saucedemo.com/");
    const loginPage = new LoginPage(page);

    //await loginPgae.goto();

    //await loginPage .login();

    await use(loginPage);
  },
});

module.exports = { test, expect };
