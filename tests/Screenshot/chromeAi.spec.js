const { test, expect } = require('@playwright/test');

test.describe('OrangeHRM Login Functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the login page before each test
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // Wait for the login form to be visible
    await page.waitForSelector('.orangehrm-login-form');
  });

  test('Successful Login', async ({ page }) => {
    // Fill in the username and password fields
    await page.fill('[name="username"]', 'Admin');
    await page.fill('[name="password"]', 'admin123');

    // Click the login button
    await page.click('[type="submit"]');

    // Wait for navigation and check if the user is redirected to the dashboard
   
  });

  test('Failed Login - Invalid Username', async ({ page }) => {
    // Fill in an invalid username and a valid password
    await page.fill('[name="username"]', 'InvalidUser');
    await page.fill('[name="password"]', 'admin123');

    // Click the login button
    await page.click('[type="submit"]');

    // Check if an error message is displayed
    await expect(page.locator('.oxd-alert-content')).toBeVisible();
    await expect(page.locator('.oxd-alert-content')).toContainText('Invalid credentials');
  });

  test('Failed Login - Invalid Password', async ({ page }) => {
    // Fill in a valid username and an invalid password
    await page.fill('[name="username"]', 'Admin');
    await page.fill('[name="password"]', 'InvalidPassword');

    // Click the login button
    await page.click('[type="submit"]');

    // Check if an error message is displayed
    await expect(page.locator('.oxd-alert-content')).toBeVisible();
    await expect(page.locator('.oxd-alert-content')).toContainText('Invalid credentials');
  });

  test('Failed Login - Empty Username', async ({ page }) => {
    // Fill in an empty username and a valid password
    await page.fill('[name="username"]', '');
    await page.fill('[name="password"]', 'admin123');

    // Click the login button
    await page.click('[type="submit"]');

    // Check if an error message is displayed
    
    await expect(page.locator('.oxd-input-field-error')).toContainText('Required');
  });

  test('Failed Login - Empty Password', async ({ page }) => {
    // Fill in a valid username and an empty password
    await page.fill('[name="username"]', 'Admin');
    await page.fill('[name="password"]', '');

    // Click the login button
    await page.click('[type="submit"]');

    // Check if an error message is displayed
    
    await expect(page.locator('.oxd-input-field-error')).toContainText('Required');
  });

  test('Forgot Password Link', async ({ page }) => {
    // Click the "Forgot your password?" link
    await page.click('.orangehrm-login-forgot-header');

    // Check if the user is redirected to the forgot password page
    await page.waitForURL('**/requestPasswordResetCode');
    await expect(page).toHaveURL(/requestPasswordResetCode/);
    await expect(page.locator('.orangehrm-card-container h6')).toContainText('Reset Password');
  });
});