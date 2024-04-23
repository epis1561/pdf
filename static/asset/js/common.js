function toTop(){
	$("html, body").stop().animate({scrollTop:300});
}

function popupOpen(type){
	var box = $(".popup-box > .box[data-name=" + type + "]");

	$("html , body , .popup-box").addClass("fixed");
	box.addClass("active");
	box.siblings().removeClass("active");
}

function popupClose(){
	$("html , body , .popup-box").removeClass("fixed");
}

function menuOpen(){
	$("html , body , header").addClass("fixed");
}

function menuClose(){
	$("html , body , header").removeClass("fixed");
}

/* 셀렉박스 옵션선택 포커스 */
$(document).on("change",".select-box select",function(){
	var box = $(this).closest(".select-box");
	var opt = $(this).find("option:selected").val();
	var redex = /\s/ig;
	var value = opt.toString().replace(redex, "").length;

	// 띄어쓰기를 제외한 글자가 존재하다면
	if(value > 0){
		box.addClass("active");
	}else{
		box.removeClass("active");	   
	}
});