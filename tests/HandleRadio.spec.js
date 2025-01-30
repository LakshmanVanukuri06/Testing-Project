const{test, expect}=require('@playwright/test')
 test('HandleRadio', async({page}) =>{
await page.goto('https://seleniumbase.io/demo_page')
//radtio btn
//await page.locator("//input[@id='radioButton2']").check();
await page.check("//input[@id='radioButton2']")
await expect(await page.locator("//input[@id='radioButton2']")).toBeChecked()
await expect((await page.locator("//input[@id='radioButton2']")).isChecked()).toBeTruthy()

})