// In ES5 if more arguments are passed to a function than expected,
// they would have been placed in arguments array

function myFunction_ES5(a, b) {
    const args = Array.prototype.slice.call(arguments, myFunction.length);
    console.log(args);
}
myFunction_ES5(1, 2, 3, 4, 5); //Output "3, 4, 5"

// In ES6 if more arguments are to be passed they can be recieved by function
// as rest parameter. Rest Parameters must be the last parameter of the function.

function myFunction_ES6(a, b, ...args) {
    console.log(args); //Output "3, 4, 5"
}
myFunction_ES6(1, 2, 3, 4, 5);