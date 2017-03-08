(function(){

	var input = document.getElementById("input");
	var btn = document.getElementById("btn");

	// 百度地图API功能
	// 刷新获取
	getLocationText(function(text){
		input.value = text;
	})

	//点击获取
	btn.addEventListener("touchstart",function(){
		getLocationText(function(text){
			input.value = text;
		})
	});
		

	function getLocationText(fn){

		var map = new BMap.Map("allmap");

		var point = new BMap.Point(116.331398,39.897445);

		map.centerAndZoom(point,20);

		var geolocation = new BMap.Geolocation();
		
		var geoc = new BMap.Geocoder();

		geolocation.getCurrentPosition(function(r){
			if(this.getStatus() == BMAP_STATUS_SUCCESS){
				var mk = new BMap.Marker(r.point);
				map.addOverlay(mk);
				map.panTo(r.point);
				alert('您的位置：'+r.point.lng+','+r.point.lat);

				point = new BMap.Point(r.point.lng,r.point.lat);

				geoc.getLocation(point, function(rs){
					var addComp = rs.addressComponents;
					var location = addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber;

					fn(location);
				});
			}
			else {
				alert('failed'+this.getStatus());
			}        
		},{enableHighAccuracy: true});
	}

}());