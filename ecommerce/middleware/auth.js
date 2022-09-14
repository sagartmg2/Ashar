
const { body } = require('express-validator');

const validate = require("../util/validate")

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


module.exports = {
    signup_validator,
    login_validator,
}