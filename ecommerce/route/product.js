const multer = require('multer')
const express = require("express");

const { index, store, show, update } = require("../controller/product");
const { authenticateToken } = require("../middleware/auth");
const router = express.Router();

const path = require("path")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })


const isSeller = (req, res, next) => {
    // check if the user is seller

    next()

    // 403 // forbidden

}
const validateOwner = (req, res, next) => {
    // check if the user is seller
    // req.user._id
    // product_created_by = Product.(req.param.sid).create_by
    next()

    // 403 // forbidden

}

router.get("", index)
router.get("/seller", authenticateToken, index)
router.get("/:id", show)
router.post("", authenticateToken, isSeller, upload.array('images', 12), store)
router.put("/:id", authenticateToken, isSeller, validateOwner, upload.array('images', 12), update)

module.exports = router;
