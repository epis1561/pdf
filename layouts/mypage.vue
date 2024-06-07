<template>
    <div id="wrapper">
        <loading v-if="$store.state.loading" />

        <pop />

        <!-- 헤더 -->
        <header-vue />

        <!-- 페이지마다 바뀔 영역 -->
        <section>
            <div class="container">
                <div class="sub-box">
                    <div class="sub-left-box is-m">
                        <div class="sub-left-head">
                            <img src="/asset/images/logo.png">
                            <a href="javascript:;" class="close" onclick="menuClose();">닫기</a>
                        </div>
                        <div class="sub-left-body">
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
                                    <li class="cate04"><a href=""><p>평가 안내</p></a></li>
                                    <li class="cate05 active"><a href=""><p>기본 정보</p></a></li>
                                    <li class="cate06">
                                        <button type="button"><p>답변 작성</p></button>
                                        <div>
                                            <ul>
                                                <li>
                                                    <button type="button" data-type="depth">
                                                        <p><b>A</b>윤리</p>
                                                        <div class="graph">
                                                            <em>100%</em>
                                                            <div><span style="width:100%;"></span></div>
                                                        </div>
                                                    </button>
                                                    <ul>
                                                        <li><a href="">A1 . 일반</a></li>
                                                        <li class="active"><a href="">A2 . 투명경영 및 반부패, 이해상충 방지</a></li>
                                                        <li><a href="">A3 . 불공정 거래 방지</a></li>
                                                        <li><a href="">A4 . 위조부품 방지</a></li>
                                                        <li><a href="">A6 . 정보보호</a></li>
                                                        <li><a href="">A6 . 정보보호</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <button type="button" data-type="depth">
                                                        <p><b>E</b>환경</p>
                                                        <div class="graph">
                                                            <em>76%</em>
                                                            <div><span style="width:76%;"></span></div>
                                                        </div>
                                                    </button>
                                                    <ul>
                                                        <li><a href="">E1 . 환경경영시스템 구축</a></li>
                                                        <li><a href="">E2 . 에너지 사용 및 온실가스 배출량 관리</a></li>
                                                        <li><a href="">E3 . 수자원 관리</a></li>
                                                        <li><a href="">E4 . 대기오염물질 관리</a></li>
                                                        <li><a href="">E5 . 폐기물 관리</a></li>
                                                        <li><a href="">E6 . 화학물질 관리</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="sub-right-box">
                        <div class="mypage-box">
                            <div class="mypage-left">
                                <div class="mypage-head">
                                    <div class="mypage-head-logo">
                                        <img src="/asset/images/img_user_mypage_logo.png">
                                    </div>
                                    <div class="mypage-head-company">
                                        <h2>삼성전자</h2>
                                        <dl>
                                            <dd>
                                                <p>중소기업</p>
                                                <p>이명순</p>
                                                <p>02-0000-0000</p>
                                            </dd>
                                            <dd>
                                                <p>304-81-26751</p>
                                                <p>
                                                    <span>산업</span>
                                                    <span>자본제</span>
                                                    <span>기계</span>
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div class="mypage-head-info">
                                        <ul>
                                            <li class="person">
                                                <div>
                                                    <strong>162</strong>
                                                    <p>멤버수</p>
                                                </div>
                                            </li>
                                            <li class="membership">
                                                <div>
                                                    <strong>0일</strong>
                                                    <p>멤버쉽</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="mypage-body">
                                    <div class="mypage-body-category">
                                        <ul>
                                            <li class="info">
                                                <a href="" class="link">내 정보</a>
                                                <button type="button" class="link">내 정보</button>
                                                <dl>
                                                    <dd><a href="">회원정보 수정</a></dd>
                                                    <dd v-if=" this.$auth.user.data.company_admin == 1"><a href="">소속직원 관리</a></dd>
                                                    <dd v-if=" this.$auth.user.data.company_admin == 0"><a href="">받은초대</a></dd>
                                                </dl>
                                            </li>
                                            <li class="order"><a href="" class="link" @click.prevent="$store.commit('setPop', { description: '준비중입니다.' })">결제내역</a></li>
                                            <li class="qa"><a href="" class="link">문의내역</a></li>
                                            <li class="membership"><a href="" class="link" @click.prevent="$store.commit('setPop', { description: '준비중입니다.' })">멤버쉽</a></li>
                                        </ul>
                                    </div>
                                    <!-- 탭은 모바일에서 내 정보의 경우에만 노출되어야 함 -->
                                    <div class="mypage-body-tab">
                                        <ul>
                                            <li><a href="">회원정보 수정</a></li>
                                            <li><a href="" v-if="">소속직원 관리</a></li>
                                        </ul>
                                    </diV>
                                    <div class="mypage-body-log">
                                        <a href="#" @click.prevent="logout">로그아웃</a>
                                    </div>
                                </div>
                            </div>

                            <Nuxt />
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- 푸터 -->
        <footer-vue />
    </div>

</template>
<style>
/* .fade-enter-active, .fade-leave-active {
    transition: opacity .7s;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
} */
</style>
<script>
import HeaderVue from "../components/HeaderVue";
import FooterVue from "../components/FooterVue";
export default {
    head() {
        return {
            script: [
                {
                    src: '//cdn.quilljs.com/1.3.6/quill.min.js',
                    defer: true
                },
         /*       {
                    hid: 'google-analytics',
                    src: 'https://www.googletagmanager.com/gtag/js?id=GTM-NNSD2QJX',
                    defer: true
                },
                {
                    hid: 'gtm-script',
                    src: 'https://www.googletagmanager.com/gtm.js?id=GTM-NNSD2QJX',
                    defer: true
                }*/
            ],

            link: [
                {rel: 'stylesheet', type: 'text/css', href: '/asset/css/user.css'},
                {rel: 'stylesheet', type: 'text/css', href: '/asset/css/developer.css'},
                {rel: 'stylesheet', type: 'text/css', href: '//cdn.quilljs.com/1.3.4/quill.snow.css'},
                {rel: 'stylesheet', type: 'text/css', href: '//cdn.quilljs.com/1.3.4/quill.snow.css'},

            ],
        }
    },

    components: {
        FooterVue,
        HeaderVue
    },

    computed:{
        modals(){
            return this.$store.state.modals;
        }
    },

    methods:{
        getBasic(){
            this.$axios.get("/api/basics")
                    .then(response => {
                        if(response.data.data.length > 0)
                            this.$store.commit("setBasic", response.data.data[0]);
                    })
        },
        getBanners(){
            this.$axios.get("/api/banners")
                    .then(response => {
                        this.$store.commit("setBanners", response.data);
                    })
        },
        logout(){
            this.$auth.logout();
        },

    },

    mounted() {
        // this.$store.dispatch("getCoords");
        // this.getBasic();
        // this.getBanners();
    }
}
</script>
