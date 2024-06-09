<template>
    <!--
    <main class="index">
        <div class="index-wrap">
            <section class="sec-1">
                <p class="sec-title scd5">
                    방문자
                </p>
                <div class="sec-con">
                    <div id="chart_1" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
                </div>
            </section>
            <div class="sec-wrap col-group">
                <section class="sec-2">
                    <p class="sec-title scd5">
                        마일리지
                    </p>
                    <div class="sec-con">
                        <div id="chart_2" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
                    </div>
                </section>
                <section class="sec-3">
                    <p class="sec-title scd5">
                        알림
                    </p>
                    <div class="sec-con">
                        <ul class="notice-list col-group">
                            <li>
                                <a href="/admin/qnas">
                                    <p class="title scd6">
                                        {{alerts[0]}}
                                    </p>
                                    <p class="txt">
                                        1:1 문의
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a href="/admin/serviceChecks">
                                    <p class="title scd6">
                                        {{alerts[1]}}
                                    </p>
                                    <p class="txt">
                                        이차어때
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a href="/admin/serviceProtects">
                                    <p class="title scd6">
                                        {{alerts[2]}}
                                    </p>
                                    <p class="txt">
                                        동행서비스
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </main>
    -->
</template>

<script>
import Form from "@/utils/Form";
export default {
    layout: "admin",
    data(){
        return {
            form : new Form(this.$axios, {

            }),

            visitors: [],
            pointHistories: [],
            alerts: [],
        }
    },
    methods: {
        setVisitChart(){
            console.log(this.visitors);
            //방문자 수 차트,
            Highcharts.chart('chart_1', {
                title: {
                    text: '방문자 수',
                    x: -20 //center
                },
                xAxis: {
                    categories: ['1월', '2월', '3월', '4월', '5월', '6월',
                        '7월', '8월', '9월', '10월', '11월', '12월']
                },
                yAxis: {
                    title: {
                        text: '방문자 수'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '명'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [
                    {
                        name: '방문자',
                        data: this.visitors
                    }
                ]
            });
        },

        setPointHistoriesChart(){
            let self = this;
            //마일리지 차트,
            Highcharts.chart('chart_2', {
                title: {
                    text: '마일리지 사용금액',
                    x: -20 //center
                },
                xAxis: {
                    categories: ['1월', '2월', '3월', '4월', '5월', '6월',
                        '7월', '8월', '9월', '10월', '11월', '12월']
                },
                yAxis: {
                    title: {
                        text: '사용금액'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '원'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [
                    {
                        name: '사용금액',
                        data: self.pointHistories,
                        color: '#f7a35c'
                    }
                ]
            });
        }
    },

    mounted() {

        this.$router.push("/admin/campaigns");

        /*this.$axios.get('/api/admin/charts')
            .then(response => {
                this.visitors = response.data.data.visitors;
                this.pointHistories = response.data.data.pointHistories;
                this.alerts = response.data.data.alerts;

                this.setVisitChart();

                this.setPointHistoriesChart();
            })*/


    }
}
</script>
