const { Table }= require('../../Library/db_functions')
const {Seller} = require('../../Library/schema') 



class Seller_ extends Table{
    constructor(id, user_id, shop_address, banner, business_category){
        super()
        this.id = id
        this.shop_address = shop_address
        this.banner = banner
        this.business_category = business_category
        this.__str__ = 'sellers'
        this.item = Seller
        this.user_id = user_id
    }
}

exports.Seller = Seller_