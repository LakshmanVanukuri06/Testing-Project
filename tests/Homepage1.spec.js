const{test, expect}= require('@playwright/test');// importing packages
test('Home Page', async({page})=>{
await page.goto('https://demoblaze.com/index.html');
const pageTitle=page.title();
console.log('page tittle is ', pageTitle);
await expect(page).toHaveTitle('STORE');
const url=page.url();
console.log('page url is ', url);
//await expect(page).toHaveURL('https://demoblaze.com/index.html/');
 await page.close();










}






)

