<template>
    <li @click="active = !active" :class="active ? 'active' : ''">
        <div class="list-head">
            <button type="button">
                <p>{{item.title}}</p>
            </button>
        </div>
        <div class="list-body">
            <p>
                <editor-content :description="item.description" />
            </p>
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
