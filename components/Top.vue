<template>
    <div class="report-nav col-group">
        <div class="my-child col-group">
            <div class="img-box">
                <img src="/images/boy-01.png" alt="" v-if="kid.gender == 3">
                <img src="/images/girl-01.png" alt="" v-else>
            </div>
            <div class="txt-box row-group">
                <div class="name">
                    {{ kid.name }}
                </div>
                <div class="age-wrap col-group">
                    <p class="birth">
                        {{ kid.birth }}
                    </p>
                    <p class="age">
                        만 <strong>{{kid.age}}</strong>세
                    </p>
                </div>
            </div>
        </div>

        <ul class="report-gnb col-group">
            <li>
                <nuxt-link :to="`/reports?kid_id=${this.form.kid_id}`" :class="`report-gnb-item ${$route.path.includes('/reports') ? 'active' : ''}`">
                    <div class="img-box">
                        <img src="/images/report-icon-01.svg" alt="">
                    </div>
                    <p class="title">
                        교육 리포트
                    </p>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link :to="`/mentalReports?kid_id=${this.form.kid_id}`" :class="`report-gnb-item ${$route.path.includes('/mentalReports') ? 'active' : ''}`">
                    <div class="img-box">
                        <img src="/images/report-icon-02.svg" alt="">
                    </div>
                    <p class="title">
                        심리 리포트
                    </p>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link :to="`/familyReports?kid_id=${this.form.kid_id}`" :class="`report-gnb-item ${$route.path.includes('/familyReports') ? 'active' : ''}`">
                    <div class="img-box">
                        <img src="/images/report-icon-03.svg" alt="">
                    </div>
                    <p class="title">
                        우리가족 리포트
                    </p>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link :to="`/compareReports?kid_id=${this.form.kid_id}`" :class="`report-gnb-item ${$route.path.includes('/compareReports') ? 'active' : ''}`">
                    <div class="img-box">
                        <img src="/images/report-icon-04.svg" alt="">
                    </div>
                    <p class="title">
                        비교분석 리포트
                    </p>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>
<script>
import Form from "@/utils/Form";

export default  {
    data(){
        return {
            form: new Form(this.$axios, {
                kid_id: this.$route.query.kid_id,
            }),

            kid: {},

        }
    },

    methods: {
        getKid(){
            this.$axios.get("/api/kids/" + this.$route.query.kid_id)
                .then(response => {
                    this.kid = response.data.data;
                });
        }
    },
    mounted() {
        this.getKid();
    }
}
</script>
