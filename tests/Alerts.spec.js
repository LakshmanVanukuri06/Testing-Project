const{test,expect}=require("@playwright/test")
test('Alerts', async({page}) =>{
await page.goto('https://testautomationpractice.blogspot.com/')

/// enabling alert handling or dialog window handlow
/*page.on('dialog', async dialog=>{
expect(dialog.type()).toContain('confirm')
expect(dialog.message()).toContain('Press a button!')
await dialog.accept();//cancel
})
await page.click("#confirmBtn")
await expect(page.locator('#demo')).toHaveText('You pressed OK!')
await page.waitForTimeout(5000)*/
    /// enabling alert promt alert
    page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('prompt')
    expect(dialog.message()).toContain('Please enter your name:')
    await expect(dialog.defaultValue()).toContain('Harry Potter')
    await dialog.accept('john');//cancel
    })
    await page.click("#promptBtn")
    await expect(page.locator('#demo')).toHaveText('Hello john! How are you today?')
    await page.waitForTimeout(5000)
    

})

