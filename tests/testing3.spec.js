import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=greeksforgreeks&oq=greeksforgreeks&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDQ4MjBqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'GeeksforGeeks | A computer' }).click();
  await page.getByPlaceholder('Data Structures and Algo').click();
  await page.getByPlaceholder('Complete I').fill('testing');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Software Testing Tutorial Sep' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'White box testing' }).click();
});