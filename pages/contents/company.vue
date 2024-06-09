<template>
    <section>
        <div class="company-box">
            <div class="company-intro">
                <div class="container">
                    <h2>ESGI for Sustainability</h2>
                </div>
            </div>
            <div class="company-text">
                <div class="container">
                    <p>
                        함께 만드는 가치, 지속가능경영의 시작!<br>
                        우리의 솔루션으로 현실이 됩니다.
                    </p>
                    <p>
                        <b>선도하는 지속가능한 경영의 파트너, ESGi(주)입니다.</b>
                        기업의 ESG 지원부터 ESG 컨설팅, ISO 인증 컨설팅, 그리고 공정거래 CP 컨설팅에 이르기까지,<br>
                        기업의 사회적 책임과 지속 가능성을 실현하기 위한 전문 지식과 실질적인 해결책을 제공합니다.
                    </p>
                </div>
            </div>
            <div class="company-image">
                <div class="container">
                    <img src="/asset/images/img_user_company_intro.png">
                    <p>
                        <b>든든한 지원자 ESGi(주)입니다.</b>
                        국내·외 공급망 실사의 법제화로 급변하는 경영 환경 속에서 귀사의 가치를 높이고<br>
                        지속 가능한 성장을 도모하기 위한 신뢰할 수 있는 조언자로서,<br>
                        ESGi(주)는 변화하는 비즈니스 환경에서 귀사가 한 걸음 더 나아갈 수 있도록<br>
                        든든한 지원을 약속 드립니다.
                    </p>
                </div>
            </div>
            <div class="company-bottom">
                <div class="container">
                    <h2>ESGi(주) 임직원 일동</h2>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Form from "@/utils/Form";

export default {
    components: {},

    data() {
        return {
            form: new Form(this.$axios, {
                page: 1,

            }),
        }
    },

    methods: {

    },

    computed: {},

    mounted() {

    }
}
</script>
