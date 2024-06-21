<template>
    <canvas :id="id"></canvas>
</template>
<script>
import Form from "../utils/Form";

export default {
    props: {
        id: {
            default: "chart",
        },

        item: {
            default() {
                return null;
            }
        },

        years: {
            default() {
                return [];
            }
        }
    },
    data() {
        this.chart = null;

        return {}
    },

    methods: {
        drawChart() {
            let context = document.getElementById(this.id).getContext('2d');

            console.log(this.years);
            this.chart = new Chart(context, {
                type: 'bar',
                responsive: true,
                data: {
                    labels: this.years.map((year, index) => {
                        return year
                    }),
                    datasets: [
                        {
                            label: this.item.question.options[0].data_title,
                            backgroundColor: '#1C70AE',
                            data: this.years.map((year, index) => this.item.invest_value[index]),
                        }
                    ],
                },
                options: {
                    plugins: {
                        legend: {
                            display: false // 범례 숨기기
                        },
                    },
                    scales: {

                    },
                    barPercentage: 0.6 // 막대 간 간격 조정
                }
            });
        }
    },

    computed: {},

    watch: {
        '$route'(to, from) {

        }
    },

    mounted() {
        this.$nextTick(() => {
            this.drawChart();
        })
    }
}
</script>
