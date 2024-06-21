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
                                <li class="cate01 active"><nuxt-link to="/campaigns/dashboard"><p>현황</p></nuxt-link></li>
                                <li class="cate02"><nuxt-link to="/campaigns"><p>진단</p></nuxt-link></li>
                                <!--<li class="cate03"><a href="#" @click.prevent="ready"><p>이력</p></a></li>-->
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="sub-right-box">
                    <div class="title-box">
                        <h2><em>자가 진단</em>현황</h2>
                    </div>
                    <empty v-if="!survey">데이터가 없습니다.</empty>
                    <template v-else>
                        <div class="progress-box">
                            <div class="pro-head">
                                <p>
                                    {{survey.campaign.title}}
                                    <b>{{survey.progress}}% to complete</b>
                                </p>
                                <time>{{survey.finished_at}}</time>
                            </div>
                            <div class="pro-body">
                                <div>
                                    <div class="bar" :style="`width:${survey.progress}%;`"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                </div>
                            </div>
                        </div>
                        <div class="graph-list-box">
                            <div class="list-body">
                                <ul>
                                    <li>
                                        <div class="graph-image">
                                            <div class="chart doughnut1"><span class="center">{{survey.score_e}}</span></div>
                                            <em>환경 (%)</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="graph-image">
                                            <div class="chart doughnut2"><span class="center">{{survey.score_s1}}</span></div>
                                            <em>노동 및 인권 (%)</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="graph-image">
                                            <div class="chart doughnut3"><span class="center">{{survey.score_s2}}</span></div>
                                            <em>안전 및 보건 (%)</em>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="graph-image">
                                            <div class="chart doughnut4"><span class="center">{{survey.score_g}}</span></div>
                                            <em>사회 및 윤리 (%)</em>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="graph-list-box">
                            <div class="list-head">
                                <strong>환경</strong>
                            </div>

                            <div class="list-body">
                                <empty v-if="domains['ENVIRONMENT'].numbers.length === 0" />
                                <ul>
                                    <li v-for="(number,index) in domains['ENVIRONMENT'].numbers">
                                        <div class="graph-image">
                                            <current-dashboard-chart :id="`chart${number.id}`" :item="domains['ENVIRONMENT'].numbers[index]" :years="survey.campaign.years"/>
                                        </div>
                                        <div class="graph-content">
                                            <b>{{ number.question.options[0].data_title }}</b>
                                            <p>{{ number.format_invest_value.toLocaleString() }}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="graph-list-box">
                            <div class="list-head">
                                <strong>노동 및 인권</strong>
                            </div>
                            <div class="list-body">
                                <empty v-if="domains['SOCIAL1'].numbers.length === 0" />
                                <ul>
                                    <li v-for="(number, index) in domains['SOCIAL1'].numbers">
                                        <div class="graph-image">
                                            <current-dashboard-chart :id="`chart${number.id}`" :item="domains['SOCIAL1'].numbers[index]" :years="survey.campaign.years"/>
                                        </div>
                                        <div class="graph-content">
                                            <b>{{ number.question.options[0].data_title }}</b>
                                            <p>{{ number.format_invest_value.toLocaleString() }}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="graph-list-box">
                            <div class="list-head">
                                <strong>안전 및 보건</strong>
                            </div>
                            <div class="list-body">
                                <empty v-if="domains['SOCIAL2'].numbers.length === 0" />
                                <ul>
                                    <li v-for="(number, index) in domains['SOCIAL2'].numbers">
                                        <div class="graph-image">
                                            <current-dashboard-chart :id="`chart${number.id}`" :item="domains['SOCIAL2'].numbers[index]" :years="survey.campaign.years"/>
                                        </div>
                                        <div class="graph-content">
                                            <b>{{ number.question.options[0].data_title }}</b>
                                            <p>{{ number.format_invest_value.toLocaleString() }}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="graph-list-box">
                            <div class="list-head">
                                <strong>사회 및 윤리</strong>
                            </div>
                            <div class="list-body">
                                <empty v-if="domains['GOVERNANCE'].numbers.length === 0" />
                                <ul>
                                    <li v-for="(number,index) in domains['GOVERNANCE'].numbers">
                                        <div class="graph-image">
                                            <current-dashboard-chart :id="`chart${number.id}`" :item="domains['GOVERNANCE'].numbers[index]" :years="survey.campaign.years"/>
                                        </div>
                                        <div class="graph-content">
                                            <b>{{ number.question.options[0].data_title }}</b>
                                            <p>{{ number.format_invest_value.toLocaleString() }}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </template>

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
                survey: null,
                domains: [],

                form: new Form(this.$axios, {
                    page: 1,
                    surveyState: "",
                    word: "",
                    campaign_id: "",
                }),

                years: [],

            }
        },

        methods: {
            ready(){
                return alert("준비중입니다.");
            },
            getSurvey(){
                this.$store.commit("setLoading", true);

                this.$axios.get("/api/surveys/currentDashboard", {
                    params: this.form.data(),
                }).then(response => {
                    this.years = response.data.data.survey.campaign.years;
                    this.survey = response.data.data.survey;
                    this.domains = response.data.data.domains;

                    this.$nextTick(() => {
                        this.drawChart();
                    })
                });
            },
            drawChart(){
                const chart1 = document.querySelector('.doughnut1');
                const chart2 = document.querySelector('.doughnut2');
                const chart3 = document.querySelector('.doughnut3');
                const chart4 = document.querySelector('.doughnut4');

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
                    classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #F7F7F7 " + i + "% 100%)";
                }

                makeChart(this.survey.score_e, chart1, '#1C70AE');
                makeChart(this.survey.score_s1, chart2, '#2B9F97');
                makeChart(this.survey.score_s2, chart3, '#1C70AE');
                makeChart(this.survey.score_g, chart4, '#2B9F97');
            }

        },

        computed: {



        },

        mounted() {
            this.getSurvey();
        }
    }
</script>
