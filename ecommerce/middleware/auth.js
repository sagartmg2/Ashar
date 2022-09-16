
const { body } = require('express-validator');

const validate = require("../util/validate")
const jwt  = require("jsonwebtoken")

const signup_validator = validate(
    [
        body('password').isLength({ min: 5 }),
        body('name').exists(),
        body('role').exists(),
        body('email').exists(),
    ]
)
const login_validator = validate(
    [
        body('password').exists(),
        body('email').exists().withMessage('email field is required.'),
    ]
)

const authenticateToken = (req, res, next) => {
    console.log("inside token verification")

    let token = req.headers?.authorization?.split(" ")[1]
    console.log(token)

    if(!token){
        return res.status(401).send({
            msg:"Invalid Token"
        })
    }
    var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = decoded

    next();

}




module.exports = {
    signup_validator,
    login_validator,
    authenticateToken
}