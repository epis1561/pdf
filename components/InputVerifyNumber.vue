<template>
    <div class="m-input-phone" @keyup="() => {form.errors.clear()}" style="width:100%;">
        <div v-if="mode === 'beforeSend'">
            <div class="m-input-wrap m-input-withBtn">
                <div class="m-input-text">
                    <input type="text" placeholder="휴대폰 번호 (- 없이)" v-model="form.contact" @input="clearLetter">
                </div>
                <button type="button" class="m-input-btn" @click.prevent="sendVerify">인증번호발송</button>
            </div>

            <error :form="form" name="contact" />
        </div>


        <div v-if="mode === 'afterSend'">
            <div class="m-input-wrap m-input-withBtn">
                <div class="m-input-text">
                    <input type="text" placeholder="인증번호" v-model="form.number">
                </div>
                <button type="button" class="m-input-btn" @click.prevent="verify">인증하기</button>
            </div>

            <p class="comment primary" style="margin-top:8px; font-size:14px; color:#006db5;">* 인증번호를 입력 후 "인증하기"를 눌러주세요.</p>

            <error :form="form" name="number" />
        </div>


        <div v-if="mode === 'verified'">
            <div class="m-input-wrap m-input-withBtn">
                <div class="m-input-text">
                    <input type="text" placeholder="휴대폰 번호" v-model="form.contact" disabled>
                </div>
                <button type="button" class="m-input-btn" @click.prevent="() => {mode = 'beforeSend'}">변경하기</button>
            </div>

            <error :form="form" name="contact" />
        </div>

    </div>

</template>
<style>
.m-input-phone .m-input-address {
    flex:auto;
}
.m-input-phone input {
    width:100%; padding:0 24px;
    height:48px;
    flex:auto;
    font-size:16px;
}
.m-input-phone .m-input-text {

}
.m-input-phone .m-input-wrap {
    position: relative;
}
.m-input-phone .m-input-text input {
    width: 100%;
    border: unset;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 10px;
    border-radius: 0px;
}

.m-input-phone .m-input-text input::placeholder {
    font-size:18px; font-weight:600; font-family: Pretendard;
    color:#b8b8b8;
}
.m-input-phone .m-input-withBtn {
    display:flex;
}
.m-input-phone .m-input-withBtn .m-input-text {
    flex:auto;
}
.m-input-phone .m-input-withBtn .m-input-btn {
    font-size: 18px;
    font-weight: 600;
    color: var(--windows-blue);
    position: absolute;
    top: 50%;
    right: 0;
    transform:translateY(-50%);
}
</style>
<script>
import Form from '../utils/Form';
export default {
    props: {
        url: {
            default: "/api/verifyNumbers"
        },
        isRegister: {
            default: 0,
        }
    },

    data(){
        return {
            form: new Form(this.$axios, {
                number: "",
                contact: "",
                isRegister: this.isRegister
            }),

            mode: "beforeSend",
        }
    },

    methods: {
        sendVerify(){
            this.$store.commit("setLoading", true);

            this.form.post("/api/verifyNumbers")
                .then(response => {
                    this.mode = "afterSend";

                    /*this.$store.commit("setPop", {
                        title: "발송완료",
                        description: `인증번호가 발송되었습니다!`
                    });*/

                    this.$store.commit("setPop", {
                        title: "발송완료",
                        description: "인증번호가 발송되었습니다."
                    });
                });
        },

        verify(){
            this.form.patch("/api/verifyNumbers")
                .then(response => {
                    this.mode = "verified";

                    this.$emit("verified", this.form.contact);

                    this.$store.commit("setPop", {
                        title: "인증번호",
                        description: "인증이 완료되었습니다!"
                    });
                });
        },

        clearLetter(){
            this.form.contact = this.form.contact.replace("-", "");
        }
    }
}
</script>
