const express = require("express");
const { authenticateToken } = require("../middleware/auth");
const router = express.Router();
const Order = require("../model/Order")

const store = async (req, res, next) => {
    let products = req.body.products;
    if(! products?.length > 0){
        return res.status(400).send(
            {
                msg: "atleast one product expeced. "
            }
        )

    }
    
    let order = await Order.create({ ...req.body, created_by: req.user._id });
    res.send(order);
}

router.post("", authenticateToken, store)


module.exports = router;
