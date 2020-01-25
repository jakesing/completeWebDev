//Evaluate these:
//#1
[2] === [2] // false;
{} === {}  // false - because objects

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;


//object1 - 4
//object2 - 4
//object3 - 4
//object4 - 5

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.type = type;
		this.color = color;
	}
}

class Cow extends Animal {
	constructor(name, type, color){
		super(name, type, color);
	}

	moo() {
		console.log(`MOOOO I am ${this.name}, a large ${this.color} ${this.type}`)
	}
}

let Mary = new Cow('Mary', 'Regular', 'Brown');
