const { Table }= require('../../Library/db_functions')
const {Seller} = require('../../Library/schema') 



class Seller_ extends Table{
    constructor(){
        super()
        this.id = ''
        this.shop_address = ''
        this.banner = ''
        this.business_category = ''
        this.__str__ = 'sellers'
        this.item = Seller
        this.user_id = ''
    }
}

exports.Seller = Seller_