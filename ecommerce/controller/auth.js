const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const User = require("../model/User")

const signup = (req, res, next) => {

    try {
        const hash = bcrypt.hashSync(req.body.password, 10);
        User.create({ ...req.body, password: hash }, (err, data) => {
            if (err) {
                next(err)
            } else {
                let user_obj = data.toObject();

                delete user_obj.password

                res.send({ data: user_obj })
            }
        })
    } catch (err) {
        next(err)
    }

}


const login = async (req, res, next) => {

    try {

        // compare with hashed password
        let email = req.body.email
        let user = await User.findOne({ email })?.select("password");

        let status = bcrypt.compareSync(req.body.password, user.password); // true
        if (!status) {
            return res.status(401).send({
                msg: "Invalid credentials"
            })
        }

        let user_obj = await User.findOne({ email });
        var token = jwt.sign(user_obj.toObject(), process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRATION });

        if (status) {
            return res.send({
                access_token: token
            })
        }

    } catch (err) {
        next(err)
    }

}
module.exports = {
    login,
    signup,
}