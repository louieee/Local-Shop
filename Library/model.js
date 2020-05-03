const mysql = require('mysql');




const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: process.env.PASSWORD

})






class Model {
    execute(sql){
        connection.connect((error)=>{
        if (error) console.log(error) 
            console.log('Connected to mysql server')
            connection.query(sql, (error, result)=>{
                if (error) {console.log(error.sqlMessage)}else{
                console.log(`inserted`)
                return result
            }

                
        })
    })
        
    }

    bool_check(data, item){
        return typeof data[item] !== 'undefined' & item !== '__str__' & item !== 'item'
    }

    update_query(data){
        let query = ``
        Object.keys(data).forEach((item)=>{
            if (this.bool_check(data, item))
                query = query.concat(`,${item}=${data[item]}`)
        })
        return query.replace(',','')
    }
    and_query(data){
        let query = ``
        Object.keys(data).forEach((item)=>{
            if (this.bool_check(data, item))
                query = query.concat(`AND ${item}=${data[item]}`)
        })
        return query.slice(3)
    }
    
    or_query(data){
        let query = ``
        Object.keys(data).forEach((item)=>{
            if (this.bool_check(data, item))
                query = query.concat(`OR ${item}=${data[item]}`)
        })
        return query.slice(2)
    }

    create_query(data){
        let query = `CREATE table ${this.__str__}(id INT PRIMARY KEY AUTO_INCREMENT `
        Object.keys(data).forEach((item)=>{
            if (this.bool_check(data, item) & item !== 'id')
            query = query.concat(`, ${item} ${data[item]} DEFAULT NULL`)
        })
        return query.replace(',', '').concat(');')
    }
    insert_query1(data){
        let query ='('
        Object.keys(data).forEach((item)=>{
            if (this.bool_check(data, item))
                query = query.concat(`, ${item}`)  
        })
        return query.replace(',','').concat(' )')
    }
insert_query2(data){
        let query = `(`
        Object.keys(data).forEach((item)=>{
            if (this.bool_check(data, item))
                query = query.concat(`, ${data[item]}`)
        })
        return query.replace(',','').concat(' )')
    }
    
    

    
}
exports.Model = Model