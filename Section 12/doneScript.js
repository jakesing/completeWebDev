//add cross list toggle

var lis = document.getElementsByTagName("li")


for (var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("click", function() {
		this.classList.toggle("done");
	})
}

//add buttons that delete
var closebtns = document.getElementsByClassName("delete");

for (var i = 0; i < closebtns.length; i++){
	closebtns[i].addEventListener("click", function() {
		this.parentElement.style.display = 'none';
	})
}



// /* Get all elements with class="close" */
// var closebtns = document.getElementsByClassName("close");
// var i;

//  Loop through the elements, and hide the parent, when clicked on 
// for (i = 0; i < closebtns.length; i++) {
//   closebtns[i].addEventListener("click", function() {
//   this.parentElement.style.display = 'none';
// });