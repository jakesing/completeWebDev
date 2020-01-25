// change everything below to the newer Javascript!

// let + const
// var a = 'test';
// var b = true;
// var c = 789;
// a = 'test2';

let a = 'test';
let b = true;
let c = 789
a = 'test2'


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;

const { firstName, lastName, age, eyeColor } = person;


// Object properties
let a = 'test';
let b = true;
let c = 789;

const okObj = {
  a,
  b,
  c
};

let city = 'barcelona'

// Template strings
//var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
let message = `Hello ${firstName}, have I met you before? I think we met in ${city} last summer, no?`

// default arguments
// default age to 10;
function isValidAge(age = 18) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"
sym1 = Symbol('hi');


// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) => (username && location) ? 'I am not lost' : 'I am totally lost!';