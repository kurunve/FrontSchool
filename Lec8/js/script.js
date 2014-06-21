
 var previousOnload = window.onload;
       window.onload = function() {
            if (previousOnload) {
                previousOnload();
            }
            setTimeout('setUserName()', '500');
    }

function setUserName(){
	var name = "Vova";
	//name = prompt("Enter your name:");
	console.log("Name : " + name);

	var x=document.getElementById("wrapperId");
	console.log("x : " + x);
	x.innerHTML = "Hello, " + name  + " !";

	var y = document.getElementById("addTextId");
	var number1 = -1;
	var number2 = +2;

	
	y.innerHTML = "<ul> <li>"+ (number1+number2) +"</li>"
					  +"<li>"+ number1+number2+"</li>"
				  +"</ul>";
}