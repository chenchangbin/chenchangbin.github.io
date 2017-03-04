function dis6(){
	(function(){

		// var uls = document.querySelector(".dis6-ul1");
		// var lis = uls.querySelectorAll("li");
		// var li1 = document.querySelector(".li1");
		// var li2 = document.querySelector(".li2");
		// var li3 = document.querySelector(".li3");
		// var li4 = document.querySelector(".li4");
		// var li5 = document.querySelector(".li5");
		// var li6 = document.querySelector(".li6");

		// var center = document.querySelector(".dis6-center");
		// var divs = center.querySelectorAll("div");

		// var jingping = document.querySelector(".dis6-jingping");
		// var gshi = document.querySelector(".dis6-gshi");
		// var yueye = document.querySelector(".dis6-yueye");
		// var hezou = document.querySelector(".dis6-hezou");
		// var tuji = document.querySelector(".dis6-tuji");
		// var sying = document.querySelector(".dis6-sying");

		// for(var i=0; i<lis.length; i++){
		// 		lis[i].index = i;	
		// 		lis[i].onclick = function(){
		// 			for(var j=0; j<lis.length; j++){
		// 				lis[j].className = '';
		// 				divs[j].className = '';
		// 			}
					
		// 			this.className = 'li1';
		// 			divs[this.index].className = 'div1';

		// 		}
		// 	}

		var uls = document.querySelector(".dis6-ul1");
		var lis = uls.querySelectorAll("li");

		var wraps = document.querySelector(".dis6-center");
		var divs = wraps.querySelectorAll("div");

		//console.log(divs.length)
		//改变class
		//切换块
		 for(var i = 0; i < lis.length; i++){
		 	lis[i].index = i+1;
		 	lis[i].onclick = function(){

				for(var j=0;j<lis.length; j++){
					//lis[j].index = j+1;

					lis[j].className = "li"+(j+1);
					divs[j].className = "dis6hidden";
				}

				lis[this.index-1].className = 'li'+this.index+ ' li1-'+this.index;
				divs[this.index-1].className = "dis6block dis6-"+this.index;
			}
		 }	


		 //切换图片
		 var ul2img = document.querySelector(".dis6-ul2");
		 var li2img = ul2img.querySelectorAll("li");

		 var ul3img = document.querySelector(".dis6-ul3");
		 var li3img = ul3img.querySelectorAll("li");

		 for(var i = 0; i < li2img.length; i++){
		 	li2img[i].index = i+1;
		 	li2img[i].onclick = function(){

				for(var j=0;j<li2img.length; j++){
					//lis[j].index = j+1;

					li2img[j].className = "liimg"+(j+1);//liimg1
					li3img[j].className = "";
				}

				li2img[this.index-1].className = 'liimg'+this.index+ ' liim'+this.index;
				li3img[this.index-1].className = "zindex2";
			}
		 }




	}());
}