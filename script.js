// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
	
}

Car.prototype.getMakeModel= function (){

	return make + " " + model;
	
}

function SportsCar(make, model, topSpeed) {
	car.call (this,make, model);
	this.topSpeed = topSpeed;
	
}

Car.prototype.getTopSpeed=function  () {

	return  topSpeed;
	
}

SportsCar.prototype =  Object.create(car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
