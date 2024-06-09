<template>
    <li @click="active = !active" :class="active ? 'active': ''">
        <div class="list-head" >
            <button type="button">
                <p>
                    {{ item.title }}
                    <span v-if="item.answer ==''">답변 전</span>

                </p>
                <time>{{ item.format_created_at }}</time>
            </button>
        </div>
        <div class="list-body">
            <p>
                {{ item.description }}
            </p>
            <div class="list-body-reply">
                <p>
                    {{ item.answer }}
                </p>
                <time>{{ item.format_answered_at }}</time>
            </div>
        </div>
    </li>

</template>
<script>
import Form from "../utils/Form";
export default {
    props: ["item"],

    data(){
        return {
            active: false,
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
