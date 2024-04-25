<template>
    <section>
        <div class="container" v-if="campaign">
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
                        <h2>{{campaign.title}}</h2>
                        <time>평가기간 : {{ campaign.format_improve_started_at }} ~ {{ campaign.format_improve_finished_at }}</time>
                    </div>
<!--                    <div class="company-list-box">
                        <div class="list-head">
                            <strong>캠페인 참여 미완료</strong>
                        </div>
                        <div class="list-body">
                            <empty v-if="beforeSurveys.data.length === 0" />
                            <ul v-else>
                                <li v-for="survey in beforeSurveys.data" :key="survey.id" @click.prevent="() => {$router.push(`/investgator/answers/create?campaign_id=${campaign.id}&survey_id=${survey.id}`)}"><p>{{ survey.company.title }}</p></li>
                            </ul>

                            <pagination :meta="beforeSurveys.meta" @paginate="(page) => {beforeSurveysForm.page = page; getBeforeSurveys()}" />
                        </div>
                    </div>-->
                    <div class="company-list-box">
                        <div class="list-head">
                            <strong>캠페인 참여 완료</strong>
                        </div>
                        <div class="list-body">
                            <empty v-if="finishSurveys.data.length === 0" />
                            <ul v-else>
                                <li v-for="survey in finishSurveys.data" :key="survey.id" @click.prevent="() => {$router.push(`/investgator/answers/create?campaign_id=${campaign.id}&survey_id=${survey.id}`)}"><p>{{ survey.company.title }}</p></li>
                            </ul>
                        </div>
                        <pagination :meta="finishSurveys.meta" @paginate="(page) => {finishSurveysForm.page = page; getFinishSurveys()}" />

                    </div>
                    <div class="company-list-box">
                        <div class="list-head">
                            <strong>실사완료</strong>
                        </div>
                        <div class="list-body">
                            <empty v-if="finishInvestSurveys.data.length === 0" />
                            <ul v-else>
                                <li v-for="survey in finishInvestSurveys.data" :key="survey.id" @click.prevent="() => {$router.push(`/investgator/answers/create?campaign_id=${campaign.id}&survey_id=${survey.id}`)}"><p>{{ survey.company.title }}</p></li>
                            </ul>
                        </div>
                        <pagination :meta="finishInvestSurveys.meta" @paginate="(page) => {finishInvestSurveysForm.page = page; getFinishInvestgateSurveys()}" />
                    </div>
                    <div class="company-list-box">
                        <div class="list-head">
                            <strong>개선과제 진단완료</strong>
                        </div>
                        <div class="list-body">
                            <empty v-if="finishImproveSurveys.data.length === 0" />
                            <ul v-else>
                                <li v-for="survey in finishImproveSurveys.data" :key="survey.id" @click.prevent="() => {$router.push(`/investgator/answers/create?campaign_id=${campaign.id}&survey_id=${survey.id}`)}"><p>{{ survey.company.title }}</p></li>
                            </ul>
                        </div>
                        <pagination :meta="finishImproveSurveys.meta" @paginate="(page) => {finishImproveSurveysForm.page = page; getFinishImproveSurveys()}" />
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
            campaign: null,

            finishSurveys: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            finishInvestSurveys: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            finishImproveSurveys: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            finishSurveysForm: new Form(this.$axios, {
                page: 1,
                state: "FINISH_SURVEY",
                word: "",
                campaign_id: this.$route.query.campaign_id,
            }),

            finishInvestSurveysForm: new Form(this.$axios, {
                page: 1,
                state: "FINISH_INVEST",
                word: "",
                campaign_id: this.$route.query.campaign_id,
            }),

            finishImproveSurveysForm: new Form(this.$axios, {
                page: 1,
                state: "FINISH_IMPROVE",
                word: "",
                campaign_id: this.$route.query.campaign_id,
            }),
        }
    },

    methods: {
        ready(){
            return alert("준비중입니다.");
        },
        getFinishSurveys(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/investgator/surveys", {
                params: this.finishSurveysForm.data(),
            }).then(response => {
                this.finishSurveys = response.data;
            });
        },
        getFinishInvestgateSurveys(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/investgator/surveys", {
                params: this.finishInvestSurveysForm.data(),
            }).then(response => {
                this.finishInvestSurveys = response.data;
            });
        },
        getFinishImproveSurveys(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/investgator/surveys", {
                params: this.finishImproveSurveysForm.data(),
            }).then(response => {
                this.finishImproveSurveys = response.data;
            });
        },
        getCampaign(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/campaigns/" + this.$route.query.campaign_id)
                    .then(response => {
                        console.log(response.data.data);
                        this.campaign = response.data.data;
                    })
        }
    },

    computed: {

    },

    mounted() {
        this.getCampaign();
        this.getFinishSurveys();
        this.getFinishInvestgateSurveys();
        this.getFinishImproveSurveys();
    }
}
</script>
