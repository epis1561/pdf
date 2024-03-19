<template>
    <div class="bodies" style="padding:40px;">
        <p class="body" v-for="error in errors">{{error[0]}}</p>
    </div>
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
