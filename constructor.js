// ES5 Constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function () {
    console.log(this.name);
}


// ES6 Class
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        console.log(this.name);
    }
}

let person1 = new Person('Safiul', 56);
console.log(person1.getName());