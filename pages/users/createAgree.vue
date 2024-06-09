<template>
    <section>
        <div class="container">
            <div class="sub-box">
                <div class="sub-right-box">
                    <div class="inner-box lg">
                        <div class="title-box">
                            <h2>회원가입</h2>
                            <p class="mt13 mt-lg-10 col-12">ESGi를 방문해주신 것을 환영합니다.</p>
                        </div>
                        <div class="step-box mt48 mt-lg-24">
                            <ul>
                                <li class="active">
                                    <em>Step 1</em>
                                    <div class="bar"></div>
                                    <p>약관동의</p>
                                </li>
                                <li>
                                    <em>Step 2</em>
                                    <div class="bar"></div>
                                    <p>정보입력</p>
                                </li>
                                <li>
                                    <em>Step 3</em>
                                    <div class="bar"></div>
                                    <p>가입완료</p>
                                </li>
                            </ul>
                        </div>
                        <div class="agree-box mt48">
                            <div class="agree-head">
                                <h2>ESGi 홈페이지 이용약관</h2>
                            </div>
                            <div class="agree-body">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32.
                                </p>
                                <p>
                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                </p>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </p>
                            </div>
                            <div class="agree-foot">
                                <div class="check-basic-box">
                                    <input type="checkbox" name="check" id="check"  @click="agree1 = !agree1">
                                    <label for="check" ><p>[필수] 수집 · 이용약관에 동의합니다.</p></label>
                                </div>
                            </div>
                        </div>
                        <div class="agree-box mt48">
                            <div class="agree-head">
                                <h2>기업(신용)정보 수집 · 이용 · 조회 및 3차 제공동의서</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                            <div class="agree-body">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32.
                                </p>
                                <p>
                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                </p>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </p>
                            </div>
                            <div class="agree-foot">
                                <div class="check-basic-box">
                                    <input type="checkbox" name="check" id="check" @click="agree2 = !agree2">
                                    <label for="check"><p>[필수] 제공 • 조회에 동의합니다.</p></label>
                                </div>
                            </div>
                        </div>
                        <div class="agree-total-box">
                            <div class="check-basic-box">
                                <input type="checkbox" name="check" id="check" @click="isChecked">
                                <label for="check"><p>전체 이용 동의</p></label>
                            </div>
                        </div>
                        <div class="button-box mt40">
                            <div class="w400 flex-lg-1">
                                <a href="#" @click.prevent="alert" class="btn btn-skyblue bdr4 lg"> 다음</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style>

</style>
<script>
import Form from "~/utils/Form";

export default {


    data(){
        return {
            step: 1,
            form: new Form(this.$axios, {

            }),
            socialUser: null,
            verified: false,
            agree1: false,
            agree2: false,
        }
    },

    methods: {
         isChecked(){
             this.agree1 = !this.agree1;
             this.agree2 = !this.agree2;
             $('input[type="checkbox"]').prop('checked', this.agree1 && this.agree2);
         },

        alert() {
            if (this.agree1 && this.agree2) {
                this.$router.push("/users/create?category=" + this.$route.query.category);
            } else {
                alert("필수약관에 동의해주세요.");
            }
        }
    },

    computed: {


    },

    watch: {

    },

    mounted() {
        this.form.type = this.$route.query.type || "PERSONAL";
    }
}
</script>