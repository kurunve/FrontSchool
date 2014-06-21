var wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", function(){
	var newBox = document.createElement("div");
	newBox.setAttribute("class","box");
	//newBox.css("background","red");
	newBox.style.backgroundColor = "Blue";
	wrapper.appendChild(newBox);

});


var boxes = document.querySelectorAll(".box");


for (var i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener("click", function(event){
		event.stopPropagation();
		wrapper.removeChild(this);

	});
}
