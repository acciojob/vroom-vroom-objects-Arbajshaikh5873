function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getMakeModel = function () {
    return this.make + " " + this.model;
};

function SportsCar(make, model, topSpeed) {
    // ✅ Correct parent constructor call
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// ✅ Proper inheritance
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// ✅ SportsCar-specific method
SportsCar.prototype.getTopSpeed = function () {
    return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
