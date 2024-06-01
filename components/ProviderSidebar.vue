<template>
    <div class="board-left">
        <div class="board-left-company">
            <img :src="$auth.user.data.provider.img ? $auth.user.data.provider.img.url : ''">
            <h2>{{ $auth.user.data.provider.title }}</h2>
        </div>

        <div class="board-left-category">
            <ul>
                <li :class="className('chart-icon', '/provider')"><nuxt-link to="/provider/dashboard">대시보드</nuxt-link></li>
                <li :class="className('book', '/provider/campaigns')"><nuxt-link to="/provider/campaigns">캠페인 목록</nuxt-link></li>
                <li :class="className('building', '/provider/companies')"><nuxt-link to="/provider/companies">참여업체 목록</nuxt-link></li>
<!--                <li><nuxt-link to="">소속직원</nuxt-link></li>
                <li><nuxt-link to="">기업 정보</nuxt-link></li>-->
            </ul>
        </div>
    </div>
</template>
<style>

</style>
<script>
import Form from "@/utils/Form";

export default {
    props: {

    },

    data(){
        return {
            form: new Form(this.$axios, {

            }),
        }
    },

    methods: {
        className(add, url){
            return this.$route.path.includes(url) ? add + ' active' : add + '';
        }
    },

    mounted() {
    }
}
</script>
