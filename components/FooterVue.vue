<template>
    <footer>
        <div class="container">
            <div class="footer-logo">
                <img src="/asset/images/img_member_footer_logo.png">
            </div>
            <div class="footer-info">
                <div class="footer-info-link">
                    <ul>
                        <li><a href="#">개인정보처리방침</a></li>
                        <li><a href="#">이용약관</a></li>
<!--                        <li><a href="">오시는 길</a></li>-->
                    </ul>
                </div>
                <div class="footer-info-text">
                    <ul>
                        <li>
                            <span>사업자 등록번호 424-86-02381</span>
                        </li>
                        <li>
                            <span>Tel. 02-6334-6609~10</span>
                            <span>E-Mail. skyong@grc.or.kr</span>
                        </li>
                        <li>
                            <span>Add. (08504) 서울특별시 금천구 서부샛길 606. B동 2208호</span>
                        </li>
                        <li>
                            <span>Copyright 2024. ESGI All rights reserved</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import NuxtLogo from "./NuxtLogo";
export default {
    components: {NuxtLogo},

    data(){
        return {
            footerClass: "",
        }
    },

    methods: {
        top() {
            window.scrollTo({top:0});
        },

        ready(){
            this.$store.commit("setPop", {
                description: "앱연동 대기"
            })
        },


    },

    watch: {
        '$route'(to, from) {
``
        }
    },

    mounted() {
        // 버튼 클릭시
        $(".top-btn").click(function() {
            $('html, body').animate({
                scrollTop : 0  }, 400) ;    // 0 까지 animation 이동합니다.   // 속도 400
            return false;
        });
    }
}
</script>
