const { test, expect } = require("../fixtures/baseTest");

test.describe("SauceDemo Login Tests", () => {
  test("Login with valid credentials", async ({ loginPage, loginData , page}) => {
  
    await loginPage.login(loginData.username, loginData.password);
    
    await loginPage.loginButton_Click();

    await page.context().storageState({path: 'storageState.json'})
  });
 
  test("Login with invalid password", async ({ loginPage }) => {
    await loginPage.login("sfgdfgd", "hghgvjh");
    
    await loginPage.loginButton_Click();

    await loginPage.InvalidError_Text("Epic sadface: Username and password do not match any user in this service");
   
  });

  test(" Without  username and password In login " , async({ loginPage }) => {
    await loginPage.loginButton_Click();
    await loginPage.Username_Required_Error("Epic sadface: Username is required");
  });

  test("without password error ", async({ loginPage }) =>{
    await loginPage.login("standard_user", "")
    await loginPage.loginButton_Click();
    await loginPage.password_Required_Error("Epic sadface: Password is required");
    await loginPage.login_logo_text();
  })

  test("get all login userId's" , async({loginPage }) => {
    await loginPage.Fetch_UserNames_Text();
    await loginPage.FetchByUers_Text();
  })


});
