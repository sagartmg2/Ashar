
// Asynchronous function
// => functions that run in parllel with other function


// synchronous

// callback 
//  => simply functions which are passed as variables to another function 
// => with the intention of getting executed after the previous function get executed. 

// console.log(21);

// setTimeout(() => {
//     console.log("timeout")
// }, -1000000)

// console.log("finishh");

// function ab(callback){
//     callback()
// }
// function cd()
// {

// }

// ab(cd)


// complex operations 

// try {
//     // let a = 1 + 2 +c
//     let a = 1 + 2
//     console.log({ a });
// } catch (error) {
//     console.log(error)
// }

// console.log("hello ");

// // Promise
// // - pending
// // - resolve 
// // - reject 


// console.log(1);
// let promise1 = new Promise((resolve, reject) => {
//     resolve("promise fulfilled")
//     // reject("rejected")
// })

// // console.log(promise1);

// // promise1
// //     .then((response) => {
// //         console.log("inside then ", response)
// //         // let a = b + c;
// //     })
// //     .catch((error) => {
// //         console.log(" catch -> reject", error);
// //     })

// // console.log("finsh");

console.log("start");



function ab() {
    function cd(params) {
        console.log("cdd");
    }
    cd();
    console.log("ab");
}

ab();













// macrotask
setTimeout(() => {
    console.log("timeout");
}, 1000);

setTimeout(() => {
    console.log("timeout 00000");
}, 0);

// microtask
let pr1 = new Promise((resolve) => {
    resolve("success")
})

pr1.then((res) => {
    console.log({ res });
})

console.log("end");

// console.log(Promise.resolve("resolved"));

// event loop
// callstack  = > last in last out.

// queue => first in first out
// callbackqueue // macrotask
// jobqueue // microtask
// browser/node api