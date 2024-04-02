<template>
    <div class="subpage">
        <div class="subpage-header">

        </div>

        <div class="subpage-container">
            <div class="container w1280">

                <div class="section-title-wrap row-group">
                    <p class="section-subtitle">
                        sign up
                    </p>
                    <h3 class="section-title gr">
                        {{form.type === 'PERSONAL' ? '개인' : '기업'}} 회원가입
                    </h3>
                </div>


                <div class="wide-form">
                    <form action="">
                        <div class="wide-form-wrap row-group">
                            <div class="wide-form-item col-group">
                                <div class="wide-form-title-wrap row-group">
                                    <p class="wide-form-title">
                                        기본정보
                                    </p>
                                </div>
                                <div class="form-wrap row-group">
                                    <div class="form-item col-group">
                                        <p class="item-default">
                                            아이디<span class="orange">*</span>
                                        </p>
                                        <div class="item-user">
                                            <input type="text" class="form-input" placeholder="사용하실 아이디를 작성해주세요." v-model="form.ids">

                                            <error :form="form" name="ids" />
                                        </div>
                                    </div>
                                    <div class="form-item col-group">
                                        <p class="item-default">
                                            비밀번호<span class="orange">*</span>
                                        </p>
                                        <div class="item-user row-group">
                                            <input type="password" class="form-input" placeholder="비밀번호를 입력해주세요." v-model="form.password">
                                            <p class="guide-txt orange">
                                                ※ 비밀번호는 5자 이상 입력해주세요.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="form-item col-group">
                                        <p class="item-default">
                                            비밀번호 확인<span class="orange">*</span>
                                        </p>
                                        <div class="item-user">
                                            <input type="password" class="form-input" placeholder="비밀번호를 다시 입력해주세요." v-model="form.password_confirmation">
                                            <error :form="form" name="password" />
                                            <error :form="form" name="password_confirmation" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <template v-if="form.type === 'PERSONAL'">
                                <div class="wide-form-item col-group">
                                    <div class="wide-form-title-wrap row-group">
                                        <p class="wide-form-title">
                                            고객정보
                                        </p>
                                    </div>
                                    <div class="form-wrap row-group">
                                        <div class="form-item col-group">
                                            <p class="item-default">
                                                고객명<span class="orange">*</span>
                                            </p>
                                            <div class="item-user row-group">
                                                <input type="text" class="form-input" placeholder="담당자 성함을 작성해주세요." v-model="form.name">
                                                <error :form="form" name="name" />
                                            </div>
                                        </div>
                                        <div class="form-item col-group">
                                            <p class="item-default">
                                                연락처<span class="orange">*</span>
                                            </p>
                                            <div class="item-user row-group">
                                                <input type="tel" class="form-input" placeholder="담당자 연락처를 작성해주세요." v-model="form.contact">
                                                <error :form="form" name="contact" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                <div class="wide-form-item col-group">
                                    <div class="wide-form-title-wrap row-group">
                                        <p class="wide-form-title">
                                            회사정보
                                        </p>
                                    </div>
                                    <div class="form-wrap row-group">
                                        <div class="form-item col-group">
                                            <p class="item-default">
                                                대표자 명<span class="orange">*</span>
                                            </p>
                                            <div class="item-user row-group">
                                                <input type="text" class="form-input" placeholder="대표자 성함을 작성해주세요." v-model="form.president">
                                                <error :form="form" name="president" />
                                            </div>
                                        </div>
                                        <div class="form-item col-group">
                                            <p class="item-default">
                                                사업자등록번호<span class="orange">*</span>
                                            </p>
                                            <div class="item-user row-group">
                                                <input type="text" class="form-input" placeholder="사업자등록번호를 작성해주세요." v-model="form.business_number">
                                                <error :form="form" name="business_number" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="wide-form-item col-group">
                                    <div class="wide-form-title-wrap row-group">
                                        <p class="wide-form-title">
                                            고객정보
                                        </p>
                                    </div>
                                    <div class="form-wrap row-group">
                                        <div class="form-item col-group">
                                            <p class="item-default">
                                                고객명/상호<span class="orange">*</span>
                                            </p>
                                            <div class="item-user row-group">
                                                <input type="text" class="form-input" placeholder="담당자 혹은 상호명을 작성해주세요." v-model="form.name">
                                                <error :form="form" name="name" />
                                            </div>
                                        </div>
                                        <div class="form-item col-group">
                                            <p class="item-default">
                                                연락처<span class="orange">*</span>
                                            </p>
                                            <div class="item-user row-group">
                                                <input type="tel" class="form-input" placeholder="담당자 연락처를 작성해주세요." v-model="form.contact">
                                                <error :form="form" name="contact" />
                                            </div>
                                        </div>
                                        <div class="form-item col-group">
                                            <p class="item-default">
                                                부서명
                                            </p>
                                            <div class="item-user row-group">
                                                <input type="text" class="form-input" placeholder="부서명을 작성해주세요." v-model="form.department">

                                                <error :form="form" name="department" />
                                            </div>
                                        </div>
                                        <div class="form-item col-group">
                                            <p class="item-default">
                                                담당자/직급
                                            </p>
                                            <div class="item-user row-group">
                                                <input type="text" class="form-input" placeholder="담당자 또는 직급을 작성해주세요." v-model="form.position">
                                                <error :form="form" name="position" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <div class="wide-form-item col-group">
                                <div class="wide-form-title-wrap row-group">
                                    <p class="wide-form-title">
                                        주소
                                    </p>
                                </div>
                                <div class="form-wrap row-group">
                                    <div class="form-item col-group">
                                        <p class="item-default">
                                            주소<span class="orange">*</span>
                                        </p>

                                        <div class="item-user row-group">
                                            <input-address @change="(data) => form[data.name] = data.value" :form="form" placeholder="주로 사용하실 주소" />

<!--                                            <div class="form-input-wrap">
                                                <input type="text" class="form-input"
                                                       placeholder="주로 사용하실 주소를 작성해주세요.">
                                                <i class="xi-search sticker"></i>
                                            </div>-->

                                            <p class="guide-txt orange">
                                                ※ 검색을 통해 정확한 주소를 ‘번지’까지 입력해주세요 <br>
                                                ※ 기본적으로 이 주소 정보가 출발지 기본 설정으로 적용됩니다.  <br>
                                                　가입 후, 해당 설정은 변경이 가능합니다.
                                            </p>
                                        </div>


                                    </div>

                                    <error :form="form" name="address" />
                                    <error :form="form" name="address_detail" />
                                    <error :form="form" name="address_zipcode" />
<!--                                    <div class="form-item col-group">
                                        <p class="item-default">
                                            상세주소<span class="orange">*</span>
                                        </p>
                                        <div class="item-user row-group">
                                            <div class="form-input-wrap">
                                                <input type="text" class="form-input"
                                                       placeholder="상세주소를 작성해주세요.">
                                                <i class="xi-search sticker"></i>
                                            </div>
                                            <p class="guide-txt orange">
                                                ※ 검색을 통해 정확한 주소를 ‘번지’까지 입력해주세요 <br>
                                                ※ 기본적으로 이 주소 정보가 출발지 기본 설정으로 적용됩니다.  <br>
                                                　가입 후, 해당 설정은 변경이 가능합니다.
                                            </p>
                                        </div>
                                    </div>-->
                                </div>
                            </div>
                        </div>

                        <div class="form-footer-label-wrap row-group">
                            <label for="signup_01" class="checked-item">
                                <input type="checkbox" id="signup_01" v-model="agree1">
                                <span class="check-icon">
                                        <i class="xi-check"></i>
                                    </span>
                                <p class="check-title">
                                    <a href="#">개인정보 취급방침</a>
                                    과
                                    <a href="#">이용약관</a>
                                    을 확인하였고, 이에 동의합니다.
                                </p>
                            </label>
                            <label for="signup_02" class="checked-item">
                                <input type="checkbox" id="signup_02" v-model="agree2">
                                <span class="check-icon">
                                        <i class="xi-check"></i>
                                    </span>
                                <p class="check-title">
                                    회원가입은 개인회원으로 가입됩니다. 기존 신용 고객사이거나 신규 거래를 원하시면 상담 후 계정 전환되어 가능합니다.
                                </p>
                            </label>
                        </div>
                    </form>

                    <div class="form-footer-wrap col-group">
                        <a href="#" class="form-submit-btn" @click.prevent="store">
                            회원가입
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
<style>

</style>
<script>
import Form from "~/utils/Form";

export default {
    middleware: ["admin"],

    data(){
        return {
            step: 1,
            form: new Form(this.$axios, {
                social_id: "", // 소셜토큰
                social_platform: "", // 소셜플랫폼

                type: "",

                ids: "",
                password: "",
                password_confirmation: "",

                name: "",
                contact: "",

                president:"",
                business_number:"",
                department:"",
                position:"",

                address: "",
                address_detail: "",
                address_zipcode: "",

                sido: "",
                gugun: "",
                dong: "",

                lat:"",
                lon: "",
            }),
            socialUser: null,
            verified: false,
            agree1: false,
            agree2: false,
        }
    },

    methods: {
        store(){
            if(!this.isAgreeAll)
                return alert("필수약관에 동의해주세요.");

            this.$store.commit("setLoading", true);

            this.form.post("/api/users")
                    .then(response => {
                        this.$router.push("/users/successCreate");
                    })
        }
    },

    computed: {
        isAgreeAll(){
            return this.agree1 && this.agree2;
        }

    },

    watch: {

    },

    mounted() {
       this.form.type = this.$route.query.type || "PERSONAL";
    }
}
</script>


