(function(){

	var btn = document.getElementsByClassName("btn")[0];
	var zhi = document.getElementsByClassName("zhi")[0];
	var one = document.getElementsByClassName("original")[0];
	var sum = document.getElementsByClassName("sum")[0];
	var list = true;
	var newsu;

	btn.addEventListener("touchstart",function(){
		if(list){
			newsu = sum.innerHTML - zhi.innerHTML;
			sum.innerHTML = newsu;
			btn.classList.add("active");
			list = false;
		}else{
			sum.innerHTML = one.innerHTML;
			btn.classList.remove("active");
			list = true;
		}
	});

}());