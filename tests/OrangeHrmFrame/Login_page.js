// Login_page.js
const { expect } = require("@playwright/test");

exports.Login_page = class Login_page {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator("(//input[@placeholder='Username'])[1]");
        this.passwordInput = page.locator("(//input[@placeholder='Password'])[1]");
        this.loginbtn = page.locator("button[type='submit']");
        this.errorMessage = page.locator(".oxd-input-field-error-message");
        this.usernameRequiredFieldError = page.locator('div.oxd-input-group.oxd-input-field-bottom-space:has(.oxd-input-group__label-wrapper:text-is("Username")) span.oxd-input-field-error-message.oxd-input-group__message');
        this.passwordRequiredFieldError = page.locator('div.oxd-input-group.oxd-input-field-bottom-space:has(.oxd-input-group__label-wrapper:text-is("Password")) span.oxd-input-field-error-message.oxd-input-group__message');
    }

    async pageIn() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username, pass) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(pass);
        await this.loginbtn.click();
    }
};