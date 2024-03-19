<template>
    <div id="wrapper">
        <loading v-if="$store.state.loading"/>

        <pop />

        <div class="admin-container-box">
            <admin-header />

            <Nuxt/>
        </div>
    </div>
</template>
<script>
export default {
    head() {
        return {

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
    }
}
</script>
