<template>
    <div class="area-login">
        <div class="side">
            <form class="side-inner" @submit.prevent="login">
                <img src="/asset/images/logo.png" alt="" class="logo">

                <h3 class="title">
                    반갑습니다.
                    <br/><span class="point">ESGi 관리자 로그인</span> 해주세요.
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
        <div class="base"></div>
    </div>
</template>
<style>

</style>
<script>
import Form from "@/utils/Form";
export default {
    layout: "empty",
    data(){
        return {
            form : new Form(this.$axios, {
                ids:"",
                password:"",
            })
        }
    },
    methods: {
        login(){
            this.$auth.loginWith('laravelSanctum', {
                data: this.form.data(),
            }).then(response => {
                if(this.$auth.user.data.type === "AGENCY_ADMIN")
                    return this.$router.push("/admin/investgator/campaigns");

                return this.$router.push("/admin/companies");
            }).catch(error => {
                this.form.onFail(error.response.data);
            });

        }
    }
}
</script>
