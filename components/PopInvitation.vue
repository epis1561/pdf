
<template>
    <div class="m-pop type01 m-pop-invitation">
        <section class="m-pop-inner">
            <div class="container">
                <div class="sub-box">
                    <div class="sub-right-box">
                        <div class="mypage-right">
                            <div class="title-box">
                                <h2>직원초대</h2>
                            </div>
                            <div class="board-write-box">
                                <ul>
                                    <li>
                                        <div class="write-content">
                                            <div class="content-group">
                                                <div class="group-title">
                                                    <h3>직원 아이디</h3>
                                                </div>
                                                <div class="group-content">
                                                    <div class="input-box">
                                                        <input type="text" placeholder="초대하실 직원의 아이디를 입력해주세요." v-model="form.ids">
                                                        <a href="#" class="btn gray" @click="store">초대하기</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="button-box mt40">
                                <div class="w400 flex-lg-1 mr24 mr-lg-10">
                                    <a href="" class="btn btn-lightgray bdr4 lg" @click.prevent="close">취소</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </div>
</template>
<script>
import Form from "../utils/Form";
export default {
    data(){
        return {

            form: new Form(this.$axios, {
                ids: "",
            }),
        }
    },

    methods: {
        close() {
            this.$emit('close');
        },

        store(){
            this.$store.commit("setLoading", true);

            this.form.post("/api/invitations")
                    .then(response => {
                        this.$store.commit("setPop", {
                            description: "초대가 완료되었습니다."
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
