(function(){

	var lis = document.querySelectorAll("li");
	var liat = lis[lis.length-1];

	for(var i=0;i<lis.length;i++){
		lis[i].addEventListener("touchstart",function(){

			// for(var j=0;j<lis.length;j++){
			// 	lis[j].classList.remove("btn");	
			// }
			if(liat){
				liat.classList.remove("btn");	
			} 
			this.classList.add("btn");
			liat=this;
		})
	}

}());