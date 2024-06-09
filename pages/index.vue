<template>
    <section>
        <div class="sub-box">
            <div class="sub-right-box">
                <div class="main-box">
                    <div class="main-banner">
                        <div class="swiper-container">
                            <ul class="swiper-wrapper">
                                <li class="swiper-slide" style="background-image:url('/asset/images/img_user_main_banner_01.png');">
                                    <div class="container">
                                        <strong>ESG <br>Integrated <br>Service</strong>
                                        <p>
                                            기업의 지속가능경영 보고서를 발간 및 검증함에 있어서,<br>
                                            사회적으로 신뢰받는 인증기관이 되고자 고객에게<br>
                                            전문가적 지속가능 경영 보고서 제작 및 검증, 컨설팅 서비스를 제공합니다.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                    <div class="main-news">
                        <div class="container">
                            <div class="news-left">
                                <strong>ESG 새소식</strong>
                            </div>
                            <div class="news-right">
                                <ul>
                                    <li v-for="(notice,index) in notices.data" :key="notice.id" v-if="index < 3">
                                        <nuxt-link :to="`/notices/${notice.id}`">
                                            <p>{{ notice.title }}</p>
                                            <time>{{ notice.format_created_at }}</time>
                                        </nuxt-link>
                                    </li>

                                </ul>
                                <nuxt-link to="/notices" class="more">MORE</nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="main-intro">
                        <div class="container">
                            <h2>
                                <small>ESG INTRODUCTION</small>
                                <strong>ESG 소개</strong>
                            </h2>
                            <div class="main-intro-inner">
                                <div class="intro-left">
                                    <div class="intro-left-tab">
                                        <a href="#" @click.prevent="activeIndex = 1;" :class="activeIndex === 1 ? 'active' : ''">지속 가능성</a>
                                        <a href="#" @click.prevent="activeIndex = 2;" :class="activeIndex === 2 ? 'active' : ''">비대면 진단</a>
                                        <a href="#" @click.prevent="activeIndex = 3;" :class="activeIndex === 3 ? 'active' : ''">리스크</a>
                                    </div>

                                    <div class="intro-left-content" v-if="activeIndex === 1">
                                        <h2>ESGI for Sustainability</h2>
                                        <p>
                                            함께 만드는 가치, 지속가능경영의 시작!
                                            <br/>우리의 솔루션으로 현실이 됩니다.
                                        </p>
                                        <nuxt-link to="/contents/company">자세히 보기</nuxt-link>
                                    </div>
                                    <div class="intro-left-content" v-if="activeIndex === 2">
                                        <h2>온라인 비대면 진단 솔루션</h2>
                                        <p>
                                            그동안 어떻게 진단해야할지 고민하셨나요?
                                            <br/>온라인으로 쉽게 진단해보세요.
                                        </p>
                                        <nuxt-link to="/contents/solution">자세히 보기</nuxt-link>
                                    </div>
                                    <div class="intro-left-content" v-if="activeIndex === 3">
                                        <h2>리스크 관리의 중요성</h2>
                                        <p>
                                            최근 글로벌 리스크와 투자자의 관심, 정보공개 요구 및 규제가 빠르게 증가하고 있어
                                            <br/>기업의 ESG 리스크 관리는 매우 중요해 지는 추세입니다.
                                        </p>
                                        <nuxt-link to="/contents/risk">자세히 보기</nuxt-link>
                                    </div>
                                </div>
                                <div class="intro-right">
                                    <img src="/asset/images/img_user_main_intro.png">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-service">
                        <div class="container">
                            <h2>
                                <small>TIS-CSS</small>
                                <strong>남다른 서비스</strong>
                            </h2>
                            <div class="main-service-inner">
                                <div class="service-left">
                                    <div>
                                        <span>ESG 서비스</span>
                                        <p>
                                            고객에게 전문가적 지속가능<br>
                                            경영 보고서 제작 및 검증,<br>
                                            컨설팅 서비스를 제공합니다.
                                        </p>
                                    </div>
                                </div>
                                <div class="service-right">
                                    <ul>
                                        <li>
                                            <a href="#" @click.prevent="">
                                                <strong>Services 01</strong>
                                                <h2>ESG 전문성 및 인력풀</h2>
                                                <p>
                                                    기업 ESG에 대한 진단 및 ESG 컨설팅 및<br>
                                                    인증에 대한 전문 인력풀 가동으로 인한<br>
                                                    합리적 및 전문가 서비스를 진행합니다.
                                                </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click.prevent="">
                                                <strong>Services 02</strong>
                                                <h2>다양한 프로젝트 경험</h2>
                                                <p>
                                                    공공기관 ,금융, 소비재, 유통 등 다양한<br>
                                                    프로젝트 경험을 통해 ESG 에 대한<br>
                                                    다양한 이해 및 전문성을 보유하고 있습니다.
                                                </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click.prevent="">
                                                <strong>Services 03</strong>
                                                <h2>제3자 인증</h2>
                                                <p>
                                                    지속가능경영보고서 작성 후<br>
                                                    제3자 인증 서비스 제공으로 인하여<br>
                                                    보고서의 투명성을 제고할 수 있습니다.
                                                </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click.prevent="">
                                                <strong>Services 04</strong>
                                                <h2>ESG 보고서 자동서비스</h2>
                                                <p>
                                                    ESG 지속가능경영보고서를<br>
                                                    손쉽게 작성할 수 있도록<br>
                                                    서비스를 제공합니다.
                                                </p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-board">
                        <div class="container">
                            <ul>
                                <li>
                                    <nuxt-link to="/faqs">
                                        <h2>
                                            <strong>FAQ</strong>
                                            <p>ESG 관련 자주 묻는 질문과 답변을 확인할 수 있습니다.</p>
                                        </h2>
                                        <img src="/asset/images/img_user_main_board_01.png">
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/contents/solution?contact=1">
                                        <h2>
                                            <strong>CONTACT US</strong>
                                            <p>이에스지아이에 궁금하신 사항을 문의하실 수 있습니다.</p>
                                        </h2>
                                        <img src="/asset/images/img_user_main_board_02.png">
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
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

            notices: {
                data: [],
            },

            activeIndex: 1,

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

        getNotices(){
            this.$axios.get("/api/notices")
                    .then(response => {
                        this.notices = response.data;
                    });
        },
    },

    computed: {

    },

    mounted() {
        if(!this.$store.state.viewIntro)
            return this.$router.push("/intro");

        this.getBanners();

        this.getNotices();
    }

}
</script>
