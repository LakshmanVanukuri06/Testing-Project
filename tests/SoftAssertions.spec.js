const{test,expect}=require('@playwright/test')
test('SoftAssertions', async({page})=>{

await page.goto("https://demoblaze.com/index.html")

//hard assertions
/*await expect(page).toHaveTitle('STORE123')
await expect(page).toHaveURL('https://demoblaze.com/index.html')
await expect(page.locator('.navbar-brand')).toBeVisible()
*/
await expect.soft(page).toHaveTitle('STORE123')
await expect.soft(page).toHaveURL('https://demoblaze.com/index.html')
await expect.soft(page.locator('.navbar-brand')).toBeVisible()



})