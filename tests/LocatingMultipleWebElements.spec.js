const{test, expect}= require('@playwright/test');
test('LocatingMultipleWebElements', async({page}) => {
await page.goto("https://demoblaze.com/");
/*const links=await page.$$('a')
for(const link of links)
{
const linkText=await link.textContent();
console.log(linkText)
}
*/
page.waitForSelector("//div[@id='tbodyid']//h4/a");
const pageHeadings=await page.$$("//div[@id='tbodyid']//h4/a");
for(const imageheadings of pageHeadings){
    const print=await imageheadings.textContent();
    console.log(print);

}




})