var vehicle = {};
vehicle.drive = function () {
	console.log("vroom");
};

var car = Object.create(vehicle);
car.honk = function () {
	console.log("honk honk");
};

var myCar = Object.create(car);
myCar.honk(); // Will console log "honk honk"
myCar.drive(); // Will console log "vroom"

// Object.create() handles writing dedicated constructors and attaching functions to their prototype behind the scenes
// A temporary constructor is created, it's prototype is set to the object that serves as the role model for the new object. 