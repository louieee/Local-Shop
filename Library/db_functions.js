const { Model } = require("./model")

class Table extends Model{
    constructor(){
        super()
    }
    createTable(){
        const sql = this.create_query(this.item)
        return this.execute(sql)
    }

    insert(){
        const sql = `INSERT INTO ${this.__str__}(${this.insert_query1(this.item)} 
           VALUES${this.insert_query2(this)};`
           return this.execute(sql)
    }

    
    update(data){
        const sql = `UPDATE ${this.__str__} SET ${this.update_query(data)}[WHERE ${this.update_query(this)}]`
        return this.execute(sql)
    }

    delete(){
        const sql = `DELETE FROM ${this.__str__} WHERE ${this.update_query(this)}`
        return this.execute(sql)
    }

    getById(){
        const sql = `SELECT * FROM ${this.__str__} WHERE id = ${this.id}`
        return this.execute(sql)
    }

    getAll(order_by='', ascending=true){
        const sql = `SELECT * FROM ${this.__str__}  ORDER BY ${order_by == '' ? 'id' : ''.concat(order_by)} ${ascending ? 'ASC' : 'DESC'}`
        return this.execute(sql)
    }

    query(sql){
        return this.execute(sql)
    }

}
 exports.Table = Table