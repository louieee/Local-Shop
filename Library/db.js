const dotenv = require('dotenv')
dotenv.config({path:'LocalShop/.env'})
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: 'MONKEYSex',
    database : 'LocalShop'

})

connection.connect(function(error) {
    if (error) console.log(error.message)
});

const execute = (sql, callback) =>{
    connection.query(sql, (error, result)=>{
        if (!error) {
            return callback(result[0])
        }
    })
    
}



exports.connection =   connection
exports.execute = execute