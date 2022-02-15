// Set 
let mySet = new Set([1, 3, 5, 7]);
mySet.add('Hello');
mySet.delete(1);
mySet.add(4);
console.log(mySet.has(1));



// Iterating Sets
for (x of mySet) {
    console.log(x);
}

let iter = mySet.entries();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


for (let [x] of mySet.entries()) {
    console.log(x);
}

iter = [...mySet.entries()];
console.log(iter);

mySet.forEach(value => console.log(value));