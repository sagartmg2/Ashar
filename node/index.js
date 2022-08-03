
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



const http = require("http")

const server = http.createServer((req, res) => {
    // req.method
    if (req.url == "/products") {
        res.write("products list")
        res.end();
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



