const { connection, execute } = require('../../Library/db')
const bcrypt = require("bcryptjs")
const {User} = require('../../models/User/user')
 
 
const hash = (password) =>{
    bcrypt.genSalt(10, function (err, salt) {
    if (err) {
        throw err
    } else {
        bcrypt.hash(password, salt, function(err, hash) {
        if (err) {
            throw err
        } else {
            console.log(hash)
            return hash
        }
        })
    }
    })
}


const check =(password, hash)=>{
    bcrypt.compare(password, hash, function(err, isMatch) {
        if (err) {
          throw err
        } else if (!isMatch) {
          console.log("Password doesn't match!")
          return false
        } else {
          console.log("Password matches!")
          return true
        }
      })
}
const auth = (response, username, password) => {
    const user = new User()
    user.username = username
    execute(user.getOne(),(data)=>{
        if (check(password, data.password)){
          execute(user.update_query({authenticated: true}), ()=>{
            response.append('user', data)
            response.status(200).json({'message': `${data.username} is logged in`, 'status': 'success' })
          })
        }else{
          response.status(200).json({'message': `wrong password`, 'status': 'failure' })
        }
    })
    
}


exports.auth = auth