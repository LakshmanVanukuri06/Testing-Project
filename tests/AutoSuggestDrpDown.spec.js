const{test,expect}=require('@playwright/test')
test('AutoSuggestDrpDown.spec', async({page}) =>{
await page.goto("https://www.redbus.in/")
await page.locator('#src').fill("Delhi")
await page.waitForSelector("//li[@class='sc-iwsKbI jTMXri']/div/text[1]")
const fromCityVaraible=await page.$$("//li[@class='sc-iwsKbI jTMXri']/div/text[1]")
for(let options of fromCityVaraible)
{
const value=await options.textContent()
//console.log(value)
if(value.includes('Uttam Nagar')){
 await options.click();   
}
}
await page.waitForTimeout(3000)
})