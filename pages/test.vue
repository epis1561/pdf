<template>
    <li>
        <div class="part-left">
            <div class="part-left-title">
                <h2>환경</h2>
                <small>기준치 {{ report.survey.campaign.relative_ratio_e }}%</small>
            </div>
            <div class="part-left-info">
                <dl>
                    <dd v-for="category in report.domains['ENVIRONMENT'].categories" :key="category.id">
                        <b>{{ category.title }}</b>
                        <p>{{ category.result }}</p>
                    </dd>
                </dl>
            </div>
        </div>
        <div class="part-right">
            <div class="flex">
                <div class="border-box flex-1 mr16 px16 py16">
                    <div class="graph-box">
                        <div class="graph-body">
                            <div class="graph-02 green">
                                <div class="graph-title">
                                    <h2><b>E</b>환경</h2>
                                </div>
                                <div class="graph-bar">
                                    <div class="bar-unit">
                                        <p>E-1</p>
                                        <p>E-2</p>
                                        <p>E-3</p>
                                        <p>E-4</p>
                                        <p>E-5</p>
                                    </div>
                                    <div class="bar-inner">
                                        <div class="inner" :style="`width:${levelWidth(report.survey.level_e)}%;`"><em>{{report.survey.level_e}}</em></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-box mr16 px16 py16">
                    <div class="graph-box">
                        <div class="graph-body">
                            <div class="graph-03 graph-03-02-01">
                                <div class="inner">
                                    <strong>{{ report.survey.score_e }}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gray-box px16 py16">
                    <div class="graph-box">
                        <div class="graph-body">
                            <div class="graph-03 graph-03-02-05">
                                <div class="inner">
                                    <strong>{{ report.survey.average_e }}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="print-text-box mt12">
                <p v-text="report.survey.comment_e"></p>
            </div>
        </div>
    </li>
</template>

<script>
import Form from "@/utils/Form";

export default {
    data() {
        return {
            form: new Form(this.$axios, {
                station_uuid: "0837a643-34dc-4f80-ae44-3c8198734941", // 스테이션 고유번호 (0837a643-34dc-4f80-ae44-3c8198734941, 4adde076-fd2d-46fc-8919-5ec0573e8739)
                battery_number: 1, // 배터리 번호 (1 ~ 8)
                empty: 0, // 비어있는지 여부 (0, 1)
                ratio_charge: 100,
                description: "", // 전달사항

                code: "JHDQPFS4", // 코드충전 일련번호
                state: "SUCCESS", // 충전결과 (SUCCESS, FAIL)
                alert: 0, // 충전결과 문제있음여부
                memo: "", // 충전결과 추가전달사항
            }),

            charge: null,

            errors: [],
        }
    },

    methods: {
        storeBatteryLogs(){
            this.form.post("https://api-esg.honest-family.com/api/batteryLogs")
                    .then(response => {
                        alert(response.message);
                    }).catch(error => {
                        alert(error.message);
                        this.errors = error.errors;
            });
        },
        tryCharge(){
            this.form.code = "LTF7WNVW";

            this.form.post("https://api-esg.honest-family.com/api/charges/number")
                    .then(response => {
                        alert(response.message);

                        console.log(response);

                        this.charge = response.data;
                    }).catch(error => {
                alert(error.message);
                this.errors = error.errors;
            });
        },
        updateCharge(){
            let id = this.charge ? this.charge.id : 1;

            this.form.patch("https://api-esg.honest-family.com/api/charges/" + id)
                    .then(response => {
                        alert(response.message);
                    }).catch(error => {
                alert(error.message);
                this.errors = error.errors;
            });
        },
    },

    computed: {

    },

    mounted() {
        // this.storeBatteryLogs();
        this.tryCharge();
        // this.updateCharge();
    }

}
</script>
