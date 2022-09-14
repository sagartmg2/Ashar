const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: async (email) => {
                // check if the request email already exists..
                // db.users.countDocuments({filter})
                const count = mongoose.models.User.countDocuments({ email })
                if (count > 0) {
                    return false
                }
            },
            message: "email already in used."
        }
    },
    password: {
        type: String,
        required: [true, 'Why no password?'],
        select: false,

    },
    address: {
        street: {
            type: String
        }
    },
    role: {
        type: String,
        enum: ["buyer", "seller"],
        required: true,
    }
})

module.exports = mongoose.model('User', UserSchema);


