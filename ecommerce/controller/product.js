
const Product = require("../model/Product")


const index = async (req, res, next) => {

    // Product.find({},(err,data) => {
    //     res.send(data)
    // });

    // PAGINATTE
    // filter 
    // - perpagte,page,serach_term,ascending,order,price_range.brand...

    // if seller ==> send only seller product

    // if buyer => receive all 


    let products = await Product.find({});

    res.send(products)

}

const show = (req, res, next) => {

    Product.findById(req.params.id, (err, data) => {
        if (err) {
            return next(err)
        }
        return res.send(data)
    })

}

const update = async (req, res, next) => {



    console.log(req.params.id)

    let product = await product.findById(req.paras.id)

    let old_images = product.images

    let images = req.files.map(el => "uploads/" + el.filename)

    Product.findByIdAndUpdate(req.params.id, { ...req.body, images }, {
        new: true,
        runValidators: true,
    }, (err, data) => {
        if (err) {
            return next(err)
        }
        return res.send(data)
    })
}


const store = async (req, res, next) => {

    try {
        console.log(req.files)
        let images = req.files.map(el => "uploads/" + el.filename)

        let product = await Product.create({ ...req.body, images, created_by: req.user._id });

        res.send(product)

    } catch (err) {

        next(err)
    }

}





module.exports = {
    index,
    store,
    show,
    update
}