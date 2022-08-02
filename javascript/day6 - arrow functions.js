
// var 
// let 
// const

// let num = 7;
// let i = 1;

// for (i = 1; i < 11; i++) {
//     // console.log(num + " * " + i + " = " + num * i)
//     console.log(`${num} * ${i} = ${num * i}`)
// }


// var star = ""

// for (let i = 1; i < 5; i++) {
//     for (let j = 0; j < i; j++) {
//         star += "*";
//     }
//     star+="\n"
// }

// console.log(star)
// console.log("john\"s")

// let arr = new Array(1,2,3)


// 

// let arr = [0, 1, 2] // indexes
// let arr = [1, 2, 3, 4, 5]




// arr.push(4);
// arr.shift()
// arr.unshift(0)
// arr.pop()

// arr.splice(1, 0, 6, 7, 8)
// let new_arr = arr.slice(1, 4)


// let arr = [1, 2, 3, 4, 5]
// higher order function

// let filtered_arr = arr.filter((element) => { return element < 3 })
// let lessThaThree = (el) => { return el < 3 }

// let filtered_arr = arr.filter(lessThaThree)


// console.log(arr.length)
let arr = [1, 2, 3, 4, 5]

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * 2
// }

// arr.forEach((el, index) => {
//     // el = el * 2;
//     arr[index] = el * 2
// })

let custom_name = (el, index) => el * index;
let mapped_arr = arr.map(custom_name)

console.log(mapped_arr);
console.log(arr);

// console.log({ filtered_arr })



// console.log({ arr })

// let arr2 = []

// for (let i = 1; i < 5; i++) {
//     arr2.push(i)
// }

// console.log({ arr2 })