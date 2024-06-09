<template>
    <section>
        <div class="container">
            <div class="sub-box">
                <div class="sub-right-box">
                    <div class="inner-box lg">
                        <div class="title-box">
                            <h2 class="flex-tc tc col-12">회원가입</h2>
                            <p class="mt13 mt-lg-10 col-12 tc">ESGi를 방문해주신 것을 환영합니다.</p>
                        </div>
                        <div class="step-box mt48 mt-lg-24">
                            <ul>
                                <li class="active">
                                    <em>Step 1</em>
                                    <div class="bar"></div>
                                    <p>약관동의</p>
                                </li>
                                <li class="active">
                                    <em>Step 2</em>
                                    <div class="bar"></div>
                                    <p>정보입력</p>
                                </li>
                                <li class="active">
                                    <em>Step 3</em>
                                    <div class="bar"></div>
                                    <p>가입완료</p>
                                </li>
                            </ul>
                        </div>
                        <div class="result-box">
                            <p class="tc">로그인 후 서비스를 이용해주세요.</p>
                        </div>
                        <div class="button-box mt40">
                            <div class="w400 flex-lg-1">
                                <nuxt-link to="/login" class="btn btn-skyblue bdr4 lg">로그인</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Form from "../../utils/Form";
export default {
    data(){
        return {
            form : new Form(this.$axios, {

            })
        }
    },
    methods: {

    },

    computed: {

    }
}
</script>
