// ES6 fat arrow function
// Normal function
function number(n) {
    
    return n;
}
onsole.log(number(50));



// Arrow function
let number2 = () => {
    return 45;
}
console.log(number2());

// Parenthesis can be avoided when there is single parameter
// Curly braces can be avoided when there is just single statement
let number3 = num => console.log(num);
number3(20); 

// both of them are same
// let getSqr = num => {return num*num};
let getSqr = num => num*num;
console.log(getSqr(4));



// Callback
let numbers = [22, 25, 75, 69, 14, 25, 45, 10];

let printAll = (item) => {
    console.log(item);
}
numbers.forEach(printAll);


let sqrName = numbers.map(function (item) {
    return item*item;
});
console.log(sqrName);