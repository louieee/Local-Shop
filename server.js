const express = require('express')
const { connection } = require('./Library/db')
const { Product } = require('./models/Product/product')
const { Transaction } = require('./models/Product/transaction')
const { User } = require('./models/User/user')
const { Buyer } = require('./models/User/buyer')
const { Seller } = require('./models/User/seller')




const db_connect = connection.connect((error)=>{
    if (error) console.log(error.message) 
    console.log('Connected to mysql server')
    const db_create_sql = `CREATE DATABASE ${process.env.DATABASE}`
    connection.query(db_create_sql, (error, result)=>{
        if (error) {console.log(`${process.env.DATABASE} Database is created already`)}else{
        console.log(`${process.env.DATABASE} Database is created`)}
    })
})
const user  = new User()
user.createTable()

const seller  = new Seller()
seller.createTable()

const buyer  = new Buyer()
buyer.createTable()

const product  = new Product()
product.createTable()

const transaction = new Transaction()
transaction.createTable()





const app = express()


app.get('/', (request, result)=>{ 
    result.send('Welcome to Local Shop.')
    db_connect
})


app.listen(3000, () => console.log(`listening at http://localhost:3000`))