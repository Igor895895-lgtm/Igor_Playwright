//import axios from 'axios'
const axios = require('axios')
const {expect} = require('chai')
const data = require('./data/dummy_data.json')
const fs = require('fs-extra')

describe('Actions for users on dummy website', async() => {
    let baseUrl = 'https://dummyjson.com';
    let userId
    let userName
    let userLname
    let userPwd


it.skip('Create user', async() => {

    const createUser = await axios.post(`${data.baseUrl}/users/add`,
    {
        'firstName': 'Muhammad',
        'lastName': 'Ovi',
        'age': 250,
    },
    {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log(createUser.data)
    userId = createUser.data.id
})


// it('get user by id', async() => {
//     const getUser = await axios.get(`${data.baseUrl}/users/1`)
//     console.log(getUser.data)
//     userName = getUser.data.username
//     userPwd = getUser.data.password
//     expect(getUser.status).equal(200)
// })

// it('get credentials', async() => {
//     const getTokenData = await axios.post(`${data.baseUrl}/auth/login`,
//     {
//         'username': userName,
//         'password': userPwd,
//         expiresInMins: 30
//     },
//         { headers: {
//         'Content-Type': 'application/json'
//     }
// })
// console.log(getTokenData)
// token_value = getTokenData.data.token
// data.token = token_value
// fs.writeFileSync('api_requests/data/dummy_data.json', JSON.stringify(data))
// })



it('create product', async() => {
    const createProduct = await axios.post(`${data.baseUrl}/products/add`,
    {
        'title': 'MyOwnProduct'
    },
    { 
        headers:
        {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.token}`
        }
    })
    console.log(createProduct.data)
    expect(createProduct.status).equal(200)
})

it('get user by search params', async() => {
    const params = new URLSearchParams([['key', 'hair.color'], ['value', 'Brown']])
    const getUserByParams = await axios.get(`${data.baseUrl}/users/filter`, {params})
    expect(getUserByParams.status).equal(200)
    //userName = getUserByParams.data.users[2]
    userName = getUserByParams.data.users[2].firstName
    userId = getUserByParams.data.users[2].id
    userLname = getUserByParams.data.users[2].lastName
    //console.log(userName)
    //Arely
})

it('get user by id and compare values', async () => {
    // userId = number(userId)
    const getUser = await axios.get(`${data.baseUrl}/users/${userId}`)
    console.log(getUser.data)
    expect(userName).equal(getUser.data.firstName)
    expect(userLname).equal(getUser.data.lastName)
})


it.skip('update user data', async(userId, userName, userLname) => {
    const updateUserData = await axios.patch(`${data.baseUrl}/users/${userId}`,
    {    
        'firstName': 'Marko',
        'lastName': 'Polo',
    }, 
{
    headers: {
        'Content-Type': 'application/json'
    }
})
console.log(updateUserData)
console.log(updateUserData.statusText)
console.log(updateUserData.status)
})
})