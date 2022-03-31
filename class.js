// SYNTAX CLASS

// class ClassName {
// 	constructor() {}
// 	method_1 {}
// 	method_2 {}
// 	method_3 {}
//  }

 // EXAMPLE CLASS

class Car = {
	constructor (name , year) {
		this.name = name,
		this.year = year
	}
age () {
	let date = new Date ();
	return date.getFullYear () - this.year;
}
}

let myCar = new Car ("For", 2014);
document.getElementById("demo").innerHTML = 
"My car is" + myCar.age() + "years old";


// You can send parameters to Class methods

class Car {
	constructor (name, year) {
		this.name = name;
		this.year = year:
	}

	age (x) {
		return x - this.year;
	}
};

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 20014);
document.getElementById("demo").innerHTML =
"My Car is" + myCar.age(year) + "year old";