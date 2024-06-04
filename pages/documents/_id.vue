<template>
    <section>
        <div>
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
                            <li>공지사항</li>
                        </ul>
                    </div>
                    <div class="title-box">
                        <h2 class="lg">자료실</h2>
                    </div>
                    <div class="board-view-box">
                        <div class="view-head">
                            <em>{{ }}</em>
                            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
                            <time>2024.05.31</time>
                        </div>
                        <div class="view-body">
                            <div class="view-body-content">
                                <p>
                                    “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?”
                                </p>
                                <img src="/asset/images/img_user_board_view.png" class="mt32 mt-lg-20">
                            </div>
                        </div>
                        <div class="view-foot">
                            <div class="view-foot-related">
<!--                                <nuxt-link  v-if="item.prev" :to="`/documents/${item.prev.id}`" class="prev">이전</nuxt-link>-->
<!--                                <nuxt-link  v-if="item.next" :to="`/documents/${item.next.id}`" class="next">다음</nuxt-link>-->
                            </div>
                            <div class="view-foot-button">
<!--                                <nuxt-link to="/documents" class="list">목록</nuxt-link>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>
<script>
import Form from "~/utils/Form";
export default {

    data(){
        return {
            item: null,
        }
    },

    methods:{
        getItem(){
            this.$axios.get("/api/documents/" + this.$route.params.id)
                    .then(response => {
                        console.log(response.data.data);
                        this.item = response.data.data;
                    });
        },


    },

    mounted(){
        this.getItem();
    }
}
</script>
