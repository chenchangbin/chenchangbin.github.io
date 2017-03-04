function colors(){

	(function(){

		 var bgs = document.querySelector(".dis2-car");
		 var btns = document.querySelector(".car-color");
		 var btns = btns.querySelectorAll("li");

		 //修改属性
		 // for(var i = 0; i < btns.length; i++){
		 // 	btns[i].index = i+1;
		 // 	btns[i].onclick = function(){
			// 	bgs.setAttribute("style","background:url(img/car-"+this.index+".png)0 0 no-repeat;  background-size: 100%")

			// }
		 // }
		 
		 //改变class
		 for(var i = 0; i < btns.length; i++){
		 	btns[i].index = i+1;
		 	btns[i].onclick = function(){
				//bgs.classList.add("dis2-car"+this.index+"");
				bgs.className = "dis2-car dis2-car"+this.index;
			}
		 }
	}());
 	
}