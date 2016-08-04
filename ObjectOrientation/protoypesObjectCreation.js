var Car = function () {};

Car.prototype.honk = function () {
	console.log("Honk Honk");
};

// Creating objects through this constructor makes their protoype to Car.prototype which means Car.prototype.honk() will be executed.
// You can add new functions by simply adding to the constructor like so

Car.prototype.drive = function () {
	console.log("Driving fast!");
};

// Now the object has a new function which is called as follows: myCar.drive(); which will print out "Driving fast!"
// You can directly change//add a funciton of one object as follows
myCar2.honk = function () {
	console.log("Hadonk hadonk!");
};

// myCar.honk() will print out the prototype defined function ("Honk Honk"), and myCar2.honk() will print out ("Hadonk hadonk!"). myCar2 now has a honk function directly on it
// while myCar has no function directly on it but is instead inheriting from the Car.prototype