// 1. import all dependencies
const express = require("express")
const app = express()
const { faker } = require('@faker-js/faker')
// 2. express configuration
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// faker: create a class
class User{
    constructor(){
        this.password = faker.internet.password(20)
        this.email = faker.internet.exampleEmail()
        this.phoneNumber = faker.phone.number()
        this.lastName = faker.name.lastName()
        this.firstName = faker.name.firstName()
        this._id = faker.database.mongodbObjectId()
    }
}

class Company{
    constructor(){
        this._id = faker.database.mongodbObjectId()
        this.name = faker.name.findName()
        this.street = faker.address.streetName()
        this.address ={
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        zipCode: faker.address.zipCode(),
        country :faker.address.country()
    }
}
}
//3. routes
app.get("/api/randomName", (req, res) =>{
    const randomName = faker.name.findName()
    res.json(randomName)
})

app.get("/api/users/new", (req, res) => {
    const newUser = new User()
    res.json(newUser)

})

app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company()
    res.json(newCompany)

})

// 4. listen to the port
app.listen(8000, ()=> console.log(`Listening to port : 8000`))
