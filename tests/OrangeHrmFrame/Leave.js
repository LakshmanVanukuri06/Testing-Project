exports.Leave=
class Leave{

constructor(page){

this.page=page;
this.Leavebtn=this.page.locator(" //span[text()='Leave']")
this.AssignLeavebtn=this.page.locator("//a[normalize-space()='Assign Leave']")
this.NameoftheEmployee=page.locator("//input[@placeholder='Type for hints...']")
this.Leavetype=this.page.locator("//div[@class='oxd-select-text oxd-select-text--active']")
this.fromdateInput=this.page.locator("(//input[@placeholder='yyyy-dd-mm'])[1]")
this.todateInput=this.page.locator("//div[@class='oxd-layout-context']//div[2]//div[1]//div[2]//div[1]//div[1]//input[1]")
this.commentsInput=this.page.locator(".oxd-textarea.oxd-textarea--active.oxd-textarea--resize-vertical")
this.assignbtn=this.page.locator("button[type='submit']")
this.alerts=this.page.locator("//button[normalize-space()='Ok']")
}

async Leavepage(){
    await this.Leavebtn.click()
    await this.AssignLeavebtn.click()
}
async Leavedetails(EmployeeName) {
    await this.NameoftheEmployee.fill(EmployeeName);
    // Wait for the dropdown to be present
    await this.page.waitForSelector('.oxd-autocomplete-dropdown');
    // Wait for the suggestions to be present
    await this.page.waitForSelector('.oxd-autocomplete-option');
    // Use a more specific selector to find the correct suggestion
    const suggestionSelector = `.oxd-autocomplete-option:has-text("${EmployeeName}")`;
    // Wait for the specific suggestion to be present
    await this.page.waitForSelector(suggestionSelector);
    // Click the suggestion
    await this.page.click(suggestionSelector);
  }
 
    async selectOption(optionToSelect) {
        await this.Leavetype.click()
        await this.page.waitForSelector('.oxd-select-dropdown');
        
        const optionSelector = `.oxd-select-dropdown > div:has-text("${optionToSelect}")`;
   
        await this.page.click(optionSelector);
      }
 async fromdatefill(fromdatepicker){

    await this.fromdateInput.fill(fromdatepicker)
 }
async todatefill( todatepicker){
    await this.todateInput.clear()

    await this.todateInput.fill(todatepicker)
}
async comments(commentstext){


    await this.commentsInput.fill(commentstext)
    await this.assignbtn.click()
    await this.alerts.click()
}
    
}

