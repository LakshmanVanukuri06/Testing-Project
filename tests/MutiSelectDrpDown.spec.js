const{test,expect}=require('@playwright/test')
test('MutiSelectDrpDown', async({page}) => {
await page.goto('https://testautomationpractice.blogspot.com/')
//await page.selectOption('#colors', ['Red','Green', 'Yellow'])

//await page.waitForTimeout(5000)
///Assertion
//check no. of options in drpdown
/*const drp=await page.locator('#color option')
await expect(drp).toHaveCount(5)
await page.waitForTimeout(5000)*/
//chek the no. of elements in drpdown
//const elements=await page.$$('#colors option')
//console.log("no.of options", elements.length)
/// presence of vale/option
const elements=await page.locator('#colors').textContent()
await expect(elements.includes('Blue')).toBeTruthy()
await page.waitForTimeout(5000)

})