

// VAR IS GLOBAL SCOPED VARIALBE
// LET AND CONST ARE  BLOCK SCOPED VARIALBE
// var name = "John1"
// let surname = "dOE"

// VAR CAN BE REDECLARED ANY NUMBER OF TIMES

// performing our tasks,
// if (true) {
//     var name = "CHANGED "
//     let surname = "CHANGED SURNAME"
//     const age = 12
//     console.log(age)
// }



function calulate() {
    var name = "CHANGED "
    let surname = "CHANGED SURNAME"
    const age = 12

    // when keywords not mentioned it creates a global varaible
    // name = "CHANGED "
    //  surname = "CHANGED SURNAME"
    //  age = 12
}

calulate();

// console.log({ name })
// console.log({ surname })
// console.log({ age })



// LOOP
// starting point
// end point


// console.log(1)
// console.log(2)
// console.log(3)

//  for loop 
// =>  if we know the number of iterations

// for(<starting_point>;<condition>;<incrment>){
// for (i = 0; i < 10; i++) {
//     console.log(i);
// }


// while(<condition>){
let status = false;
let counter = 0;

do{
    console.log("print", counter);
    counter++

    if (counter > 10) {
        status = false
    }

}while(status)


// TODO
// Template Literals

// 7* 1= 7
// 7* 2= 14

// 7 * 10 = 70
//  => output => 7*10=70

// todo: try to print the  pattern below
//  *
//  **
//  ***
//  ****

// console.log(7*10=70)





// // => use while, when you don't know the number of iteration and 
// // rather the condition instead.
// while (status) {
//     console.log("print", counter);
//     counter++

//     if (counter > 10) {
//         status = false
//     }
//     // if (counter % 4 == 0) {
//     //     status = false
//     // }
// }

































