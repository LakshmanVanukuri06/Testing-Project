
exports.Recruitment =
class Recruitment {

constructor(page){
this.page=page;
this.Recruitmentbtn=page.locator("//span[text()='Recruitment']")
this.addbtn=page.locator("//button[normalize-space()='Add']")
this.firstnameInput=page.locator("input[placeholder='First Name']")
this.LastNameINput=page.locator("input[placeholder='Last Name']")
this.vacancy=page.locator("//div[@class='oxd-select-text oxd-select-text--active']")
this.vacancydrpdown=page.locator("//div[@class='oxd-select-text-input']")
this.emailInput=page.locator("(//input[@placeholder='Type here'])[1]")
this.contactInput=page.locator("(//input[@placeholder='Type here'])[2]")
this.Resume=page.locator(".oxd-file-button")
this.keepdata=page.locator("//div[@class='oxd-grid-item oxd-grid-item--gutters orangehrm-save-candidate-page-full-width orangehrm-save-candidate-page-grid-checkbox']//div[2]")
this.submitbtn=page.locator("button[type='submit']")

}



async candidates(){

    await this.Recruitmentbtn.click()
    await this.addbtn.click()

}
async AddnewCandidate(firstname, lastname, vacancydrp, email, contact) {
    await this.firstnameInput.fill(firstname);
    await this.LastNameINput.fill(lastname);
    await this.vacancy.click(); // Click the dropdown to open it
  
    await this.page.locator("//div[@class='oxd-select-option']").filter({ hasText: vacancydrp }).click(); // Select the option
}
async contactdetails(email, contact){
  await this.emailInput.fill(email)
  await this.contactInput.fill(contact)
}
  async uploadresume() {
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent('filechooser'),
      this.Resume.click(), // Assuming this.Resume is the .oxd-file-button
    ]);
    await fileChooser.setFiles("C:\\Users\\Lakshman Kumar V\\Downloads\\test.txt");
  }
    
    async otherwork(){

           await this.keepdata.click()
            await this.submitbtn.click()
    }
    
  }






