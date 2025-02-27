exports.Time =
class Time{

constructor(page){
this.page=page
this.Time=page.locator("//span[text()='Time']")
this.ProjectInfo=page.locator("//span[text()='Project Info ']")
this.projects=page.locator("(//li/a[@class='oxd-topbar-body-nav-tab-link'])[2]")
this.Addprojectbtn=page.locator("//button[normalize-space()='Add']")
this.Name=page.locator("(//input[@class='oxd-input oxd-input--active'])[2]")
this.Description=page.locator("//textarea[@placeholder='Type description here']")
this.savebtn=page.locator("//button[normalize-space()='Save']")
}

async Timepage(){
this.Time.click()
this.ProjectInfo.click()
this.projects.click()
this.Addprojectbtn.click()
}
async ProjectDetails(ProjectName,CustomerName, Description){
await this.Name.fill(ProjectName)
await this.Description.fill(CustomerName)
await this.savebtn.click() 


}



}