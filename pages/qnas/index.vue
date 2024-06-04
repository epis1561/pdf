<template>
    <section>
        <div class="container xs">
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
                    <div class="location-box">
                        <ul>
                            <li class="home"><nuxt-link to="/">홈</nuxt-link></li>
                            <li>고객 센터</li>
                            <li>문의사항</li>
                        </ul>
                    </div>
                    <div class="title-box">
                        <h2 class="lg">문의사항</h2>
                    </div>
                    <div class="category-box mt64 mt-lg-30">
                        <ul>
                            <li><nuxt-link to="/faqs">FAQ</nuxt-link></li>
                            <li class="active"><nuxt-link to="/qnas">문의사항</nuxt-link></li>
                            <li><nuxt-link to="/notices">공지사항</nuxt-link></li>
                            <li><nuxt-link to="/documents">자료실</nuxt-link></li>
                        </ul>
                    </div>
                    <div class="board-faq-box">
                        <ul>
                            <qna :item="item" v-for="item in items.data" :key="item.id" />
                        </ul>
                    </div>
                    <empty v-if="items.data.length === 0" />

                    <pagination :meta="items.meta" @paginate="(page) => {form.page = page; filter()}" />
                </div>
            </div>
        </div>
    </section>
</template>
<script>
/*
[ // 첨부이미지 목록 (데이터 없을 경우 빈 배열 []로 넘어옴)
					{
						id: 1, // 고유번호
						url: "https://이미지경로.jpg",
						name : "파일명",
					},
					{
						id: 2, // 고유번호
						url: "https://이미지경로.jpg",
						name : "파일명",
					}
				]
* */
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
            }


        }

    },

    methods: {
        filter(){
            this.$axios.get("api/qnas",{
                prams:this.form.data(),
            }).then(response => {
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
