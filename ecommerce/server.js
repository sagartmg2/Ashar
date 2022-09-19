
const express = require("express")

const auth_route = require("./route/auth")
const product_route = require("./route/product")
const order_route = require("./route/order")
require("./config/db_connection")

const app = express();
app.use(express.static('public'))
app.use(express.json())
require('dotenv').config()


app.use("/api", auth_route)
app.use("/api/products", product_route)
app.use("/api/orders", order_route)


app.use("", (req, res, next) => {
    res.status(404).send({ "data": "page not found" })
})

// error handling
app.use((err, req, res, next) => {
    console.log("error ");
    console.log(err.name)

    let status = 500;
    let data = "Server Error"
    // MongoServerError
    if (err.name === "ValidationError") {
        status = 400;
        data = "Validation Error"
    }

    res.status(status).send({
        data: data,
        msg: err.message
    })
})


app.listen(process.env.PORT, (err, data) => {
    // console.log(err);
    if (err) {
        console.log(err.message);
    } else {
        console.log("listening...");
    }
})