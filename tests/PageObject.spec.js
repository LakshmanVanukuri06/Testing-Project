import {test, expect} from '@playwright/test';
import { Login } from './FrameWork/Login';
test('PageObject', async({page}) =>{
//login
const login=new Login(page)
await login.pageIn()


await login.gotoLogin('testing@1234', 'testing')
await page.waitForTimeout(3000)



//home page








// cart




})