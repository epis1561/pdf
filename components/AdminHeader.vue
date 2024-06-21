<template>
    <div class="admin-left">
        <div class="admin-left-category" v-if="$auth.user.data.type === 'MASTER'">
            <div class="top" style="
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    color:#2B9F97;
">{{ $auth.user.data.name }}님 <i class="xi-log-out" style="
    font-size: 20px;
    margin-left: 8px; color:#2B9F97;" @click.prevent="logout"></i></div>

            <ul>
                <li class="active">
                    <a href="javascript:;">
                        회원 관리
                        <i class="xi-plus inactive"></i>
                        <i class="xi-minus active"></i>
                    </a>
                    <dl>
                        <dd :class="activeClass('/admin/companies')"><nuxt-link to="/admin/companies">클라이언트 파트너사</nuxt-link></dd>
                        <dd :class="activeClass('/admin/users')"><nuxt-link to="/admin/users">회원</nuxt-link></dd>
                        <dd :class="activeClass('/admin/providers')"><nuxt-link to="/admin/providers">클라이언트</nuxt-link></dd>
                        <dd :class="activeClass('/admin/agencies')"><nuxt-link to="/admin/agencies">실사파트너사</nuxt-link></dd>
                    </dl>
                </li>
                <li class="active">
                    <a href="javascript:;">캠페인 관리
                        <i class="xi-plus inactive"></i>
                        <i class="xi-minus active"></i>
                    </a>
                    <dl>
                        <dd :class="activeClass('/admin/questions', true)"><nuxt-link to="/admin/questions">전체 질의</nuxt-link></dd>
                        <dd>
                            <dl>
                                <dd :class="activeClass('/admin/questions?domain=ENVIRONMENT', true)"><nuxt-link to="/admin/questions?domain=ENVIRONMENT">E 질의</nuxt-link></dd>
                                <dd :class="activeClass('/admin/questions?domain=SOCIAL1', true)"><nuxt-link to="/admin/questions?domain=SOCIAL1">S1 질의</nuxt-link></dd>
                                <dd :class="activeClass('/admin/questions?domain=SOCIAL2', true)"><nuxt-link to="/admin/questions?domain=SOCIAL2">S2 질의</nuxt-link></dd>
                                <dd :class="activeClass('/admin/questions?domain=GOVERNANCE', true)"><nuxt-link to="/admin/questions?domain=GOVERNANCE">G 질의</nuxt-link></dd>
                                <dd :class="activeClass('/admin/questions?domain=CP', true)"><nuxt-link to="/admin/questions?domain=CP">CP 질의</nuxt-link></dd>
                            </dl>
                        </dd>
                        <dd :class="activeClass('/admin/campaigns')"><nuxt-link to="/admin/campaigns">캠페인</nuxt-link></dd>
                        <dd :class="activeClass('/admin/investgator/campaigns')"><nuxt-link to="/admin/investgator/campaigns">실사자 배정</nuxt-link></dd>
                    </dl>
                </li>
                <li class="active">
                    <a href="javascript:;">게시판 관리
                        <i class="xi-plus inactive"></i>
                        <i class="xi-minus active"></i>
                    </a>
                    <dl>
                        <dd><nuxt-link to="/admin/notices">공지사항</nuxt-link></dd>
                        <dd><nuxt-link to="/admin/faqs">FAQ</nuxt-link></dd>
                        <dd><nuxt-link to="/admin/qnas">문의사항</nuxt-link></dd>
                        <dd><nuxt-link to="/admin/documents">자료실</nuxt-link></dd>
                    </dl>
                </li>

                <li class="active">
                    <a href="javascript:;">시스템 관리
                        <i class="xi-plus inactive"></i>
                        <i class="xi-minus active"></i>
                    </a>
                    <dl>
                        <dd><nuxt-link to="/admin/emails">이메일</nuxt-link></dd>
                        <dd><a href="javascript:;">서버로그</a></dd>
                        <dd><a href="javascript:;">메모리 현황</a></dd>
                    </dl>
                </li>
                <li class="active">
                    <a href="javascript:;">로그 관리
                        <i class="xi-plus inactive"></i>
                        <i class="xi-minus active"></i>
                    </a>
                    <dl>
                        <dd><a href="javascript:;">회원접속로그</a></dd>
                        <dd><a href="javascript:;">관리자로그</a></dd>
                        <dd><a href="javascript:;">로그</a></dd>
                    </dl>
                </li>

            </ul>
        </div>

        <div class="admin-left-category" v-if="$auth.user.data.type === 'AGENCY_ADMIN'">
            <div class="top" style="
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    color:#2B9F97;
">{{ $auth.user.data.name }}님 <i class="xi-log-out" style="
    font-size: 20px;
    margin-left: 8px; color:#2B9F97;" @click.prevent="logout"></i></div>

            <ul>
                <li>
                    <a href="#">캠페인 관리
                        <i class="xi-plus inactive"></i>
                        <i class="xi-minus active"></i>
                    </a>
                    <dl>
                        <dd><nuxt-link to="/admin/investgator/campaigns">캠페인</nuxt-link></dd>
                    </dl>
                </li>

            </ul>
        </div>
    </div>

</template>
<script>
import Form from "../utils/Form";
export default {
    data(){
        return {
            word: "",
            headerClass: "",
            activeHeader: true,
        }
    },

    methods: {
        logout(){
            this.$auth.logout();

            this.$router.push("/admin/login");
        },

        activeClass(url, haveToSame = false){
            if(haveToSame)
                return this.$route.fullPath === url ? 'active' : '';

            return this.$route.path.includes(url) ? 'active' : '';
        },
    },

    computed: {

    },

    watch: {
        '$route'(to, from) {
            this.activeHeader = this.$route.path === "/admin/login" ? false : true;

            setTimeout(function(){
                $('.gnb-item').unbind("click").bind("click",function(){
                    $(this).toggleClass('active');
                });
            },10);
        }
    },

    mounted() {
        $(".admin-left-category > ul > li > a").unbind("click").bind("click", function(){
            $(this).parents("li").toggleClass("active");
        });
    }
}
</script>
