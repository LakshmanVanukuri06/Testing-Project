const{test,expect}=require("@playwright/test")
let page;

test.beforeAll(async({browser})=>{
    page=await browser.newPage()
    await page.goto('https://www.demoblaze.com/')
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('testing@1234')
    await page.locator('#loginpassword').fill('testing')
    await page.locator('button[onclick="logIn()"]').click();

})
    //hompe page
    test.afterAll(async() =>{

        await page.locator('#logout2').click()
    
    })
test('Home Page Test', async() =>{
    
//login


//hompe page
const product=await page.$$('.hrefch')
await expect(product).toHaveLength(9)
})


test('Add Product to the cart', async()=>{



//add product to the cart
await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
await page.locator("//a[normalize-space()='Add to cart']").click()
await page.on('dialog', async dialog =>{
expect(dialog.message()).toContain('Product added')
await dialog.accept();

})


})
//logout


