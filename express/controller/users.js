const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const User = require("../model/User")

const index = async (req, res, next) => {
    res.send(await User.find({}))
}
// const show = async (req,res,next) => {

//     res.send(await User.findById())
// }

const signup = (req, res, next) => {

    console.log("body", req.body)
    console.log("signup")

    // $2b$10$Vs/FTL1E90n4qH8mwBIYXOip79Oyfzfh4qhF4vlp4e4M74281d67a
    // '$2b$10$qFiknoRvLv5eZ3B8A6sJmemdGcKK1xhY8O4CNsEt7XtJrq/zOupvi'
    const hash = bcrypt.hashSync(req.body.password, 10);
    // console.log({hash});
    // return;

    // one way encryption
    // req.body.password = req.body.password + "asdfafds"

    try {
        let user = User.create({ ...req.body, password: hash }, (err, data) => {
            if (err) {
                next(err)
            } else {

                // console.log(data);
                let user_obj = data.toObject();
                console.log(user_obj);

                delete user_obj.password

                res.send({ data : user_obj})
            }
        })


    } catch (err) {
        next(err)
    }

}





const show = async (req, res, next) => {
    try {
        res.send(await User.findById(req.params.id))
        // console.log("info")
        // console.log(req.params);
        // console.log(req.query);
        // let data = read from database 
        // let a = b + c;

        // let data = [{ id: 1, name: "JOhn" }, { id: 2, name: "TWOO" }]
        // let result = data.find(el => el.id == req.params.id)

        // return res.render('home', {
        //     name: result.name,
        //     data: data,
        //     person: result
        // });

        // res.send(result)


    } catch (err) {
        next(err)
    }
}

function store() {
    // User.create

}

const login = async (req, res, next) => {

    try {

        // compare with hashed password
        let email = req.body.email
        let user = await User.findOne({ email }).select("password");

        // console.log(user.select("password"));
        // return;
        
        let status = bcrypt.compareSync(req.body.password, user.password); // true
        let user_obj = await User.findOne({ email });
        // console.log(user_obj);
        // console.log(typeof(user_obj));


        // let user_obj2 = {
        //     _id: "631f0be8762c784b87bec877",
        //     name: 'asdfadf',
        //     email: 'edsatm@em',
        //     role: 'buyer',
        //     __v: 0
        // }

        var token = jwt.sign(user_obj.toObject(), process.env.JWT_SECRET_KEY, { expiresIn: '120s' });
        if (status) {
            return res.send({
                access_token: token
            })
        }
        return res.status(401).send({
            msg: "Invalid credentials"
        })
    } catch (err) {
        next(err)
    }

}



module.exports = {
    index,
    show,
    signup,
    login,
}