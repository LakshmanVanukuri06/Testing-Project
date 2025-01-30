const{test,expect}=require("@playwright/test")
test('page screenshot', async({page})=>{
await page.goto('https://demo.opencart.com/')
await page.screenshot({path:'tests\Screenshots'+Date.now()+'HomePage.png'})




})
test('full screenshot', async({page})=>{

})
test('element screenshot', async({page})=>{


})