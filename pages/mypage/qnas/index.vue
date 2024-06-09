<template>
    <div class="mypage-right">
        <div class="title-box">
            <h2>문의내역</h2>
            <div class="button-box">
                <nuxt-link to="/mypage/qnas/create" class="btn btn-black sm bdr4 h45 h-lg-35 px-lg-10 f18 f-lg-13">문의하기</nuxt-link>
            </div>
        </div>
        <div class="board-faq-box">
            <ul>
               <mypageqna :item="item" v-for="item in items.data" :key="item.id"></mypageqna>
            </ul>
        </div>
        <empty v-if="items.data.length === 0" />

        <pagination :meta="items.meta" @paginate="(page) => {form.page = page; filter()}" />
    </div>
</template>
<script>

import Form from "@/utils/Form";
export default {
    middleware: ["user"],
    layout: "mypage",

    data() {
        return {
            form: new Form(this.$axios, {
                page:1,
            }),

            items:{
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                }

            },
            active:false,

        }

    },

    methods: {
        filter(){
            this.$axios.get("api/qnas",{
                prams:this.form.data(),
            }).then(response => {
                console.log(response.data);
                this.items = response.data;
            })
        },


    },

    computed: {


    },

    mounted() {
        this.filter();
    }
}
</script>