// Rest Operator ...
let fruits = ['Apple', 'Banana', 'Pine-apple', 'Mango'];
let [first, second, ...third] = fruits;
// console.log(first, second, third);


let person = {
    fName: 'Saiful',
    lName: 'Islam',
    dob: '26-09-2002'
}
let {fName, ...lName} = person;
// console.log(fName);
// console.log(lName);


let moreNum = [4, 5, 78, 6, 2];

let test = (name, ...numbers) => {
    console.log(name);
    console.log(numbers);
}
test('Saiful', 525, 25, 78);
test('Saiful', moreNum);