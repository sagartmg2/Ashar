const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;
const Product = require("../model/Product")

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
            _id: {
                ref: "Product",
                required: true,
                validate: {
                    validator: async (value) => {
                        try {
                            const count = await mongoose.models.Product.countDocuments({ _id: value })
                            if (count == 0) {
                                return false
                            }
                        }
                        catch (err) {
                            if (err instanceof mongoose.CastError) {
                                return false
                            }
                        }
                    },
                    message: props => `${props.value}Product not found by given ___id`
                },
                type: ObjectId,

            },
            status: {
                type: String,
                enum: ["pending", "rejected", "completed"],
                default: "pending",
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


