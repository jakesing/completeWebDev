var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "jakesing",
		password: "fakeout"
	},
	{
		username: "coolguy123",
		password: "testing123"
	}
]

var newsfeed = [
	{
		username: "Boob",
		timeline: "hi"
	},
	{
		username: "Boob",
		timeline: "hi"
	},
	{
		username: "Boob",
		timeline: "hi"
	}
]

function isUserValid(username, password) {
	for (i in database){
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)){
		console.log(newsfeed);
	} else {
		alert("Get outta here");
	}
}

var userNamePrompt = prompt("username?");
var passwordPrompt = prompt("password?");

signIn(userNamePrompt,passwordPrompt);