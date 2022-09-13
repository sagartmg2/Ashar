


const express = require('express')
const router = express.Router()

const { show, signup, index, login } = require("../controller/users");
const { login_validator, signup_validator } = require('../middleware/user');

router.get("/users",index)


// app.get("/api/users", index)
router.get("/users/:id", show)
router.post("/users/login", login_validator, login)
router.post("/users", signup_validator, signup)
// app.post("/api/users/login", login )

router.get('/birds', (req, res) => {
  res.send('Birds home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router