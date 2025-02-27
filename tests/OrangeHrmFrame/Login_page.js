exports.Login_page =
class Login_page{
constructor(page){
this.page=page;
this.usernameInput= page.locator("(//input[@placeholder='Username'])[1]")
this.passwordInput=page.locator("(//input[@placeholder='Password'])[1]")

this.loginbtn=page.locator("button[type='submit']")

}
async pageIn(){
await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
}
async login(username,pass){

await this.usernameInput.fill(username)
await this.passwordInput.fill(pass)
await this.loginbtn.click()

}



}






