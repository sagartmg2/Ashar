const express = require('express');
// import express from "express"

const app = express()


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
        return ;
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

app.get("/info", (req, res, next) => {
    console.log("info")
    res.send("info....")
})

app.get('/products/:id', auth_middleware, function (req, res) {
    console.log("params", req.params);
    console.log("query", req.query);
    res.send('Hello World asdfafadfasdfd')
})

app.post('/', auth_middleware, function (req, res) {
    // req.on("data")
    console.log("body", req.body)
    res.send('Hello World post request')
})

// error handling


app.listen(8000, (data, err) => {
    console.log("listening...");
})

