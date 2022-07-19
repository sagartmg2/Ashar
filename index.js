



// async-await  change
// change

async function calculate() {

    // fix the bug here
    console.log(11);

    let promise1 = new Promise((resolve, reject) => {
        // resolve(11)
        reject(false)
    })

    await promise1
        .then((response) => {
            console.log({ response });
        })
        .catch(err => {
            console.log({ err });
        })

    console.log("finish");

}

calculate();


// chnage in the last





