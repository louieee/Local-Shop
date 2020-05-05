const { Table }= require('../../Library/db_functions')
const {User} = require('../../Library/schema') 


class User_ extends Table{
    constructor(id, first_name, last_name, username, password){
        super()
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
        this.__str__ = 'users'
        this.item = User
    }

}

exports.User = User_