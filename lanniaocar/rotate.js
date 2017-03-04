//旋转部分功能

var run = (function(){

	var wrap = document.querySelector(".wrap");
	var box = document.querySelector(".scale-box");
	var btn = document.querySelector("#btn");
	var ro = "rotate2"; //class名

	//旋转
	function rotate(event){

		event.stopPropagation();//阻止冒泡

		wrap.classList.remove(ro);
		ro = ro == "rotate2" ? "rotate" : "rotate2";
		wrap.classList.add(ro);			
		wrapEnd();
	}

	function wrapEnd(){
		wrap.addEventListener("webkitAnimationEnd",scale)
	}

	function scale(event){
		event.preventDefault();//阻止事件捕获
		box.removeEventListener("webkitAnimationEnd",rotate);
		box.classList.remove("scale");//放大
		box.classList.add("shrink");//缩小	
		boxEnd();
		wrap.removeEventListener("webkitAnimationEnd",scale)
	}

	function boxEnd(){
		box.addEventListener("webkitAnimationEnd",shrink);
	}

	function shrink(event){
		event.stopPropagation();
		box.classList.remove("shrink");
		box.removeEventListener("webkitAnimationEnd",shrink);
		
		colors();
		dis6();
		// off是判断动画是否完成
		off = false;
	}

	return function(){
		box.classList.add("scale");
		box.addEventListener("webkitAnimationEnd",rotate)
	}

	

}());



