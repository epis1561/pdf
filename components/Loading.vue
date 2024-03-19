<template>
    <span class="loader"></span>
</template>
<style>
.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #2B9F97;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    position:fixed; top:50%; left:50%; transform:translate(-50%, -50%);
    z-index:1000000;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
<script>

export default {
    components: {},

    data(){
        return {

        }
    },

    methods: {

    },

    mounted() {

    },

    watch: {

    }
}
</script>
