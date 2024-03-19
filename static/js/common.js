function get_code(val){
    location.href = val;

    //alert(val);  //읽혀진 값 확인(해당값을 사용하는 로직에 적용하면됩니다.)
}

$(document).ready(function(){
    //aos
    AOS.init();
    function AOS_MOBILE() {
        if (matchMedia("screen and (max-width: 1024px)").matches) {

            $('.more-btn').attr({
                'data-aos': '',
                'data-aos-delay': '',
                'data-aos-duration': '',
            });

        }
    } // 1024px 이하일 때
    AOS_MOBILE();
});