const dotenv = require('dotenv')
dotenv.config({path:'LocalShop/.env'})
const express = require('express')
const mysql = require('mysql')

console.log(process.env.DATABASE)
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: process.env.PASSWORD

})

const db_connect = connection.connect((error)=>{
    if (error) console.log(error) 
    console.log('Connected to mysql server')
    const db_create_sql = `CREATE DATABASE ${process.env.DATABASE}`
    connection.query(db_create_sql, (error, result)=>{
        if (error) {console.log(`${process.env.DATABASE} Database is created already`)}else{
        console.log(`${process.env.DATABASE} Database is created`)}
    })
})


const app = express()


app.get('/', (request, result)=>{ 
    result.send('Welcome to Local Shop.')
    db_connect
})


app.listen(3000, () => console.log(`listening at http://localhost:3000`))