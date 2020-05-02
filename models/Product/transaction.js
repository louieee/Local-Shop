const { Model }= require('../../Library/model')


class Transaction extends Model{
    constructor(buyer_id, seller_id, products, datetime){
        super()
        this.buyer_id = buyer_id
        this.seller_id = seller_id
        this.datetime = datetime
        this.products = products
    }
}
