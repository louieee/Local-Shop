const { Product } = require('./models/Product/product')
const { Transaction } = require('./models/Product/transaction')
const { Buyer } = require('./models/User/buyer')
const { Seller } = require('./models/User/seller')



const seller  = new Seller()
seller.createTable()

const buyer  = new Buyer()
buyer.createTable()

const product  = new Product()
product.createTable()

const transaction = new Transaction()
transaction.createTable()

