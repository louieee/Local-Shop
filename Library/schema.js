const Product = {
    id  : 'INT',
    name :   'TINYTEXT',
    description :  'TEXT',
    picture :'BLOB',
    price : 'DECIMAL',
    category : 'TEXT',
    seller_id : 'INT',
    __str__ : 'Product'

}

const Transaction = {
    id : 'INT',
    buyer_id :   'INT',
    seller_id :  'INT',
    products : 'TEXT',
    datetime : 'DATETIME',
    __str__ : 'Transaction'
    
}

const Buyer = {
    id : 'INT',
    user_id :   'TINYTEXT'
    
}

const Seller = {
    id : 'INT',
    user_id :   'TINYTEXT',
    shop_address :  'TEXT',
    banner : 'BLOB',
    business_category : 'TEXT'
    
}

const User = {
    id : 'INT',
    first_name :   'TINYTEXT',
    last_name :  'TINYTEXT',
    profile_picture : 'BLOB',
    house_address : 'MEDIUMTEXT',
    city : 'TINYTEXT',
    state : 'TINYTEXT',
    country : 'TINYTEXT',
    phone : 'JSON'
}

exports.User = User
exports.Buyer = Buyer
exports.Seller = Seller
exports.Product = Product
exports.Transaction = Transaction