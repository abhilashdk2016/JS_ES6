// Array Destructuring

let myArray = [1, 2, 3];
let [a, b, c] = myArray; //array destructuring assignment syntax
console.log(`a = ${a}; b = ${b}; c = ${c};`);
// Ignoring values
let [d,,e] = myArray;
console.log(`d = ${d}; e = ${e};`);
//Using rest operator
let [f, ...g] = [1,2,3,4,5,6];
console.log(`f = ${f}; g = ${g};`);
//Ignoring values while using Rest Operator
let [i,,...j] = [1,2,3,4,5,6,7,8];
console.log(`i = ${i}; j = ${j};`);
// Default Values
let [k,l,m=3] = [1,2];
console.log(`k = ${k}; l = ${l}; m = ${m};`);
// nested Array Destructuring
let [n, o, [p, q]] = [1, 2, [3, 4]];
// Using a destructuring assignment as a parameter
function myFunction([a, b, c = 3]) {
    console.log(a, b, c); //Output "1 2 3"
}
myFunction([1, 2]);
// Providing Default Arguments while using destructuring assignmet as parameter
function myFunction2([a, b, c = 3] = [1, 2, 3]) {
    console.log(a, b, c);  //Output "1 2 3"
}
myFunction2(undefined);

// Object Destructuring
// Variable names same as object property names
let object = { name: 'JS', age: 40 };
let {name, age } = object;
console.log(`Name: ${name}. Age: ${age}`);

// Variable names not similar to object property names
let { name: x, age: y} = object;
console.log(`x: ${x}. y: ${y}`);

// Object Destructuring for Nested Objects
var {name2, otherInfo: {age2}} = {name: "Eden", otherInfo: {age: 23}};

// Object Destructuring as parameters
function myFunction3({name = 'Eden', age = 23, profession = "Designer"} = {})   {
    console.log(name, age, profession); // Outputs "John 23 Designer"
}
myFunction3({name: "John", age: 23});