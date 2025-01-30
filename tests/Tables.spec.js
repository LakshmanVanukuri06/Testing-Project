const{test, expect}=require('@playwright/test')
test('Tables', async({page}) => {
await page.goto('https://testautomationpractice.blogspot.com/')
// count no of rows and columns in the table

const table=await page.locator('#productTable')
const coloumsn=await table.locator('thead tr th')
console.log("no. of columsns is ",  await coloumsn.count())
expect(await coloumsn.count()).toBe(4)
 const rows=await table.locator('tbody tr')
 console.log("No of rows", await rows.count())

expect(await rows.count()).toBe(5)
// select the check box for product 4
/*const row=rows.filter({
has:page.locator('td'),
hasText:'Tablet'

await row.locator('input').check()

*/
//select multiple products by using resuable function
//await selectProduct(rows,page,'Smartphone')
//await selectProduct(rows,page,'	Laptop')
//await selectProduct(rows,page,'	Tablet')
//4 print all product details using loop
/*for(let i=0;i<await rows.count();i++){
   const row=rows.nth(i)
 const tds=row.locator('td')
for(let j=0;j<await tds.count()-1;j++){
    console.log(await tds.nth(j).textContent())
}
}*/
//read all the data from the pages in the tables
const pages=await page.locator('.pagination li a')
console.log("no of pages", pages.count())
for(let p=0; p< await pages.count(); p++){
    if(p>0){
        await pages.nth(p).click()
    }
for(let i=0;i<await rows.count();i++){
    const row=rows.nth(i)
  const tds=row.locator('td')
 for(let j=0;j<await tds.count()-1;j++){
     console.log(await tds.nth(j).textContent())
 }
 }
 await page.waitForTimeout(3000)
}

await page.waitForTimeout(3000)



})
//async function selectProduct(rows, page,name)
//{

/*const Matchedrow=rows.filter({
    has:page.locator('td'),
    hasText:'name'
})*/
//await Matchedrow.locator('input').check()

//}