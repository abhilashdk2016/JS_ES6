// function Vehicle() {

// }

// console.log(Vehicle.prototype);
// let car = { name : 'Benz'};
// console.log(car.__proto__);

function Car(name) {
    this.name = name;
}

Car.prototype.start = function() {
return "engine of "+this.name + " starting...";
};
var c1 = new Car("Santa Fe");
var c2 = new Car("Fiesta");

Car.prototype.speak = function() {
console.log("Hello, " + this.start());
};

c2.speak();  //"Hello, engine of Fiesta starting..."
c1.speak();

// Constructors
function Animal(name) {
    this.name = name;
    // console.log(`Inside Animal My Name is : ${this.name}`);
}
// In Browser this refers to window object
// In Node this refers to global object
// Invoking A Function
// let dog = Animal("Candy");
// console.log(dog);

let cat = new Animal("Spooky");
let horse = new Animal("Horse");

Animal.prototype.speak = function() {
    console.log(`${this.name} says hello`);
}

Animal.prototype.age = 20;

// horse.age = 30;
// cat.age = 15;
console.log(horse.speak());
console.log(cat);
console.log(cat.__proto__);