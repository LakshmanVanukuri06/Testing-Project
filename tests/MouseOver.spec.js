const{test, expect}=require("@playwright/test")
test('MouseOver', async({page})=> {
await page.goto('https://demo.opencart.com/')
const desktop=await page.locator("//a[normalize-space()='Desktops']")
const mouse=await page.locator("(//a[normalize-space()='Mac (1)'])[1]")
await desktop.hover()
 await mouse.hover()
await page.waitForTimeout(5000)



})