<template>
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
                                                <p>직원 수</p>
                                            </div>
                                        </li>
                                        <li class="membership">
                                            <div>
                                                <strong>1245일</strong>
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
                                                <dd><a href="">소속직원 관리</a></dd>
                                            </dl>
                                        </li>
                                        <li class="order"><a href="" class="link">결제내역</a></li>
                                        <li class="qa"><a href="" class="link">문의내역</a></li>
                                        <li class="membership"><a href="" class="link">멤버쉽</a></li>
                                    </ul>
                                </div>
                                <!-- 탭은 모바일에서 내 정보의 경우에만 노출되어야 함 -->
                                <div class="mypage-body-tab">
                                    <ul>
                                        <li><a href="">회원정보 수정</a></li>
                                        <li><a href="">소속직원 관리</a></li>
                                    </ul>
                                </diV>
                                <div class="mypage-body-log">
                                    <a href="">로그아웃</a>
                                </div>
                            </div>
                        </div>
                        <div class="mypage-right">
                            <div class="title-box">
                                <h2>문의내역</h2>
                                <div class="button-box">
                                    <a href="" class="btn btn-black sm bdr4 h45 h-lg-35 px-lg-10 f18 f-lg-13">문의하기</a>
                                </div>
                            </div>
                            <div class="board-faq-box">
                                <ul>
                                    <li v-for="item in items.data":key="item.id" @click="active = !active" :class="active ? 'active': ''">
                                        <div class="list-head">
                                            <button type="button">
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    <span>답변 전</span>
                                                </p>
                                                <time>2024.05.31</time>
                                            </button>
                                        </div>
                                        <div class="list-body">
                                            <p>
                                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                            </p>
                                            <div class="list-body-reply">
                                                <p>
                                                    평가를 진행해주시면 담당자가 배정되어<br>
                                                    맞춤 서비스를 진행합니다.<br>
                                                    -ESGi 담당자
                                                </p>
                                                <time>2024.05.31</time>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <empty v-if="items.data.length === 0" />

                            <pagination :meta="items.meta" @paginate="(page) => {form.page = page; filter()}" />
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


    data() {
        return {
            form: new Form(this.$axios, {
                page:1,
            }),

            items:{
                data: [],
                meta: {
                    current_page:1,
                    last_page:10,
                }

            },
            active:false,

        }

    },

    methods: {
        filter(){
            this.$axios.get("api/qnas",{
                prams:this.form.data(),
            }).then(response => {
                console.log(response.data);
                this.items = response.data;
            })
        }
    },

    computed: {


    },

    mounted() {
        this.filter();
    }
}
</script>