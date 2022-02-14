// Symbols
let a = Symbol();
let b = Symbol();

// console.log(a == b);

let person = {
    name: 'Saiful',
    age: 35,
    [a]: 'Hello World'
}
console.log(person);
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
console.log(Object.keys(person));


for (x in person) {
    console.log(x);
}


let sym1 = Symbol('Hello');
let sym2 = Symbol();

console.log(sym1 == sym2);
console.log(sym1);