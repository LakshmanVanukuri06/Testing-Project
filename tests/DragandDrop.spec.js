const{test, expect}=require("@playwright/test")
const internal = require("stream")
test('DragandDrop', async({page})=> {
await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
const rome=await page.locator('#box6')
const italy=await page.locator('#box106')
/*await rome.hover()
await page.mouse.down()


await italy.hover();
await page.mouse.up()
await page.waitForTimeout(5000)*/
//aproach2
await rome.dragTo(italy)
await page.waitForTimeout(5000)

})