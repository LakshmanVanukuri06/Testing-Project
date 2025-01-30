const{test,expect}=require('@playwright/test')
test('HandleCheckBox', async({page}) =>{
await page.goto("https://seleniumbase.io/demo_page")
await page.locator("//input[@id='checkBox1']").check();
expect(page.locator("//input[@id='checkBox1']")).toBeChecked()
await page.waitForTimeout(5000)
///Multiple checkBoxes
 const checkboxLocator = [
    "//input[@id='checkBox2']",
    "//input[@id='checkBox3']",
    "//input[@id='checkBox4']"
 ];

{
     await page.locator(locator).check();
}

await page.waitForTimeout(5000)
for(const locator of checkboxLocator){
await page.locator(locator).check()
}

   if(await expect(page.locator("//input[@id='checkBox3']").isChecked())){
     await expect(page.locator("//input[@id='checkBox3'").uncheck())
}
})