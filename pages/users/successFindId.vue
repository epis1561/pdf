<template>
    <div class="subpage">
        <div class="subpage-header">
            OK로지웰은 전국 어디든 고객맞춤 서비스를 제공합니다.
        </div>

        <div class="subpage-container">
            <div class="account find-account">

                <div class="section-title-wrap center row-group">
                    <p class="section-subtitle">
                        LOGIN
                    </p>
                    <h3 class="section-title gr">
                        아이디 찾기
                    </h3>
                </div>

                <div class="account-form form-wrap row-group">
                    <p class="title">
                        회원님의 아이디는 {{$route.query.ids}} 입니다.
                    </p>

<!--                    <p class="txt">
                        알림톡으로 전달 드린 아이디로 재 로그인을 해주세요. <br>
                        알림톡이 오지 않을 경우, 1599-5100으로 문의주세요.
                    </p>-->
                </div>

                <div class="subpage-btn-wrap col-group">
                    <nuxt-link to="/users/findPassword" class="subpage-btn white-navy">
                        비밀번호 찾기
                    </nuxt-link>
                    <nuxt-link to="/login" class="subpage-btn navy">
                        로그인 페이지로 이동
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import Form from "../../utils/Form";
export default {

    data(){
        return {
            form : new Form(this.$axios, {

            }),
        }
    },
    methods: {


    },

    computed: {

    },

    mounted() {
        console.log(this.$route.query.ids);
    }
}
</script>
