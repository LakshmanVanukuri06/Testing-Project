const{test,expect}=require("@playwright/test")
test('page screenshot', async({page})=>{
await page.goto('https://demo.opencart.com/')
await page.screenshot({path:'tests\Screenshot'+Date.now()+'HomePage.png'})




})
test('full screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests\Screenshot'+Date.now()+'Fullpage.png',fullPage:true})
    
    
    
})
test.only('element screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.locator('//*[@id="content"]/div[2]/div[1]/div').screenshot({path:'tests\Screenshot'+Date.now()+'ParticluarElement.png'})
    

})