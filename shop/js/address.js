(function(){

	var btn = document.getElementsByClassName("address-left");	
	//var liat=btn[btn.length];

	for (var i = 0; i < btn.length; i++) {
		btn[i].addEventListener("touchstart",function(){

			for (var i = 0; i < btn.length; i++) {
				btn[i].classList.remove("on");
			}
			//if(liat){
			//	liat.classList.remove("on");	
			//}  
			this.classList.add("on");
			//liat = this;
		});
	}
}());

(function(){

	var main = document.getElementsByTagName("main")[0];
	var add = document.getElementsByClassName("address");
	var btn = document.getElementsByClassName("address-left");	

	for (var i = 0; i < btn.length; i++) {
		btn[i].index = i; 
		btn[i].addEventListener("touchstart",function(){
			var parent = this.parentNode.parentNode;
			main.insertBefore(parent,add[0]);
		});	
	}
}());

(function(){

	var main = document.getElementsByTagName("main")[0];
	var del = document.getElementsByClassName("delete");	

	for (var i = 0; i < del.length; i++) {
		del[i].index = i; 
		del[i].addEventListener("touchstart",function(){
			//var parent = this.parentNode.parentNode; 
			var parents = this.parentNode.parentNode.parentNode;
			//var parentss = this.parentNode.parentNode.parentNode.parentNode;
			//parentss.removeChild(parents);
			main.removeChild(parents);
		});	
	}		
}());