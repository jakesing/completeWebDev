var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:',_.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var root = document.documentElement;
var random = document.getElementById("random");

//set initial value for colors
color1.value = getComputedStyle(root).getPropertyValue('--color1').slice(1,8);
color2.value = getComputedStyle(root).getPropertyValue('--color2').slice(1,8);

css.innerText = getComputedStyle(body).backgroundImage;

//define function to change h3 text
function changeText(){
	css.innerText = body.style.background;	
}

//define function to change the background to current value of color, and change text
function changeBackgroundWithIntent(){
	body.style.background = "linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
	changeText();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundRandom(){
	var newColor1 = getRandomColor();
	var newColor2 = getRandomColor();
	body.style.background = 'linear-gradient(to right, '+newColor1+', '+newColor2+')';
	color1.value = newColor1;
	color2.value = newColor2;
	changeText();
}

//set new background;
color1.addEventListener("input", changeBackgroundWithIntent);
// color1.addEventListener("input", changeText);
color2.addEventListener("input", changeBackgroundWithIntent);
// color2.addEventListener("input", changeText);
random.addEventListener("click", changeBackgroundRandom);