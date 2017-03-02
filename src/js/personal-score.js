(function(){


	var list = document.querySelector(".ul-list");
	var uls = list.querySelector("ul");
	var btn = uls.querySelectorAll("a");
	var ulblock = document.querySelectorAll(".ul-list1");


	// for(var i = 0; i < btn.length; i++){

	// 	btn[i].index = i;
	// 	btn[i].onclick = function(){

	// 		for(var j = 0; j < btn.length; j++){
	// 			btn[j].classList.remove("active");
	// 			ulblock[j].classList.remove("hidden");
	// 		}

	// 		btn[this.index].classList.add("active");
	// 		ulblock[this.index].classList.add("hidden");
	// 	}
	// }
		for(var i = 0; i < btn.length; i++){
			btn[i].index = i;
			btn[i].addEventListener("touchstart",function(){
				
				for(var j = 0; j < btn.length; j++){
					btn[j].classList.remove("active");
					ulblock[j].classList.remove("hidden");
				}

			btn[this.index].classList.add("active");
	 		ulblock[this.index].classList.add("hidden");

			});
		}	

}());