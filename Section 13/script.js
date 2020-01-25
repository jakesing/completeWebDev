//git test

const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();



//Currying
const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;

//compose
const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

// <--Advanced Arrays-->
let array = [1,2,3,4];
let double = [];

let newArray = array.forEach((num) => {double.push(num * 2)});
function doubleNum(num){
	return num * 2;
}

//map, filter, reduce

//map
mapArray = array.map(x => x*2);


let numbers = [1, 4, 9]
roots = numbers.map(num => Math.sqrt(num));
// roots = numbers.map(function(num) {
//     return Math.sqrt(num)
// })


//filter
let filterArray = array.filter(num => num > 5);
filterArray = array.filter(num => num > 3);

//reduce
let reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 0) //0 is default value for accumulateor