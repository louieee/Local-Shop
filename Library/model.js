var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: process.env.PASSWORD
});

con.connect(function(err) {
         if (err) console.log(err);
         console.log('Connected!');
});





class Model {
    insert(data){}

    update(item, data){}

    delete(item){}

    read(id){}

    readAll(){}

    readQuery(query){}


}
exports.Model = Model