const { Table }= require('../../Library/db_functions')
const {Transaction} = require('../../Library/schema') 

class Transaction_ extends Table{
    constructor(){
        super()
        this.datetime = ''
        this.products = ''
        this.__str__ = 'transactions'
        this.item = Transaction
        this.buyer_id = ''
        this.seller_id = ''
        
    }
}


exports.Transaction = Transaction_