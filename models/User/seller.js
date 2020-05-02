const { Model }= require('../../Library/model')



class Seller extends Model{
    constructor(idd, user_id, shop_address, banner, business_category){
        this.id = id
        this.user_id = user_id
        this.shop_address = shop_address
        this.banner = banner
        this.business_category = business_category
    }
}