const { Table }= require('../../Library/db_functions')
const { Buyer} = require('../../Library/schema') 


class Buyer_ extends Table{
    constructor(id, user_id){
        super()
        this.id = id
        this.user_id = user_id
        this.__str__ = 'Buyer'
        this.item = Buyer

    }
}
