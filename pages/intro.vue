<template>
    <div class="intro-box">
        <ul>
            <li>
                <a href="https://esgi.or.kr/">
                    <img src="/asset/images/img_user_intro_01.png">
                    <h2>ESGI</h2>
                    <p>
                        ESGI, CP에 대한 전반적인 내용이 궁금하신가요?
                    </p>
                    <p class="subtitle">홈페이지</p>
                    <span>바로가기</span>
                </a>
            </li>
            <li>
                <a href="https://grc.or.kr/sub3/3_5.php">
                    <img src="/asset/images/img_user_intro_02.png">
                    <h2>Education</h2>
                    <p>
                        ESGI에 대한 내부 교육이 필요하신가요?
                    </p>
                    <p class="subtitle">교육</p>
                    <span>바로가기</span>
                </a>
            </li>
            <li>
                <nuxt-link to="/">
                    <img src="/asset/images/img_user_intro_03.png">
                    <h2>ESG Survey</h2>
                    <p>
                        온라인 비대면 진단이 필요하신가요?
                    </p>
                    <p class="subtitle">진단</p>
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
