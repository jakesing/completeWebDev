var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
]

todos.forEach(function(a, i) {
	console.log(a, i);
})

for(i in todos){
	console.log(todos[i], i)
}

for(var i = 0; i < todos.length; i ++){
	console.log(todos[i], i);
}

// var counterOne = 10;
// while (counterOne > 10){
// 	console.log("while", counterOne);
// 	counterOne--;
// }

// var counterTwo = 10;
// do {
// 	console.log("dowhile", counterTwo);
// 	counterTwo--;
// } while (counterTwo > 10);

