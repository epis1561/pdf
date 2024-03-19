<template>
    <div class="subpage">
        <div class="subpage-header">
            OK로지웰은 전국 어디든 고객맞춤 서비스를 제공합니다.
        </div>

        <div class="subpage-container delivery_done">

            <div class="onepage-wrap row-group">
                <div class="section-title-wrap center row-group">
                    <h3 class="section-title gr">
                        회원가입이 완료되었습니다.
                    </h3>
                    <p class="section-subtitle">
                        감사합니다
                    </p>
                </div>

                <div class="subpage-btn-wrap col-group">
                    <nuxt-link to="/login" class="subpage-btn white-orange">
                        로그인하기
                    </nuxt-link>
                    <nuxt-link to="/" class="subpage-btn orange">
                        메인으로
                    </nuxt-link>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
import Form from "../../utils/Form";
export default {
    layout: "empty",
    data(){
        return {
            form : new Form(this.$axios, {

            })
        }
    },
    methods: {

    },

    computed: {

    }
}
</script>
