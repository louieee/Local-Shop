
// Define your variables

const express = require('express')
const { connection, execute } = require('./Library/db')
const { Product } = require('./models/Product/product')
const { Transaction } = require('./models/Product/transaction')
const { User } = require('./models/User/user')
const { Buyer } = require('./models/User/buyer')
const { Seller } = require('./models/User/seller')
const { IndexRoutes } = require('./routes/Index/index')
const { ProductRoutes } = require('./routes/Product/product')
const {UserRoutes}  = require('./routes/User/user')


// Connect to database

const db_connect = connection.connect((error)=>{
    if (error) console.log(error.message) 
    console.log('Connected to mysql server')
    const db_create_sql = `CREATE DATABASE ${process.env.DATABASE}`
    connection.query(db_create_sql, (error, result)=>{
        if (error) {console.log(`${process.env.DATABASE} Database is created already`)}else{
        console.log(`${process.env.DATABASE} Database is created`)}
    })
})

// create database tables 

const user  = new User()
execute(user.createTable(), (data)=>{})

const seller  = new Seller()
execute(seller.createTable(), (data)=>{})

const buyer  = new Buyer()
execute(buyer.createTable(), (data)=>{})

const product  = new Product()
execute(product.createTable(), (data)=>{})

const transaction = new Transaction()
execute(transaction.createTable(), (data)=>{})



// Define the routes

const app = express()

app.use('/', IndexRoutes)
app.use('product/', ProductRoutes)
app.use('/user', UserRoutes)



// run server

app.listen(3000, () => console.log(`listening at http://localhost:3000`))
