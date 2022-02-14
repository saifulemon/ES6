// // Iterator
let iterable = 'Hello World';
iterable = [1, 5, 4, 6, 3, 8, 9];
let iter = iterable[Symbol.iterator]();
console.log(iter);

console.log(iter.next().value);
console.log(iter.next());

console.log('other codes....');

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());




let names = ['Saiful', 'Emon', 'Mehedi', 'Hasnat', 'Mahir'];
// custom iterator
function customIterator(arr) {
    let i = 0;
    return {
        next: function () {
            return i < arr.length ? {value: arr[i++], done: false} : {done: true};
        }
    };
}

let members = customIterator(names);
console.log(members.next().value);
console.log(members.next().value);
console.log(members.next().value);
console.log(members.next().value);
console.log(members.next().value);
console.log(members.next());




// Generators
function* genFunc() {
    console.log('some random code');
    yield 1;
    yield 'Safiul';
    yield 3;
    console.log('I am some code');
    yield 'Emon';
    yield 'Hello World';
}

let iter = genFunc();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
