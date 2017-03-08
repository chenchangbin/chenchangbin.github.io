(function(){

	//选择物品
	function doSelect(){

		//全选选择按钮
		function allSelect(){
			var oBtn = document.getElementById("all_select_btn");
			var all_btns = document.getElementsByTagName("i");

			oBtn.toggle = true;
			oBtn.addEventListener("touchstart",function(){

				if(oBtn.toggle){
					oBtn.classList.add("select_true");
					oBtn.toggle = false;

					for(var i = 0; i<all_btns.length; i++){
						all_btns[i].classList.add("select_true");
						all_btns[i].toggle = false;
					}

					getCount();
				}else{
					oBtn.classList.remove("select_true");
					oBtn.toggle = true;

					for(var i = 0; i<all_btns.length; i++){
						all_btns[i].classList.remove("select_true");
						all_btns[i].toggle = true;
					}

					getCount();
				}
			});
		}

		//店铺选择按钮
		function stopSelect(){
			var shop_btn = document.getElementsByClassName("shop_i");
			var oBtn = document.getElementById("all_select_btn");
			var shop_arr = [];

			for(var i = 0; i < shop_btn.length; i++){
				shop_btn[i].toggle = true;
				shop_btn[i].addEventListener("touchstart",function(){
					var parents = this.parentNode.parentNode;
					var goods_btn = parents.getElementsByClassName("goods_i");

					if(this.toggle){
						this.classList.add("select_true");
						this.toggle = false;

						for(var i = 0; i < goods_btn.length; i++){
							goods_btn[i].toggle = false;
							goods_btn[i].classList.add("select_true");
						}

						getCount();
					}else{
						this.classList.remove("select_true");
						this.toggle = true;

						for(var i = 0; i < goods_btn.length; i++){
							goods_btn[i].toggle = true;
							goods_btn[i].classList.remove("select_true");
						}

						getCount();
					}

					for(var i = 0; i < shop_btn.length; i++){
						shop_arr[i] = shop_btn[i].toggle+"";
					}

					if(shop_arr.indexOf("true")<0){
						oBtn.classList.add("select_true");
						oBtn.toggle = false;
					}else{
						oBtn.classList.remove("select_true");
						oBtn.toggle = true;
					}

				});
			}
		}

		//商品选择按钮
		function goodsSelect(){
			var goods_btn = document.getElementsByClassName("goods_i");
			var shop_btn = document.getElementsByClassName("shop_i");
			var oBtn = document.getElementById("all_select_btn");

			for(var i = 0; i < goods_btn.length; i++){
				goods_btn[i].toggle = true;
				goods_btn[i].addEventListener("touchstart",function(){
					var goods_arr = [];
					var goods_all_arr = [];
					var parents = this.parentNode.parentNode.parentNode.parentNode;
					var select_i = parents.getElementsByClassName("goods_i");
					var select_shop = parents.getElementsByClassName("shop_i")[0];
					
					if(this.toggle){
						this.classList.add("select_true");
						this.toggle = false;
						getCount();
					}else{
						this.classList.remove("select_true");
						this.toggle = true;
						getCount();
					}

					for(var i = 0; i < select_i.length; i++){
						goods_arr[i] = select_i[i].toggle+"";
					}

					if(goods_arr.indexOf("true")<0){
						select_shop.toggle = false;
						select_shop.classList.add("select_true");
					}else{
						select_shop.toggle = true;
						select_shop.classList.remove("select_true");
					}

					for(var i = 0; i < goods_btn.length; i++){
						goods_all_arr[i] = goods_btn[i].toggle+"";
					}

					if(goods_all_arr.indexOf("true")<0){
						oBtn.toggle = false;
						oBtn.classList.add("select_true");
					}else{
						oBtn.toggle = true;
						oBtn.classList.remove("select_true");
					}

				});
			}
		}
		allSelect();
		stopSelect();
		goodsSelect();
	}

	//删除商品
	function doDelete(){
		var aDelete = document.getElementsByClassName("delete");

		for(var i = 0; i<aDelete.length; i++){
			aDelete[i].addEventListener("touchstart",function(){
				var oLi = this.parentNode.parentNode;
				var oUl = oLi.parentNode;
				var toggle = oLi.getElementsByClassName("goods_i")[0].toggle;
				var oDiv = oUl.parentNode;
				var oDiv_out = oDiv.parentNode;

				if(toggle){
					oUl.removeChild(oLi);

					if(oUl.children.length == 0){
						oDiv_out.removeChild(oDiv);
					}

				}else{
					alert("选择物品无法删除！");
				}

			});
		}

	}

	//选择的商品总数量
	function getNumber(){
		var goods_i = document.getElementsByClassName("goods_i");
		var goods_number = document.getElementsByClassName("goods_number");
		var all_li =  document.getElementsByTagName("li");
		var number = 0;

		for(var i = 0; i < goods_i.length; i++){

			if(!goods_i[i].toggle){
				var num = parseInt(all_li[i].getElementsByClassName("numbers")[0].innerHTML);
				number = number + num;
			}

		}

		for (var i = 0; i < goods_number.length; i++) {
			goods_number[i].innerHTML = number;
		}
	}

	//同款商品的数量增减
	function changeNum(){
		var prev_num = document.getElementsByClassName("prev_num");
		var next_num = document.getElementsByClassName("next_num");

		for (var i = 0; i < next_num.length; i++) {
			isAdd(next_num[i],true);
			isAdd(prev_num[i],false);
		}

		function isAdd(obj,bool){
			obj.addEventListener("touchstart",function(){
				var parents_div = this.parentNode;
				var numbers = parents_div.getElementsByClassName("numbers")[0];
				var num = parseInt(numbers.innerHTML);

				if(bool){
					num = num + 1;
				}else{

					if (num > 0) {
						num = num - 1;
					}

				}

				numbers.innerHTML = num;
				getCount();
			});
		}
	}
	//商品结算省去的钱
	function saveMoney(){
		var all_li = document.getElementsByTagName("li");
		var goods_i = document.getElementsByClassName("goods_i");
		var save_money = document.getElementsByClassName("save_money")[0];
		var select_arr = [];
		var count = 0;

		for(var i = 0; i<goods_i.length; i++){
			select_arr.push(goods_i[i].toggle+"");
		}

		for(var i = 0; i<select_arr.length; i++){

			if(select_arr[i] =="false"){
				var start_money = parseFloat(all_li[i].getElementsByClassName("start_money")[0].innerHTML)
				var money = parseFloat(all_li[i].getElementsByClassName("money")[0].innerHTML);
				var numbers = parseFloat(all_li[i].getElementsByClassName("numbers")[0].innerHTML);
				count += numbers*(start_money - money);
			}

		}

		save_money.innerHTML = count.toFixed(2);

	}

	//商品结算总价
	function getCount(){
		var all_li = document.getElementsByTagName("li");
		var money = document.getElementsByClassName("money");
		var prev_num = document.getElementsByClassName("prev_num");
		var next_num = document.getElementsByClassName("next_num");
		var numbers = document.getElementsByClassName("numbers");
		var span_ount = document.getElementsByClassName("count_all")[0];
		var select_goods = [];
		var Count = 0;

		for(var i = 0; i < all_li.length; i++){
			var  goods = all_li[i].getElementsByTagName("i")[0];
			select_goods.push(goods.toggle+"");
		}

		for(var i = 0; i<select_goods.length; i++){

			if(select_goods[i] == "false"){
				Count += parseFloat(numbers[i].innerHTML) * parseFloat(money[i].innerHTML);
			}

		}
		span_ount.innerHTML = Count.toFixed(2);

		saveMoney();
		getNumber();
		
	}

	doSelect();
	doDelete();
	getCount();
	changeNum();
	
}());
