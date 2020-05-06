const { Table }= require('../../Library/db_functions')
const {User} = require('../../Library/schema') 


class User_ extends Table{
    constructor(){
        super()
        this.id = ''
        this.first_name = ''
        this.last_name = ''
        this.username = ''
        this.password = ''
        this.authenticated = ''
        this.profile_picture = ''
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