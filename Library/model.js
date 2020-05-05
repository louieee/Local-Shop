const { connection } = require('.././Library/db')

class Model {

    execute(sql){
            connection.query(sql, (error, result)=>{
                if (error) {console.log(error.sqlMessage)}else{
                console.log('result:', result)
                return result
            }

                
        })
    
        
    }

    bool_check(data, item){
        return typeof data[item] !== 'undefined' & item !== '__str__' & item !== 'item'
    }

    update_query(data){
        let query = ``
        Object.keys(data).forEach((item)=>{
            if (this.bool_check(data, item))
                query = query.concat(`,${item}=${data[item]}`)
        })
        return query.replace(',','')
    }
    and_query(data){
        let query = ``
        Object.keys(data).forEach((item)=>{
            if (this.bool_check(data, item))
                query = query.concat(`AND ${item}=${data[item]}`)
        })
        return query.slice(3)
    }
    
    or_query(data){
        let query = ``
        Object.keys(data).forEach((item)=>{
            if (this.bool_check(data, item))
                query = query.concat(`OR ${item}=${data[item]}`)
        })
        return query.slice(2)
    }

    create_query(data){
        let query = `CREATE TABLE IF NOT EXISTS ${this.__str__}(id INT PRIMARY KEY AUTO_INCREMENT, `
        Object.keys(data).forEach((item)=>{
            if (this.bool_check(data, item) & item !== 'id')
                if (item.includes('_id')){
                    query = query.concat(`, ${item} INT NOT NULL, 
                    FOREIGN KEY (${item}) 
                    REFERENCES ${item.split('_')[0]}s(id)
                        ON UPDATE ${data[item].includes('_C') ? `CASCADE` : `SET NULL` }
                        ON DELETE ${data[item].includes('_C') ? `CASCADE` : `SET NULL` }`)
                }else{
                    query = query.concat(`, ${item} ${data[item]} DEFAULT NULL`)
                }
            
        })
        return query.replace(',', '').concat(');')
    }
    insert_query1(data){
        let query ='('
        Object.keys(data).forEach((item)=>{
            if (this.bool_check(data, item))
                query = query.concat(`, ${item}`)  
        })
        return query.replace(',','').concat(' )')
    }
insert_query2(data){
        let query = `(`
        Object.keys(data).forEach((item)=>{
            if (this.bool_check(data, item))
                query = query.concat(`, ${data[item]}`)
        })
        return query.replace(',','').concat(' )')
    }
    
    

    
}
exports.Model = Model