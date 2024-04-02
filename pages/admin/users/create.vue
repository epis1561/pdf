<template>
    <div class="admin-right" v-if="!loading">
        <div class="admin-right-container">
            <div class="sca-box">
                <ul>
                    <li><p>회원 관리</p></li>
                    <li class="active"><p>사용자</p></li>
                </ul>
            </div>
            <div class="mt30">
                <div class="write-box">
                    <ul>
                        <template v-if="item && item.provider">
                            <li>
                                <div class="list-title">
                                    <strong>공급사</strong>
                                </div>
                                <div class="list-content">
                                    <div class="input-box no-border">
                                        <input type="text" class="f18" placeholder="" :value="item.provider.title" disabled>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="list-title">
                                    <strong>관련 캠페인 <small>(최근 3개)</small></strong>
                                </div>
                                <div class="list-content">
                                    <div class="input-box no-border">
                                        <input type="text" class="f18" placeholder="" :value="item.provider.format_campaigns" disabled>
                                    </div>
                                </div>
                            </li>
                        </template>
                        <li>
                            <div class="list-title">
                                <strong>권한 유형</strong>
                            </div>
                            <div class="list-content">
                                <div class="select-box no-border">
                                    <select class="f18" v-model="form.type" v-if="form.company_id || form.provider_id">
                                        <option value="" disabled>선택</option>
                                        <option value="COMMON">회원</option>
                                    </select>

                                    <select class="f18" v-model="form.type" v-else>
                                        <option value="" disabled>선택</option>
                                        <option :value="type.value" v-for="type in types.data" :key="type.value">{{ type.label }}</option>
                                    </select>

                                    <error :form="form" name="type" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>아이디</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해 주세요." v-model="form.ids">

                                    <error :form="form" name="ids" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>이메일</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해 주세요." v-model="form.email">

                                    <error :form="form" name="email" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>비밀번호</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="password" class="f18" placeholder="내용을 입력해 주세요." v-model="form.password">

                                    <error :form="form" name="password" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>이름</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해 주세요." v-model="form.name">

                                    <error :form="form" name="name" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>연락처</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해 주세요." v-model="form.contact">

                                    <error :form="form" name="contact" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>주소</strong>
                            </div>

                            <input-address @change="(data) => form[data.name] = data.value" :form="form" />

                            <div style="width: 100%;">
                                <error :form="form" name="address" />
                                <error :form="form" name="address_detail" />
                                <error :form="form" name="address_zipcode" />
                            </div>

                        </li>

                        <li>
                            <div class="list-title">
                                <strong>활성여부</strong>
                            </div>
                            <div class="list-content">
                                <div class="select-box no-border">
                                    <select class="f18" v-model="form.active">
                                        <option value="">활성여부</option>
                                        <option :value="1">활성</option>
                                        <option :value="0">비활성</option>
                                    </select>

                                    <error :form="form" name="select" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="button-box flex-tr mt32">
                <a href="" class="btn btn-lightgray px45 mr10" @click.prevent="() => $router.back()">취소</a>
                <a href="" class="btn btn-red px45 mr10" @click.prevent="remove">삭제</a>
                <a href="" class="btn btn-blue px45" @click.prevent="store">등록</a>
            </div>
        </div>
    </div>
</template>
<script>

import Form from "@/utils/Form";
export default {
    middleware: ["admin"],
    layout: "admin",

    props: {

    },

    data(){
        return {
            loading: true,
            keep: false,
            item: null,
            form: new Form(this.$axios, {
                company_id: this.$route.query.company_id || "",
                provider_id: this.$route.query.provider_id || "",
                type: this.$route.query.company_id ? 'COMMON' : '',

                ids: "",
                email: "",
                name: "",
                contact: "",

                address: "",
                address_detail: "",
                address_zipcode: "",

                password: "",

                active: 1,

                files: [],
                files_mobile: [],
                files_remove_ids: [],
            }),

            types: {
                data: [],
            }
        }
    },

    methods: {
        remove(){
            let confirmed = window.confirm("정말로 삭제하시겠습니까?");

            if(confirmed)
                this.form.delete("/api/admin/users/" + this.item.id)
                        .then(response => {
                            this.$router.replace("/admin/users");
                        });
        },

        store(){
            if(this.item)
                return this.form.post("/api/admin/users/" + this.item.id)
                        .then(response => {
                            if(this.$route.query.company_id)
                                return this.$router.replace("/admin/companies/create?id=" + this.$route.query.company_id);

                            if(this.$route.query.provider_id)
                                return this.$router.replace("/admin/providers/create?id=" + this.$route.query.provider_id);

                            this.$router.replace("/admin/users");
                        }).catch(error => {});

            this.form.post("/api/admin/users")
                    .then(response => {
                        if(this.$route.query.company_id)
                            return this.$router.replace("/admin/companies/create?id=" + this.$route.query.company_id);

                        if(this.$route.query.provider_id)
                            return this.$router.replace("/admin/providers/create?id=" + this.$route.query.provider_id);

                        this.$router.replace("/admin/users");
                    }).catch(error => {});
        },

        getTypes(){
            this.$axios.get("/api/admin/users/types")
                    .then(response => {
                        this.types = response.data;
                    })
        }
    },


    mounted() {
        this.getTypes();

        if(this.$route.query.id){
            return this.$axios.get("/api/admin/users/" + this.$route.query.id)
                    .then(response => {
                        this.item = response.data.data;

                        this.form.set({...this.form, ...this.item});

                        this.loading = false;

                        $("html,body").scrollTop(0);
                    })
        }

        this.loading = false;


    }

}
</script>
