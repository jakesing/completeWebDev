// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// var user = {
// 	username: "jakesing",
// 	password: "easypassword"
// }

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [ 
	{
		username: "andrei",
		password: "supersecret"
	},
]


// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning"
	},
	{	username: "Sally",
		timeline: "Javascript is so cool"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass){
	if(user === database[0].username && pass === database[0].password){
		console.log(newsfeed)
	}
	else {
		alert("Sorry, wrong uername and password");
	}
}

signIn(userNamePrompt, passwordPrompt);