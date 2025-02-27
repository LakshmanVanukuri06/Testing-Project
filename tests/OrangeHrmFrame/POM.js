exports.POM=
class POM{

    constructor(page){
     this.page = page;
     this.POMbtn= page.locator("//span[text()='PIM']")
     this.addempbtn=page.locator("//a[normalize-space()='Add Employee']")
     this.firstnameInput=page.locator("input[placeholder='First Name']")
     this.lastnameInput=page.locator("input[placeholder='Last Name']")
     this.empIDInput=page.locator("(//input[@class='oxd-input oxd-input--active'])[2]")
     this.savebtn=page.locator("button[type='submit']")
     this.CreateLoginDetailsEnable=page.locator("//span[@class='oxd-switch-input oxd-switch-input--active --label-right']")
     this.createusernameinput=page.locator("(//input[@class='oxd-input oxd-input--active'])[3]")
     this.createpasswordInput=page.locator("(//input[@type='password'])[1]")
     this.createconformpasswordInput=page.locator("(//input[@type='password'])[2]")
}
async PIMClick(){
    await this.POMbtn.click()
    await this.addempbtn.click()
}
async newEmployee(firstname, lastname, empID){
   
    await this.firstnameInput.fill(firstname)
    await this.lastnameInput.fill(lastname)
    await this.empIDInput.fill(empID)
    
}
async createlogindetails(username,password,conformpassword){
    await this.CreateLoginDetailsEnable.click()
    await this.createusernameinput.fill(username)
    await this.createpasswordInput.fill(password)
    await this.createconformpasswordInput.fill(conformpassword)
    await this.savebtn.click()

}
}

