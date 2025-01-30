const{test,expect}=require("@playwright/test")
const exp = require("constants")
test('Home Page Test', async({page}) =>{
    await page.goto('https://www.demoblaze.com/')
//login

await page.locator('#login2').click()
await page.locator('#loginusername').fill('testing@1234')
await page.locator('#loginpassword').fill('testing')
await page.locator('button[onclick="logIn()"]').click();
//hompe page
const product=await page.$$('.hrefch')
await expect(product).toHaveLength(10)
//logout
await page.locator('#logout2').click()
})

//logout


