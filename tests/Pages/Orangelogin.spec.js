import{test,expect} from '@playwright/test'
import { Login_page } from '../OrangeHrmFrame/Login_page'
import { Admin } from '../OrangeHrmFrame/Admin'
import { POM } from '../OrangeHrmFrame/POM'
import { Leave } from '../OrangeHrmFrame/Leave'
import { Logout } from '../OrangeHrmFrame/Logout'
import { Time } from '../OrangeHrmFrame/Time'
import { Recruitment } from '../OrangeHrmFrame/Recruitment'
import { Info } from '../OrangeHrmFrame/Info'
import { info } from 'console'
import { Performance } from '../OrangeHrmFrame/Performance'
import { Directory } from '../OrangeHrmFrame/Directory'
import { Claim } from '../OrangeHrmFrame/Claim'
import { Search } from '../OrangeHrmFrame/Search'
test('orangehrmlogin', async({page}) =>{

//Login
const Login1 = new Login_page(page)
await Login1.pageIn()
await Login1.login('Admin','admin123')
/*

//admin

const Admin1=new Admin(page)
await Admin1.newjob()
await Admin1.filljobtitlepage('testing','testingdescription')


//POM
/*const POM1=new POM(page)
await POM1.PIMClick()
await page.waitForTimeout(3000)
await POM1.newEmployee('testing125','Testing134@','524')
await POM1.createlogindetails('Admin4563','testing3434','testing3434')
*/
//Leave
/*
const Leave1 = new Leave(page)
await Leave1.Leavepage()
await Leave1.Leavedetails('Orange Test')
await page.waitForTimeout(3000)
await  Leave1.selectOption('CAN - FMLA')
await Leave1.fromdatefill('2025-23-02')
await page.waitForTimeout(3000)
await Leave1.todatefill('2025-23-02')
await page.waitForTimeout(3000)
await Leave1.comments('commentstesting') 
*/
//logout
/*const Logout1=new Logout(page)
await page.waitForTimeout(3000)
await Logout1.LogoutPage()
*/

// Time
/*const Time1=new Time(page)
await Time1.Timepage()
await Time1.ProjectDetails('Testing', ' testing', 'testingdescription')
*/
// Recruitment
/*const Recruitment1= new Recruitment(page)
await Recruitment1.candidates()
await Recruitment1.AddnewCandidate('Testing', 'testinglastname', 'Sales Representative', 'testing@testing.com ','1234567810')
await Recruitment1.uploadresume()
await page.waitForTimeout(3000)
await Recruitment1.otherwork()
*/
//info
/*const info1 = new Info(page)
await info1.Infoinputs('lisa','warner','dertel','525263','52585','VS0212021','2025-26-12','')
await info1.nationalitydrpdown('Indian')
//await info1.MaritalStatus('Married')
await info1.remainingFields('2000-15-06')
await page.waitForTimeout(3000)
await info1.Genderradio('Female')
*/
//Performance
/*
const Perfomance1 = new Performance(page)
await Perfomance1.PerfomanceDashboard('Low Rating')
await page.waitForTimeout(3000)
await Perfomance1.jobTittleFun('Chief Financial Officer')
await Perfomance1.fillMinimumRating('20')
await page.waitForTimeout(3000)
await Perfomance1.Submit()
await Perfomance1.jobTittleFun('Chief Financial Officer')

await Perfomance1.Searchclick()
await page.waitForTimeout(3000)
*/
// Directory
/*
const Directory1=new Directory(page)
await Directory1.GoEmployeeTab()
await Directory1.EmployeeMethod('sww')
await Directory1.jobtitle('Chief Executive Officer')
await Directory1.locationoptions('New York Sales Office')
await Directory1.submitmethod()

*/
//Claim
/*
const claim1=new Claim(page)
await claim1.claimmethod()
await claim1.EmployeeSearch('sww')
await claim1.Event('Medical Reimbursement')
await claim1.currencyMethod('Argentina Pesos')
await claim1.othertextfields('testing')
await page.waitForTimeout(3000)
/*
//search
/*
const search1=new Search(page)
await search1.searchForModule('PIM')
await search1.clickOnModule('PIM')
*/
})
