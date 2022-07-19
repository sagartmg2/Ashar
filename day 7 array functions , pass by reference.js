
// PASS by value and pass by refernce


let a = "string"
let b = a;
b = "changed"

let c = 12
let d = c;
d = "changed"


// console.log(a, ",", b);
// console.log(c, ",", d);



let arr = [1, 2, 3]
let arr2 = arr
let arr3 = [...arr2]
// let arr2 = point to the same postion of our arr1
arr2.push(4)

// console.log({ arr });
// console.log({ arr2 });


// let obj2 = obj
// obj2.c = 3;

// console.log(obj);
// console.log(obj2);

let obj = {
    a: 1,
    b: 2
}
function sum(refrenced_obj) {

    // spread operator //
    // object destructuring =>   ... rest operators

    // let temp = refrenced_obj
    let temp = { ...refrenced_obj }
    temp.d = 4
    console.log({ temp });

}

sum(obj)

// console.log(obj)



// .some and .every = > boolean 
// console.log([1, 2, 3, 10].every((element) => element < 5));
// console.log([1, 2, 3, 10].some((element) => element < 5));

// if(.every){
// }

api_response = [
    {
        id: 1,
        name: "john",
        address: "smth"
    },
    {
        id: 2,
        name: "Dope",
        address: "smth"
    }
]

// TODO:  = > ["john","Dope"]

// [12, 23, 4354, "string"].find(el => el == "string")
let res = api_response.find(el => el.id == 1)
// api_response.find(el => {return el.id == 1} )
// console.log({ res });

// console.log([1, 2, 3].indexOf(3));
console.log([1, 2, 3].findIndex((el) => el < 3));

console.log([true, true, false].includes(false));
// if(main_status){
//     // revert the datbase
// }

console.log("string".length);
console.log("string".trim);


let str = "red orange green"
let arr_ = str.split(" ")

// request.headers.Authorization = "Bearer <token>".split(" ")[1] 
console.log(arr_);