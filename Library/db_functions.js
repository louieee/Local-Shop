const { Model } = require("./model")
const { execute } = require('../Library/db')

class Table extends Model{
    constructor(){
        super()
    }
    createTable(){
        const sql = this.create_query(this.item)
        return sql
    }

    insert(){
        const sql = `INSERT INTO ${this.__str__}(${this.insert_query1(this.item)} 
           VALUES${this.insert_query2(this)};`
           return sql
          
    }

    
    update(data){
        const sql = `UPDATE ${this.__str__} SET ${this.update_query(data)}[WHERE ${this.and_query(this)}]`
        return sql
    }

    delete(){
        const sql = `DELETE FROM ${this.__str__} WHERE ${this.update_query(this)}`
        return sql
    }
    

    getOne(){
        const sql = `SELECT * FROM ${this.__str__} WHERE ${this.update_query(this)}`
        return sql
        

        
    }

    getAll(order_by='', ascending=true){
        const sql = `SELECT * FROM ${this.__str__}  ORDER BY ${order_by == '' ? 'id' : ''.concat(order_by)} ${ascending ? 'ASC' : 'DESC'}`
        return sql
    }

    query(sql){
        return sql

    }

}
 exports.Table = Table