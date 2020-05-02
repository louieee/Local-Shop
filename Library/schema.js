const Product = {
    id  : {type: 'SMALLINT', __str__: 'id', value: null},
    name :  {type : 'TINYTEXT', __str__: 'name', value: null},
    description : {type : 'TEXT', __str__: 'description', value: null},
    picture :{type: 'BLOB', __str__: 'picture', value: null},
    price : {type: 'DECIMAL', __str__: 'price', value: null},
    category : {type: 'SET', __str__: 'category', value: null},
    seller_id : {type: 'INT', __str__:'seller_id', value: null},
    __str__ : 'Product'

}

const Transaction = {
    id : {type: 'SMALLINT', __str__:'id', value: null},
    buyer_id :  {type : 'SMALLINT', __str__:'buyer_id', value: null},
    seller_id : {type : 'SMALLINT', __str__:'seller_id', value: null},
    products : {type: 'JSON', __str__:'products', value: null},
    datetime : {type: 'DATETIME', __str__:'datetime', value: null},
    __str__ : 'Transaction'
    
}

const Buyer = {
    id : {type: 'SMALLINT', __str__:'id', value: null},
    user_id :  {type : 'TINYTEXT', __str__:'user_id', value: null}
    
}

const Seller = {
    id : {type: 'SMALLINT', __str__:'id', value: null},
    user_id :  {type : 'TINYTEXT', __str__:'user_id', value: null},
    shop_address : {type : 'TEXT', __str__:'shop_address', value: null},
    banner : {type: 'BLOB', __str__:'banner', value: null},
    business_category : {type: 'SET', __str__:'business_category', value: null}
    
}

const User = {
    id : {type: 'SMALLINT', __str__:'id', value: null},
    first_name :  {type : 'TINYTEXT', __str__:'first_name', value: null},
    last_name : {type : 'TINYTEXT', __str__:'last_name', value: null},
    profile_picture : {type: 'BLOB', __str__:'profile_picture', value: null},
    house_address : {type: 'MEDIUMTEXT', __str__:'house_address', value: null},
    city : {type: 'TINYTEXT', __str__:'city', value: null},
    state : {type: 'TINYTEXT', __str__:'state', value: null},
    country : {type: 'TINYTEXT', __str__:'country', value: null},
    phone : {type: 'JSON', __str__:'phone', value: null}
}