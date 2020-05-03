const {Table} = require('../../Library/db_functions')
const {Product} = require('../../Library/schema') 




    
class Product_ extends Table{
    constructor(id, name, description, picture, price, category, seller_id){
        super()
        this.id = id
        this.name = name
        this.description = description
        this.picture = picture
        this.price = price
        this.category = category
        this.seller_id = seller_id
        this.__str__ = 'Product'
        this.item = Product
    }
}
