const { expect } = require("@playwright/test");

exports.Login_page = class Login_page {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator("(//input[@placeholder='Username'])[1]");
        this.passwordInput = page.locator("(//input[@placeholder='Password'])[1]");
        this.loginbtn = page.locator("button[type='submit']");
        this.errorMessage = page.locator("//p[contains(text(), 'Invalid credentials')]");
    }

    async pageIn() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username, pass) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(pass);
        await this.loginbtn.click();

        // Wait for either successful login or error message
        await this.page.waitForTimeout(3000); // Small wait for the page response

        const currentURL = this.page.url();
        const expectedURL = "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index";

        if (currentURL === expectedURL) {
            console.log("✅ Login successful. Redirected to the dashboard.");
        } else if (await this.errorMessage.isVisible()) {
            throw new Error("❌ Invalid credentials: Login failed!");
        } else {
            throw new Error("❌ Unexpected login behavior: URL does not match, and  error message found.");
        }
    }
};
