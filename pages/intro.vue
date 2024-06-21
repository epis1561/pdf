<template>
    <div class="intro-box">
        <ul>
            <li>
                <a href="https://esgi.or.kr/">
                    <img src="/asset/images/img_user_intro_01.png">
                    <h2>홈페이지</h2>
                    <p>
                        ESGi, CP에 대한 전반적인 내용이 궁금하신가요?
                    </p>
                    <p class="subtitle">ESGi</p>
                    <span>바로가기</span>
                </a>
            </li>
            <li>
                <a href="https://grc.or.kr/sub3/3_5.php">
                    <img src="/asset/images/img_user_intro_02.png">
                    <h2>교육</h2>
                    <p>
                        ESGi에 대한 내부 교육이 필요하신가요?
                    </p>
                    <p class="subtitle">Education</p>
                    <span>바로가기</span>
                </a>
            </li>
            <li>
                <nuxt-link to="/">
                    <img src="/asset/images/img_user_intro_03.png">
                    <h2>진단</h2>
                    <p>
                        온라인 비대면 진단이 필요하신가요?
                    </p>
                    <p class="subtitle">ESG Survey</p>
                    <span>바로가기</span>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>
<style>

</style>
<script>
import Form from "@/utils/Form";

export default {
    layout: "empty",
    head() {
        return {
            link: [
                {rel: 'stylesheet', type: 'text/css', href: '/asset/css/user.css'},
            ],
        }
    },

    data() {
        return {


        }
    },

    methods: {

    },

    computed: {

    },

    mounted() {
        this.$store.commit("setViewIntro", true);

    }

}
</script>
