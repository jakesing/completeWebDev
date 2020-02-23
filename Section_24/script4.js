const fs = require('fs')

function q1() {
	fs.readFile('./santa.txt', (err, data) => {
		console.time('hi');

		let moves = data.toString().split('')
		let tally = moves.reduce((acc, currentValue) => acc + (currentValue === '(' ? 1 : -1)
			, 0)

		console.log(tally)
		console.timeEnd('hi')
	})
}

//q2 - some iterates on everything until it finds the first instance of something!
function q2() {
	fs.readFile('./santa.txt', (err, data) => {
		console.time('hi');

		let moves = data.toString().split('')
		let accumulator = 0
		let counter = 0
		const answer = moves.some((currentValue) => {
			currentValue === '(' ? accumulator++ : accumulator--
			counter++
			return accumulator < 0;
		})
		console.log(counter)
	})
}
q1();
q2();
//FOR LOOP METHOD
// let tally = 0;
// let position = 1;
// let negativeOnePositions = [];
// for(i of data.toString()){
// 	i === '(' ? tally++ : tally--;
// 	position ++;
// 	if(tally === -1){
// 		negativeOnePositions.push(position);
// 	}
// };
// console.log(tally)
// console.log('-1 positions: ' + negativeOnePositions[0])
// console.log(position)
// 