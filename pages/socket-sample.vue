<template>

</template>

<script>
import Pusher from 'pusher-js';
export default {
    data() {
        return {

        }
    },

    methods: {

    },

    computed: {

    },

    mounted() {
        let self = this;

        Pusher.logToConsole = true;

        let key = "6e9c3271128a05a0e9cf";

        var pusher = new Pusher(key, {
            cluster: 'ap3'
        });

        let uuid = "0837a643-34dc-4f80-ae44-3c8198734941"; // 해당 스테이션 UUID가 들어가야함.

        var channel = pusher.subscribe('stations.' + uuid);

        channel.bind('App\\Events\\ChargeCreated', function(data) {
            // Charge (충전시도) 데이터 넘어올 시 할 일 진행
            console.log(data);
            alert("생성됨");
        });
    }
}
</script>
