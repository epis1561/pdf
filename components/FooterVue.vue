<template>

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
