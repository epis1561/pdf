<template>
    <div class="mypage-delivery-item col-group" @click="move">
        <div class="mypage-delivery-detail-wrap col-group">
            <div class="mypage-delivery-detail-item row-group">
                <p class="title">
                    {{ item.s_start }}
                </p>
                <p class="txt">
                    {{ item.start_location }}
                </p>
                <p class="date">
                    {{ item.format_pickup_date }}
                </p>
            </div>

            <i class="icon xi-arrow-right"></i>

            <div class="mypage-delivery-detail-item row-group">
                <p class="title">
                    {{ item.s_dest }}
                </p>
                <p class="txt">
                    {{ item.dest_location }}
                </p>
                <p class="date">
                    {{ item.format_off_date }}
                </p>
            </div>
        </div>

        <div class="mypage-delivery-detail-group row-group">
            <div :class="`state ${item.state}`">{{item.format_state}}</div>
            <p class="title">
                신청일 : {{ item.created_at }}
            </p>
            <div class="txt-group row-group">
                <div class="txt-list col-group">
                    <p class="txt">{{item.car.format_category}} 운송</p>
                    <p class="txt">{{ item.format_doc }}</p>
                    <p class="txt">{{item.format_kind_etc}} {{ item.car.title }}</p>
                </div>
                <div class="txt-list col-group">
                    <p class="txt">{{ item.distance ? item.distance.toLocaleString() : "-" }} km</p>
                    <p class="txt">{{ item.price ? parseInt(item.price).toLocaleString() : "-" }} 원 (결제:{{ item.need_calculate == 1 ? '후불' : '선불' }})</p>
                </div>
            </div>
            <p class="sub-title" v-if="item.format_complete_time">
                배송 완료 일 : {{ item.format_complete_time }}
            </p>
        </div>

        <!-- 운행 상태에서 추가 -->
        <div class="mypage-delivery-driver" v-if="item.rider_name">
            <div class="driver-detail-group col-group">
                <p class="driver-detail-item">
                    배송번호: {{ item.serial_number }}
                </p>
                <div class="driver-detail-list col-group">
                    <p class="driver-detail-item">
                        기사정보: {{ item.rider_name }}
                    </p>
                    <p class="driver-detail-item">
                        {{ item.rider_tel_number }}
                    </p>
                    <p class="driver-detail-item">
                        {{ item.car_no }}
                    </p>
                </div>
            </div>
        </div>
        <!-- //운행 상태에서 추가 -->
    </div>
</template>
<script>
import Form from "../utils/Form";
export default {
    props: {
        "item": {
            default:null
        },
        needRoute: {
            default: false,
        }
    },

    data(){
        return {

        }
    },

    methods: {

        move(){
            if(this.needRoute){
                this.$router.push(`/deliveries/${this.item.id}`)
            }
        }
    },

    computed: {

    },

    watch: {

    },

    mounted() {

    }
}
</script>
