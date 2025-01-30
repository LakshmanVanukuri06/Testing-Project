import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=greeksforgreeks&oq=greeksforgreeks&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTE1OTE5ajBqMqgCALACAQ&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'GeeksforGeeks | A computer' }).click();
  await page.getByPlaceholder('Data Structures and A').click();
  await page.getByPlaceholder('Complete Interv').fill('testing');
  await page.getByText('Software Testing Tutorial').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Software Testing Tutorial Sep' }).click();
  const page1 = await page1Promise;
});