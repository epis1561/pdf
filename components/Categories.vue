<template>
    <div class="check-list-box2">
    <div class="check" v-for="item in items.data" :key="item.id">
        <input type="radio" :name="`radio0+${items.id}`" :id="`radio01_0+${items.id}`" @change="change(item.id)">
        <label :for="`radio01_0+${items.id}`">{{ item.title }}</label>
    </div>
    </div>
</template>
<script>
import Form from "../utils/Form";
export default {

    data(){
        return {
            //
            items:{
                data: [

                ],
                meta: {
                    current_page:1,
                    last_page:10,
                }

            },
        }
    },

    methods: {
        filter(){
            this.$axios.get("api/qnaCategories",{

            }).then(response => {

                this.items = response.data;


            })
        },
        change(id){
            this.$emit('change',id)
        }
    },

    computed: {

    },

    watch: {

    },

    mounted() {
        this.filter();
    }
}
</script>



