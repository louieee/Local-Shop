const {Table} = require('../../Library/db_functions')
const {Product} = require('../../Library/schema') 




    
class Product_ extends Table{
    constructor(){
        super()
        this.id = ''
        this.name = ''
        this.description = ''
        this.picture = ''
        this.price = ''
        this.category = ''
        this.seller_id = ''
        this.__str__ = 'products'
        this.item = Product
    }
}


exports.Product = Product_