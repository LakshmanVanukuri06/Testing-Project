const{test,expect}=require('@playwright/test');
var userid;
test("Get User", async({request}) =>{
const response=await request.get('https://reqres.in/api/users?page=2')
console.log(await response.json())
expect(response.status()).toBe(200)

})

test("create User", async({request}) =>{
const response=await request.post('https://reqres.in/api/users',

    {

               data:{ "name":"Krishna","job":"trainer"
               }, headers:{
            "Accept":"application/json"}});   
console.log(await response.json())
expect(response.status()).toBe(201)
var res=await response.json()
 userid=res.id
})

test("UpdateUser", async({request}) =>{
    const response=await request.put('https://reqres.in/api/users/'+ userid,

        { 
    
                   data:{ "name":"luccku","job":"silpler"
                   }, headers:{
                "Accept":"application/json"}});   
    console.log(await response.json())
    expect(response.status()).toBe(200)
   
})
test("DeleteUser", async({request}) =>{

const response=await request.delete('https://reqres.in/api/users/'+ userid)
expect(response.status()).toBe(204)
})

