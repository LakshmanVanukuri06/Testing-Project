const{test,expect}=require('@playwright/test');
test.only("Get User", async({request}) =>{
const response=await request.get('https://reqres.in/api/users?page=2')
console.log(await response.json())
expect(response.status()).toBe(200)

})

test("createUSer", async({request}) =>{

})
test("UpdateUser", async({request}) =>{



})
test("DeleteUser", async({request}) =>{



})

