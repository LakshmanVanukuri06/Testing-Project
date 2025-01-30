const{test, expect}=require('@playwright/test')
test('DatePicker', async({page}) => {
await page.goto('https://testautomationpractice.blogspot.com/')
//await page.fill('#datepicker', '01/21/2025')
//await page.waitForTimeout(3000)
// date picker
const year='2025'
const month ='April'
const date='21'
await page.click('#datepicker')//open the calender
while(true){
    const currentyear= await page.locator('.ui-datepicker-year').textContent()
    const currentmonth= await page.locator('.ui-datepicker-month').textContent()
if(currentyear == year && currentmonth==month){
   break; 
}
await page.locator('[title="Next"]').click()// next btn
}
// dates selection using loop
const dates=await page.$$('.ui-state-default')
/*for(const dt of dates)
    {
if(await dt.textContent()==date){
    await dt.click()
    break;
}
}*/
//date without loop;
await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
await page.waitForTimeout(5000)
})