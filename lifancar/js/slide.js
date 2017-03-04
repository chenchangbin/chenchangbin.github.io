//返回前缀(浏览器兼容)
var prefix = function(){
    var div = document.createElement('div');
    var cssText = '-webkit-transition:all .1s; -moz-transition:all .1s; -o-transition:all .1s; -ms-transition:all .1s; transition:all .1s;';
    div.style.cssText = cssText;
    var style = div.style;
    if (style.webkitTransition) {
        return 'webkit';
    }
    if (style.MozTransition) {
        return 'moz';
    }
    if (style.oTransition) {
        return 'o';
    }
    if (style.msTransition) {
        return 'ms';
    }
    return '';
}();

// 大的轮播图
(function(){

	var banner = document.querySelector(".banner");
	var ul = banner.querySelector("ul");
	var btn_r = document.querySelector(".slide_r");
	var btn_l = document.querySelector(".slide_l");
	var ali;
	var first;
	var transitionend = prefix + "TransitionEnd";
	var finish = false;

	function next(){	
		ul.style.cssText = "transform:translateX(0); transition-duration:0s";
		ali = ul.querySelectorAll("li");
		first = ali[0].cloneNode(true);
		ul.removeChild(ali[0]);
		ul.appendChild(first);
	}		

	function prev(){
		finish = false;
	}

	//切换到下一张
	btn_r.addEventListener("click",function(){

		//删除掉左侧按钮给ul绑定的事件
		ul.removeEventListener(transitionend,prev)

		//往左边 移动3分之一
		ul.style.cssText = "transform:translateX(-33.333%)";

		//translateX完成之后触发
		ul.addEventListener(transitionend,next);
	});


	//切换到上一张
	btn_l.addEventListener("click",function(){
		if(!finish){
			
			finish = true;

			ul.removeEventListener(transitionend,next);

			last = ul.lastElementChild.cloneNode(true);
			ul.removeChild(ul.lastElementChild);
			ul.insertAdjacentElement("afterbegin",last);

			ul.style.cssText = "transform:translateX(-33.333%);transition-duration:0s;";
			
			//异步事件 ajax
			setTimeout(function(){
				ul.style.cssText = "transform:translateX(0);transition-duration:0.8s;";
				ul.addEventListener(transitionend,prev)
			},0);
		}		
	});
}());



(function(){
	//第二个轮播
	move(".slide2",".slide2-l",".slide2-r");

	//文字轮播
	move(".engine-slide",".engine-l",".engine-r")

	//文字轮播
	move(".tech-center",".tech-l",".tech-r")

	//体验轮播
	move(".perien-slide",".perien-l",".perien-r")

	function move(wrap,btnl,btnr){
		var slide = document.querySelector(wrap);
		var ul = slide.querySelector("ul");
		var ali = ul.querySelectorAll("li");
		var aliw = ali[0].offsetWidth;
		var len = ali.length;
		var left = document.querySelector(btnl);
		var right = document.querySelector(btnr);
		var index = 0;
		var finish = false;
		var transitionend = prefix + "TransitionEnd";
		var timer = null;

		//设置ul的宽度
		ul.style.width = len * aliw + "px";

		//下一张事件
		right.addEventListener("click",function(){
			next();
		});

		function next(){
			if(!finish){

				finish = true;

				index++;

				if(index == len){ 
					index = 0 ;
				}

				ul.style.transform = "translateX(-" + (aliw * index) + "px)";

				ul.addEventListener("transitionend",function(){
					finish = false;
				})
			}
		}

		//上一张
		left.addEventListener("click",function(){

			if(!finish){

				finish = true;
				index--;
				if(index < 0){
					index = len - 1;
				}

				ul.style.transform = "translateX(-" + (aliw * index) + "px)";

				ul.addEventListener("transitionend",function(){
					finish = false;
				})
			}
		})

		function run(){
			timer = setTimeout(function(){
				next();
				run();
			},2000);
		}
		run();

		//鼠标移动上去停止移动
		slide.addEventListener("mouseover",function(){
			clearTimeout(timer);
		})

		//鼠标移动上去停止移动
		slide.addEventListener("mouseleave",function(){
			run();
		})
	}
}());






























/*(function(){

	var slide = document.querySelector(".engine-slide");
	var ul = slide.querySelector("ul");
	var ali = ul.querySelectorAll("li");
	var aliw = ali[0].offsetWidth;
	var len = ali.length;
	var left = document.querySelector(".engine-l");
	var right = document.querySelector(".engine-r");
	var index = 0;
	var finish = false;
	var transitionend = prefix + "TransitionEnd";
	var timer = null;

	//设置ul的宽度
	ul.style.width = len * aliw + "px";

	//下一张事件
	right.addEventListener("click",function(){
		next()
	});

	function next(){
		if(!finish){

			finish = true;

			index++;

			if(index == len){ 
				index = 0 ;
			}

			ul.style.transform = "translateX(-" + (aliw * index) + "px)";

			ul.addEventListener("transitionend",function(){
				finish = false;
			})
		}
	}

	//上一张
	left.addEventListener("click",function(){

		if(!finish){

			finish = true;
			index--;
			if(index < 0){
				index = len - 1;
			}
			
			ul.style.transform = "translateX(-" + (aliw * index) + "px)";

			ul.addEventListener("transitionend",function(){
				finish = false;
			})
		}
	});

	function run(){
		timer = setTimeout(function(){
			next();
			run();
		},2000);
	}
	run();

	//鼠标移动上去停止移动
	slide.addEventListener("mouseover",function(){
		clearTimeout(timer);
	})

	//鼠标移动上去停止移动
	slide.addEventListener("mouseleave",function(){
		run();
	});

}());*/