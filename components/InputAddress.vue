<template>
    <div class="list-content">
        <div class="modal-address" id="modal-address">
            <button class="btn-close" @click="close"><i class="xi-close"></i></button>
            <div id="popup-wrap">
                <!-- 우편번호 API가 띄워질 공간 -->
            </div>
        </div>

        <div class="list-content-inner flex flex-vc">
            <div class="input-box no-border flex-1">
                <input type="text" class="f18" :placeholder="placeholder" v-model="form[address]" :name="address" @change="change" disabled>
            </div>

            <button type="button" class="link" id="find_address">
                주소찾기
            </button>
        </div>

        <div class="input-box no-border flex-1" style="margin-top:12px;">
            <input type="text" class="f18" v-if="!form[address]" placeholder="상세주소를 입력해주세요" v-model="form[address_detail]" :name="address_detail" id="address_detail" @change="change" disabled>
            <input type="text" class="f18" v-else placeholder="상세주소를 입력해주세요" v-model="form[address_detail]" :name="address_detail" id="address_detail" @change="change">
        </div>
    </div>
</template>
<style>


.modal-address {
    position: fixed;
    z-index: 20000;
    left: 50%; top:50%;
    transform:translate(-50%, -50%);
    background-color: white;
    border:1px solid #ccc;
}
.popup-wrap {
    border: 1px solid #333;
}



.modal-address .btn-close {
    display: none;
    width:40px; height:40px;
    position:absolute; top:-60px; right:-60px;
    background-color:#fff; border:1px solid #e1e1e1;
}

@media screen and (max-width:1024px) {
    .m-input-address #popup-wrap > div {

    }

    .m-input-address .modal-address .btn-close {

    }
    .m-input-address .m-input-text input {

    }
}
</style>
<script>
export default {
    props: {
        form: {
            default : {
                errors: {}
            }
        },
        address: {
            default: "address"
        },
        address_detail: {
            default: "address_detail"
        },
        address_zipcode: {
            default: "address_zipcode"
        },
        sido: {
            default: "sido"
        },
        gugun: {
            default: "gugun"
        },
        dong: {
            default: "dong"
        },
        lon: {
            default: "lon"
        },
        lat: {
            default: "lat"
        },
        activated: false,

        placeholder: {
            default: "주소찾기를 눌러주세요"
        },
    },
    data(){
        return {
            active: false,
        }
    },

    methods: {
        change(e){
            e.preventDefault();

            this.emit(e.target.name, e.target.value);
        },

        emit(name, value){
            this.$emit("change", {
                name: name,
                value: value
            });
        },

        close(){
            document.querySelector("#popup-wrap").style.display = "none";
            document.querySelector(".btn-close").style.display = "none";
        }
    },

    mounted() {

        kakao.maps.load();

        let self = this;

        const postcodeWrap = document.querySelector("#popup-wrap");
        const btnClose = document.querySelector(".btn-close");

        document.getElementById("find_address").addEventListener("click", function(){ //주소입력칸을 클릭하면
            postcodeWrap.style.display = "block";
            btnClose.style.display = "block";

            //카카오 지도 발생
            new daum.Postcode({
                oncomplete: function(data) { //선택시 입력값 세팅
                    console.log(data);
                    // 위도, 경도 찾기
                    var geocoder = new kakao.maps.services.Geocoder();

                    geocoder.addressSearch(data.address, function(result, status) {

                        // 정상적으로 검색이 완료됐으면
                        if (status === kakao.maps.services.Status.OK) {
                            self.emit(self.lon, result[0].address.x);
                            self.emit(self.lat, result[0].address.y);
                        }
                    });

                    // 주소 넣기
                    document.getElementById("address_detail").focus();

                    // self.emit(self.address, data.address);
                    self.emit(self.address, data.address);
                    self.emit(self.address_zipcode, data.zonecode);

                    self.emit(self.sido, data.sido);
                    self.emit(self.gugun, data.sigungu);
                    self.emit(self.dong, data.bname);

                    postcodeWrap.style.display = "none";
                    btnClose.style.display = "none";
                },
                onclose:function(state) {
                    if(state === "COMPLETE_CLOSE") {
                        // 콜백함수를 실행하여 슬라이드 업 기능이 실행 완료후 작업을 진행한다.
                        /*offDaumZipAddress(function() {
                            postcodeWrap.style.display = "none";
                            btnClose.style.display = "none";
                        });*/
                    }
                }
            }).embed(postcodeWrap);
        });
    }
}
</script>
