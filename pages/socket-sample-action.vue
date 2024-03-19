<template>

</template>

<script>
import Pusher from 'pusher-js';
export default {
    data() {
        return {
            station : null,
        }
    },

    methods: {

    },

    computed: {

    },

    mounted() {
        Pusher.logToConsole = true;

        let key = "6e9c3271128a05a0e9cf";

        var pusher = new Pusher(key, {
            cluster: 'ap3'
        });

        let uuid = ""; // 해당 스테이션 UUID가 들어가야함.

        var channel = pusher.subscribe('actions.' + uuid);

        channel.bind('App\\Events\\ActionCreated', function(data) {
            /* 데이터에 해야할 행동이 넘어옴
            OPEN_DORE 스테이션 문 열기
            CLOSE_DORE 스테이션 문 닫기
            CHARGE_ON 충전 시작
            CHARGE_OFF 충전 종료
            ADC_ON ADC 시작
            ADC_OFF ADC 종료
            */
            console.log(data);
            alert("생성됨");
        });

    }
}
</script>
