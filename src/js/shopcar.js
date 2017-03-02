(function(){

	// 件数
	function getNum(){
		var aLi = document.getElementsByTagName("li");
		var num = document.getElementsByClassName("num_count")[0];
		num.innerHTML = aLi.length;

	}

	// 删除
	function doClose(){
		var close = document.getElementsByClassName("close_day1");
		for(var i = 0; i< close.length; i++){
			close[i].addEventListener("touchstart",function(){

				var parent_li = this.parentNode.parentNode;
				var parent_ul = parent_li.parentNode;
				var parent_div = parent_ul.parentNode;
				var parent_bestDiv = parent_div.parentNode;
				parent_ul.removeChild(parent_li);
				getNum();
				closes = parent_ul.getElementsByClassName("close_day1");
				if(closes.length  == 0){
					parent_bestDiv.removeChild(parent_div);
				}
			});
		}
	}
	doClose();
	
	// 选中
	function about_all(){
		var shop_wraps = document.getElementsByClassName("shop-wrap");
		var count_btn = document.getElementsByClassName("count_btn")[0];
		var select_all = document.getElementsByClassName("select_all");
		count_btn.isTrue = true;
		var aaaaaa = [];
		for(var i = 0 ; i<select_all.length; i++){
			select_all[i].toggle = true;
		}
		//打勾
		function doSelect(num){
			var all_mail = document.getElementsByClassName("select_smail");
			var shop_wrap = document.getElementsByClassName("shop-wrap")[num];
			var allSelect = shop_wrap.getElementsByClassName("select_all")[0];
			var smailSelect = shop_wrap.getElementsByClassName("select_smail");
			var arr = [];
			var arr_mail = [];
			for(var i = 0; i<all_mail.length; i++){
				all_mail[i].toggle2 = true;
			}

			allSelect.addEventListener("touchstart",function(){
				if(this.toggle){
					this.classList.add("active");
					this.toggle = false;
					for(var i = 0; i<smailSelect.length; i++){
						smailSelect[i].classList.add("active");
						smailSelect[i].toggle2 = false;
						arr[i] = ""+smailSelect[i].toggle2;
					}
					for(var i = 0; i<select_all.length; i++){
						aaaaaa[i] = ""+select_all[i].toggle;
					}
					console.log(aaaaaa);
					if(aaaaaa.indexOf("true")<0){
						count_btn.classList.add("active");
						count_btn.isTrue = false;
					}
				}else{
					this.classList.remove("active");
					this.toggle = true;
					count_btn.classList.remove("active");
					count_btn.isTrue = true;
					for(var i = 0; i<smailSelect.length; i++){
						smailSelect[i].classList.remove("active");
						smailSelect[i].toggle2 = true;
						arr[i] = ""+smailSelect[i].toggle2;
					}

				}
			});
			for(var i = 0; i<smailSelect.length; i++){
				smailSelect[i].addEventListener("touchstart",function(){
					if(this.toggle2){
						this.classList.add("active");
						this.toggle2 = false;
						for(var i = 0; i<smailSelect.length; i++){
							arr[i] = ""+smailSelect[i].toggle2;
						}
						for(var i = 0; i<all_mail.length; i++){
							arr_mail[i] = ""+all_mail[i].toggle2;
						}
						console.log(arr_mail);
						if(arr.indexOf("true")<0){
							allSelect.classList.add("active");
							allSelect.toggle = false;
						}
						if(arr_mail.indexOf("true")<0){
							count_btn.classList.add("active");
						}
					}else{
						this.classList.remove("active");
						this.toggle2 = true;
						allSelect.classList.remove("active");
						allSelect.toggle = true;
						count_btn.classList.remove("active");
						count_btn.isTrue = true;
						for(var i = 0; i<smailSelect.length; i++){
							arr[i] = ""+smailSelect[i].toggle2;
						}
					}
				});
			}
			
		}
		
		// 全选
		function allSelect(){
			
			var select_smail = document.getElementsByClassName("select_smail");
			count_btn.addEventListener("touchstart",function(){
				if(this.isTrue){
					for(var i = 0; i < select_all.length; i++){
						select_all[i].toggle = false;
						select_all[i].classList.add("active");
					}
					for(var i = 0; i < select_smail.length; i++){
						select_smail[i].toggle2 = false;
						select_smail[i].classList.add("active");
					}
					count_btn.classList.add("active");
					count_btn.isTrue = false;
				}else{
					for(var i = 0; i < select_all.length; i++){
						select_all[i].toggle = true;
						select_all[i].classList.remove("active");
					}
					for(var i = 0; i < select_smail.length; i++){
						select_smail[i].toggle2 = true;
						select_smail[i].classList.remove("active");
					}
					count_btn.classList.remove("active");
					count_btn.isTrue = true;
				}
			});
		}
		allSelect()
		for(var i = 0; i<shop_wraps.length; i++){
			doSelect(i);
		}
	}
	about_all();
	getNum()
}());


