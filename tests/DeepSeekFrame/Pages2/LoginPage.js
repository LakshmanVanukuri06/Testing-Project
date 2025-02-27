exports.LoginPage=    // we need to put export inorder to use this other files
class LoginPage{
   constructor(page){   // why put page it a fixture- it is reusable between all files 
    this.page=page;//attributes 
    this.loginLink = "#login2 "
    this.usernameInput="#loginusername"
    this.passwordInput ="#loginpassword "
    this.loginButton=" button[onclick='logIn()']"

   }
     

async goToLoginPage(){
    await this.page.goto('https://demoblaze.com/')

}
async login(Username, pass){
  await this.page.locator(this.loginLink).click()
  await this.page.locator(this.usernameInput).fill(Username)
  await this.page.locator(this.passwordInput).fill(pass)
   await this.page.locator(this.loginButton).click()
}

}