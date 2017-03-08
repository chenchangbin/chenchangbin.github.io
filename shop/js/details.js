
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

//选择颜色、尺寸
(function(){

	var lis = document.getElementsByClassName('hidden-color');

	function select(oDiv){

		var as = oDiv.getElementsByTagName('a');
		var list = as[0];

		for (var i = 0; i < as.length; i++) {
			as[i].addEventListener("touchstart",function(){
				if(list){
					list.classList.remove("hidden-yse");
				} 
				this.classList.add("hidden-yse");
				list = this;
			});
		}
	}

	for(var i = 0; i<lis.length; i++ ){
			select(lis[i]);
	}
}());


//数量++
(function(){

	var e = document.getElementsByClassName('e')[0];
	var b = document.getElementsByClassName('b')[0];
	var i = document.getElementById("i");
	var index = 1;
	
	e.addEventListener("touchstart",function(){
		if (index == 1) {
			index = 1;
		}else{
			index--;
			i.innerHTML = index;
		}
		
	});

	b.addEventListener("touchstart",function(){
		index++;
		i.innerHTML = index;
	});
	
}());