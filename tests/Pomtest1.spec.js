import {test, expect} from '@playwright/test';
import { LoginPage } from './DeepSeekFrame/Pages2/LoginPage';
import { HomePage } from './DeepSeekFrame/Pages2/HomePage';

import {CartPage } from './DeepSeekFrame/Pages2/CartPage';



test('test', async({page}) => {
//login
const login= new LoginPage(page);  // it is expecting the page fixture which are given into the constructer
await login.goToLoginPage();
await login.login('testing@12345','testing123');
await page.waitForTimeout(3000);


///homepage
const home=new HomePage(page)
await home.addProductToCart('Samsung galaxy s6')
await page.waitForTimeout(3000)
await home.gotoCart();



///cart

const cart=new CartPage(page)
await page.waitForTimeout(3000)
const status=await cart.checkProductList('Samsung galaxy s6')
expect(await status).toBe(true);



})