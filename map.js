// Maps
let myMap = new Map(
    [
        [`first key`, 10],
        [`Second key`, 'Hello World'],
        [`Third key`, 5.5]
    ]
);

// Add 
myMap.set(`fourth key`, 'JavaScript');

console.log(myMap.get('Second key'));
console.log(myMap.has('key'));
console.log(myMap.size);
console.log(myMap.has('key'));



// Iterate
for (let [x, y] of myMap) {
    console.log(x, y);
}

for (let x of myMap.keys()) {
    console.log(x);
}


for (let x of myMap.values()) {
    console.log(x);
}

for (let x of myMap.entries()) {
    console.log(x);
}

myMap.forEach((x, y) => {
    console.log(x, y);
})

let arr = Array.from(myMap);
arr = Array.from(myMap.keys());
arr = Array.from(myMap.values());
console.log(arr);