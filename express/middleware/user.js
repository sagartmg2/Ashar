
const { body, validationResult } = require('express-validator');

//  body('password').isLength({ min: 5 }), ,

  const validate = validations => {
    return async (req, res, next) => {
      await Promise.all(validations.map(validation => validation.run(req)));
  
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }
  
      res.status(400).json({ errors: errors.array() });
    };
  };


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
    body('email').exists(),
  ]
)

module.exports = {
  signup_validator,
  login_validator
}