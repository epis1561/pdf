<template>
    <div class="board-right">
        <div class="board-right-head">
            <div class="head-left">
                <h2>대시보드</h2>
                <div class="flex flex-vc">
                    <!--                        <select class="w160">
                                                <option>년도</option>
                                            </select>-->
                    <select class="w260" v-model="form.campaign_id" @change="() => {dashboard = null; getDashboard();}">
                        <option value="" disabled>캠페인 선택</option>
                        <option v-for="campaign in campaigns.data" :value="campaign.id" :key="campaign.id">{{ campaign.title }}</option>
                    </select>
                </div>
            </div>
            <div class="head-right">
                <a href="#" class="logout" @click.prevent="logout">로그아웃</a>
            </div>
        </div>
        <div class="board-right-body" v-if="dashboard">
            <div class="board-white-box">
                <div class="board-white-inner">
                    <div class="board-title-box">
                        <h2>ESG 종합등급</h2>
                    </div>
                    <div class="board-graph-box">
                        <div class="graph-01">
                            <img :src="`/asset/images/img_admin_graph_main_0${selectedCampaign.level}.png`">
                        </div>
                    </div>
                    <div class="board-title-box mt30">
                        <h2>ESG 종합달성율</h2>
                    </div>
                    <div class="board-graph-box">
                        <div class="graph-02 blue">
                            <div class="graph-inner">
                                <div class="inner-bar">
                                    <div :style="`width:${selectedCampaign.score}%;`"><b>{{ selectedCampaign.score }}%</b></div>
                                </div>
                                <div class="inner-unit">
                                    <p>0%</p>
                                    <p>100%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="board-white-inner half">
                    <div class="board-white-inner-half">
                        <div class="board-graph-box">
                            <div class="graph-02 green">
                                <div class="graph-inner">
                                    <div class="inner-title">
                                        <h2><b>E</b>환경</h2>
                                        <strong>등급 : E-{{selectedCampaign.level_e}}</strong>
                                    </div>
                                    <div class="inner-bar">
                                        <div :style="`width:${selectedCampaign.score_e}%;`"><b>{{ selectedCampaign.score_e }}%</b></div>
                                    </div>
                                    <div class="inner-unit">
                                        <p>0%</p>
                                        <p>100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="board-white-inner-half">
                        <div class="board-graph-box">
                            <div class="graph-02 blue">
                                <div class="graph-inner">
                                    <div class="inner-title">
                                        <h2><b>S</b>안전 및 보건</h2>
                                        <strong>등급 : S-{{selectedCampaign.level_s1}}</strong>
                                    </div>
                                    <div class="inner-bar">
                                        <div :style="`width:${selectedCampaign.score_s1}%;`"><b>{{ selectedCampaign.score_s1 }}%</b></div>
                                    </div>
                                    <div class="inner-unit">
                                        <p>0%</p>
                                        <p>100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="board-white-inner half">
                    <div class="board-white-inner-half">
                        <div class="board-graph-box">
                            <div class="graph-02 purple">
                                <div class="graph-inner">
                                    <div class="inner-title">
                                        <h2><b>S</b>노동 및 인권</h2>
                                        <strong>등급 : S-{{selectedCampaign.level_s2}}</strong>
                                    </div>
                                    <div class="inner-bar">
                                        <div :style="`width:${selectedCampaign.score_s2}%;`"><b>{{ selectedCampaign.score_s2 }}%</b></div>
                                    </div>
                                    <div class="inner-unit">
                                        <p>0%</p>
                                        <p>100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="board-white-inner-half">
                        <div class="board-graph-box">
                            <div class="graph-02 orange">
                                <div class="graph-inner">
                                    <div class="inner-title">
                                        <h2><b>G</b>사회 및 윤리</h2>
                                        <strong>등급 : G-{{selectedCampaign.level_g}}</strong>
                                    </div>
                                    <div class="inner-bar">
                                        <div :style="`width:${selectedCampaign.score_g}%;`"><b>{{ selectedCampaign.score_g }}%</b></div>
                                    </div>
                                    <div class="inner-unit">
                                        <p>0%</p>
                                        <p>100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="board-white-box mt32">
                <div class="board-white-inner w400 flex-0">
                    <div class="board-title-box">
                        <h2 class="flex flex-vb">참여 업체 <em>{{ dashboard.surveys.length }} 업체</em></h2>
                    </div>
                    <div class="board-company-box">
                        <ul>
                            <li :class="`${survey_id == survey.id ? 'active' : ''}`" v-for="survey in dashboard.surveys" :key="survey.id" @click.prevent="survey_id = survey.id">
                                <div class="company-left">
                                    <div class="board-graph-box">
                                        <div :class="`graph-03 graph${survey.id}`">
                                            <div class="graph-inner">
                                                <strong>{{survey.score}}</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="company-right">
                                    <strong>{{ survey.company.title }}</strong>
                                    <dl>
                                        <dd>
                                            <b>E</b>
                                            <p>{{ survey.score_e }}</p>
                                        </dd>
                                        <dd>
                                            <b>S1</b>
                                            <p>{{ survey.score_s1 }}</p>
                                        </dd>
                                        <dd>
                                            <b>S2</b>
                                            <p>{{ survey.score_s2 }}</p>
                                        </dd>
                                        <dd>
                                            <b>G</b>
                                            <p>{{ survey.score_g }}</p>
                                        </dd>
                                    </dl>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="board-white-inner">
                    <div class="board-title-box">
                        <h2>정량 데이터</h2>
                    </div>
                    <div class="board-graph-box">
                        <div class="graph-04">
                            <ul v-if="selectedSurvey">
                                <li v-for="answer in selectedSurvey.answers" :key="answer.id">
                                    <div class="graph-left">
                                        <strong>{{ answer.question.options.length > 0 ? answer.question.options[0].data_title : "" }}</strong>
                                        <small>{{ answer.format_invest_value }}</small>
                                    </div>
                                    <div class="graph-right">
                                        <div v-for="value in answer.invest_value">

                                            <div class="bar03 h25" :style="`width:${getPercent(value, answer.invest_value)}%; background-color:#1592E6;`"></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="board-right-body" v-else>
            <div class="m-empty type01"></div>
        </div>
    </div>
</template>
<style>

</style>
<script>
import Form from "@/utils/Form";
export default {
    layout: "provider",
    middleware: ["provider"],

    data(){

        return {
            form : new Form(this.$axios, {
                campaign_id: "",
            }),

            campaigns: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            dashboard: null,

            survey_id: "",
        }
    },
    methods: {
        getCampaigns(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/provider/campaigns")
                    .then(response => {
                        this.campaigns = response.data;

                        if(this.campaigns.data.length > 0) {
                            this.form.campaign_id = this.campaigns.data[0].id;

                            this.getDashboard();
                        }

                    })
        },

        getDashboard(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/provider/campaigns/dashboard", {
                params: this.form.data()
            }).then(response => {
                this.dashboard = response.data.data;

                if(this.dashboard.surveys.length > 0)
                    this.survey_id = this.dashboard.surveys[0].id;

                this.$nextTick(() => {
                    this.dashboard.surveys.map(survey => {
                        this.drawChart(survey);
                    });
                });
            })
        },

        ready(){
            return alert("준비중입니다.");
        },

        logout(){
            this.$auth.logout();

            this.$router.push("/provider/login");
        },

        drawChart(survey){
            let chart = document.querySelector('.graph' + survey.id);

            const makeChart = (percent, classname, color) => {
                let i = 1;
                let chartFn = setInterval(function() {
                    if (i < percent) {
                        colorFn(i, classname, color);
                        i++;
                    } else {
                        clearInterval(chartFn);
                    }
                }, 10);
            }

            const colorFn = (i, classname, color) => {
                classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #E4E4E4 " + i + "% 100%)";
            }

            makeChart(survey.score, chart, '#1592E6');
        },

        getPercent(value, values){
            let total = 0;

            values.map(valueData => {
                total += parseInt(valueData);
            });

            return Math.floor(value / total * 100);
        }
    },

    computed:{
        provider(){
            return this.$auth.user.data.provider;
        },
        selectedCampaign(){
            return this.campaigns.data.find(campaign => campaign.id == this.form.campaign_id);
        },
        selectedSurvey(){
            if(this.dashboard)
                return this.dashboard.surveys.find(survey => survey.id == this.survey_id);

            return null;
        }
    },

    mounted() {
        this.getCampaigns();
    }
}
</script>
