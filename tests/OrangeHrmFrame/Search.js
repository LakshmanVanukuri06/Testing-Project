// searchPage.js (Page Object)
const { expect } = require('@playwright/test');

class Search {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input.oxd-input.oxd-input--active');
  }

 

  async searchForModule(moduleName) {
    // Wait for the search input to be visible and enabled
    await this.searchInput.waitFor({ state: 'visible' });
    await this.searchInput.fill(moduleName);
    await this.page.waitForSelector('.oxd-main-menu-item-wrapper', { timeout: 5000 });
  }

  async clickOnModule(moduleName) {
    const moduleToClick = await this.page.locator(`span.oxd-text.oxd-text--span.oxd-main-menu-item--name:has-text("${moduleName}")`);
    await moduleToClick.click();
  }
}

module.exports = { Search };