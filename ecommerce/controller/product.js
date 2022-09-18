
const Product = require("../model/Product")
const mongoose = require("mongoose")

const index = async (req, res, next) => {

    // Product.find({},(err,data) => {
    //     res.send(data)
    // });

    // PAGINATTE
    // filter 
    // - perpagte,page,serach_term,ascending,order,price_range.brand...

    // if seller ==> send only seller product

    // if buyer => receive all 

    // let products = await Product.find({});
    let search_term = req.query.search_term;
    // console.log({search_term})
    // return;

    let page = req.query.page || 1;
    let per_page = req.query.per_page || 5;
    // let price_from 
    // let price_to 

    // console.log(req.user.role == seller )

    let products = await Product.aggregate([
        {
            $match: {
                "created_by": req.user?.role === "seller" ?
                    {
                        $eq: mongoose.Types.ObjectId(req.user?._id)
                    }
                    :
                    {
                        $ne: {},
                    }
            }
        },
        {
            $match: {
                $or: [
                    { name: { $regex: RegExp(search_term, "i") } },
                    { brands: { $regex: RegExp(search_term, "i") } },
                    { categories: { $regex: RegExp(search_term, "i") } },
                ]
            }
        }, {
            "$facet": {
                "metadata": [
                    { $count: "total" }, {
                        $addFields: {
                            page: page, per_page: per_page
                        }
                    }],
                "data": [
                    {
                        $skip: ((page - 1) * (per_page)),
                    },
                    {
                        $limit: parseInt(per_page)
                    }
                ]
            }
        }
    ])

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