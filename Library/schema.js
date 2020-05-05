const Product = {
    id  : 'INT',
    name :   'TINYTEXT',
    description :  'TEXT',
    picture :'BLOB',
    price : 'DECIMAL',
    category : 'TEXT',
    seller_id : 'FK_C',
   

}

const Transaction = {
    id : 'INT',
    products : 'TEXT',
    datetime : 'DATETIME',
    buyer_id :   'FK_C',
    seller_id :  'FK_C',
   
    
}

const Buyer = {
    id : 'INT',
    user_id : 'FK_C'
    
}

const Seller = {
    id : 'INT',
    shop_address :  'TEXT',
    banner : 'BLOB',
    business_category : 'TEXT',
    user_id :   'FK_C',
    
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
    phone : 'MEDIUMTEXT'
}

exports.User = User
exports.Buyer = Buyer
exports.Seller = Seller
exports.Product = Product
exports.Transaction = Transaction