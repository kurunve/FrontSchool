var link = document.querySelector(".link");


link.addEventListener("click", 
	function(){
		event.preventDefault();//cancel standard action
		//alert("Onotole");

		window.open("http://yandex.ru");
	}
);