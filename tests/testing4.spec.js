import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  await page.getByRole('combobox', { name: 'Search' }).fill('testing tut');
  await page.getByText('orial for beginners', { exact: true }).click();

});