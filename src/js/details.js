
//选择尺码
(function(){

	var skip = document.querySelector(".skip");
	var hidde = document.querySelector(".hidden-size");
	var exit = document.querySelector(".exit");

	skip.addEventListener("touchstart",function(){
		hidde.style.top = "0%";	
		document.body.classList.add("bodys");
	});

	exit.addEventListener("touchstart",function(){
		hidde.style.top = "-100%";	
		document.body.classList.remove("bodys");	
	});
}());


//收藏
(function(){

	var collect = document.querySelector(".collect");
	var Off = false;

		collect.addEventListener("touchstart",function(){

			if(!Off){
				collect.style.background = 'url("img/icon_love.jpg") center 0.2188rem no-repeat';
				Off = true;	
			}else{
				collect.style.background = 'url("img/details_collect.png") center 0.2188rem no-repeat';
				Off = false;
			}	
		});

}());