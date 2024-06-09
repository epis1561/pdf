<template>
    <section>
        <div class="container">
            <div class="sub-box">
                <div class="sub-right-box">
                    <div class="location-box">
                        <ul>
                            <li class="home"><nuxt-link to="/">홈</nuxt-link></li>
                            <li>고객 센터</li>
                            <li>자료실</li>
                        </ul>
                    </div>
                    <div class="title-box">
                        <h2 class="lg">자료실</h2>
                    </div>
                    <div class="category-box mt64 mt-lg-30">
                        <ul>
                            <li><nuxt-link to="/faqs">FAQ</nuxt-link></li>
                            <li><nuxt-link to="/qnas">문의사항</nuxt-link></li>
                            <li><nuxt-link to="/notices">공지사항</nuxt-link></li>
                            <li class="active"><nuxt-link to="/documents">자료실</nuxt-link></li>
                        </ul>
                    </div>
                    <div class="board-list-box">
                        <table>
                            <tr v-for="item in items.data" :key="item.id">
                                <td class="num">{{ item.id }}</td>
                                <td class="subject"><nuxt-link :to="`/documents/${item.id}`">{{ item.title }}</nuxt-link></td>
                                <td class="date">{{ item.format_created_at }}</td>
                            </tr>
                        </table>
                    </div>

                    <empty v-if="items.data.length === 0" />

                    <pagination :meta="items.meta" @paginate="(page) => {form.page = page; filter()}" />
                </div>
            </div>
        </div>
    </section>
</template>
<style>

</style>
<script>
import Form from "@/utils/Form";

export default {


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
            }


        }
    },
    methods: {
        filter(){
            this.$axios.get("api/documents",{
                prams:this.form.data(),
            }).then(response => {
                console.log(response.data);
                this.items = response.data;
            })
        }
    },

    computed: {

    },

    mounted() {
        this.filter();
    }
}
</script>
