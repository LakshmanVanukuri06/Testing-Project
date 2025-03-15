exports.Directory =
class Directory{
constructor(page){
    this.page=page;
    this.Directorybtn=page.locator("//span[text()='Directory']")
    this.EmployeeNameInput=page.locator("(//input[@placeholder='Type for hints...'])[1]")
    this.JobtitledrpdownInput=page.locator("(//div[@class='oxd-select-text oxd-select-text--active'])[1]")
    this.locationdrpoption=page.locator("(//div[@class='oxd-select-text oxd-select-text--active'])[2]")
    this.submitbtn=page.locator("button[type='submit']")
}
async GoEmployeeTab(){
await this.Directorybtn.click()

}

async EmployeeMethod(employee){

    await this.EmployeeNameInput.fill(employee)
   await this.page.waitForSelector('.oxd-autocomplete-dropdown')
await this.page.waitForSelector('.oxd-autocomplete-option')
const suggestionSelector = `.oxd-autocomplete-option:has-text("${employee}")`;
    //await this.suggestionSelector.hasText("${employee}")
  //await this.page.waitForSelector(suggestionSelector);
    // Click the suggestion
    await this.page.click(suggestionSelector);
}
async jobtitle(jobtitlename){

await this.JobtitledrpdownInput.click()
//await this.page.waitForSelector('.oxd-autocomplete-dropdown')
await this.page.waitForSelector('.oxd-select-option')
//const drpdownoptions = `.oxd-select-option:has-text("${jobtitlename}")`;
await this.page.locator(".oxd-select-option").filter({hasText: jobtitlename}).click()
     //await this.page.click(drpdownoptions)
}
async locationoptions(locationdrp){
await this.locationdrpoption.click()
await this.page.waitForSelector(".oxd-select-option")
await this.page.locator(".oxd-select-option").filter({hasText : locationdrp}).click()

}
async submitmethod(){
   await this.page.waitForTimeout(3000) 
await this.submitbtn.click()
await this.page.waitForTimeout(3000) 
}
}
