<template>
  <section>
      <div class="tests" style="display: flex; justify-content: center; gap:10px;">
          <nuxt-link to="/login" class="text">로그인</nuxt-link>
          <nuxt-link to="/campaigns" class="text">일반사용자 캠페인 목록 테스트</nuxt-link>
          <nuxt-link to="/investgator/campaigns" class="text">실사자 캠페인 목록 테스트</nuxt-link>
      </div>
  </section>
</template>

<style>`
.tests {
    display: flex; gap:12px; height:100%; flex-direction: column; justify-content: center; align-content: center;
    padding:40px;
}
.tests .text {
    display: inline-block;
    padding:12px;
    font-size:24px;
    border:2px solid black; color:black; font-weight:bold;
    text-align: center;
}
</style>
<script>
import Form from "@/utils/Form";

export default {
    name: 'IndexPage',

    // get방식은 form 쓰지말고 this.$axios 사용주의

    data() {
        return {
            form: new Form(this.$axios, {
                word: ""
            }),

            banners: {
                data: [],

            },

            timer: null,
            timer2: null,
        }
    },

    methods: {
        getBanners() {

            if(this.$store.state.banners.data.length > 0){
                this.banners = this.$store.state.banners;

                return this.$nextTick(() => {
                    //메인 배너 슬라이드
                    var bannerSlide = new Swiper(".index-slide-swiper", {
                        speed: 3000,
                        autoplay: {
                            delay: 3000,
                        },
                        pagination: {
                            el: '.index-slide-pagination',
                        },
                        disableOnInteraction: false,
                        breakpoints: {},
                    });
                })
            }

            this.$axios.get("/api/banners")
                    .then(response => {
                        this.banners = response.data;

                        this.$nextTick(() => {
                            //메인 배너 슬라이드
                            var bannerSlide = new Swiper(".index-slide-swiper", {
                                speed: 3000,
                                autoplay: {
                                    delay: 3000,
                                },
                                pagination: {
                                    el: '.index-slide-pagination',
                                },
                                disableOnInteraction: false,
                                breakpoints: {},
                            });
                        })
                    });
        },
    },

    computed: {
        today(){
            let date = new Date();

            return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시`;
        },
    },

    mounted() {
        this.getBanners();
    }

}
</script>
