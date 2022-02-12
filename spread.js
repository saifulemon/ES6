// Spread Operator
let test = 'Programmer';
let spread = [...test];

// console.log(spread);

let fruit1 = ['Apple', 'Banana', 'Pine-apple', 'Mango'];
let fruit2 = ['Orange', 'Graoe'];
let newFruit = 'Jackfruit';

let newArr = [...fruit1, ...fruit2, newFruit];
//console.log(newArr);




// Spread on Object (ES8)
let person = {
    fName: 'Saiful',
    lName: 'Islam'
}

let newPerson = {...person, dob: '26-09-2002'};
console.log(newPerson);


let numbers = [24, 65, -1, 96, 5, 87];
console.log(Math.max(...numbers));

let person1 = ['Saiful', 'Emon'];

let test1 = (fName, lName) => {
    console.log(`Hello ${fName} ${lName}`);
}
// test1(person1[0], person1[1]);
test1(...person1);  // using spread operator