
<template>
    <div class="m-pop type01 m-pop-verify">
        <div class="m-pop-inner">
            <div class="container">
                <div class="sub-box">
                    <div class="sub-right-box">
                        <div class="mypage-right">
                            <div class="title-box">
                                <h2>로그인 인증</h2>
                            </div>
                            <div class="board-write-box">
                                <ul>
                                    <li>
                                        <div class="write-content">
                                            <div class="content-group">
                                                <div class="group-title">
                                                    <h3>아이디</h3>
                                                </div>
                                                <div class="group-content">
                                                    <div class="input-box">
                                                        <input type="text" placeholder="아이디를 입력해주세요." v-model="form.ids">
                                                        <error :form="form" name="ids" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="content-group">
                                                <div class="group-title">
                                                    <h3>비밀번호</h3>
                                                </div>
                                                <div class="group-content">
                                                    <div class="input-box">
                                                        <input type="password" placeholder="비밀번호를 입력해주세요." v-model="form.password">
                                                        <error :form="form" name="password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="content-group" v-if="mode !== 'beforeSend'">
                                                <div class="group-title">
                                                    <h3>인증번호</h3>
                                                </div>
                                                <div class="group-content">
                                                    <div class="input-box">
                                                        <input type="text" placeholder="인증번호 입력해주세요." v-model="form.code">

                                                        <error :form="form" name="code" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="button-box mt40">
                                <div class="w200 flex-lg-1 mr24 mr-lg-10" style="display: flex; justify-content: center;">
                                    <a href="" class="btn btn-lightgray bdr4 lg" @click.prevent="close">취소</a>
                                </div>
                                <div class="w200 flex-lg-1 mr24 mr-lg-10" style="display: flex; justify-content: center;">
                                    <a href="" class="btn btn-blue bdr4 lg" @click.prevent="store" v-if="mode === 'beforeSend'">인증번호 발송</a>
                                    <a href="" class="btn btn-blue bdr4 lg" @click.prevent="update" v-else>인증하기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
<style>
.m-pop-verify .m-pop-inner {
    padding:60px 40px;
    background-color:#fff;
}
.m-pop-verify .content-group {
    margin-top:20px;
}
.m-pop-verify .group-title h3 {
    margin-bottom:8px;
    font-size:18px; font-weight:bold;
}
.m-pop-verify .button-box .btn {
    width: 100%;
}
</style>
<script>
import Form from "../utils/Form";
export default {
    data(){
        return {

            mode: "beforeSend",

            form: new Form(this.$axios, {
                ids: "",
                password: "",
                code: "",
            }),
        }
    },

    methods: {
        close() {
            this.$store.commit("setActivePopVerifyIp", false);
        },

        store(){
            this.$store.commit("setLoading", true);

            this.form.post("/api/verifyIps")
                    .then(response => {
                        this.$store.commit("setPop", {
                            description: response.message
                        });

                        this.mode = "afterSend";
                    })
        },

        update(){
            this.$store.commit("setLoading", true);

            this.form.patch("/api/verifyIps")
                .then(response => {
                    this.$store.commit("setPop", {
                        description: "성공적으로 인증되었습니다. 로그인을 진행해주세요."
                    });

                    this.close();
                })
        }
    },

    computed: {

    },

    watch: {

    },

    mounted() {

    }
}
</script>
