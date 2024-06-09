<template>
    <section>
        <div class="container">
            <div class="sub-box">
                <div class="sub-right-box">
                    <div class="inner-wrap-box">
                        <div class="inner-box reg-select-box">
                            <nuxt-link to="/users/createAgree?category=PERSONAL">
                                <img src="/asset/images/img_user_reg_select_02.png">
                                <div>
                                    <div class="text">
                                        <p>개인회원</p>
                                        <small>기업에 소속되어있는 회원의 경우에는<br>개인회원으로 가입해주세요.</small>
                                    </div>
                                    <div class="button">
                                        <span>개인회원 회원가입</span>
                                    </div>
                                </div>
                            </nuxt-link>
                        </div>
                        <div class="inner-box reg-select-box">
                            <nuxt-link to="/users/createAgree?category=COMPANY">
                                <img src="/asset/images/img_user_reg_select_02.png">
                                <div>
                                    <div class="text">
                                        <p>기업회원</p>
                                        <small>기업을 등록하고 마스터 권리를 가지려면<br>기업회원으로 가입해주세요.</small>
                                    </div>
                                    <div class="button">
                                        <span>기업회원 회원가입</span>
                                    </div>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style>

</style>
<script>
import Form from "~/utils/Form";

export default {


    data(){
        return {


        }
    },

    methods: {

    },

    computed: {

    },

    watch: {

    },

    mounted() {

    }
}
</script>
