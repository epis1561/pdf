<template>
    <section>
        <div class="container">
            <div class="sub-box">
                <div class="sub-left-box">
                    <div class="sub-left-head">
                        <img src="/asset/images/logo.png">
                        <a href="javascript:;" class="close" onclick="menuClose();">닫기</a>
                    </div>
                    <div class="sub-left-body">
                        <div class="sub-left-title">
                            <h2><b>ESGi &</b>Sustainability<b>Center</b></h2>
                            <p>
                                기업이 의사결정(Governance) 시 재무적 가치만을 <br>
                                고려하는 것이 아니라 비재무적 요소인 환경<br>
                                (Environmental)과 사회(Social)적 가치도<br>
                                균형 있게 고려하는 것을 말합니다.
                            </p>
                        </div>
                        <div class="sub-left-main">
                            <ul>
                                <li><a href="">COMPANY</a></li>
                                <li><a href="">SERVICES</a></li>
                                <li><a href="">PORTFOLIO</a></li>
                                <li><a href="">INSIGHTS</a></li>
                                <li><a href="">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="sub-right-box">
                    <div class="title-box">
                        <h2>진단</h2>
                    </div>
                    <div class="list-top-box">
                        <div class="list-top-search">
                            <form @submit.prevent="filter">
                                <input type="text" placeholder="검색어를 입력해주세요." v-model="form.word">
                                <a href="#" class="submit" @click.prevent="filter">검색</a>
                            </form>
                        </div>
                        <div class="list-top-filter">
                            <ul>
                                <li :class="tabClass('')"><a href="#" @click.prevent="() => {changeState('')}">전체</a></li>
                                <li :class="tabClass('BEFORE')"><a href="#" @click.prevent="() => {changeState('BEFORE')}">대기기간</a></li>
                                <li :class="tabClass('ONGOING_SURVEY')"><a href="#" @click.prevent="() => {changeState('ONGOING_SURVEY')}">응답기간</a></li>
                                <li :class="tabClass('ONGOING_INVESTGATE')"><a href="#" @click.prevent="() => {changeState('ONGOING_INVESTGATE')}">평가기간</a></li>
                                <li :class="tabClass('FINISH')"><a href="#" @click.prevent="() => {changeState('FINISH')}">종료</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="check-list-box">
                        <empty v-if="items.data.length === 0" />

                        <ul>
                            <li :class="`${item && item.state === 'ONGOING_INVESTGATE' ? 'active' : ''}`" v-for="item in items.data" :key="item.id">
                                <div class="list-head">
                                    <p>{{ item.title }}</p>
                                    <div>
                                        <b>{{ item.format_state }}</b>
                                    </div>
                                </div>
                                <div class="list-body">
                                    <time>평가기간 : {{ item.format_improve_started_at }} ~ {{ item.format_improve_finished_at }}</time>
                                    <div class="flex flex-vc">
                                        <nuxt-link :to="`/investgator/surveys?campaign_id=${item.id}`" class="blue">평가대상 확인</nuxt-link>
                                    </div>
<!--                                    <a href="#" @click.prevent="() => {$router.push(`/answers/create?survey_id=${item.survey.id}&campaign_id=${item.id}`)}" v-if="item.survey && item.survey.state === 'FINISH'">이력 확인</a>
                                    <a href="#" @click="start(item)" v-else>작성하기</a>-->
                                </div>
                            </li>
                        </ul>

                        <pagination :meta="items.meta" @paginate="(page) => {form.page = page; filter()}" />

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Form from "@/utils/Form";
export default {
    middleware: ["user"],

    components: {},

    data() {
        return {
            items: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            form: new Form(this.$axios, {
                page: 1,
                state: "",
                word: "",
                campaign_id: "",
            }),
        }
    },

    methods: {
        ready(){
            return alert("준비중입니다.");
        },
        filter(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/investgator/campaigns", {
                params: this.form.data(),
            }).then(response => {
                this.items = response.data;
            });
        },
        tabClass(state){
            return state === this.form.state ? 'active' : '';
        },
        changeState(state){
            this.form.state = state;

            this.form.page = 1;

            this.filter();
        },

        start(campaign){
            if(campaign.survey)
                return this.$router.push(`/answers/create?survey_id=${campaign.survey.id}&campaign_id=${campaign.id}`);

            this.form.campaign_id = campaign.id;

            this.$store.commit("setLoading", true);

            this.form.post("/api/surveys")
                .then(response => {
                    this.$router.push(`/answers/create?survey_id=${response.data.id}&campaign_id=${campaign.id}`);
                })
        },
    },

    computed: {


    },

    mounted() {
        this.filter();
    }
}
</script>
