<template>
    <header>
        <div class="header-top">
            <div class="container">
                <div class="header-top-logo">
                    <h1><nuxt-link to="/"><img src="/asset/images/logo.png"></nuxt-link></h1>
                </div>
                <div class="header-top-category">
                    <ul>
                        <li><a href="">COMPANY</a></li>
                        <li><a href="">SERVICES</a></li>
                        <li><a href="">PORTFOLIO</a></li>
                        <li><a href="">INSIGHTS</a></li>
                        <li><a href="">CONTACT</a></li>
                        <li class="menu"><a href="javascript:;" onclick="menuOpen();">메뉴바</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import Form from "../utils/Form";
export default {
    data(){
        return {
            activeLogin: false,
            headerClass: "",

            form: new Form(this.$axios, {
                type: "",
            }),
        }
    },

    methods: {

    },

    computed: {
        user(){
            return this.$store.state.user.data;
        }
    },

    watch: {
        '$route'(to, from) {
        }
    },

    mounted() {
        this.$nextTick(() => {

        });
    }
}
</script>


