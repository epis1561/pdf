<template>
    <div class="board-right">
        <div class="board-right-head">
            <div class="head-left">
                <h2>캠페인 목록</h2>
<!--                <div class="flex flex-vc">
                    <select class="w160">
                        <option>년도</option>
                    </select>
                    <select class="w260">
                        <option>간접 에너지사용량</option>
                    </select>
                </div>-->
            </div>
            <div class="head-right">
                <a href="#" class="logout" @click.prevent="logout">로그아웃</a>
            </div>
        </div>

        <div class="board-right-body" v-if="campaigns.data.length === 0">
            <div class="m-empty type01"></div>
        </div>

        <div class="board-right-body">
            <div class="board-white-box grid-4">
                <div class="board-white-inner" v-for="campaign in campaigns.data" :key="campaign.id">
                    <div class="board-graph-box">
                        <div :class="`graph-03 graph${campaign.id} middle`">
                            <div class="graph-inner">
                                <strong>{{ campaign.score }}</strong>
                            </div>
                        </div>
                        <div class="graph-content">
                            <strong>{{campaign.title}}</strong>
                            <dl>
                                <dd>
                                    <b>E</b>
                                    <p>{{ campaign.score_e }}</p>
                                </dd>
                                <dd>
                                    <b>S1</b>
                                    <p>{{ campaign.score_s1 }}</p>
                                </dd>
                                <dd>
                                    <b>S2</b>
                                    <p>{{campaign.score_s2}}</p>
                                </dd>
                                <dd>
                                    <b>G</b>
                                    <p>{{ campaign.score_g }}</p>
                                </dd>
                            </dl>
                            <time>{{ campaign.format_survey_started_at }} ~ {{ campaign.format_improve_finished_at }}</time>
                            <nuxt-link :to="`/provider/companies?campaign_id=${campaign.id}`">업체별 현황보기</nuxt-link>
                        </div>
                    </div>

                </div>
            </div>

            <pagination :meta="campaigns.meta" @paginate="(page) => {form.page = page; getCampaigns()}" />

        </div>
    </div>
</template>
<script>
import Form from "@/utils/Form";
export default {
    layout: "provider",
    middleware: ["provider"],

    data(){

        return {
            form : new Form(this.$axios, {
                page: 1,
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
        }
    },
    methods: {
        getCampaigns(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/provider/campaigns")
                .then(response => {
                    this.campaigns = response.data;

                    this.$nextTick(() => {
                        this.campaigns.data.map(campaign => this.drawChart(campaign));
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
    }
}
</script>
