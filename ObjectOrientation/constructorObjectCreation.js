var Car = function () {
	this.honk = function () {
		console.log("Honk Honk");
	};
};

// Captial letter is to denote that a constructor is being used (var car vs var Car, the latter being a constructor).
// Using this and new makes the explicit creation and return of the new object unnecessary.