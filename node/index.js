
// Buffer and stream 


// console.log(process.argv)
// proces.exit()
// process.env

// console.log(__filename)
// console.log(__dirname)


// Modules
// - core moudle
// - local module
// - third party module


// Module system
// - commonJs
// - Es6 


const fs = require("fs");
const path = require("path");

// ES6 
// import fs from "fs"

fs.writeFileSync("custom.txt", "custom hello")
// let file_data = fs.readFileSync("custom.txt").toString();
// console.log({ file_data })

fs.readFile("custom.txt", (err, data) => {
    // console.log(data.toString())
});


console.log(222);
// console.log({file_data})


// .
// console.log(path.join(__dirname, "assets"));
// console.log(path.extname(__filename));

const dbconnect = require("./dbconnection")
// dbconnect.connectToMongo();
// dbconnect.signin();
// console.log({dbconnect})


// 1 => information
// 2 => 200 success 
// 3 => 304 redirect 
// 4 => 400 401 403   client side error
// 5 => 500 server side error



const http = require("http")

const server = http.createServer((req, res) => {
    // req.method
    if (req.url == "/index.js") {
        res.write(fs.readFileSync("./index copy.js"))
        res.end();
    }

    if (req.url == "/products") {

        if (req.method == "GET") {
            try {
                // let a = b + c;
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(fs.readFileSync("./products.json"))
                // res.write(fs.readFileSync("./index.html"))
                res.end();
            }
            catch (err) {
                res.writeHead(500);
                res.write(JSON.stringify({ a: 1 }))
                res.end();
            }
        } else if (req.method == "POST") {
            console.log("1212")
            req.on('data', function (data) {
                let obj = JSON.parse(fs.readFileSync("./products.json"));
                let products_arr = obj.products

                products_arr.push(JSON.parse(data));
                fs.writeFileSync("products.json", JSON.stringify({ products: products_arr }))
            })
            //fs.writeFileSync("file.txt", data)
            req.on("end", function () {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.end("success")
            })
        } else if (req.method == "PUT") {
            req.on('data', function (data) {
                let obj = JSON.parse(fs.readFileSync("./products.json"));
                let products_arr = obj.products

                let req_data = JSON.parse(data)

                // let new_arr = products_arr.map(el => {
                //     if (el.id == req_data.id) {
                //         return req_data
                //     }
                //     return el
                // });

                let new_arr = products_arr.filter(el => el.id != req_data.id)

                fs.writeFileSync("products.json", JSON.stringify({ products: new_arr }))
            })
            //fs.writeFileSync("file.txt", data)
            req.on("end", function () {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.end("success")
            })
        }



    } else if (req.url == "/users") {
        res.write("users list")
        res.end();
    }

})

server.listen(8000, (err, data) => {
    if (err) return console.log(err)
    console.log("Server Started");
})


/* 
C create
R read
U update
D delete
*/

/* 
GET - Read
POST - create
PUT- update  // 
PATCH - update // 
DELETE 
*/



