//Demo with javascript .call()

var obj = {name:"Pragyanshri"};
var obj2 = { name: 'Navya' };

var greeting = function(a,b,c){
    // console.log(this); // In Node this refers to Global object. In Browser this refers to window object. 
    return "welcome "+ this.name +" to "+a+" "+b+" in "+c;
};

console.log(greeting('a','b','c'));
let params = ["WhiteField","Bangalore","KA"];
console.log(greeting.call(obj, "WhiteField","Bangalore","KA"));
console.log(greeting.call(obj2, "WhiteField","Bangalore","KA"));
console.log(greeting.apply(obj2, params));

let fn = greeting.bind(obj2);
console.log(fn("WhiteField","Bangalore","KA"));