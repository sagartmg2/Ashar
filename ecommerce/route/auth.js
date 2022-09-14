


const express = require("express");
const { signup, login } = require("../controller/auth");
const { login_validator } = require("../middleware/auth");

const router = express.Router();

router.post("/signup", signup)
router.post("/login", login_validator, login)

module.exports = router;