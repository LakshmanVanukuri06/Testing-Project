import{test, expect } from '@playwright/test';
test('Locators', async({page})=>{
 await page.goto("https://demoblaze.com/")
 // locators
 //await page.locator('id =lo').click();
 await page.click('#login2');
 // provide username
 //await page.locator('#loginusername').fill('testing')
 await page.fill("//input[@id='loginusername']",'testing')
await page.fill("input[ id='loginpassword']",'ptassword')
//css
await page.click("//button[normalize-space()='Log in']")

// verify logut link is presence
await page.locator("//button[normalize-space()='Log in']")
// visibility of an element
const pageLocator= await page.locator("button[onclick='logIn()']")
await expect(pageLocator).toBeVisible();
await page.close();

})