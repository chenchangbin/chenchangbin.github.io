(function(){

	var xin = document.getElementsByClassName("fraction-xi");
	
	function select(oDiv){
		var xins = oDiv.getElementsByTagName("span");
		var num;
		for(var i=0;i<xins.length;i++){	
			xins[i].index=i;
			xins[i].addEventListener("touchstart",function(){
				num=this.index;
				//第二次点击判断if
				 if(xins[num].className == "on"){
					for(var j=0;j<xins.length;j++){
						xins[j].classList.remove("on");
					}
				}else{
					for (var a = 0; a<= num; a++) {
						xins[a].classList.add("on");
					}
				}
				
			});
		}
	}	
	
	for(var i = 0; i<xin.length; i++ ){
		select(xin[i]);
	}

}());

// (function(){

// 	var list = document.querySelector(".ass-ul");
// 	var spans = document.querySelectorAll("span");
// 	//接收当前点击的star
// 	var num;

// 	for (var a = 0; a < spans.length; a++) {
// 		spans[a].index=a;

// 		spans[a].addEventListener("touchstart",function(){
// 			num= this.index;
// 			//移除所有star的样式
// 			for (var b = 0; b < spans.length; b++) {
// 				spans[b].classList.remove("changeStar");
// 			}
// 			//num是当前点击的star，所以循环之后，之前的star也添加了该样式
// 			for (var i = 0; i <= num; i++) {
// 				spans[i].classList.toggle("changeStar");
// 			}
// 		});
// 	}
// }());