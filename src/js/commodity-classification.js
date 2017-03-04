(function(){
	//点击取消清空内容
	var del = document.querySelector(".delete-search");
	var input = document.querySelector(".search-input");
	del.addEventListener("touchstart",function(){
		input.value = '';
	})
}());

(function(){
	var nav = document.getElementsByTagName('nav')[0];
	var as = nav.getElementsByTagName('a');
	for (var i = 0; i < as.length; i++) {
		as[i].addEventListener("touchstart",function(){
			for (var i = 0; i < as.length; i++) {
				as[i].classList.remove("active");
			}
			this.classList.toggle("active");
		});
	}
}());