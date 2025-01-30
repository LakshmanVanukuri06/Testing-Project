import { test, expect } from '@playwright/test';

test('UploadFiles', async ({ page }) => {
/*await page.goto('https://tus.io/demo')
await page.waitForSelector('#P0-0')
const uploadfile=await page.locator('#P0-0').click();
 await page.locator('#P0-0').setInputFiles("C:\Users\Lakshman Kumar V\Downloads\Login Functionality11.pdf")
await page.waitForTimeout(5000)
*/
await page.goto('https://www.patternfly.org/components/file-upload/multiple-file-upload/')
await page.locator("//span[normalize-space()='Upload']").setInputFiles('tests\file-example_PDF_500_kB.pdf')

await page.waitForTimeout(3000)


})