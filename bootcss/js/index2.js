(function(){
	var btn = document.getElementsByClassName('btn')[0];
	var aForm = document.getElementsByClassName('aForm')[0];
	var aInput = document.getElementsByTagName('input')[0]; 
	var logo = document.getElementsByClassName("logo")[0];
	var m_l_s = document.getElementsByClassName("m_l_s")[0];
	var aDody = document.getElementsByTagName('body')[0];

	btn.addEventListener("click",function(event){
		event.stopPropagation();
		aForm.classList.add("block");
		btn.style.display = "none";
		logo.style.display = "none";
		m_l_s.style.display = "none";
	});
	aDody.addEventListener("click",function(event){
		event.stopPropagation();
		aForm.classList.remove("block");
		btn.style.display = "block";
		logo.style.display = "block";
		m_l_s.style.display = "block";
	});
	aInput.addEventListener("click",function(event){
		event.stopPropagation();
	});
}());

(function(){
	var btn = document.getElementsByClassName('m_l_s')[0];
	var m_center = document.getElementsByClassName('m_center')[0];
	var aDody = document.getElementsByTagName('body')[0];
	var m_ul1 = document.getElementsByClassName('m_ul1')[0];

	btn.addEventListener("click",function(event){
		event.stopPropagation();
		m_center.style.display = "block";
	});
	aDody.addEventListener("click",function(event){
		event.stopPropagation();
		m_center.style.display = "none";
	});
	m_ul1.addEventListener("click",function(event){
		event.stopPropagation();
	});
}());