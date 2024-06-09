<template>
    <header class="mobile" @mouseover="showDropMenuOnMaxWidth" @mouseleave="hideDropMenuOnMaxWidth">
        <div class="header-top">
            <div class="container">
                <div class="header-top-logo">
                    <h1><nuxt-link to="/"><img src="/asset/images/logo.png"></nuxt-link></h1>
                </div>
                <div class="header-top-category">
                    <ul>
                        <li><nuxt-link to="/contents/solution">ESGI</nuxt-link></li>
                        <li><nuxt-link to="/campaigns">ESG</nuxt-link></li>
                        <li><nuxt-link to="/contents/resk">리스크관리</nuxt-link></li>
                        <li><nuxt-link to="/notices">고객센터</nuxt-link></li>
                        <li class="menu" @click="isDropMenuVisible = true"></li>
                        <li class="menu_close" @click="isDropMenuVisible = false"> <i class="xi-close"></i></li>
                    </ul>
                    <nuxt-link to="/users/edit">
                        <i class="xi-user"></i>
                    </nuxt-link>
                </div>
            </div>
        </div>

        <div class="container drop_menu" v-if="isDropMenuVisible">
            <div class="container-wrap">
                <div class="leftbox">
                    <div class="photo_box greeting1">
                        <img src="/asset/images/greeting1.png" class="greeting">
                        <nuxt-link to="/contents/solution" class="go">
                            <img src="/asset/images/go.png">
                        </nuxt-link>
                        <div class="textbox">
                            <h3>ESGI</h3>
                            ESG온라인 비대면 진단 솔루션
                        </div>
                    </div>
                    <div class="photo_box greeting2">
                        <img src="/asset/images/greeting2.png" class="greeting">
                        <nuxt-link to="/contents/company" class="go">
                            <img src="/asset/images/go.png" >
                        </nuxt-link>
                        <div class="textbox">
                            <h3>About</h3>
                            함께만드는 가치, 지속가능경영의 시작!<br>
                            우리의 솔류션으로 현실이 됩니다.
                        </div>
                    </div>
                </div>

                <div class="rightbox">
                    <div class="menuset menu1">
                        <ul>ESGI
                            <li><nuxt-link to="/contents/solution">솔루션소개</nuxt-link></li>
                            <li><nuxt-link to="/contents/company">회사소개</nuxt-link></li>
                            <li><nuxt-link to="/contents/risk">리스크관리</nuxt-link></li>
                        </ul>
                    </div>
                    <div class="menuset menu2">
                        <ul>ESG
                            <li><nuxt-link to="/campaigns">진단</nuxt-link></li>
                            <li><nuxt-link to="/campaigns/dashboard">현황</nuxt-link></li>
                        </ul>
                    </div>
                    <div class="menuset menu3">
                        <ul>고객센터
                            <li><nuxt-link to="/documents">자료실</nuxt-link></li>
                            <li><nuxt-link to="/qnas">문의사항</nuxt-link></li>
                            <li><nuxt-link to="/notices">공지사항</nuxt-link></li>
                            <li><nuxt-link to="/faqs">FAQ</nuxt-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>

import Form from "../utils/Form";
export default {
    data(){
        return {
            activeLogin: false,
            headerClass: "",
            isDropMenuVisible: false,
            form: new Form(this.$axios, {
                type: "",
            }),
        }
    },

    methods: {
        mheader() {
            $('header .header-top .header-top-category ul li.menu').click(function() {
                $(this).hide();
                $('.mobile').css('height', '100%');
                $('.drop_menu').show();
                $('header .header-top .header-top-category ul li.menu_close').show();
            });

            $('header .header-top .header-top-category ul li.menu_close').click(function() {
                $(this).hide();
                $('.mobile').css('height', 'auto');
                $('.drop_menu').hide();
                $('header .header-top .header-top-category ul li.menu').show();
            });
        },
        showDropMenuOnMaxWidth() {
            if (window.innerWidth >= 991) {
                this.showDropMenu();
            }
        },
        hideDropMenuOnMaxWidth() {
            if (window.innerWidth >= 991) {
                this.hideDropMenu();
            }
        },
        showDropMenu() {
            this.isDropMenuVisible = true;
        },
        hideDropMenu() {
            this.isDropMenuVisible = false;
        },

     },

    computed: {
        user(){
            return this.$store.state.user.data;
        }
    },

    watch: {
        '$route'(to, from) {
        }
    },

    mounted() {
        this.$nextTick(() => {

        });
        // this.showDropMenuOnMaxWidth();
        // window.addEventListener('resize', this.showDropMenuOnMaxWidth);
        this.mheader();
    },
    beforeDestroy() {
        // 컴포넌트가 파괴되기 전에 이벤트 리스너를 제거합니다.
        window.removeEventListener('resize', this.showDropMenuOnMaxWidth);
    }
}
</script>


