// Symbols
let s1 = Symbol("My Symbol");
let s2 = Symbol("My Symbol");
console.log(s1 === s2); // Outputs false
console.log(typeof(s1));
try {
    let s = new Symbol(); //"TypeError" exception
}
catch(e) {
    console.log(e.message); //Output "Symbol is not a constructor"
}
let obj = null;
let s1 = null;
(function(){
 let s2 = Symbol();
 s1 = s2;
 obj = {[s2]: "mySymbol"}
 console.log(obj[s2]);
 console.log(obj[s2] == obj[s1]);
})();
console.log(obj[s1]);

let obj = {a: 12};
let s1 = Symbol("mySymbol");
let s2 = Symbol("mySymbol");
Object.defineProperty(obj, s1, {
enumerable: false
});
obj[s2] = "";
console.log(Object.getOwnPropertySymbols(obj));

// Symbol() creates local Symbols
// Symbol.for() creates global Symbols

let obj = {};
(function(){
 let s1 = Symbol("name");
 obj[s1] = "Eden";
})();
//obj[s1] cannot be accessed here
(function(){
 let s2 = Symbol.for("age");
 obj[s2] = 27;
})();
console.log(obj[Symbol.for("age")]); //Output "27"