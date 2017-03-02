(function(){

	var menu = document.querySelector("menu");
	var list = menu.querySelectorAll("a");

	var all = document.querySelector(".center-all");
	var unused = document.querySelector(".center-unused");
	var use = document.querySelector(".center-use");
	var past = document.querySelector(".center-past");

	
		for(var i=0;i<list.length;i++){
			list[i].index = i;
			list[i].onclick = function(){
				
				list[this.index].classList.add("active");	

				for(var j=0;j<list.length;j++){
					list[this.index].classList.remove("active");
					all.classList.remove("block");
					unused.classList.remove("block");
					use.classList.remove("block");
					past.classList.remove("block");
				}

				if(this.index == 0){
					all.classList.add("block");
					unused.classList.add("block");
					use.classList.add("block");
					past.classList.add("block");
				}else if(this.index == 1){
					unused.classList.add("block");
				}else if(this.index == 2){
					use.classList.add("block");
				}else if(this.index == 3){
					past.classList.add("block");
				}
			}
		}
	

}());