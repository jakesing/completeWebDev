

var button = document.getElementById('enter'); //caches the button element
var input = document.getElementById('userinput'); //caches the text input
var ul = document.querySelector("ul"); //caches the destination

//function to enable new item to be crossed off
function addCrossoffEventListener(thing){
	thing.addEventListener("click", function() {
		this.classList.toggle("done");
	})
}

//function to add delete button plus event listener.
function addDeleteButton(location){
	var newButton = document.createElement("button");
	button.innerText = "Delete"
	location.appendChild(button);

	button.addEventListener("click", function() {
		this.parentElement.style.display = 'none';
	})
}

//function to add item to list and clear the input
function createListElement() {
	var li = document.createElement("li"); //creates the new li element
	//gives the new li element text from the input element

	// li.appendChild(document.createTextNode(input.value)); //- 1 way to do it. 
	li.innerText = input.value;// - 2nd way to do it. 

	ul.appendChild(li); //appends the new li element to the ul we selected above.	
	input.value = "";

	//add the ability to cross it off
	addCrossoffEventListener(li);

	//add delete button
	addDeleteButton(li);
}
	


//look for input length, will be used later to ignore empty entries
function notBlankInput() {
	return input.value.length > 0;
}

//simple call to previous function for the click evemt
function addListAfterclick(){
	if (notBlankInput()) {
		createListElement();
	}
}

//simple call to previous function for the enter event
function addListAfterKeypress(event) {
	if (notBlankInput() && event.keyCode === 13) { //keyCode === 13 is 'enter'
		createListElement();
	}
}

//add with mouse click of enter:
button.addEventListener('click', addListAfterclick);

//add with enter
input.addEventListener('keypress', addListAfterKeypress);

