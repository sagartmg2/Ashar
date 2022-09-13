
const jwt = require("jsonwebtoken")


const authenticateToken = (req, res, next) => {
    console.log("inside token verification")

    let token = req.headers.authorization.split(" ")[1]
    console.log(token)

    var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // let decoded = jwt.verify(token, "random");

    // console.log("decodde",decoded);

    next();

}


module.exports = {
    authenticateToken
}
