// let and constant
const numbers = [22, 68, 28, 47, 55];
numbers[1] = 44;
numbers.push(258);
console.log(numbers);


const nayok = {
    name: 'Shakib Khan',
    phone: 0255,
    age: 28,
    add: 'Dhaka'
}
console.log(nayok);


let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log(i);




// default
function add(num1, num2 = 30) {
    return num1 + num2;
}

const result = add(15);
console.log(result);





// template 
const firstName = 'Justin';
const lastName = 'Truedu';
const fullName = firstName + ' ' + lastName + ' is a good boy';
const fullName2 = `${firstName} ${lastName} is a good boy`;
console.log(fullName2);


const multiline = 'dil ko kara ar aya\n' + 
'tuj pe peyara aya\n'
+ 'pehli pehli bar aya';
console.log(multiline);


const multiLine2 = `Hello JavaScript
Hello EcmaScript 
Hello Node.js
Hello Express Js
Hello React Js
Hello Vellina Js`;
console.log(multiLine2);






// arrow function
function doubleIt(num) {
    return num * 2;
}

const doubleIt = function (num) {
    return num *2;
}

const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const output = doMath(30, 50);
console.log(output);






// threedots
const ages = [22, 20, 14, 19, 25, 18, 17, 23];
const ages2 = [22, 25, 17, 14, 75, 28];
const ages3 = [22, 520, 47, 74, 75, 28, 12, 45, 85];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, ...ages3];
console.log(allAges2);

const takapoisha = [650, 550, 270];
const maximum = Math.max(...takapoisha);
console.log(maximum);





// class
class Students {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = 'Feni Computer Insitute';
    }
}

const student1 = new Students(20, 'Saiful Emon');
const student2 = new Students(12, 'Hasnat Bhuiyan');
console.log(student1, student2);





// inheritance
class Parent {
    constructor() {
        this.fathersName = 'Schewrznegger'
    }
}

class Child extends Parent{
    constructor(name) {
        super();
        this.name = name;
    }
    getfullName(){
        return this.name + ' ' + this.fathersName;
    }
}

const baby = new Child('Arnold');
const baby2 = new Child('Tom');
console.log(baby.getfullName(), baby2);





// distructure 
const person = {
    name: 'Hamza Khan',
    age: 26,
    job: 'video creator',
    address: 'Gazipur Dhaka',
    friends: ['hasin', 'fahim', 'afridi']
}

const {age, address, name, salary} = person;
console.log(age, address, name, salary);


const friends = ['Shakib Khan', 'Hamza Khan', 'Salman Khan', 'Solaiman Shukhon'];
const [chotofriends, ...olders] = friends;
console.log(olders);