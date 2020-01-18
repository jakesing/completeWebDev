var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


//define function to change h3 text
function changeText(){
	css.innerText = body.style.background;	
}


//define function to change the background to current value of color, and change text
function changeBackground(){
	body.style.background = "linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
	changeText();
}


//loop over colors to add event listener
colors = [color1, color2]

for(i in colors){
	colors[i].addEventListener("input", changeBackground)
}


