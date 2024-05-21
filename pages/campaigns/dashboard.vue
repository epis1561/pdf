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
                                <li class="cate01"><nuxt-link to="/campaigns/dashboard"><p>현황</p></nuxt-link></li>
                                <li class="cate02 active"><nuxt-link to="/campaigns"><p>진단</p></nuxt-link></li>
                                <!--<li class="cate03"><a href="#" @click.prevent="ready"><p>이력</p></a></li>-->
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="sub-right-box">
                    <div class="title-box">
                        <h2><em>자가 진단</em>현황</h2>
                    </div>
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
                            <ul>
                                <li>
                                    <div class="graph-image">
                                        <p class="py50 tc">그래프 영역</p>
                                    </div>
                                    <div class="graph-content">
                                        <b>에너지 소비량 (Kwh)</b>
                                        <p>24,340 | 25,932 | 23,030</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="graph-image">
                                        <p class="py50 tc">그래프 영역</p>
                                    </div>
                                    <div class="graph-content">
                                        <b>온실가스 배출량</b>
                                        <p>24,340 | 25,932 | 23,030</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="graph-image">
                                        <p class="py50 tc">그래프 영역</p>
                                    </div>
                                    <div class="graph-content">
                                        <b>용수 사용량</b>
                                        <p>24,340 | 25,932 | 23,030</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="graph-image">
                                        <p class="py50 tc">그래프 영역</p>
                                    </div>
                                    <div class="graph-content">
                                        <b>지정 폐기물 발생량 (Ton)</b>
                                        <p>24,340 | 25,932 | 23,030</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="graph-image">
                                        <p class="py50 tc">그래프 영역</p>
                                    </div>
                                    <div class="graph-content">
                                        <b>일반 폐기물 발생량 (Ton)</b>
                                        <p>24,340 | 25,932 | 23,030</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="graph-list-box">
                        <div class="list-head">
                            <strong>경제</strong>
                        </div>
                        <div class="list-body">
                            <ul>
                                <li>
                                    <div class="graph-image">
                                        <p class="py50 tc">그래프 영역</p>
                                    </div>
                                    <div class="graph-content">
                                        <b>매출액(단위 : 억원)</b>
                                        <p>24,340 | 25,932 | 23,030</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="graph-image">
                                        <p class="py50 tc">그래프 영역</p>
                                    </div>
                                    <div class="graph-content">
                                        <b>영업이익(단위 : 억원)</b>
                                        <p>24,340 | 25,932 | 23,030</p>
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
                            <ul>
                                <li>
                                    <div class="graph-image">
                                        <p class="py50 tc">그래프 영역</p>
                                    </div>
                                    <div class="graph-content">
                                        <b>사망자수 (명)</b>
                                        <p>24,340 | 25,932 | 23,030</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="graph-image">
                                        <p class="py50 tc">그래프 영역</p>
                                    </div>
                                    <div class="graph-content">
                                        <b>산업재해율 (%)</b>
                                        <p>24,340 | 25,932 | 23,030</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="graph-list-box">
                        <div class="list-head">
                            <strong>규범준수</strong>
                        </div>
                        <div class="list-body">
                            <ul>
                                <li>
                                    <div class="graph-image">
                                        <p class="py50 tc">그래프 영역</p>
                                    </div>
                                    <div class="graph-content">
                                        <b>과태료 (원)</b>
                                        <p>24,340 | 25,932 | 23,030</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="graph-image">
                                        <p class="py50 tc">그래프 영역</p>
                                    </div>
                                    <div class="graph-content">
                                        <b>벌금 (원)</b>
                                        <p>24,340 | 25,932 | 23,030</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
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

        },

        computed: {


        },

        mounted() {
            this.filter();
        }
    }
</script>
