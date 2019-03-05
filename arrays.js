// Array.from()
let str = "0123";
let arr = Array.from(str, value => parseInt(value) * 5);
console.log(arr);

// Array.of()
let arr1 = Array(2); // Creates an empty array of two elements
let arr2 = Array.of(2); // Creates an array with 2 as it's only element
console.log(arr1);
console.log(arr2);

// array.fill()
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
let arr3 = [1, 2, 3, 4];
let arr4 = [1, 2, 3, 4];
let arr5 = [1, 2, 3, 4];
arr1.fill(5);
arr2.fill(5, 1, 2);
arr3.fill(5, 1, 3);
arr4.fill(5, -3, 2);
arr5.fill(5, 0, -2);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);

// array.includes()
const arr = [0, 1, 1, 2, 3, 5, 8, 13];
arr.includes(0); // true
arr.includes(13); // true
arr.includes(21); // false
const arr = ['Some elements I like', NaN, 1337, true, false, 0017];
console.log(arr.includes(NaN)); // true
console.log(arr.indexOf(NaN) >= 0); // false => indexOf says there is no NaN element in array