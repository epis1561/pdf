<template>
    <section>
        <div class="container">
            <div class="sub-box">
                <div class="sub-right-box">
                    <div class="location-box">
                        <ul>
                            <li class="home"><nuxt-link to="/">홈</nuxt-link></li>
                            <li>고객 센터</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div class="title-box">
                        <h2 class="lg">FAQ</h2>
                    </div>
                    <div class="category-box mt64 mt-lg-30">
                        <ul>
                            <li class="active"><nuxt-link to="/faqs">FAQ</nuxt-link></li>
                            <li><nuxt-link to="/qnas">문의사항</nuxt-link></li>
                            <li><nuxt-link to="/notices">공지사항</nuxt-link></li>
                            <li><nuxt-link to="/documents">자료실</nuxt-link></li>
                        </ul>
                    </div>
                    <div class="board-faq-box">
                        <ul>
                            <faq :item="item" v-for="item in items.data" :key="item.id" />
                        </ul>
                    </div>

                    <empty v-if="items.data.length === 0" />

                    <pagination :meta="items.meta" @paginate="(page) => {form.page = page; filter()}" />
                </div>
            </div>
        </div>
    </section>
</template>
<style>
.tests {
    display: flex; gap:12px; height:100%; flex-direction: column; justify-content: center; align-content: center;
    padding:40px;
}
.tests .text {
    display: inline-block;
    padding:12px;
    font-size:24px;
    border:2px solid black; color:black; font-weight:bold;
    text-align: center;
}
</style>
<script>
import Form from "@/utils/Form";

export default {


    // get방식은 form 쓰지말고 this.$axios 사용주의

    data() {
        return {
            form: new Form(this.$axios, {
                page: 1,
            }),

            items: {
                data: [],
                meta: {
                    current_page: 1,
                    last_page: 1,
                }
            }
        }
    },


    methods: {
        filter(){
            this.$axios.get("/api/faqs", {
                prams: this.form.data(),
            }).then(response => {

                this.items = response.data;

            });
        },


    },

    computed: {

    },

    mounted() {
        this.filter();
    }

}
</script>
