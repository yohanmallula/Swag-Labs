const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('//input[@name="user-name"]');
    this.passwordInput = page.locator('//input[@id="password"]');
    this.loginButton = page.locator('//input[@id="login-button"]');
    this.InvalidError = page.locator('//h3[@data-test="error"]');
    this.Username_Required = page.locator('//h3[@data-test="error"]');
    this.password_Required = page.locator('//h3[@data-test="error"]');
    this.login_logo = page.locator('//div[@class="login_logo"]');
    this.Fetch_UserNames = page.locator('//div[@id="login_credentials"]');

    this.FetchByUers = page.locator("//h4[text()='Accepted usernames are:']");
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await expect(this.usernameInput).toBeEditable();
    await this.passwordInput.fill(password);
    await expect(this.passwordInput).toBeVisible();
    await expect(this.passwordInput).toBeEditable();
  }

  async loginButton_Click() {
     await expect(this.loginButton).toBeVisible()
    await this.loginButton.click();
   
  }

  async InvalidError_Text(expectedText) {
    const actualText = await this.InvalidError.textContent();
    console.log(actualText);
    await expect(actualText).toBe(expectedText);
  }

  async Username_Required_Error(expectedText) {
    const actualText = await this.InvalidError.textContent();
    console.log(actualText);
    await expect(actualText).toBe(expectedText);
  }

  async password_Required_Error(expectedText) {
    const actualText = await this.password_Required.textContent();
    await expect(actualText).toBe(expectedText);
  }

  async login_logo_text() {
    //await this.login_logo().toBeVisible();
     await expect(this.login_logo).toBeVisible();
  }

  async Fetch_UserNames_Text() {
  const text = await this.Fetch_UserNames.textContent();

  const users = text
    .replace('Accepted usernames are:', '')
    .split(/\s+/)
    .filter(user => user.includes('_user'));

  console.log("Usernames:");

  users.forEach((user, index) => {
    console.log(`${index + 1}. ${user}`);
  });

  console.log("Total users:", users.length);


  }

  async FetchByUers_Text(){
     const text =   await this.Fetch_UserNames.textContent();
     console.log(text);
  }
}

module.exports = LoginPage;
