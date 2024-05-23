<template>
    <div>
        <pop />
        <loading v-if="$store.state.loading"/>

        <Nuxt />
    </div>
</template>
<script>

export default {
    head() {
        return {
            link: [
                {rel: 'stylesheet', type: 'text/css', href: '/css/common.css'},
                {rel: 'stylesheet', type: 'text/css', href: '/css/style.css'},

            ],
        }
    },

    components: {

    },

    methods:{

    },

    mounted() {

    }
}
</script>
