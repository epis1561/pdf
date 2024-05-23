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
	$("html , body , .sub-box").addClass("fixed");
}

function menuClose(){
	$("html , body , .sub-box").removeClass("fixed");
}

// 외부영역 클릭 시 특정요소 닫기
$(document).mouseup(function (e){
	var popupBox = $(".popup-box");	 
	var menuBox = $(".sub-box");

	if(popupBox.has(e.target).length === 0){
		$("html , body , .popup-box").removeClass("fixed");
	}	
	if(menuBox.has(e.target).length === 0){
		$("html , body , .sub-box").removeClass("fixed");
	}	
});

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

/* 체크박스 전체동의 */
$(document).on("change",".agree-list-box .list-foot input",function(){
	var type = $(this).attr("data-name");
	$(".agree-list-box > .list-body input").prop("checked" , $(this).prop("checked"));
});

$(document).on("change",".agree-list-box > .list-body input",function(){
	var len = $(".agree-list-box > .list-body input").length;
	var checklen = $(".agree-list-box > .list-body input:checked").length;

	if(len > checklen) $(".agree-list-box > .list-foot input").prop("checked",false);
	if(len == checklen) $(".agree-list-box > .list-foot input").prop("checked",true);
});

