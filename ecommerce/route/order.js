const express = require("express");
const { authenticateToken } = require("../middleware/auth");
const router = express.Router();
const Order = require("../model/Order");
const Product = require("../model/Product");
const sendMail = require("../util/nodemailer");

const store = async (req, res, next) => {
    try {
        let products = req.body.products;
        if (!products?.length > 0) {
            return res.status(400).send(
                {
                    msg: "atleast one product expeced. "
                }
            )
        }

        let order = await Order.create({ ...req.body, created_by: req.user._id });

        let user_emails = [];

        // await may not work in forEach - for loop 
        // products.forEach(element => {
        //     let product =  Product.findById(element._id)  // == AGGREGATE $IN:PRODUCTS_IDS  AND LINK WITH USER
        //     let user = User.findById(product.created_by);
        //     user_emails.push(user.email)
        // });

        // send mail 
        // sendMail(["a@a.com", "b@b.com"], "order has been placed")
        // res.send({})
        
        res.send(order);
    }
    catch (err) {
        next(err);
    }

}

router.post("", authenticateToken, store)


module.exports = router;
