
// let status = "Monday";
// let status = true;


// if (status) {
//     console.log("true");
// } else if (false) {
//     console.log("false");
// } else {
//     console.log("final case")
// }



// if else -> truthy values
// swtich -> exact value

// switch (status) {
//     case "Sunday":
//         console.log("yes sunday")
//         break;
//     case "Monday":
//         console.log(" it is monday ")
//         break;
//     default:
//         console.log("default case")
// }


// _____ FUNCTION


// find the sum and multiply and check if it is odd or even 
// 1 + 2 + 4
// 2 + 3 + 5 
// 2 + 3 + 5 
// 2 + 3 + 5 
// 2 + 3 + 5 
// 2 + 3 + 5 
// 2 + 3 + 5 
// 2 + 3 + 5 
// 2 + 3 + 5 
// 2 + 3 + 5 
// 2 + 3 + 5 

// function <functionName>(<parameter>,<parameter>){}
function calculateSum(num1, num2) {
    // console.log("inside");
    console.log((num1 + num2) * 2)

    // return null;
}

// call, execute, invoke the function 
{/* <function_name>(<arguement><arguement>) */ }

// calculateSum(10)
// calculateSum(10, 5)
// calculateSum(10, 5)
// calculateSum(10, 5)
// calculateSum(10, 5)
// calculateSum(10, 5)
// calculateSum(10, 5)
// calculateSum(10, 5)
// calculateSum(10, 6)

// Donot repeat yourself => DRY

// console.log((1 + 2 + 3) * 2);
// console.log((1 + 2 + 3) * 2);
// console.log((1 + 2 + 3) * 2);
// console.log((1 + 2 + 3) * 2);
// console.log((1 + 2 + 3) * 2);
// console.log((1 + 2 + 3) * 2);
// console.log((1 + 2 + 3) * 2);
// console.log((1 + 2 + 3) * 2);
// console.log((1 + 2 + 3) * 2);
// console.log((1 + 2 + 3) * 2);



// ARROW FUNCTION, FAT ARROW FUNCTION       

// function subtract(num1, num2) {
//     console.log("before ....")
//     return num1 - num2
//     console.log("after     ....")
// }

let subtract = (num1, num2) => {
    return num1 - num2
}

let subtract2 = (num1, num2) => num1 - num2

let diff = subtract(10, 5)
console.log(diff);





