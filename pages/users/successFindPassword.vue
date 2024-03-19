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
                        비밀번호 찾기
                    </h3>
                </div>

                <div class="account-form form-wrap row-group">
                    <p class="title">
                        비밀번호를 재설정했습니다.
                    </p>
                    <p class="txt">
                        입력하신 전화번호로 임시 비밀번호를 발송했습니다. <br>
                        임시 비밀번호로 로그인한 뒤, 안전하게 비밀번호를 변경해주세요!
                    </p>
                </div>

                <div class="form-footer-wrap col-group">
                    <nuxt-link to="/login" class="form-submit-btn">
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

    }
}
</script>
