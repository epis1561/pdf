<template>
    <div class="wrapper" v-if="report">
        <div class="pdf_page">
            <div class="admin-print-box">
                <div class="flex flex-tj">
                    <div class="print-company-box mr20">
                        <div class="company-logo">
                            <img :src="report.provider.img ? report.provider.img.url : ''">
                            <h2>{{report.company.title}}</h2>
                        </div>
                        <div class="company-info-01">
                            <ul>
                                <!--<li class="half">
                                    <b class="tit">기업 규모</b>
                                    <p class="cont">{{report.company.title}}</p>
                                </li>-->
                                <li class="half">
                                    <b class="tit">대표자</b>
                                    <p class="cont">{{report.company.president}}</p>
                                </li>
                                <li>
                                    <b class="tit">사업자 주소</b>
                                    <p class="cont">{{report.company.address}} {{report.company.address_detail}}</p>
                                </li>
                                <li>
                                    <b class="tit">사업자 등록 번호</b>
                                    <p class="cont">{{report.company.business_number}}</p>
                                </li>
                                <li>
                                    <b class="tit">연락처</b>
                                    <p class="cont">{{report.company.contact}}</p>
                                </li>
                                <li>
                                    <b class="tit">사업자 분류</b>
                                    <p class="cont">{{report.company.category}}</p>
                                </li>
                            </ul>
                        </div>
                        <div class="company-info-02">
                            <ul>
                                <li v-for="basicAnswer in report.basicAnswers">
                                    <b class="tit">{{basicAnswer.question.options[0].label_before}}</b>
                                    <p class="cont">{{basicAnswer.value[0]}} {{basicAnswer.question.options[0].label_after}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="border-box px30 py30">
                            <div class="graph-box">
                                <div class="graph-head">
                                    <h2>ESG 진단결과 보고서</h2>
                                    <time>{{report.survey.format_invest_at}}</time>
                                </div>
                                <div class="graph-body">
                                    <div class="graph-main">
                                        <img :src="`/asset/images/img_admin_graph_main_0${report.survey.level}.png`">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-tj mt20">
                            <div class="col-12 flex flex-tj">
                                <div class="border-box flex-1 mr10 mb20 px20 py20">
                                    <div class="graph-box">
                                        <div class="graph-body">
                                            <div class="graph-02 green">
                                                <div class="graph-title">
                                                    <h2><b>E</b>환경</h2>
                                                </div>
                                                <div class="graph-bar">
                                                    <div class="bar-unit">
                                                        <p>E-1</p>
                                                        <p>E-2</p>
                                                        <p>E-3</p>
                                                        <p>E-4</p>
                                                        <p>E-5</p>
                                                    </div>
                                                    <div class="bar-inner">
                                                        <div class="inner" :style="`width:${levelWidth(report.survey.level_e)}%;`"><em>{{report.survey.level_e}}</em></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-box flex-1 ml10 mb20 px20 py20">
                                    <div class="graph-box">
                                        <div class="graph-body">
                                            <div class="graph-02 purple">
                                                <div class="graph-title">
                                                    <h2><b>S</b>노동 및 인권</h2>
                                                </div>
                                                <div class="graph-bar">
                                                    <div class="bar-unit">
                                                        <p>E-1</p>
                                                        <p>E-2</p>
                                                        <p>E-3</p>
                                                        <p>E-4</p>
                                                        <p>E-5</p>
                                                    </div>
                                                    <div class="bar-inner">
                                                        <div class="inner" :style="`width:${levelWidth(report.survey.level_s1)}%;`"><em>{{report.survey.level_s1}}</em></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 flex flex-tj">
                                <div class="border-box flex-1 mr10 px20 py20">
                                    <div class="graph-box">
                                        <div class="graph-body">
                                            <div class="graph-02 blue">
                                                <div class="graph-title">
                                                    <h2><b>S</b>안전 및 보건</h2>
                                                </div>
                                                <div class="graph-bar">
                                                    <div class="bar-unit">
                                                        <p>E-1</p>
                                                        <p>E-2</p>
                                                        <p>E-3</p>
                                                        <p>E-4</p>
                                                        <p>E-5</p>
                                                    </div>
                                                    <div class="bar-inner">
                                                        <div class="inner" :style="`width:${levelWidth(report.survey.level_s2)}%;`"><em>{{report.survey.level_s2}}</em></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-box flex-1 ml10 px20 py20">
                                    <div class="graph-box">
                                        <div class="graph-body">
                                            <div class="graph-02 orange">
                                                <div class="graph-title">
                                                    <h2><b>S</b>사회 및 윤리</h2>
                                                </div>
                                                <div class="graph-bar">
                                                    <div class="bar-unit">
                                                        <p>E-1</p>
                                                        <p>E-2</p>
                                                        <p>E-3</p>
                                                        <p>E-4</p>
                                                        <p>E-5</p>
                                                    </div>
                                                    <div class="bar-inner">
                                                        <div class="inner" :style="`width:${levelWidth(report.survey.level_g)}%;`"><em>{{report.survey.level_g}}</em></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-tj mt60">
                    <div class="border-box flex-1 py35 px30 mr20">
                        <div class="print-text-box">
                            <h2>2024 종합 의견</h2>
                            <p>
                                {{report.survey.comment_total}}
                            </p>
                        </div>
                        <div class="graph-box mt40">
                            <div class="graph-body">
                                <div class="graph-03 graph-03-05 big">
                                    <div class="inner">
                                        <strong>{{report.survey.score}} <small>/ 100</small></strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div>
                            <div class="print-text-box">
                                <h2>2024 분야별 평가 요약</h2>
                                <p>분야별 평가의 만점은 모두 100점입니다. 노동 및 인권, 안전 및 보건은 S에 해당합니다.</p>
                            </div>
                            <div class="flex flex-tj mt16">
                                <div class="gray-box flex-1 mr16 py20 px10">
                                    <div class="graph-box">
                                        <div class="graph-body">
                                            <div class="graph-03 graph-03-01">
                                                <div class="inner">
                                                    <strong>{{report.survey.score_e}}</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="graph-foot">
                                            <strong>환경</strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="gray-box flex-1 mr16 py20 px10">
                                    <div class="graph-box">
                                        <div class="graph-body">
                                            <div class="graph-03 graph-03-02">
                                                <div class="inner">
                                                    <strong>{{report.survey.score_s1}}</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="graph-foot">
                                            <strong>노동 및 인권</strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="gray-box flex-1 mr16 py20 px10">
                                    <div class="graph-box">
                                        <div class="graph-body">
                                            <div class="graph-03 graph-03-03">
                                                <div class="inner">
                                                    <strong>{{report.survey.score_s2}}</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="graph-foot">
                                            <strong>안전 및 보건</strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="gray-box flex-1 py20 px10">
                                    <div class="graph-box">
                                        <div class="graph-body">
                                            <div class="graph-03 graph-03-04">
                                                <div class="inner">
                                                    <strong>{{report.survey.score_g}}</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="graph-foot">
                                            <strong>사회 및 윤리</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt32">
                            <div class="print-text-box">
                                <h2>기준치</h2>
                                <p>
                                    기준치: 산업적 특수성에 따라 기업의 ESG 리스크 관리 수준을 평가함에 있어 ‘환경, 인권 및 노동, 윤리 및
                                    지배구조, 제품 및 서비스 책임’의 4가지 부분이 차지하는 중요도의 비중을 말합니다. 가중치는 총점에 해당
                                    부분의 점수가 얼마만큼 반영되는지를 나타냅니다.
                                </p>
                            </div>
                            <div class="graph-box mt12">
                                <div class="graph-body">
                                    <div class="graph-04">
                                        <div class="inner">
                                            <span class="graph-04-01" :style="`width:${report.survey.campaign.relative_ratio_e}%;`"></span>
                                            <span class="graph-04-02" :style="`width:${report.survey.campaign.relative_ratio_s1}%;`"></span>
                                            <span class="graph-04-03" :style="`width:${report.survey.campaign.relative_ratio_s2}%;`"></span>
                                            <span class="graph-04-04" :style="`width:${report.survey.campaign.relative_ratio_g}%;`"></span>
                                        </div>
                                        <div class="category">
                                            <ul>
                                                <li>환경 {{report.survey.campaign.relative_ratio_e}}%</li>
                                                <li>노동 및 인권 {{report.survey.campaign.relative_ratio_s1}}%</li>
                                                <li>안전 및 보건 {{report.survey.campaign.relative_ratio_s2}}%</li>
                                                <li>사회 및 윤리 {{report.survey.campaign.relative_ratio_g}}%</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .pdf_page {
        background-color: #fff;
    }

    @media screen and (max-width: 768px) {
        .pdf_page {
            padding: 10px 0;
        }
    }
</style>
<script>
    import VueHtml2pdf from 'vue-html2pdf';
import Form from "@/utils/Form";
export default {
    head() {
        return {
            link: [
                {rel: 'stylesheet', type: 'text/css', href: '/asset/css/admin.css'},

            ],
        }
    },

    middleware: ["user"],

    layout: "empty",

    components: {},

    data() {
        return {
            report: null,

            form: new Form(this.$axios, {
         
            }),
        }
    },

    methods: {
        getReport(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/reports", {
                params: {
                    survey_id: this.$route.query.survey_id,
                }
            }).then(response => {
                this.report = response.data.data;

                console.log(this.report);
                this.$nextTick(() => {
                    const chart1 = document.querySelector('.graph-03-01');
                    const chart2 = document.querySelector('.graph-03-02');
                    const chart3 = document.querySelector('.graph-03-03');
                    const chart4 = document.querySelector('.graph-03-04');
                    const chart5 = document.querySelector('.graph-03-05');

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
                        if(classname == chart5){
                            classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #f7f7f7 " + i + "% 100%)";
                        }else{
                            classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #fff " + i + "% 100%)";
                        }
                    }

                    const replay = () => {
                        makeChart(this.report.survey.score_e, chart1, '#4A51FF');
                        makeChart(this.report.survey.score_s1, chart2, '#5090F5');
                        makeChart(this.report.survey.score_s2, chart3, '#FC952F');
                        makeChart(this.report.survey.score_g, chart4, '#1592E6');
                        makeChart(this.report.survey.score, chart5, '#56D13F');
                    }

                    makeChart(this.report.survey.score_e, chart1, '#4A51FF');
                    makeChart(this.report.survey.score_s1, chart2, '#5090F5');
                    makeChart(this.report.survey.score_s2, chart3, '#FC952F');
                    makeChart(this.report.survey.score_g, chart4, '#1592E6');
                    makeChart(this.report.survey.score, chart5, '#56D13F');
                });
            })
        },

        levelWidth(level){
            if(level == 1)
                return 1.7;

            if(level == 2)
                return 24;

            if(level == 3)
                return 50;

            if(level == 4)
                return 74;

            if(level == 5)
                return 99;
        },
    },

    computed: {

    },

    mounted() {
        this.getReport();

        /*
        if($("html").width() < 700){
            this.contWidth = 100;
        }
        $("html, body").css("overflow", "auto");
        $("html, body").css("height", "auto");
        */
    }
}
</script>
