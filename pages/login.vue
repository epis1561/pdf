<template>

</template>
<style>
.space-box {min-height:100vh;}
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
