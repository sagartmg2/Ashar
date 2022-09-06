const express = require('express');
// import express from "express"
const { engine }  = require('express-handlebars');
require('dotenv').config()

const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


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

app.use(express.json());
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
const { show } = require("./controller/users")

app.get("/users/:id", show)

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
    res.status(500).send({
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

