// 猜你喜欢的无限加载
(function(){

	var content = document.body;
	//var content = document.getElementsByClassName("content")[0];
	var footer = document.getElementsByTagName("footer")[0];
	var winh = window.innerHeight - footer.offsetHeight;
	var ul = document.getElementById("like-ul");
	var isFinish = false;

	/*
	 * describe: 创建加载的文档碎片，并且插入到content
	 * arguments : content , 要插入到的容器
	 * return ：返回插入的div
	*/
	function appendLoading(content){
		var fragment = document.createDocumentFragment();
		var wrap = document.createElement("div");
		var img = document.createElement("img");
		var span = document.createElement("span");

		wrap.className = "loading";
		img.src = "img/timg.gif";
		span.innerHTML = "正在加载";

		wrap.appendChild(img);
		wrap.appendChild(span);
		fragment.appendChild(wrap);
		content.appendChild(fragment);

		return wrap;
	}

	//往content插入文档碎片
	var loading = appendLoading(content);
	var loadTop = 0;


	//判断正在加载是否出现在屏幕
	content.addEventListener("scroll",function(){

		loadTop = loading.getBoundingClientRect().top;

		if(loadTop < winh && !isFinish){
			ajaxLoad();
			isFinish = true;
		}
	});

	// ajax加载数据
	function ajaxLoad(){

		//创建一个ajax对象
		var xhr = new XMLHttpRequest();

		// 需要请求的链接 / 文件（html.json）
		xhr.open("get","goods.json",true);

		// 绑定一个change监听事件
		xhr.onreadystatechange = function(){

			//当请求完成（ =4）并且请求成功（ =200）
			if(xhr.readyState == 4 && xhr.status == 200){

				//接收请求回来的文本
				var res = xhr.responseText;

				var obj = JSON.parse(res);

				var html = "";

				for(var key in obj){
					html += '<li><a href="#"><img src=" '+ obj[key]["img"] +' "><p>'+ obj[key]["describe"] +'</p><span><i>￥</i>'+ obj[key]["price"] +'</span><s>￥'+ obj[key]["s"] +'</s></a></li>';
				}

				setTimeout(function(){
					ul.insertAdjacentHTML("beforeEnd",html);
					isFinish = false;
				},2000);
				
			}
		}

		// 一个命令 开始发送
		xhr.send(null);

	}

}());