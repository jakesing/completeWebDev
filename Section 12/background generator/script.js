var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var root = document.documentElement;
// var initialvalue1 = getComputedStyle(root).getPropertyValue('--color1');
// var initialvalue2 = getComputedStyle(root).getPropertyValue('--color2');

//set initial value for colors
// color1.value = getComputedStyle(document.documentElement).getPropertyValue('--color1');
color1.value = getComputedStyle(root).getPropertyValue('--color1').slice(1,8);
color2.value = getComputedStyle(root).getPropertyValue('--color2').slice(1,8);

css.innerText = getComputedStyle(body).backgroundImage;

//define function to change h3 text
function changeText(){
	css.innerText = body.style.background;	
}

// changeText();

//define function to change the background to current value of color, and change text
function changeBackground(){
	body.style.background = "linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
	changeText();
}

//set new background;
color1.addEventListener("input", changeBackground);
// color1.addEventListener("input", changeText);
color2.addEventListener("input", changeBackground);
// color2.addEventListener("input", changeText);


