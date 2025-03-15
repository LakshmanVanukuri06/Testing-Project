exports.Performance =
class Performance {

constructor(page){

this.page = page;
this.Perfomancebtn=page.locator("//span[text()='Performance']")
this.Configurebtn=page.locator("//span[text()='Configure ']")
this.KPIBtn=page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[1]")
this.Addbtn=page.locator("(//button[normalize-space()='Add'])[1]")
this.KeyPerformanceIndicatorInput=page.locator("(//input)[2]")
this.JobTittlebtn=page.locator("//div[@class='oxd-select-text oxd-select-text--active']")
//this.JobtittleOptions=page.locator(".oxd-select-text-input")
this.MinimumRating=page.locator("((//input[@class='oxd-input oxd-input--active'])[3])")
this.errorMessage = page.locator("//span[normalize-space()='Should be a number between 0-100']"); // Replace with the actual error message selector if needed
this.saveBtn=page.locator("//button[normalize-space()='Save']")
this.searchbtn=page.locator("//button[normalize-space()='Search']")
}
async PerfomanceDashboard(KeyPerformancein){

await this.Perfomancebtn.click()
await this.Configurebtn.click()
await this.KPIBtn.click()
await this.Addbtn.click()
await this.KeyPerformanceIndicatorInput.fill(KeyPerformancein)

}

async jobTittleFun(JobtittleOptiondrpdown){
    await this.JobTittlebtn.click()
    await this.page.locator('.oxd-select-option', { hasText: JobtittleOptiondrpdown }).click();
}
async fillMinimumRating(value) {
    // Fill the input field with the provided value
    const stringValue = String(value);
    await this.MinimumRating.fill(stringValue);

    // Check if the input field only contains numbers
    const actualValue = await this.MinimumRating.inputValue();
    const isNumeric = /^[0-9]*$/.test(actualValue);

    if (!isNumeric) {
      // If not numeric, throw an error or handle it as needed
      throw new Error(
        `Invalid input: "${value}" contains non-numeric characters. Only numbers are allowed.`
      );
    }
    // Check if the error message is visible
    if (await this.errorMessage.isVisible()) {
      throw new Error(
        `Error message is visible: "${await this.errorMessage.textContent()}"`
      );
    }  
    
}
async Submit(){

await this.saveBtn.click()

}
async Searchclick(){
    await this.searchbtn.click()
}
}