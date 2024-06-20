<template>
    <section>
    <div v-if="item">
        <div class="container xs">
            <div class="sub-box">
                <div class="sub-left-box is-m">
                    <div class="sub-left-head">
                        <img src="/asset/images/logo.png">
                        <a href="javascript:;" class="close" onclick="menuClose();">닫기</a>
                    </div>
                </div>
                <div class="sub-right-box">
                    <div class="location-box">
                        <ul>
                            <li class="home"><nuxt-link to="/">홈</nuxt-link></li>
                            <li>고객 센터</li>
                            <li>공지사항</li>
                        </ul>
                    </div>
                    <div class="title-box">
                        <h2 class="lg">공지사항</h2>
                    </div>
                    <div class="board-view-box">
                        <div class="view-head">
                            <em>{{ item.id }}</em>
                            <h3>{{ item.title }}</h3>
                            <time>{{ item.format_created_at }}</time>
                        </div>
                        <div class="view-body">
                            <div class="view-body-content">
                                <editor-content :description="item.description" />
                            </div>
                        </div>
                        <div class="view-foot">
                            <div class="view-foot-related">
                                <nuxt-link  v-if="item.prev" :to="`/notices/${item.prev.id}`" class="prev">이전</nuxt-link>
                                <nuxt-link  v-if="item.next" :to="`/notices/${item.next.id}`" class="next">다음</nuxt-link>

                            </div>
                            <div class="view-foot-button">
                                <nuxt-link to="/notices" class="list">목록</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>
<script>
import Form from "~/utils/Form";
export default {

    data(){
        return {
            item: null,
        }
    },

    methods:{
        getItem(){
            this.$axios.get("/api/notices/" + this.$route.params.id)
                    .then(response => {

                        this.item = response.data.data;
                    });
        },


    },

    mounted(){
        this.getItem();
    }
}
</script>
