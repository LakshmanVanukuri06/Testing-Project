

const{test,expect}=require('@playwright/test')
const exp = require('constants')
test('Assertions', async({page}) => {
await page.goto('https://demo.nopcommerce.com/register')
//expect page.toHaveURL
//await expect(page).toHaveURL
//expect(page).toHaveTittle
//await expect(page).toHaveTitle('Free and open-source eCommerce platform. ASP.NET Core based shopping cart. - nopCommerce')
//expect(page).toBeVisible
/*const loc=await page.locator('navigation-body')
await page(loc).toBeVisible();*/
//expect(locator).enebale
/*const element=await page.locator("//a[@title='Link to this post #122654']")
await expect(element).toBeEnabled();*/

const radiobtn=await page.locator("//input[@id='gender-male']")
await  radiobtn.click()
await expect(radiobtn).toBeChecked()
// CheckBOx is checkced or not
const Checkbox=await page.locator("//input[@id='Newsletter']")
expect(Checkbox).toBeChecked();
// attribute is present or not 
const Attribute=await page.locator("#register-button")
await expect(Attribute).toHaveAttribute('type', 'submit')

//ToHaveText(Asssertion) -- elemnet matches the text'
await expect( page.locator('.page-title h1')).toHaveText('Register')
//TOContains text--- element partially mnatche
await expect( page.locator('.page-title h1')).toContainText('Regi')
//value is enter is present or not
const email=await page.locator('#Email')
await email.fill('testing@')
 await expect(email).toHaveValue('testing@')
 //toHave COunts used mostly in dropboxes
 const DMonthVlues=await page.locator("select[name='DateOfBirthMonth'] option")
 await expect(DMonthVlues).toHaveCount(13)
})