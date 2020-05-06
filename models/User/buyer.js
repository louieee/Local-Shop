const { Table }= require('../../Library/db_functions')
const { Buyer} = require('../../Library/schema') 


class Buyer_ extends Table{
    constructor(){
        super()
        this.id = ''
        this.user_id = ''
        this.__str__ = 'buyers'
        this.item = Buyer

    }
}


exports.Buyer = Buyer_