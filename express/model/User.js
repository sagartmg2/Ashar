const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    phone: {
        type: String,
        validate: {
          validator: function(v) {
            // "977-787-78787"
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: props => `${props.value} is not a valid phone number!`
        },
      },
    password:{
        type:String,
        required:[true, 'Why no password?'],
        select:false,
    },
    address:{
        street:{
            type:String
        }
    },
    role:{
        type:String,
        enum:["buyer","seller"],
        required:true,

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

