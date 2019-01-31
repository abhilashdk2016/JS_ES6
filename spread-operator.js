// Passing multiple arguments/array to a function
// ES5 way of passing multiple arguments
function myFunction(a, b) {
    return a + b;
   }
   var data = [1, 4];
   var result = myFunction.apply(null, data);
   console.log(result); //Output "5"

// ES6 way of passing multiple arguments using spread-operator
function myFunction(a, b) {
    return a + b; 
}

let data = [1, 4];
let result = myFunction(...data);
console.log(result); //Output "5"

// Making array values a part of another array
let array1 = [2,3,4];
let array2 = [1, ...array1, 5, 6, 7];
console.log(array2); //Output "1, 2, 3, 4, 5, 6, 7"

// Pushing the values of an array into another array
// ES5 Way
var array1 = [2,3,4];
var array2 = [1];
Array.prototype.push.apply(array2, array1);
console.log(array2); //Output "1, 2, 3, 4"

// ES6 Way
let array1 = [2,3,4];
let array2 = [1];
array2.push(...array1);
console.log(array2); //Output "1, 2, 3, 4"

// Spreading multiple arrays
let array1 = [1];
let array2 = [2];
let array3 = [...array1, ...array2, ...[3, 4]]; //multi arrayspread
let array4 = [5];
function myFunction(a, b, c, d, e) {
  return a+b+c+d+e;
}
let result = myFunction(...array3, ...array4); //multi array spread
console.log(result); //Output "15"