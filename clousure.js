function counter() {
    var count = 0;
    return function () {
      count += 1;
      return count;
    }
  }

let innerFunction = counter();
console.dir(innerFunction);
console.log(innerFunction());
console.log(innerFunction());
console.log(innerFunction());
console.log(innerFunction());

function demo() {
    var a;
}

demo();