exports.Info=
class Info{

constructor(page){
this.page=page;
this.infobtn=page.locator("//span[text()='My Info']")
this.FirstnameInput=page.locator("input[placeholder='First Name']")
this.MidnamenameInput=page.locator("input[placeholder='Middle Name']")
this.LastnameInput=page.locator("input[placeholder='Last Name']")
this.EmpidINput=page.locator("(//input[@class='oxd-input oxd-input--active'])[1]")
this.otherIdInput=page.locator("(//input[@class='oxd-input oxd-input--active'])[3]")
this.driverlicenceINput=page.locator("(//input[@class='oxd-input oxd-input--active'])[4]")
this.LicenceExperyDateInput=page.locator("(//input[@placeholder='yyyy-dd-mm'])[1]")
this.nationalityInput=page.locator("(//div[@class='oxd-select-text oxd-select-text--active'])[1]")
this.MaritualstatusInput=page.locator("(//div[@class='oxd-select-text oxd-select-text--active'])[2]")
this.DOBInput=page.locator("(//input[@placeholder='yyyy-dd-mm'])[2]")
this.GenderInput=page.locator("(//span[@class='oxd-radio-input oxd-radio-input--active --label-right oxd-radio-input'])")
this.submitbtn=page.locator("(//button[@type='submit'][normalize-space()='Save'])[1]")
}
async Infoinputs(firstname,midname,lastname,empid,other,driverlicence,licenceExpery){
    await this.infobtn.click()
    await this.FirstnameInput.click()
await this.FirstnameInput.fill(firstname)
await this.MidnamenameInput.fill(midname)
await this.LastnameInput.fill(lastname)
await this.EmpidINput.click()

await this.EmpidINput.fill(empid)

await this.otherIdInput.fill(other)
await this.driverlicenceINput.click()
await this.driverlicenceINput.fill(driverlicence)
await this.LicenceExperyDateInput.click()
await this.LicenceExperyDateInput.fill(licenceExpery)
await this.LicenceExperyDateInput.click()
}
async nationalitydrpdown(nationalitydrpdownoptions){
    await this.nationalityInput.click()
  
    //const nationalityoptions=await this.page.locator("oxd-select-options")
 // await this.nationalityoptions.filter({hasText:nationalitydrpdownoptions}).click()  
 //
 await this.page.locator("//div[@class='oxd-select-option']").filter({ hasText: nationalitydrpdownoptions }).click();
}
async MaritalStatus(Status){
await this.MaritualstatusInput.click()
await this.page.locator("//div[@class='oxd-select-option']").filter({hasText: Status}).click()

}
async remainingFields(DOB){

await this.DOBInput.click()
await this.DOBInput.fill(DOB)
await this.DOBInput.click()
}
async Genderradio(Gender){
    const label = await this.page.locator('label', { hasText: Gender });
    await label.click();
    await this.submitbtn.click()
  }
}


