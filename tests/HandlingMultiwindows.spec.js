const{test, expect, chromium}=require('@playwright/test')
const exp = require('constants')
test.only('Handle Pages/Windows', async()=>{
    const browser=await chromium.launch()
   const context=await browser.newContext()// browser contains context-- contains multiple pages
   const page1=await context.newPage()
 

   // const allpages=context.pages()//it will get all the pages
//console.log("no of pages", allpages.length)
await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await expect(page1).toHaveTitle('OrangeHRM')
const pagePromise=context.waitForEvent('page')
  await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
  const newPage=await pagePromise;
  await expect(newPage).toHaveTitle('Human Resources Management Software | OrangeHRM')
await newPage.waitForTimeout(3000)
await browser.close()
}

)