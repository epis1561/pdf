<template>
    <div id="wrapper">
        <loading v-if="$store.state.loading" />

        <pop />

        <!-- 헤더 -->
        <header-vue />

        <!-- 페이지마다 바뀔 영역 -->
        <section>
            <div class="container">
                <div class="sub-box">
                    <div class="sub-right-box">
                        <div class="mypage-box">
                            <mypage-sidebar />

                            <Nuxt />
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- 푸터 -->
        <footer-vue />
    </div>

</template>
<style>
/* .fade-enter-active, .fade-leave-active {
    transition: opacity .7s;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
} */
</style>
<script>
import HeaderVue from "../components/HeaderVue";
import FooterVue from "../components/FooterVue";
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
                {rel: 'stylesheet', type: 'text/css', href: '/asset/css/developer.css'},
                {rel: 'stylesheet', type: 'text/css', href: '//cdn.quilljs.com/1.3.4/quill.snow.css'},
                {rel: 'stylesheet', type: 'text/css', href: '//cdn.quilljs.com/1.3.4/quill.snow.css'},

            ],
        }
    },

    components: {
        FooterVue,
        HeaderVue
    },

    computed:{
        modals(){
            return this.$store.state.modals;
        }
    },

    methods:{
        getBasic(){
            this.$axios.get("/api/basics")
                    .then(response => {
                        if(response.data.data.length > 0)
                            this.$store.commit("setBasic", response.data.data[0]);
                    })
        },
        getBanners(){
            this.$axios.get("/api/banners")
                    .then(response => {
                        this.$store.commit("setBanners", response.data);
                    })
        },
        logout(){
            this.$auth.logout();
        },

    },

    mounted() {
        // this.$store.dispatch("getCoords");
        // this.getBasic();
        // this.getBanners();
    }
}
</script>
