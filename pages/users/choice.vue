<template>
    <div class="subpage">
        <div class="subpage-header">
            OK로지웰은 전국 어디든 고객맞춤 서비스를 제공합니다.
        </div>

        <div class="subpage-container">
            <div class="container w1280">

                <div class="subpage-wrap signup-index">
                    <div class="delivery-index-group col-group">
                        <nuxt-link to="/users/create?type=PERSONAL" class="delivery-index-item row-group">
                            <div class="bg-img-box">
                                <img src="/images/signup_index_item_01.png" alt="">
                            </div>
                            <div class="txt-wrap row-group">
                                <img src="/images/signup_index_icon_01.svg" alt="" class="icon">
                                <p class="title gr">
                                    개인회원
                                </p>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/users/create?type=COMPANY" class="delivery-index-item row-group">
                            <div class="bg-img-box">
                                <img src="/images/signup_index_item_02.png" alt="">
                            </div>
                            <div class="txt-wrap row-group">
                                <img src="/images/signup_index_icon_02.svg" alt="" class="icon">
                                <p class="title gr">
                                    기업회원
                                </p>
                            </div>
                        </nuxt-link>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<style>

</style>
<script>
import Form from "~/utils/Form";

export default {
    data(){
        return {
            step: 1,
            form: new Form(this.$axios, {

            }),

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


