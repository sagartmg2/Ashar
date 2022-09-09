

db.staffs.insertOne({ name: "John" })

db.datas.insertMany([
    { name: "Staff-4", age: 3, postion: null, status: true, value: undefined, datas: { a: 1, b: 2, c: [1, 2, 3] } },
])


db.staffs.find({})

db.staffs.find({ age: 12 }, { name: 1 })
db.staffs.replaceOne({}, { age: 11 })

db.staffs.updateOne({ age: 12 }, { age: 111 }) // XX
db.staffs.updateOne({ age: 112 }, { $set: { age: 1, name: "One", surnmae: "Doe" } })



db.datas.updateOne({ _id: "631725a57404cbb6e17d359d" }, { $unset: { datas: 12 } })
db.datas.find({ _id: "631725a57404cbb6e17d359d" })
db.datas.find({ _id: ObjectId("631725a57404cbb6e17d359d") })
db.datas.updateOne({ _id: ObjectId("631725a57404cbb6e17d359d") }, { $unset: { datas: 1 } })

db.datas.deleteOne({ _id: ObjectId("631725a57404cbb6e17d359d") })


db.authors.insertOne({ name: "Mark" })

db.books.insertOne({
    name,
    Isbn,
    author_id: ObjectId("")
})

db.authors.insertMany([
    { name: "John" },
    { name: "Alex" }
])

dbb.students.insertOne({
    name,
    address,
    parent_name
})

// ObjectId("631871835ba019299f8322c5"),
// ObjectId("631871835ba019299f8322c6"),

db.books.insertMany([
    { name: "Javascript", author_id: ObjectId("631871835ba019299f8322c5") },
    { name: "Php", author_id: ObjectId("631871835ba019299f8322c5") },
    { name: "Python", author_id: ObjectId("631871835ba019299f8322c5") },
])
// {name:"Python",author_id:ObjectId("631871835ba019299f8322c6")}

db.books.insertOne(
    { name: "Python", author_id: ObjectId("631871835ba019299f8322c5") }
)

// Book.create



// => [{name:js,author:John}]
// => collections of data 


db.books.aggregate([
    { $match: { name: "Python" } },
    { $match: { author_id: ObjectId("631871835ba019299f8322c5") } },
    {
        $lookup: {
            from: "authors",
            localField: "author_id",
            foreignField: "_id",
            as: "author"
        }
    },
])


// db.
// db.books.distinct("name")


db.books.aggregate([
    {
        $group:{_id:"$name",total:{$sum:1}},
    },
    {
        $limit:1,
    }
])



// ,_id: ObjectId("631871835ba019299f8322c5")}
// aggregation => advance find()  || aggregation framework || aggregation pipeline
// $lookup

// $match
// author:
// =>



// Select * from staffs where age = 12