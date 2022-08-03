
console.log("from db")

const connectToMongo = () => { console.log("module exported") }
const signin = () => { console.log("sign exported") }


// default export
// module.exports = connectToMongo


// named exports
// module.exports.connectToMongo = connectToMongo
// module.exports.signin = () => { console.log("signin"); }


module.exports = {
    signin,
    connectToMongo
}

