const { Model }= require('../../Library/model')


class Buyer extends Model{
    constructor(id, user_id){
        super()
        this.id = id
        this.user_id = user_id

    }
}
