const{test,expect}=require('@playwright/test')
test('InputBox', async({page})=>{

await page.goto('https://seleniumbase.io/demo_page')
//inputbox methods
await expect(await page.locator("//input[@id='myTextInput']")).toBeVisible();
await expect(await page.locator("//input[@id='myTextInput']")).toBeEmpty()
await expect(page.locator("//input[@id='myTextInput']")).toBeEditable()
await expect(page.locator("//input[@id='myTextInput']")).toBeEnabled()
//await page.locator("//input[@id='myTextInput']").fill('testing')
await page.fill("//input[@id='myTextInput']", "testing")
await page.waitForTimeout(5000)

})

