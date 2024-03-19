<template>
    <div class="subpage">
        <div class="subpage-header">
            OK로지웰은 전국 어디든 고객맞춤 서비스를 제공합니다.
        </div>

        <div class="subpage-container">
            <div class="container w1280">

                <div class="subpage-wrap mypage-sub mypage-account">

                    <div class="subpage-title-wrap col-group">
                        <h2 class="subpage-title gr">
                            회원정보수정
                        </h2>
                    </div>
                    <div class="subpage-tab-wrap">
                        <div class="subpage-tab-list col-group">
                            <nuxt-link to="/users/edit" class="subpage-tab active">
                                회원정보수정
                            </nuxt-link>
<!--                            <a href="mypage_pw_change.html" class="subpage-tab">
                                비밀번호변경
                            </a>-->
                        </div>
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
                                                <!-- 변경 안되는 input은 form-input-default 클래스 추가와 disabled 활성화 -->
                                                <input type="text" class="form-input form-input-default" disabled :value="form.ids">
                                            </div>
                                        </div>

                                        <div class="form-item col-group" v-if="!activePassword">
                                            <p class="item-default">
                                                비밀번호<span class="orange">*</span>
                                            </p>
                                            <div class="item-user">
                                                <button type="button" @click="activePassword = true" class="m-btn type01">비밀번호 변경</button>
                                                <!-- 변경 안되는 input은 form-input-default 클래스 추가와 disabled 활성화 -->
                                            </div>
                                        </div>
                                        <template v-else>
                                            <div class="form-item col-group">
                                                <p class="item-default">
                                                    비밀번호<span class="orange">*</span>
                                                </p>
                                                <div class="item-user">
                                                    <input type="password" class="form-input"  :value="form.password">
                                                </div>
                                            </div>
                                            <div class="form-item col-group">
                                                <p class="item-default">
                                                    비밀번호 확인<span class="orange">*</span>
                                                </p>
                                                <div class="item-user">
                                                    <input type="password" class="form-input"  :value="form.password_confirmation">

                                                    <error :form="form" name="password" />
                                                    <error :form="form" name="password_confirmation" />
                                                </div>
                                            </div>
                                        </template>

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
                                                <input type="text" class="form-input" placeholder="상차지 담당자 혹은 상호명을 작성해주세요." v-model="form.name">

                                                <error :form="form" name="name" />
                                            </div>
                                        </div>
                                        <div class="form-item col-group">
                                            <p class="item-default">
                                                연락처<span class="orange">*</span>
                                            </p>
                                            <div class="item-user row-group">
                                                <input type="tel" class="form-input" placeholder="상차지 담당자 연락처를 작성해주세요." v-model="form.contact">

                                                <error :form="form" name="contact" />
                                            </div>
                                        </div>
                                        <div class="form-item col-group">
                                            <p class="item-default">
                                                부서명
                                            </p>
                                            <div class="item-user">
                                                <input type="text" class="form-input" placeholder="부서명을 작성해주세요." v-model="form.department">

                                                <error :form="form" name="department" />
                                            </div>
                                        </div>
                                        <div class="form-item col-group">
                                            <p class="item-default">
                                                담당자/직급
                                            </p>
                                            <div class="item-user">
                                                <input type="text" class="form-input" placeholder="담당자/직급을 작성해주세요." v-model="form.position">

                                                <error :form="form" name="position" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

                                                <p class="guide-txt orange">
                                                    ※ 검색을 통해 정확한 주소를 ‘번지’까지 입력해주세요 <br>
                                                    ※ 기본적으로 이 주소 정보가 출발지 기본 설정으로 적용됩니다.  <br>
                                                    　가입 후, 해당 설정은 변경이 가능합니다.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>

                        <div class="form-footer-wrap col-group">
                            <button type="submit" class="form-submit-btn" @click="update">
                                회원정보수정
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>

</template>

<script>
import Form from "../../utils/Form";
export default {
    middleware: ["user"],

    data(){
        return {
            form : new Form(this.$axios, {
                ids: "",
                password: "",
                password_confirmation: "",

                name: "",
                contact: "",
                department: "",
                position: "",

                address: "",
                address_detail: "",
                address_zipcode: "",

                sido: "",
                gugun: "",
                dong: "",

                lat:"",
                lon: "",
            }),

            activePassword: false,
        }
    },
    methods: {
        update(){
            this.$store.commit("setLoading", true);

            this.form.patch("/api/users")
                    .then(response => {
                        this.$store.commit("setPop", {});

                        this.$auth.fetchUser();
                    })
        },
    },

    computed: {
        user(){
            return this.$auth.user.data;
        }
    },

    mounted() {
        this.form.set({
            ...this.form.data(),
            ...this.$auth.user.data,
            password: "",
        })
    }
}
</script>
