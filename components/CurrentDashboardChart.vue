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

      items: {
         default() {
            return [];
         }
      },

      years: {
         default(){
            return [];
         }
      }
   },
    data(){
         this.chart = null;

         return {

         }
    },

    methods: {
       drawChart(){
          let context = document.getElementById(this.id).getContext('2d');

          this.chart = new Chart(context, {
             type: 'bar',
             responsive: true,
             data: {
                labels: this.items.map(item => item.question.options[0].data_title),
                datasets: this.years.map((year, index) => {
                   return {
                      label: year,
                      backgroundColor: '#1C70AE',
                      data: this.items.map(item => item.invest_value[index]),

                   }
                }),
             },
             options: {
                plugins: {
                   legend: {
                      display: false // 범례 숨기기
                   },
                },
                barPercentage: 0.6 // 막대 간 간격 조정
             }
          });
       }
    },

    computed: {

    },

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
