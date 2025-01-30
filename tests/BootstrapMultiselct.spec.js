const{test,expect}=require('@playwright/test')
test('MutiSelectDrpDown', async({page}) => {
await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_1')
await page.locator('.multiselect').click();
await page.waitForTimeout(5000)
//const Options=await page.locator('ul>li label input')
//await expect(Options).toHaveCount(5)
//2
//const options=await page.$$('ul>li label input')
//await expect(options.length).toBe(5)
//await page.waitForTimeout(5000)
//3
const temp=await page.$$('ul>li label')
for(let temps of temp) {
    const value=await temps.textContent()
    //console.log("valueis", value)
    if(value.includes('HTML') || value.includes('Angular JS'))
    {
        await temps.click();
    }
}






})