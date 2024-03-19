<template>
    <div class="subpage">
        <div class="subpage-header">
            OK로지웰은 전국 어디든 고객맞춤 서비스를 제공합니다.
        </div>

        <div class="subpage-container">
            <div class="account find-account">

                <div class="section-title-wrap center row-group">
                    <p class="section-subtitle">
                        LOGIN
                    </p>
                    <h3 class="section-title gr">
                        비밀번호 찾기
                    </h3>
                </div>

                <form action="">
                    <div class="account-form form-wrap row-group">
                        <div class="form-item col-group">
                            <p class="item-default">
                                아이디
                            </p>
                            <div class="item-user row-group">
                                <input type="text" class="form-input" placeholder="가입 시 작성하신 아이디를 입력해주세요." v-model="form.ids">
                                <error :form="form" name="ids" />
                            </div>
                        </div>
                        <div class="form-item col-group">
                            <p class="item-default">
                                고객명/상호
                            </p>
                            <div class="item-user row-group">
                                <input type="text" class="form-input" placeholder="가입 시 작성하신 고객명/상호를 입력해주세요." v-model="form.name">
                                <error :form="form" name="name" />
                            </div>
                        </div>
                        <div class="form-item col-group">
                            <p class="item-default">
                                연락처
                            </p>
                            <div class="item-user row-group">
                                <input type="text" class="form-input" placeholder="가입 시 작성하신 연락처를 입력해주세요." v-model="form.contact">
                                <error :form="form" name="contact" />
                            </div>
                        </div>
                    </div>
                </form>

                <div class="form-footer-wrap col-group">
                    <a href="#" class="form-submit-btn" @click.prevent="store">
                        비밀번호 초기화
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Form from "../../utils/Form";
export default {
    data(){
        return {
            form : new Form(this.$axios, {
                ids: "",
                name: "",
                contact: "",
            }),
            verified: false,
        }
    },
    methods: {
        store(){
            this.$store.commit("setLoading", true);

            this.form.post("/api/findPasswords")
                .then(response => {
                    /*this.$router.push("/users/resetPassword?token=" + response.data.token);
*/
                    this.$router.push("/users/successFindPassword");
                });
        },
    },

    computed: {

    },

    mounted() {

    }
}
</script>
