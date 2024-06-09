<template>
    <section>
        <div class="container">
            <div class="sub-box">
                <div class="sub-right-box">
                    <div class="inner-box">
                        <div class="title-box">
                            <h2><img src="/asset/images/logo.png"></h2>
                            <p class="mt32 mt-lg-10">ESGi를 방문해주신 것을 환영합니다.</p>
                        </div>
                        <div class="input-box mt48 mt-lg-24">
                            <input type="text" placeholder="아이디를 입력해주세요" v-model="form.ids">
                        </div>
                        <error :form="form" name="ids" />
                        <div class="input-box mt8">
                            <input type="password" placeholder="비밀번호를 입력해주세요" v-model="form.password">
                        </div>
                        <error :form="form" name="password" />
<!--                        <div class="link-box mt8">
                            <ul>
                                <li><a href="">계정정보 찾기</a></li>
                            </ul>
                        </div>-->
                        <div class="button-box mt32 mt-lg-20">
                            <a href="" class="btn btn-skyblue lg bdr4 flex-1" @click.prevent="login">로그인</a>
                        </div>
                        <div class="member-guide-box">
                            <nuxt-link to="/users/createSelect">
                                <div>
                                    <p>아직 회원이 아니신가요?</p>
                                    <small>ESGi에서 제공하는 서비스를 만나보세요.</small>
                                </div>
                            </nuxt-link>
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
        this.$store.commit("setViewIntro", true);
    }
}
</script>
