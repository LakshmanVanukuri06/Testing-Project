const{test,expect}=require("@playwright/test")
const exp = require("node:constants")
test('Dropdown', async({page}) => {
await page.goto('https://testautomationpractice.blogspot.com/')
//await page.locator('#country').selectOption("India")
//await page.locator('#country').selectOption({Label:'India'})//label
///await page.locator('#country').selectOption({Value:'India'})//label
//await page.locator('#country').selectOption({index:'India'})//label
//await page.selectOption("#country", 'India')
//await page.waitForTimeout(5000)
 //const options=await page.locator("#country option")
 //await expect(options).toHaveCount(10)
//await page.$$('#country option')
//console.log('no of option', options.length)
//check presence of value in the dropdown--- 1st Approcah
//const listOfCountry=await page.locator('#country').textContent()
//await expect(listOfCountry.includes('India')).toBeTruthy()
//check presence of values in the dropdown --aproach2
const pages=await page.$$('#country option')
let status=false
for(const option of pages ){
  let value=console.log(await option.textContent())
  if(value.includes('France')){
     status =true
     break;
  }
  expect(status).toBeTruthy()
}
})