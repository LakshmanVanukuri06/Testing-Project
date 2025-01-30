exports.Login=class Login{
constructor(page){
 this.page =page
 this.Login='#login2'
 this.UserIn='#loginusername'
 this.PasswordIn='#loginpassword'
 this.Loginbtn="button[onclick='logIn()']"
 
}
async pageIn(){
  await this.page.goto('https://demoblaze.com/')
}
async gotoLogin(username, passwordInput){
await this.page.locator(this.Login).click()
await this.page.locator(this.UserIn).fill(username)
await this.page.locator(this.PasswordIn).fill(passwordInput)
    await this.page.locator(this.Loginbtn).click();
}


}

