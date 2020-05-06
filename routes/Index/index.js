const routes = require('express').Router()


routes.get('', (request, response)=>{
    response.status(200).json({title: 'Welcome to LocalShop'})
})

routes.get('about', (request, response)=>{
    response.status(200).json({title: 'About Us'})
})

exports.IndexRoutes = routes