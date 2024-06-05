<template>
<!--    <section>-->
<!--        <div class="area-user-login" style="min-height:calc(100vh - 300px - 190px);">-->
<!--            <div class="side">-->
<!--                <form class="side-inner" @submit.prevent="login">-->
<!--                    <h3 class="title">-->
<!--                        <br/><span class="point">임시 로그인창</span>-->
<!--                    </h3>-->

<!--                    <div class="inputs">-->
<!--                        <div class="input-text">-->
<!--                            <input type="text" placeholder="아이디를 입력해주세요." v-model="form.ids">-->
<!--                            <error :form="form" name="ids" />-->
<!--                        </div>-->
<!--                        <div class="input-text">-->
<!--                            <input type="password" placeholder="비밀번호를 입력해주세요." v-model="form.password">-->
<!--                            <error :form="form" name="password" />-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <button class="btn" type="submit">Login</button>-->
<!--                </form>-->
<!--            </div>-->
<!--        </div>-->
<!--    </section>-->
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
                    <div class="inner-box">
                        <div class="title-box">
                            <h2><img src="/asset/images/logo.png"></h2>
                            <p class="mt32 mt-lg-10">ESGi를 방문해주신 것을 환영합니다.</p>
                        </div>
                        <div class="input-box mt48 mt-lg-24">
                            <input type="text" placeholder="이메일을 입력해주세요" v-model="form.ids">
                        </div>
                        <error :form="form" name="ids" />
                        <div class="input-box mt8">
                            <input type="password" placeholder="비밀번호를 입력해주세요" v-model="form.password">
                        </div>
                        <error :form="form" name="password" />
                        <div class="link-box mt8">
                            <ul>
                                <li><a href="">계정정보 찾기</a></li>
                            </ul>
                        </div>
                        <div class="button-box mt32 mt-lg-20">
                            <a href="" class="btn btn-skyblue lg bdr4 flex-1" @click.prevent="login">로그인</a>
                        </div>
                        <div class="member-guide-box">
                            <a href="">
                                <div>
                                    <p>아직 회원이 아니신가요?</p>
                                    <small>ESGi에서 제공하는 서비스를 만나보세요.</small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
.space-box {min-height:100vh;}
.area-user-login {
    text-align:center;
}
.area-user-login .title {
    margin-bottom:24px;
}
.area-user-login .title .point {
    font-size:32px; font-weight:bold;
}
.area-user-login form {
    max-width:500px; width:100%;
    margin:0 auto;
}
.area-user-login .input-text input {
    width:100%;
    margin-bottom:12px;
    padding:12px 16px;
    border:1px solid #e1e1e1;
    border-radius:5px;
}
.area-user-login .btn {
    width:100%;
    padding:12px 16px;
    background-color:black; color:#fff;
}
</style>
<script>
import Form from "../utils/Form";
export default {
    name: 'Login',
    auth: "guest",
    data(){
        return {
            form : new Form(this.$axios, {
                ids:"",
                password:"",
                type: "PERSONAL",
                push_token: "",
            })
        }
    },
    methods: {
        login(){
            this.form.push_token = this.$store.state.push_token;

            this.$auth.loginWith('laravelSanctum', {
                data: this.form.data()
            }).then(response => {

                if(this.$store.state.intendedUrl){
                    let url = this.$store.state.intendedUrl;

                    this.$store.commit("setIntendedUrl", null);

                    return this.$router.push(url);
                }

                this.$router.push("/");
            }).catch(error => {
                this.form.onFail(error.response.data);
            });

            /*this.$axios.get('/sanctum/csrf-cookie').then(response => {
                this.form.post("/api/login")
                    .then(response => {
                        this.$axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;

                        this.$store.commit("setToken", response.data.token);
                        this.$store.commit("setUser", response.data.user);

                        console.log(this.$store.state.user);
                    })
                    .catch(error => {

                    })
            });*/
        },

        ready(){
            return alert("준비중입니다.");
        }
    },

    mounted() {

    }
}
</script>
