exports.Admin =
class Admin{
constructor(page){
this.page=page;
this.Admindash=page.locator("//span[text()='Admin']")
this.job=page.locator("//span[normalize-space()='Job']")
this.jobtitle=page.locator("//a[normalize-space()='Job Titles']")
this.addbtn=page.locator("//button[normalize-space()='Add']")
this.newjobtitleInput=page.locator("(//input[@class='oxd-input oxd-input--active'])[2]")
this.jobtitledescriptionInput=page.locator("textarea[placeholder='Type description here']")
this.save=page.locator("button[type='submit']")

}
async newjob(){
    await this.Admindash.click()
    await this.job.click()  
    await this.jobtitle.click()
    await this.addbtn.click()
} 
async filljobtitlepage(jobtitle, jobdescription){
await this.newjobtitleInput.fill(jobtitle)
await this.jobtitledescriptionInput.fill(jobdescription)
await this.save.click()

}
}