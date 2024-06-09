<template>
    <div class="mypage-left">
        <div class="mypage-head" v-if="company">
            <div class="mypage-head-logo">
                <img :src="company.img.url" v-if="company.img">
                <img src="/asset/images/img_user_mypage_logo.png" v-else>
            </div>
            <div class="mypage-head-company">
                <h2>{{ company.title }}</h2>
                <dl>
                    <dd>
                        <p>{{ company.size }}</p>
                        <p>{{ company.president }}</p>
                        <p>{{ company.contact }}</p>
                    </dd>
                    <dd>
                        <p>{{ company.business_number }}</p>
                        <p>
                            <span>{{ company.category }}</span>
                        </p>
                    </dd>
                </dl>
            </div>
            <div class="mypage-head-info">
                <ul>
                    <li class="person">
                        <div>
                            <strong>{{ company.count_user }}</strong>
                            <p>멤버수</p>
                        </div>
                    </li>
                    <li class="membership">
                        <div>
                            <strong>0일</strong>
                            <p>멤버쉽</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mypage-head" v-else>
            <div class="mypage-head-logo">
                <img src="/asset/images/logo.png">
            </div>
            <div class="mypage-head-company">
                <h2 style="font-size:20px;">소속회사가 없습니다.</h2>
            </div>
        </div>
        <div class="mypage-body">
            <div class="mypage-body-category">
                <ul>
                    <li class="info">
                        <a href="" class="link">내 정보</a>
                        <button type="button" class="link">내 정보</button>
                        <dl>
                            <dd><nuxt-link to="/users/edit">회원정보 수정</nuxt-link></dd>
                            <dd v-if=" this.$auth.user.data.company_admin == 1"><nuxt-link to="/members">소속직원 관리</nuxt-link></dd>
                            <dd v-if=" this.$auth.user.data.company_admin == 0"><nuxt-link to="/invitations">받은초대</nuxt-link></dd>
                        </dl>
                    </li>
                    <li class="order"><a href="" class="link" @click.prevent="$store.commit('setPop', { description: '준비중입니다.' })">결제내역</a></li>
                    <li class="qa"><nuxt-link to="/mypage/qnas" class="link">문의내역</nuxt-link></li>
                    <li class="membership"><a href="" class="link" @click.prevent="$store.commit('setPop', { description: '준비중입니다.' })">멤버쉽</a></li>
                </ul>
            </div>
            <!-- 탭은 모바일에서 내 정보의 경우에만 노출되어야 함 -->
            <div class="mypage-body-tab">
                <ul>
                    <li><nuxt-link to="/users/edit">회원정보 수정</nuxt-link></li>
                    <li>
                        <nuxt-link to="/memberss" v-if=" this.$auth.user.data.company_admin == 1">소속직원 관리</nuxt-link>
                        <nuxt-link to="/invitations" v-else>받은초대</nuxt-link>
                    </li>
                </ul>
            </diV>
            <div class="mypage-body-log">
                <a href="#" @click.prevent="logout">로그아웃</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        user(){
            return this.$auth.user.data
        },

        company(){
            return this.$auth.user.data.company
        },

        isAcceptCompany(){
            return this.$auth.user.data.type === 'COMPANY' && this.$auth.user.data.accepted == 1;
        }
    },

    methods: {
        logout(){
            this.$auth.logout();
            this.$router.push("/login");
        }
    },

    mounted() {
        $(document).ready(function () {
            $('.toggle').click(function(){
                $('.mypage-nav').toggleClass('active')
            });
        })
    }
}
</script>