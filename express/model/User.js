const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String
    },
    address:{
        street:{
            type:String
        }
    },
    role:{
        type:String,
        enum:["buyer","seller"]
    }
})

module.exports = mongoose.model('User',UserSchema);






    // students 
        /* 
            -name 
            -address 
            -parent_name
        */


/* 
    product.map(el => {
        rerturn <>el.name   el.price</>
    })
*/
/* 
    Product
    - name
    - price
    - stock
    - categories
    - sku
 */
// rate 










// TODO:"" create User Schema

