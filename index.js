



// async-await 

async function calculate() {

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





