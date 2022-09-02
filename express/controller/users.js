const show = (req, res, next) => {
    try {
        console.log("info")
        // let data = read from database 
        // let a = b + c;

        let data = [{ id: 1, name: "JOhn" }, { id: 2, name: "TWOO" }]
        let result = data.find(el => el.id == req.params.id)

        return res.render('home', {
            name: result.name,
            data:data,
            person:result
        });

        res.send(result)


    } catch (err) {
        next(err)
    }
}


module.exports = {
    show
}