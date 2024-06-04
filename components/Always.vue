<template>
    <td class="num notice" v-if="item.important == 1">공지</td>
    <td class="num always" v-else-if="item.always == 1">상시</td>
    <td class="num" v-else></td>
</template>
<script>
import Form from "../utils/Form";
export default {
    props: ["item"],

    data(){
        return {

        }
    },

    methods: {

    },

    computed: {

    },

    watch: {

    },

    mounted() {

    }
}
</script>