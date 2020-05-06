const routes = require('express').Router()
const {auth} = require('./functions')

routes.get('/login', (request, response)=>{
    response.status(200).json({'title': 'Log In'})
    
})

routes.post('login', (request, response)=>{
    if (request.params.username !== ''  & request.params.password !== '' ){
        auth(response, request.params.username, request.params.password)
    }
})

exports.UserRoutes = routes