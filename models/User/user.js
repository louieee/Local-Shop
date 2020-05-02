const { Model } = require('../../Library/model')


class User extends Model{
    constructor(id, first_name, last_name, username, password){
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.username = username
        this.password = password
        this.profile_picture = null
        this.house_address = ''
        this.city = ''
        this.state = ''
        this.country = ''
        this.phone = ''
    }

}
