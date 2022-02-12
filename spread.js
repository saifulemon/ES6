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