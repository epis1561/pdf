<template>
    <div :class="`subpage-wrap delivery-fee ${modal ? 'modal-content' : ''}`">
        <div class="search-wrap row-group">
            <div class="search-item col-group">
                <div class="search-input-wrap" @click="DaumPostcode">
                    <input type="text" class="search-input" placeholder="주소를 입력해주세요." id="addr_1" :value="data.address">
                    <p class="search-input-title">
                        주소
                    </p>
                </div>
                <button class="search-btn search-result-btn" id="map_btn" @click.prevent="close">
                    <i class="xi-search icon"></i>
                </button>
            </div>
        </div>

        <div class="search-tab-wrap col-group">
            <button type="button" class="search-tab col-group" @click="() => {activeLatest = false; setMap();}">
                <i class="xi-my-location icon"></i>
                내 위치
            </button>
            <button type="button" class="search-tab col-group" @click="() => {activeLatest = false; mapDaumPostcode();}">
                <i class="xi-map icon"></i>
                지도에서 선택
            </button>
            <button type="button" class="search-tab search-recent col-group" @click="activeLatest = true;">
                <i class="xi-search icon"></i>
                최근/거래처 주소
            </button>
        </div>

        <div class="search-recent-wrap" v-if="activeLatest">
            <div class="search-recent-list">
                <!--                        <div class="search-recent-item saved col-group" onclick="recentAddr(event)">
                                            <i class="xi-maker icon"></i> &lt;!&ndash; 저장된 거래처 &ndash;&gt;
                                            <p class="search-recent-txt">
                                                풍안빌딩 4층 코워커웹
                                            </p>
                                        </div>-->
                <div class="search-recent-item recent col-group" @click="selectDelivery(delivery)" v-for="delivery in deliveries.data" :key="delivery.id">
                    <i class="xi-search icon"></i> <!-- 최근 -->
                    <p class="search-recent-txt">
                        {{ delivery.s_start }} -> {{delivery.s_dest}}
                    </p>
                </div>
            </div>
        </div>

        <div id="postcode_search_wrap">
            <i class="xi-close" @click="foldDaumPostcode()"></i>
        </div>

        <div class="map-wrap">
            <div id="map"></div>
        </div>
    </div>

</template>
<script>
import Form from "../utils/Form";

export default {
    props: {
        deliveries: {
            default : {
                data: [],
            }
        },
        from: {
            default: false,
        },
        to: {
            default: false,
        },
        modal: {
            default: false,
        }
    },

    data() {
        return {
            word: "",

            activeLatest: false,

            data: {
                address: "",
                address_zipcode: "",
                sido: "",
                gugun: "",
                dong: "",
                coords: {
                    lat: this.$store.state.coords.lat,
                    lon: this.$store.state.coords.lon,
                }
            },

            markers: [],

            map: null,
            geocoder: null,

            first: true,

        }
    },

    methods: {

        getAddressFromCoords(data){
            /*this.$store.commit("setLoading", true);

            this.$axios.get("/api/addresses/addressFromCoords", {
                params: {
                    lat: data.coords.lat,
                    lon: data.coords.lon
                }
            }).then(response => {
                let result = response.data.data;

                data.sido = result.sido;
                data.gugun = result.gugun;
                data.dong = result.dong;
                data.address_detail = result.address_detail;


            });*/

            this.$emit("change", data);
        },

        selectDelivery(delivery){
            this.updateAddress({
                address: this.to ? delivery.dest_location : delivery.start_location,
                zonecode: null,
                sido: this.to ? delivery.dest_sido : delivery.start_sido,
                sigungu: this.to ? delivery.dest_gugun : delivery.start_gugun,
                bname1: this.to ? delivery.dest_dong : delivery.start_dong,
                coords: {
                    lat: this.to ? delivery.dest_lat : delivery.start_lat,
                    lon: this.to ? delivery.dest_lon : delivery.start_lon,
                }
            });
        },

        close() {
            this.$emit("close");
        },

        foldDaumPostcode() {
            var element_wrap = document.getElementById('postcode_search_wrap');
            element_wrap.style.display = 'none';
        },

        updateAddress(data, needSetCoords = false){
            let self = this;

            this.data = {
                ...this.data,
                address: data.address,
                address_zipcode: data.zonecode,
                sido: data.sido,
                gugun: data.sigungu,
                dong: data.bname1,
            };


            if(needSetCoords)
                return kakao.maps.load(() => {
                    var geocoder = new kakao.maps.services.Geocoder();

                    geocoder.addressSearch(this.data.address, function(result, status) {
                        if (status === kakao.maps.services.Status.OK) {
                            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                            self.data.coords.lat = result[0].y;
                            self.data.coords.lon = result[0].x;

                            // 맵 이동
                            self.map.panTo(coords);

                            // 마커 세팅
                            self.clearMarkers();

                            var marker = new kakao.maps.Marker(); // 클릭한 위치를 표시할 마커입니다
                            self.markers.push(marker);

                            marker.setPosition(coords);
                            marker.setMap(self.map);

                            self.getAddressFromCoords(self.data);

                            // self.$emit("change", self.data);
                        } else {
                            alert("해당 주소의 좌표를 찾을 수 없습니다.");
                        }

                    });
                })

            self.getAddressFromCoords(self.data);

            // self.$emit("change", self.data);
        },

        clearMarkers(){
            this.markers.map((marker) => {
                marker.setMap(null);
            });

            this.markers = [];
        },

        DaumPostcode() {
            let self = this;

            var currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
            var element_wrap = document.getElementById('postcode_search_wrap');

            new daum.Postcode({
                oncomplete: function (data) {

                    self.updateAddress(data, true);
                    console.log(data);

                    element_wrap.style.display = 'none';
                    document.body.scrollTop = currentScroll;
                },
                onresize: function (size) {
                    element_wrap.style.height = size.height + 'px';
                },
                width: '100%',
                height: '100%'
            }).embed(element_wrap);

            element_wrap.style.display = 'block';
        },

        mapDaumPostcode() {
            let self = this;

            kakao.maps.load(()=>{
                var mapContainer = document.getElementById('map'), // 지도를 표시할 div
                        mapOption = {
                            center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
                            level: 1 // 지도의 확대 레벨
                        };

                // 지도를 생성합니다
                self.map = new kakao.maps.Map(mapContainer, mapOption);

                var marker = new kakao.maps.Marker(); // 클릭한 위치를 표시할 마커입니다
                self.markers.push(marker);

                var infowindow = new kakao.maps.InfoWindow({zindex: 1}); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다


                // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
                kakao.maps.event.addListener(self.map, 'click', function (mouseEvent) {
                    searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
                        if (status === kakao.maps.services.Status.OK) {

                            /*var selectedAddressInput = document.getElementById('addr_1');
                            selectedAddressInput.value = !!result[0].road_address ? result[0].road_address.address_name : '';*/

                            self.updateAddress({
                                address: result[0].address.address_name,
                                zonecode: result[0].address.zip_code,
                                sido: result[0].address.region_1depth_name,
                                sigungu: result[0].address.region_2depth_name,
                                bname1: result[0].address.region_3depth_name,
                                coords: {
                                    lat: mouseEvent.La,
                                    lon: mouseEvent.Ma
                                }
                            }, true);

                            // 마커를 클릭한 위치에 표시합니다
                            marker.setPosition(mouseEvent.latLng);
                            marker.setMap(self.map);
                        }
                    });
                });

                function searchDetailAddrFromCoords(coords, callback) {
                    // 좌표로 법정동 상세 주소 정보를 요청합니다
                    self.geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
                }
            });

        },

        recentAddr(event) {
            var targetElement = event.currentTarget;

            // search-recent-txt 클래스를 가진 하위 요소를 찾음
            var recentTxtElement = targetElement.querySelector('.search-recent-txt');

            // 선택된 주소를 가져와서 input에 설정
            var selectedAddressInput = document.getElementById('addr_1');
            selectedAddressInput.value = recentTxtElement.textContent.trim();
        },


        setMap(){
            let self = this;
            kakao.maps.load(()=>{
                var mapContainer = document.getElementById('map'), // 지도를 표시할 div
                        mapOption = {
                            center: new kakao.maps.LatLng(this.$store.state.coords.lat, this.$store.state.coords.lon), // 지도의 중심좌표
                            level: 1 // 지도의 확대 레벨
                        };

                // 지도를 생성합니다
                self.map = new kakao.maps.Map(mapContainer, mapOption);

                // 주소-좌표 변환 객체를 생성합니다
                self.geocoder = new kakao.maps.services.Geocoder();

                var marker = new kakao.maps.Marker(); // 클릭한 위치를 표시할 마커입니다
                self.markers.push(marker);

                marker.setPosition(new kakao.maps.LatLng(this.$store.state.coords.lat, this.$store.state.coords.lon));
                marker.setMap(self.map);

                self.geocoder.coord2Address(this.$store.state.coords.lon, this.$store.state.coords.lat, function(result, status) {
                    if (status === kakao.maps.services.Status.OK) {
                        if(!self.first){
                            self.updateAddress({
                                address: result[0].address.address_name,
                                zonecode: result[0].address.zip_code,
                                sido: result[0].address.region_1depth_name,
                                sigungu: result[0].address.region_2depth_name,
                                bname1: result[0].address.region_3depth_name,
                                coords: {
                                    lat: self.$store.state.coords.lat,
                                    lon: self.$store.state.coords.lon,
                                }
                            }, false);
                        }

                        self.first= false;
                    } else {
                        alert("주소를 찾을 수 없습니다.");
                    }
                });
            });

        },

        getDistance(coords1, coords2){
            const R = 6371;

            // 라디안으로 변환
            const lat1Rad = coords1.y * Math.PI / 180;
            const lon1Rad = coords1.x * Math.PI / 180;
            const lat2Rad = coords2.y * Math.PI / 180;
            const lon2Rad = coords2.x * Math.PI / 180;

            // 위도와 경도의 차이 계산
            const dLat = lat2Rad - lat1Rad;
            const dLon = lon2Rad - lon1Rad;

            // Haversine 공식을 이용한 거리 계산
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(lat1Rad) * Math.cos(lat2Rad) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c;

            return Math.floor(distance);
        },

        moveToCurrent(){
            this.map.setCenter(new naver.maps.LatLng(this.data.coords.y, this.data.coords.x));
        }
    },

    computed: {
        distance(){
            if(this.targetItem)
                return this.getDistance({
                    x: this.targetItem.x,
                    y: this.targetItem.y
                }, this.data.coords);

            return 0;
        },
    },

    watch: {
        '$route'(to, from) {

        }
    },

    mounted() {
        this.setMap();
    }
}
</script>
