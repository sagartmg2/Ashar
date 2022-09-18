const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

// 100
// 300

const OrderSchema = new Schema({
    products: [
        // product_id: {
        //     type: ObjectId,
        //     ref: "Product"
        // }
        {
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                min: 0,
                required: true,
            },
            quantity: {
                type: Number,
                min: 1,
                required: true,
            },
            status: {
                type: String,
                enum: ["pending", "rejected", "completed"],
                default:"pending",
            }
        }

    ],
    created_by: {
        type: ObjectId,
        ref: "User",
        required: true,
    },
}, {
    timestamps: true,
})

    module.exports = mongoose.model('Order', OrderSchema);


