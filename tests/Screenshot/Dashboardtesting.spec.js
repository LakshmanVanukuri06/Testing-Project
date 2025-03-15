
const { test, expect } = require('@playwright/test');

test('Test OrangeHRM Dashboard Functionality with Modules and Interactions', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // --- Login Page Tests ---

  // Check if the login form is visible
  const loginForm = page.locator('form');
  await expect(loginForm).toBeVisible();

  // Check if the username input is visible and fill it
  const usernameInput = page.locator('input[name="username"]');
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill('Admin');

  // Check if the password input is visible and fill it
  const passwordInput = page.locator('input[name="password"]');
  await expect(passwordInput).toBeVisible();
  await passwordInput.fill('admin123');

  // Check if the submit button is visible and click it
  const submitButton = page.locator('button[type="submit"]');
  await expect(submitButton).toBeVisible();
  await submitButton.click();

  // --- Dashboard Page Tests ---

  // Wait for the dashboard to load (e.g., by waiting for the presence of the main menu)
  await page.waitForSelector('ul.oxd-main-menu', { timeout: 10000 });

  // Check if the dashboard URL is correct
  await expect(page).toHaveURL(/dashboard/);

  // Check if the main menu is visible
  const mainMenu = page.locator('ul.oxd-main-menu');
  await expect(mainMenu).toBeVisible();

  // Check if the top bar is visible
  const topBar = page.locator('.oxd-topbar');
  await expect(topBar).toBeVisible();

  // --- Dashboard Modules Tests ---

  // Wait for the dashboard modules to load
  await page.waitForTimeout(2000); // Add a small delay to ensure all modules are loaded

  // Check if the "Time at Work" module is visible
  const timeAtWorkModule = page.locator('div.orangehrm-attendance-card');
  await expect(timeAtWorkModule).toBeVisible();

  // Check if the "My Actions" module is visible
  //const myActionsModule = page.locator('div.orangehrm-todo-list-card');
  //await expect(myActionsModule).toBeVisible();

  // Check if the "Quick Launch" module is visible
  const quickLaunchModule = page.locator('div.orangehrm-quick-launch');
  await expect(quickLaunchModule).toBeVisible();

  // Check if the "Employee Distribution by Sub Unit" module is visible
  const employeeDistributionBySubUnitModule = page.locator('div.oxd-sheet').filter({ hasText: 'Employee Distribution by Sub Unit' });
  await expect(employeeDistributionBySubUnitModule).toBeVisible();

  // Check if the "Employee Distribution by Location" module is visible
  const employeeDistributionByLocationModule = page.locator('div.oxd-sheet').filter({ hasText: 'Employee Distribution by Location' });
  await expect(employeeDistributionByLocationModule).toBeVisible();

  // Check if the "Headcount" module is visible
  const headCountModule = page.locator('div.oxd-sheet').filter({ hasText: 'Headcount' });
  await expect(headCountModule).toBeVisible();

  // Check if the "Recruitment Funnel" module is visible
  const recruitmentFunnelModule = page.locator('div.oxd-sheet').filter({ hasText: 'Recruitment Funnel' });
  await expect(recruitmentFunnelModule).toBeVisible();

  // Check if the "Total Leave Balance" module is visible
  const totalLeaveBalanceModule = page.locator('div.oxd-sheet').filter({ hasText: 'Total Leave Balance' });
  await expect(totalLeaveBalanceModule).toBeVisible();

  // Check if the "Pending Leave Requests" module is visible
  const pendingLeaveRequestsModule = page.locator('div.oxd-sheet').filter({ hasText: 'Pending Leave Requests' });
  await expect(pendingLeaveRequestsModule).toBeVisible();

  // Check if the "Latest News" module is visible
  const latestNewsModule = page.locator('div.oxd-sheet').filter({ hasText: 'Latest News' });
  await expect(latestNewsModule).toBeVisible();

  // --- Dashboard Modules Interactions ---

  // Wait for the Quick Launch module to be fully loaded
  await page.waitForSelector('div.orangehrm-quick-launch-item', { timeout: 5000 });

  // Interact with the Quick Launch buttons
  const quickLaunchButtons = page.locator('div.orangehrm-quick-launch-item button');
  const quickLaunchButtonCount = await quickLaunchButtons.count();
  if (quickLaunchButtonCount > 0) {
    for (let i = 0; i < quickLaunchButtonCount; i++) {
      const button = quickLaunchButtons.nth(i);
      await expect(button).toBeVisible();
      await button.click();
      await page.waitForTimeout(1000);
      await page.goBack();
      await page.waitForSelector('div.orangehrm-quick-launch-item', { timeout: 5000 });
    }
  }

  // Interact with the My Actions items
  const myActionsItems = page.locator('div.orangehrm-todo-list-item');
  const myActionsItemCount = await myActionsItems.count();
  if (myActionsItemCount > 0) {
    for (let i = 0; i < myActionsItemCount; i++) {
      const item = myActionsItems.nth(i);
      await expect(item).toBeVisible();
      // You can add more specific interactions here, e.g., clicking a checkbox or a link
    }
  }

  // Interact with the Time at Work module
  // You can add more specific interactions here, e.g., checking the displayed time or clicking a button
  await expect(timeAtWorkModule).toBeVisible();

  // --- User Profile and Logout ---

  // Check if the user profile dropdown is visible
  const userProfileDropdown = page.locator('.oxd-userdropdown');
  await expect(userProfileDropdown).toBeVisible();

  // Check if the user profile dropdown is clickable and click it
  await userProfileDropdown.click();

  // Wait for the dropdown menu to be visible and fully loaded
  await page.waitForSelector('ul.oxd-dropdown-menu', { timeout: 5000 });

  // Check if the logout button is visible
  const logoutButton = page.locator('ul.oxd-dropdown-menu li').filter({ hasText: 'Logout' });
  await expect(logoutButton).toBeVisible();

  // Check if the logout button is clickable and click it
  await logoutButton.click();

  // --- Post-Logout Tests ---

  // Wait for the login page to load again
  await page.waitForSelector('form', { timeout: 10000 });

  // Check if the login form is visible again
  await expect(loginForm).toBeVisible();

  // Check if the login URL is correct
  await expect(page).toHaveURL(/login/);
});