<template>

</template>
<script>
import Form from "../utils/Form";
export default {
    data(){
        return {
            activeLogin: false,
            headerClass: "",
            activeAlarm: false,

            form: new Form(this.$axios, {
                type: "",
            }),

            alarms: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1
                }
            },
        }
    },

    methods: {

    },

    computed: {
        user(){
            return this.$store.state.user;
        }
    },

    watch: {
        '$route'(to, from) {
        }
    },

    mounted() {
        this.$nextTick(() => {
            $(".site-map a, button").unbind("click").bind("click", function (){
                $('#header').removeClass('sitemap');

                $('.gnb-menu').removeClass("active");
            });

            $('.toggle-bar').click(function () {
                $('#header').toggleClass('sitemap');
            });

            $('.gnb-menu').click(function(){
                $(this).toggleClass('active');
            });


            $(document).scroll(function(){
                var scrollTop = $(window).scrollTop();

                if ( scrollTop > 0 ) {
                    $('#header').addClass('active');
                } else {
                    $('#header').removeClass('active');
                }
            });
        });
    }
}
</script>


