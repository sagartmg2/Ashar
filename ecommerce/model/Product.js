const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        min: 0,
    },
    in_stock: {
        type: Number,
        default: 0,
    },
    brands: {
        type: Array,
    },
    categories: [],
    // created_by: { // embedded documents
    //     name,
    //     address,
    //     role,
    // }
    created_by: {
        type: ObjectId,
        ref: "User",
        required: true,
    },
    images: []
}, {
    timestamps: true,
})

module.exports = mongoose.model('Product', ProductSchema);


