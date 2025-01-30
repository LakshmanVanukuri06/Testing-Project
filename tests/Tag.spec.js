const{test,expect}=require('@playwright/test')
test('Test1@sanity', async({page})=>{
console.log('testing1')
})
test('Test2@sanity', async({page})=>{
    console.log('testing1')
})
    test('Test3@smooke', async({page})=>{
        console.log('testing1')
    })
        test('Test4@smooke', async({page})=>{
            console.log('testing1')
        })
            test('Test5@functional', async({page})=>{
                console.log('testing1')
            })
                test('Test6@sanity', async({page})=>{
                    console.log('testing1')

})
