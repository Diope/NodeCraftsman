// A car that inherits from a vehicle
var Vehicle = function () {};
// An empty constructor is created

Vehicle.prototype.drive = function () {
	console.log("vrooom");
};

var Car = function () {};
// An empty constructor is created

Car.prototype = new Vehicle();
//New vehicle prototype named Car is created

Car.prototype.honk = function () {
	console.log("Honk honk");
};
// Car prototype is given "Honk honk"

var myCar = new Car();

myCar.honk() 	// Outputs "honk honk"
myCar.drive() 	// Outputs "vrooom"