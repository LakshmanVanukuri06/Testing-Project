exports.Logout = 
class Logout {

constructor(page){
this.page=page;
this.profilelogo= page.locator("//span[@class='oxd-userdropdown-tab']")
this.Logoutbtn= page.locator("(//a[normalize-space()='Logout'])[1]")

}

async LogoutPage(){

await this.profilelogo.click()
 await this.Logoutbtn.click()


}






}