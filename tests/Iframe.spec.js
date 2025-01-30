const{test,expect}=require('@playwright/test')
test('Iframe', async({page}) =>{
await page.goto("https://ui.vision/demo/webtest/frames/")
//total frames
const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
//await frame3.locator("input[name='mytext3']").fill("testing")
//nested frame
const childFrames=await frame3.childFrames()
 await childFrames[0].locator("div[id='i6'] div[class='rseUEf nQOrEb']").click()
 
await page.waitForTimeout(5000);

})