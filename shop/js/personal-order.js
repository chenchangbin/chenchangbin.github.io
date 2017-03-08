(function(){

	var btn = document.querySelector(".btn");
	var wrap = document.querySelector(".wrap");
	var wrap1 = document.querySelector(".wrap1");
	var body = window.body;
	var off = false; 

		btn.addEventListener("touchstart",function(){	
				//function ccb(){		
						if(!off){
							wrap.style.display = "block";
							off = true;
						} else {
							wrap.style.display = "block";
							wrap1.innerHTML = "亲,你已提醒卖家了,洗洗睡吧!";
						}
				//}	
			//	ccb();		
		});
	// setTimeout(function(){
	// 	ccb();
	// },2000);

	wrap.addEventListener("touchstart",function(){
		wrap.style.display = "none";
	});


}());