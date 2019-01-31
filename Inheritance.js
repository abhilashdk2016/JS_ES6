// Base Class
function Vehicle(name) {
    this.name = name;   
}

Vehicle.prototype.start = function() {
    return "engine of "+this.name + " starting...";
};

// Car - Subclass
function Car(name) {
    Vehicle.call(this, name);
}

Car.prototype = Object.create(Vehicle.prototype);

var c1 = new Car('Benz');

