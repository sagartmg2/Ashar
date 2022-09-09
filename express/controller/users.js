const User = require("../model/User")

const signup = (req, res, next) => {


    // console.log("signup")
    // code 
    try {

        let user = User.create({
            name: "test data",
            email: "t@t1.com"
        }, (err, data) => {
            res.send({ data })
        })



    } catch (err) {
        next(err)
    }

}





const show = (req, res, next) => {
    try {
        console.log("info")
        // let data = read from database 
        // let a = b + c;

        let data = [{ id: 1, name: "JOhn" }, { id: 2, name: "TWOO" }]
        let result = data.find(el => el.id == req.params.id)

        return res.render('home', {
            name: result.name,
            data: data,
            person: result
        });

        res.send(result)


    } catch (err) {
        next(err)
    }
}

function store() {
    // User.create

}


module.exports = {
    show,
    signup
}