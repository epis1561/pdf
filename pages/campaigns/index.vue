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
                        <div class="sub-left-category">
                            <ul>
                                <li class="cate01"><nuxt-link to="/campaigns/dashboard" @click.prevent="ready"><p>현황</p></nuxt-link></li>
                                <li class="cate02 active"><nuxt-link to="/campaigns"><p>진단</p></nuxt-link></li>
                                <!--<li class="cate03"><a href="#" @click.prevent="ready"><p>이력</p></a></li>-->
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="sub-right-box">
                    <div class="title-box">
                        <h2><em>자가 진단</em>진단</h2>
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
                                <li :class="tabClass('WAIT')"><a href="#" @click.prevent="() => {changeState('WAIT')}">진행대기</a></li>
                                <li :class="tabClass('ONGOING')"><a href="#" @click.prevent="() => {changeState('ONGOING')}">진행중</a></li>
                                <li :class="tabClass('FINISH')"><a href="#" @click.prevent="() => {changeState('FINISH')}">진행완료</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="check-list-box">
                        <empty v-if="items.data.length === 0" />

                        <ul>
                            <li :class="`${item.survey && item.survey.state === 'FINISH' ? 'active' : ''}`" v-for="item in items.data" :key="item.id">
                                <div class="list-head">
                                    <p>{{ item.title }}</p>
                                    <div>
                                        <em>{{item.survey ? item.survey.count_answer : 0}}/{{item.count_question}}</em>
                                        <b>{{ item.survey ? item.survey.format_state : '진행 대기' }}</b>
                                    </div>
                                </div>
                                <div class="list-body">
                                    <time>{{ item.format_survey_started_at }} ~ {{ item.format_survey_finished_at }}</time>

                                    <div class="flex">
                                        <nuxt-link :to="`/campaigns/reports?survey_id=${item.survey.id}`" v-if="item.survey && item.survey.invest_at" class="bg-active">결과리포트</nuxt-link>
                                        <a href="#" @click.prevent="() => {$router.push(`/answers/create?survey_id=${item.survey.id}&campaign_id=${item.id}`)}" v-if="item.survey && item.survey.state === 'FINISH'">이력 확인</a>
                                        <a href="#" @click="start(item)" v-else>작성하기</a>
                                    </div>
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
                surveyState: "",
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

            this.$axios.get("/api/campaigns", {
                params: this.form.data(),
            }).then(response => {
                this.items = response.data;
            });
        },
        tabClass(state){
            return state === this.form.surveyState ? 'active' : '';
        },
        changeState(state){
            this.form.surveyState = state;

            this.form.page = 1;

            this.filter();
        },

        start(campaign){
            if(campaign.survey)
                return location.href=`/answers/create?survey_id=${campaign.survey.id}&campaign_id=${campaign.id}`;

            this.form.campaign_id = campaign.id;

            this.$store.commit("setLoading", true);

            this.form.post("/api/surveys")
                .then(response => {
                    location.href=`/answers/create?survey_id=${response.data.id}&campaign_id=${campaign.id}`;
                })
        },
    },

    computed: {


    },

    mounted() {
        if(this.$auth.user.data.has_agency == 1)
            return this.$router.push("/investgator/campaigns");

        this.filter();
    }
}
</script>
