<template>
    <div class="board-left">
        <div class="board-left-company">
            <img src="/asset/images/img_dashboard_logo.png">
            <h2>삼성전자</h2>
        </div>
        <div class="board-left-category">
            <ul>
                <li class="active"><a href="">대시보드</a></li>
                <li><a href="">캠페인 목록</a></li>
                <li><a href="">소속직원</a></li>
                <li><a href="">기업 정보</a></li>
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

    },

    mounted() {
    }
}
</script>
