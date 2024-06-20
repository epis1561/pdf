<template>
    <div class="board-right">
        <div class="board-right-head">
            <div class="head-left">
                <h2>업체별 목록</h2>
                <div class="flex flex-vc">
                    <select class="w260" v-model="form.campaign_id" @change="() => {getCompanies();}">
                        <option value="" disabled>캠페인 선택</option>
                        <option v-for="campaign in campaigns.data" :value="campaign.id" :key="campaign.id">{{ campaign.title }}</option>
                    </select>
                </div>
            </div>
            <div class="head-right">
                <a href="" class="logout" @click.prevent="logout">로그아웃</a>
            </div>
        </div>

        <div class="board-right-body" v-if="companies.data.length === 0">
            <div class="m-empty type01">데이터가 없습니다.</div>
        </div>

        <div class="board-right-body">
            <div class="board-white-box grid-4">
                <div class="board-white-inner" v-for="company in companies.data" :key="company.id">
                    <div class="board-list-box">
                        <div class="list-head">
                            <div class="list-head-thumb">
                                <img :src="company.img ? company.img.url : ''">
                                <strong>{{ company.title }}</strong>
                            </div>
                            <div class="list-head-graph">
                                <div class="board-graph-box">
                                    <div class="graph-05">
                                        <div class="graph-inner">
                                            <div :style="`width:${company.survey ? company.survey.score : 0}%;`"></div>
                                        </div>
                                        <div class="graph-category">
                                            <p>진단 진행률</p>
                                            <b>{{ company.survey ? company.survey.score : "-" }}%</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list-body">

                            <div class="list-body-graph">
                                <ul>
                                    <li>
                                        <div class="graph-left">
                                            <div class="board-graph-box">
                                                <div :class="`graph-03 graph-03-01 graph-esg-${company.id}`">
                                                    <div class="graph-inner">
                                                        <strong>{{ company.survey ? company.survey.score : "-" }}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="graph-right">
                                            <div class="graph-right-title">
                                                <strong>ESG</strong>
                                                <dl>
                                                    <dd>총점 {{ company.survey ? company.survey.score : "-" }}</dd>
                                                    <dd>등급 ESG-{{ company.survey ? company.survey.level : "-" }}</dd>
                                                </dl>
                                            </div>
                                            <div class="graph-right-percent blue">
                                                <div :style="`width:${company.survey ? company.survey.score : 0}%;`"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="graph-left">
                                            <div class="board-graph-box">
                                                <div class="graph-03 graph-03-02">
                                                    <div class="graph-inner">
                                                        <strong>{{ company.survey ? company.survey.score_e : "-" }}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="graph-right">
                                            <div class="graph-right-title">
                                                <strong>E 환경</strong>
                                                <dl>
                                                    <dd>총점 {{ company.survey ? company.survey.score_e : "-" }}</dd>
                                                    <dd>등급 E-{{ company.survey ? company.survey.level_e : "-" }}</dd>
                                                </dl>
                                            </div>
                                            <div class="graph-right-percent mint">
                                                <div :style="`width:${company.survey ? company.survey.score_e : 0}%;`"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="graph-left">
                                            <div class="board-graph-box">
                                                <div class="graph-03 graph-03-03">
                                                    <div class="graph-inner">
                                                        <strong>{{ company.survey ? company.survey.score_s1 : "-" }}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="graph-right">
                                            <div class="graph-right-title">
                                                <strong>S 노동 및 인권</strong>
                                                <dl>
                                                    <dd>총점 {{ company.survey ? company.survey.score_s1 : "-" }}</dd>
                                                    <dd>등급 S-{{ company.survey ? company.survey.level_s1 : "-" }}</dd>
                                                </dl>
                                            </div>
                                            <div class="graph-right-percent orange">
                                                <div :style="`width:${company.survey ? company.survey.score_s1 : 0}%;`"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="graph-left">
                                            <div class="board-graph-box">
                                                <div class="graph-03 graph-03-03">
                                                    <div class="graph-inner">
                                                        <strong>{{ company.survey ? company.survey.score_s2 : "-" }}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="graph-right">
                                            <div class="graph-right-title">
                                                <strong>S 안전 및 보건</strong>
                                                <dl>
                                                    <dd>총점 {{ company.survey ? company.survey.score_s2 : "-" }}</dd>
                                                    <dd>등급 ESG-{{ company.survey ? company.survey.level_s2 : "-" }}</dd>
                                                </dl>
                                            </div>
                                            <div class="graph-right-percent orange">
                                                <div :style="`width:${company.survey ? company.survey.score_s2 : 0}%;`"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="graph-left">
                                            <div class="board-graph-box">
                                                <div class="graph-03 graph-03-04">
                                                    <div class="graph-inner">
                                                        <strong>{{ company.survey ? company.survey.score_g : "-" }}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="graph-right">
                                            <div class="graph-right-title">
                                                <strong>G 사회 및 윤리</strong>
                                                <dl>
                                                    <dd>총점 {{ company.survey ? company.survey.score_g : "-" }}</dd>
                                                    <dd>등급 ESG-{{ company.survey ? company.survey.level_g : "-" }}</dd>
                                                </dl>
                                            </div>
                                            <div class="graph-right-percent purple">
                                                <div :style="`width:${company.survey ? company.survey.score_g : 0}%;`"></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="list-foot">
                            <nuxt-link :to="`/campaigns/reports?survey_id=${company.survey.id}`" v-if="company.survey">결과보고서</nuxt-link>
                            <a href="#" v-else @click.prevent="">결과대기중</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import Form from "@/utils/Form";
export default {
    layout: "provider",
    middleware: ["user"],

    data(){

        return {
            form : new Form(this.$axios, {
                page: 1,
                campaign_id: this.$route.query.campaign_id,
            }),

            campaigns: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            companies: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },
        }
    },
    methods: {
        getCampaigns(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/provider/campaigns")
                .then(response => {
                    this.campaigns = response.data;

                    if(!this.$route.query.campaign_id && this.campaigns.data.length > 0){
                        this.form.campaign_id = this.campaigns.data[0].id;

                        this.getCompanies();
                    }

                })
        },

        getCompanies(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/provider/companies", {
                params: this.form.data()
            })
                .then(response => {
                    console.log(response.data);

                    this.companies = response.data;

                    this.$nextTick(() => {
                        this.companies.data.map(campaign => this.drawChart(campaign));
                    })

                })
        },

        ready(){
            return alert("준비중입니다.");
        },

        logout(){
            this.$auth.logout();

            this.$router.push("/provider/login");
        },

        drawChart(campaign){
            let chart = document.querySelector('.graph' + campaign.id);

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

            makeChart(campaign.score, chart, '#1592E6');
        },
    },

    computed:{

    },

    mounted() {
        this.getCampaigns();

        if(this.form.campaign_id)
            this.getCompanies();
    }
}
</script>
