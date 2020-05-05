const dotenv = require('dotenv')
dotenv.config({path:'LocalShop/.env'})
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: process.env.PASSWORD,
    database : process.env.DATABASE

})

exports.connection =   connection