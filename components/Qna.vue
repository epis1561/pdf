<template>
    <li @click="active = !active" :class="active ? 'active': ''">
        <div class="list-head">
            <button type="button">
                <p>{{item.title}} </p>
            </button>
        </div>
        <div class="list-body">
            <div class="description">
                {{item.description}}

                <div class="imgs">
                    <img v-for="item in item.imgs" :src="item.url" alt="" :key="item.id">
                </div>
            </div>

            <p v-if="item.answer">
                {{ item.answer }}
            </p>

        </div>
    </li>
</template>
<style>

</style>
<script>
/*
	{
						id: 1, // 고유번호
						url: "https://이미지경로.jpg",
						name : "파일명",
					},
* */
export default {
    props:["item"],

    data(){
        return {
            active:false,
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
