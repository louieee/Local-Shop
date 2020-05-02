const { Model }= require('../../Library/model')



    
class Product extends Model{
    constructor(id, name, description, picture, price, category, seller_id){
        super()
        this.id = id
        this.name = name
        this.description = description
        this.picture = picture
        this.price = price
        this.category = category
        this.seller_id = seller_id
    }
}

