// Object Destructing

let person = {
    firstName: 'Saiful',
    lastName: 'Islam',
    dob: '09-02-2002'
}

// let firstName = person.fName;
// let lastName = person.lName;
// let dob = person.dob;


// let {firstName, lastName, dob} = person;

// console.log(firstName);
// console.log(lastName);
// console.log(dob);


function display({firstName, lastName, dob} ) {
         console.log(firstName, lastName, dob);
}
display(person);