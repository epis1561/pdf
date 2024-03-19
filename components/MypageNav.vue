<template>
    <div id="MypageNav">
        <div class='toggle mb'>
            <i class='xi-bars'></i>
        </div>

        <div class='mypage-nav'>
            <a class="logo-box" href="/">
                <img src="/images/LOGO-w.svg" alt="" />
            </a>

            <div class="mypage-nav-scroll-wrap">
                <div class="profile-wrap">
                    <div class="profile-img-wrap" @click="() => $router.push('/mypage/users/edit')">
                        <img :src="user.img ? user.img.url : '/images/basic-user.png'" alt="" />
                        <i class="xi-pen"></i>
                    </div>
                    <div class="profile-name col-group">
                        <div class="name">
                            {{ user.name }}
                            <span>님</span>
                        </div>
                        <div class="label">{{ user.type === 'COMPANY' ? '기업' : '개인' }}</div>
                    </div>
                </div>
                <div class="mypage-gnb-wrap">
                    <div class="mypage-gnb">
                        <a href="/mypage/users/edit" class='gnb-title col-group active'>
                            <i class="xi-user"></i>
                            MY 정보
                        </a>
                        <div class="mypage-sub-gnb-wrap">
                            <div class="mypage-sub-gnb">
                                <p class="sub-gnb-title">MY 정보</p>
                                <a href="/mypage/users/edit" class="sub-gnb-item">
                                    계정 정보 수정
                                </a>

                                <!-- 개인회원 전용 메뉴 -->
                                <a href="/mypage/freelancers/edit" class="sub-gnb-item" v-if="user.type === 'FREELANCER'">
                                    프리랜서 정보 수정
                                </a>

                                <!-- 기업회원 전용 메뉴 -->
                                <a href="/mypage/companies/edit" class="sub-gnb-item" v-if="user.type === 'COMPANY'">
                                    기업 정보 수정
                                </a>
                            </div>

                            <div class="mypage-sub-gnb">
                                <p class="sub-gnb-title">MY 페이 머니</p>
                                <a href="/mypage/orders/create" class="sub-gnb-item">
                                    충전하기
                                </a>
                                <a href="/mypage/pointHistories" class="sub-gnb-item">
                                    사용/충전 내역
                                </a>

                            </div>
                            <div class="mypage-sub-gnb">
                                <p class="sub-gnb-title">1:1 문의</p>
                                <a href="/qnas" class="sub-gnb-item">
                                    나의 문의
                                </a>
                                <a href="/notices" class="sub-gnb-item">
                                    공지사항
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="mypage-gnb">
                        <a href="#" class='gnb-title col-group active' @click.prevent="">
                            <i class="xi-factory"></i>
                            공장 공유 서비스
                        </a>
                        <div class="mypage-sub-gnb-wrap">
                            <div class="mypage-sub-gnb">
                                <p class="sub-gnb-title">공장주</p>
                                <a href="/mypage/factories" class="sub-gnb-item" v-if="isAcceptCompany">등록 공장 관리</a>
                                <a href="/mypage/factories" class="sub-gnb-item" @click.prevent="" v-else>등록 공장 관리<i class="xi-lock"></i></a>

                                <a href="/mypage/company/factoryApplications" class="sub-gnb-item" v-if="isAcceptCompany">공장 이용 내역</i></a>
                                <a href="/mypage/company/factoryApplications" class="sub-gnb-item" @click.prevent="" v-else>공장 이용 내역<i class="xi-lock"></i></a>
                            </div>
                            <div class="mypage-sub-gnb">
                                <p class="sub-gnb-title">이용자</p>
                                <a href="/mypage/likes/factories" class="sub-gnb-item">
                                    관심 공장
                                </a>
                                <a href="/mypage/freelancer/factoryApplications" class="sub-gnb-item">
                                    이용 신청 내역
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="mypage-gnb">
                        <a href="/완료/MypageDrawing.html" class='gnb-title col-group active'>
                            <i class="xi-layout-aside-o"></i>
                            도면 가공 서비스
                        </a>
                        <div class="mypage-sub-gnb-wrap">
                            <div class="mypage-sub-gnb">
                                <p class="sub-gnb-title">의뢰자</p>
                                <a href="/mypage/company/drawingRequests" class="sub-gnb-item" v-if="isAcceptCompany">의뢰 등록 내역</a>
                                <a href="/mypage/company/drawingRequests" class="sub-gnb-item" v-else @click.prevent="">의뢰 등록 내역<i class="xi-lock"></i></a>

<!--                                <a href="/mypage/company/drawingRequests" class="sub-gnb-item" v-if="isAcceptCompany">받은 간편 견적</a>
                                <a href="/mypage/company/drawingRequests" class="sub-gnb-item" v-else @click.prevent="">받은 간편 견적<i class="xi-lock"></i></a>-->
                            </div>
                            <div class="mypage-sub-gnb">
                                <p class="sub-gnb-title">제작자</p>
                                <a href="/mypage/likes/drawingRequests" class="sub-gnb-item">
                                    관심 의뢰
                                </a>
                                <a href="/mypage/freelancer/drawingRequestApplications" class="sub-gnb-item" v-if="isAcceptCompany">보낸 간편 견적</a>
                                <a href="/mypage/freelancer/drawingRequestApplications" class="sub-gnb-item" v-else @click.prevent="">보낸 간편 견적<i class="xi-lock"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="mypage-gnb">
                        <a href="/MypageClient_OrderList.html" class='gnb-title col-group active'>
                            <i class="xi-shield-checked"></i>
                            주문 생산 서비스
                        </a>
                        <div class="mypage-sub-gnb-wrap">
                            <div class="mypage-sub-gnb">
                                <p class="sub-gnb-title">의뢰자</p>
<!--                                <a href="/MypageClient_OrderList.html" class="sub-gnb-item">수주 업체 정보<i class="xi-lock"></i></a>-->
                                <a href="/mypage/company/bigNotices" class="sub-gnb-item" v-if="isAcceptCompany">주문생산 등록 내역</a>
                                <a href="/mypage/company/bigNotices" class="sub-gnb-item" v-else @click.prevent="">주문생산 등록 내역<i class="xi-lock"></i></a>

                                <a href="/mypage/company/bigNoticeApplications" class="sub-gnb-item" v-if="isAcceptCompany">받은 견적</a>
                                <a href="/mypage/company/bigNoticeApplications" class="sub-gnb-item" v-else @click.prevent="">받은 견적<i class="xi-lock"></i></a>
<!--                                <a href="/MypageClient_Contract.html" class="sub-gnb-item">거래 계약상황<i class="xi-lock"></i></a>-->
                                <a href="/mypage/company/bigNoticeQnas" class="sub-gnb-item" v-if="isAcceptCompany">Q&A 답변하기</a>
                                <a href="/mypage/company/bigNoticeQnas" class="sub-gnb-item" v-else @click.prevent="">Q&A 답변하기<i class="xi-lock"></i></a>
                            </div>
                            <div class="mypage-sub-gnb">
                                <p class="sub-gnb-title">제작자</p>
                                <a href="/mypage/likes/bigNotices" class="sub-gnb-item">관심 공고</a>
                                <a href="/mypage/freelancer/bigNoticeApplications" class="sub-gnb-item" v-if="isAcceptCompany">보낸 견적</a>
                                <a href="/mypage/freelancer/bigNoticeApplications" class="sub-gnb-item" v-else @click.prevent="">보낸 견적<i class="xi-lock"></i></a>
<!--                                <a href="/html/MypageProducer_OrderList.html" class="sub-gnb-item">발주 업체 정보<i class="xi-lock"></i></a>
                                <a href="/html/MypageProducer_RegisterList.html" class="sub-gnb-item">보낸 견적<i class="xi-lock"></i></a>
                                <a href="/html/MypageProducer_Contract.html" class="sub-gnb-item">거래 계약상황(납품등록)<i class="xi-lock"></i></a>-->
                                <a href="/mypage/freelancer/bigNoticeQnas" class="sub-gnb-item" v-if="isAcceptCompany">Q&A 답변확인</a>
                                <a href="/mypage/freelancer/bigNoticeQnas" class="sub-gnb-item" v-else @click.prevent="">Q&A 답변확인<i class="xi-lock"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="logout-btn col-group" @click="logout">
                <i class="xi-log-out"></i>
                로그아웃
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        user(){
            return this.$auth.user.data
        },

        isAcceptCompany(){
            return this.$auth.user.data.type === 'COMPANY' && this.$auth.user.data.accepted == 1;
        }
    },

    methods: {
        logout(){
            this.$auth.logout();
            this.$router.push("/");
        }
    },

    mounted() {
        $(document).ready(function () {
            $('.toggle').click(function(){
                $('.mypage-nav').toggleClass('active')
            });
        })
    }
}
</script>