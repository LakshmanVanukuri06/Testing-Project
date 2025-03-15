exports.Claim = 
class Claim{

constructor(page){
this.page=page;
this.claimbtn=page.locator("//span[text()='Claim']")
this.EmployeeNameInput=page.locator("(//input[@placeholder='Type for hints...'])[1]")
this.Assignclaimbtn=page.locator("//button[normalize-space()='Assign Claim']")
this.Eventdrpdown=page.locator("(//div[@class='oxd-select-text oxd-select-text--active'])[1]")
this.currencydrpdown=page.locator("(//div[@class='oxd-select-text oxd-select-text--active'])[2]")
this.remark=page.locator("(//textarea[@class='oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical'])[1]")
}
async claimmethod(){
    await this.claimbtn.click()
    await this.Assignclaimbtn.click()
}

async EmployeeSearch(employee){

    await this.EmployeeNameInput.fill(employee)
    await this.page.waitForSelector('.oxd-autocomplete-dropdown')
 await this.page.waitForSelector('.oxd-autocomplete-option')
 const suggestionSelector = `.oxd-autocomplete-option:has-text("${employee}")`;
     //await this.suggestionSelector.hasText("${employee}")
   //await this.page.waitForSelector(suggestionSelector);
     // Click the suggestion
     await this.page.click(suggestionSelector);

}
 async Event(eventoptions){
    await this.Eventdrpdown.click()
    await this.page.waitForSelector('.oxd-select-dropdown')
    await this.page.locator('.oxd-select-option').filter({hasText : eventoptions}).click()
 }
 async currencyMethod(currencyInput){
    await this.currencydrpdown.click()
    await this.page.waitForSelector('.oxd-select-dropdown')
    await this.page.locator('.oxd-select-option').filter({hasText : currencyInput}).click()
 }
async othertextfields(remarkinput){
    await this.remark.fill(remarkinput)
    await this.page.locator("button[type='submit']").click()
}
}




