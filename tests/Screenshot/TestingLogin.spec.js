const { test, expect } = require('@playwright/test');

  /*  test('Successful Login', async ({ page }) => {
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Replace with your login page URL
      await page.fill('input[name="username"]', 'Admin'); // Replace with a valid username
      await page.fill('input[name="password"]', 'admin123'); // Replace with a valid password
      await page.click('button.orangehrm-login-button[type="submit"]');
      await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); // Replace with your dashboard URL
      //await expect(page.locator('YOUR_DASHBOARD_ELEMENT_SELECTOR')).toBeVisible(); // Replace with a selector for a dashboard element
    });
    */
    test('Invalid Username', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.fill('input[name="username"]', 'Admin');
        await page.fill('input[name="password"]', 'admin123');
        await page.click('button.orangehrm-login-button[type="submit"]');
        await expect(page.locator('.orangehrm-login-error')).toBeVisible(); // Assuming .orangehrm-login-error is the error message container
         await expect(page.locator('.orangehrm-login-error')).toHaveText('Invalid credentialsUsername : AdminPassword : admin123'); // Replace with the actual error message
    });
    

    await page.fill('input[username="admin"]','testing123')
    await page.fill('input[password="testing@123"]', 'password123')
    await page.expect(page.locator('.orangehrm-login-error'))   .toBeVisible();
await page.expect(page.locator('..orangehrm-login-error')).toHaveText('invalid ')