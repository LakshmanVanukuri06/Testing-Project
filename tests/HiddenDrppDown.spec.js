const{test,expect}=require("@playwright/test")
test('HiddenDrppDown.spec', async({page}) =>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("input[placeholder='Username']").fill('Admin')
await page.locator("//input[@name='password']").fill('admin123')
await page.locator("//button[@type='submit']").click();
await page.waitForTimeout(3000)
await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click()
await page.locator("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[3]").click()
//waiting for the options
await page.waitForTimeout(3000)
const hiddendrp=await page.$$("//div[@class='oxd-select-wrapper']/div")
for(let drps of hiddendrp){
    const value=await drps.textContent();
    //console.log(value)
    if(value.includes('QA Engineer')){
        await drps.click()
        await page.waitForTimeout(3000)
    }
}

})