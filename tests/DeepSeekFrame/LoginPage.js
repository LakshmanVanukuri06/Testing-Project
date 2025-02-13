const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    // Locators
    this.loginLink = page.locator('#login2');
    this.usernameInput = page.locator('#loginusername');
    this.passwordInput = page.locator('#loginpassword');
    this.loginButton = page.locator('button[onclick="logIn()"]');
  }

  /**
   * Open the login modal
   */
  async openLoginModal() {
    await this.page.goto('https://www.demoblaze.com/');
    await this.loginLink.click();
    // Wait for the modal to appear
    await this.page.waitForSelector('#logInModal', { state: 'visible' });
  }

  /**
   * Fill username and password
   */
  async enterCredentials(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  /**
   * Click the login button
   */
  async submitLogin() {
    await this.loginButton.click();
    // Optional: Add a small delay to ensure the login completes
    await this.page.waitForTimeout(1000);
  }
}

module.exports = LoginPage;