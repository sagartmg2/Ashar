const express = require('express');
const mongoose = require('mongoose');
const { engine } = require('express-handlebars');
require('dotenv').config()
const { body, validationResult } = require('express-validator');


const { show, signup, index, login } = require("./controller/users");
const { signup_validator, login_validator } = require('./middleware/user');

const app = express()
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

mongoose.connect('mongodb://localhost:27017/ecom')
    .then(res => {
        console.log("mongodb connected");
    })
    .catch(err => {
        console.log(err);
    });

const callMe = (req, res, next) => {
    console.log("callme")
    return res.send({ data: "callme" })
    next() // calls the next middleware in line
}

// global middleware 
// app.use(callMe)
// app.use((req, res, next) => {
//     console.log("middleware 2")
//     next()
// })

/* 
1 - information
2 - success 200, 201, 204  
3 - 302 (redirect)
4 - 400 (bad request), 401 (unauthenticated), 403 (forbidden), 404(resource not found)
5 - 500 (server error )
*/

const auth_middleware = (req, res, next) => {
    let token_passed = true
    if (token_passed) {
        next();
        return;
    }
    res.status(401).send({ data: "Unauthenticated" })

}

// app.use((req, res, next) => {
//     req.body = {
//         "name": "hn chaneeeed..",
//         "role": "seller"
//     }
//     next()
// })

// app.use(express.json());
// app.use(auth_middleware)

function authenticate(req, res, next) {
    console.log("check authentication")
    return next();
    // return next({err:"custom error"})
    return
    res.send({ data: "invalid" })

}

app.use(authenticate)

/* 
    M - model (database schema)
    V - View  (html , css)
    C - controller  (business logic)
*/


// app.post("/api/users", (req, res, next) => {
//     // console.log("test");
//     // db.user.inser
// })



// expressRouter

app.use(express.json());

// make this route a protected route.  => 401 unauthenticated. 
app.get("/api/orders", (req, res, next) => {
    res.send({ data: "orders" })
})

//  r. express Router

app.get("/api/users", index)
app.get("/api/users/:id", show)
app.post("/api/users/login", login_validator, login)
// app.post("/api/users/login", login )
app.post("/api/users", signup_validator, signup)

app.post("/api/test", (req, res, next) => {
    console.log("body", req.body)
})
// app.get("/users/:id", show)

app.get('/products/:id', auth_middleware, function (req, res) {
    // console.log("params", req.params);
    // console.log("query", req.query);
    res.send('Hello World asdfafadfasdfd')
})

app.post('/', auth_middleware, function (req, res) {
    // req.on("data")
    console.log("body", req.body)
    res.send('Hello World post request')
})

app.use("", (req, res, next) => {
    res.status(404).send({ "data": "page not found" })
})

// error handling
app.use((err, req, res, next) => {
    console.log("error ");
    console.log(err.name)
    let status = 500;
    if (err.name === "ValidationError") {
        status = 400
    }
    res.status(status).send({
        data: "server error",
        msg: err.message
    })
})

console.log("PORT", process.env.PORT);

app.listen(process.env.PORT, (err, data) => {
    // console.log(err);
    if (err) {
        console.log(err.message);
    } else {
        console.log("listening...");
    }
})

