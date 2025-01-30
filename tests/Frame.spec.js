const{test,expect}=require('@playwright/test')
test('Frame', async({page}) =>{
await page.goto("https://ui.vision/demo/webtest/frames/")
//total frames
//const all=await page.frames()
//console.log("no of frameas",all.length )

// aproach 1-using name or url of the page
//const var=await page.frame({'name:'})
//const frame1=page.frame('{url:https://ui.vision/demo/webtest/frames/frame_1.html}')
//await frame1.fill("input[name='mytext1']",'testing')
//await page.waitForTimeout(5000)
//approach2input[name='mytext1']
const inputbox= await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
await inputbox.fill("Hello")
})