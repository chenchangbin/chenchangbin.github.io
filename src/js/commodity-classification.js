
(function(){
	//点击取消清空内容
	var del = document.querySelector(".delete-search");
	var input = document.querySelector(".search-input");

	del.addEventListener("touchstart",function(){
		input.value = '';
	})

}());