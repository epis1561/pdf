<template>
    <div class="dashboard-box">
        <loading v-if="$store.state.loading"/>

        <pop />

        <provider-sidebar />

        <Nuxt/>
    </div>
</template>
<style>
html, body {min-width:1903px; background:#F7F7F7;}
</style>
<script>
export default {
    head() {
        return {
            script: [
                {
                    src: '//cdn.quilljs.com/1.3.6/quill.min.js',
                    defer: true
                },
                /*       {
                           hid: 'google-analytics',
                           src: 'https://www.googletagmanager.com/gtag/js?id=GTM-NNSD2QJX',
                           defer: true
                       },
                       {
                           hid: 'gtm-script',
                           src: 'https://www.googletagmanager.com/gtm.js?id=GTM-NNSD2QJX',
                           defer: true
                       }*/
            ],

            link: [
                {rel: 'stylesheet', type: 'text/css', href: '/asset/css/user.css'},
                {rel: 'stylesheet', type: 'text/css', href: '//cdn.quilljs.com/1.3.4/quill.snow.css'},
                {rel: 'stylesheet', type: 'text/css', href: '//cdn.quilljs.com/1.3.4/quill.snow.css'},

            ],
        }
    },

    components: {},

    watch: {
        '$route'(to, from) {

        }
    },
    mounted() {

        if(this.$route.path !== "/admin/login" && (!this.$auth.user || this.$auth.user.data.type === 'COMMON'))
            return this.$router.push("/admin/login");

        this.$store.dispatch("getCategories");
    }
}
</script>
