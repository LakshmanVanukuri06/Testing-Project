import { test, expect } from '@playwright/test';
let page;
test.beforeAll(async()=>{
console.log('this is before all')
})
test.afterAll(async()=>{
console.log("after  all")
})
test.beforeEach(async()=>{
console.log("before each is executed")
})
test.afterEach(async()=>{
console.log("after each")
})
test.describes('Group1',() =>{  ///it only executed if you put only
    test('Testing1', async({page})=> {
        console.log('this is testing1')
        })
        test('Testing2', async ({ page }) => {
            console.log('this is testing2')
            })

})
 test.describe('Group2', () =>{
    test('Testing3', async ({ page }) => {
        console.log('this is testing3')
        })
        test('Testing4', async ({ page }) => {
            console.log('this is testing4')
            })
            test('Testing5', async ({ page }) => {
                console.log('this is testing5')
                })

 })
    