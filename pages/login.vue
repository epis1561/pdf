<template>
    <section>
        <div class="area-user-login" style="min-height:calc(100vh - 300px - 190px);">
            <div class="side">
                <form class="side-inner" @submit.prevent="login">
                    <h3 class="title">
                        <br/><span class="point">임시 로그인창</span>
                    </h3>

                    <div class="inputs">
                        <div class="input-text">
                            <input type="text" placeholder="아이디를 입력해주세요." v-model="form.ids">
                            <error :form="form" name="ids" />
                        </div>
                        <div class="input-text">
                            <input type="password" placeholder="비밀번호를 입력해주세요." v-model="form.password">
                            <error :form="form" name="password" />
                        </div>
                    </div>

                    <button class="btn" type="submit">Login</button>
                </form>
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
