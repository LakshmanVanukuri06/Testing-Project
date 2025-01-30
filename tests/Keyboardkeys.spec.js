const{test,expect}=require('@playwright/test')
test('Keyboardkeys', async({page}) =>{
await page.goto('https://gotranscript.com/text-compare')
await page.locator('[name="text1"]').fill("welcome to the world")

// ctrl+A

await page.keyboard.press('Control+A')

//ctrl+c
await page.keyboard.press('Control+C')
//tab
await page.keyboard.down('Tab')
await page.keyboard.up('Tab')
await page.keyboard.press('Control+V')

await page.waitForTimeout(5000)
//ctrl+v


})