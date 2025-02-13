const { test } = require('@playwright/test');
const LoginPage = require('./DeepSeekFrame/LoginPage');

test('Perform login without verifying welcome message', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  // Open the login modal
  await loginPage.openLoginModal();
  
  // Enter credentials (replace with valid username/password)
  await loginPage.enterCredentials('testing@1234', 'testing');
  
  // Submit login
  await loginPage.submitLogin();

  // No assertion for welcome message
});