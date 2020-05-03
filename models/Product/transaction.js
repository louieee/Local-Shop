const { Table }= require('../../Library/db_functions')
const {Transaction} = require('../../Library/schema') 

class Transaction_ extends Table{
    constructor(buyer_id, seller_id, products, datetime){
        super()
        this.buyer_id = buyer_id
        this.seller_id = seller_id
        this.datetime = datetime
        this.products = products
        this.__str__ = 'Transaction'
        this.item = Transaction
    }
}

