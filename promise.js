// Promises 
/*
1. Successful => resolve
2. Failed => reject
*/

let prom = new Promise((resolve, reject) => {
    let a;
    setTimeout(() => {
        a = 2 + 4;
    }, 7000);
    if (a == 6) {
        resolve('Success');
    }
    else {
        reject('Failed');
    }
})

prom.then((message) => {
    console.log('I am from then ' + message);
}).catch((message) => {
    console.log('I am from catch ' + message);
})

console.log('I am after Promise');