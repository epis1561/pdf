<template>
    <div class="admin-right" v-if="!loading">
        <div class="admin-right-container">
            <div class="sca-box">
                <ul>
                    <li><p>게시판 관리</p></li>
                    <li class="active"><p>공지사항</p></li>
                </ul>
            </div>
            <div class="mt30">
                <div class="write-box">
                    <ul>
                        <li>
                            <div class="list-title">
                                <strong>공지여부</strong>
                            </div>
                            <div class="list-content">
                                <div class="select-box no-border">
                                    <select class="f18" v-model="form.important">
                                        <option value="" disabled>선택</option>
                                        <option :value="1">활성</option>
                                        <option :value="0">비활성</option>
                                    </select>

                                    <error :form="form" name="important" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>상시여부</strong>
                            </div>
                            <div class="list-content">
                                <div class="select-box no-border">
                                    <select class="f18" v-model="form.always">
                                        <option value="" disabled>선택</option>
                                        <option :value="1">활성</option>
                                        <option :value="0">비활성</option>
                                    </select>

                                    <error :form="form" name="always" />
                                </div>
                            </div>
                        </li>

                        <li class="full">
                            <div class="list-title">
                                <strong>제목</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해 주세요." v-model="form.title">

                                    <error :form="form" name="title" />
                                </div>
                            </div>
                        </li>
                        <li class="full">
                            <div class="list-title">
                                <strong>내용</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input-editor :default="form.description" @change="data => form.description = data" />

                                    <error :form="form" name="description" />
                                </div>
                            </div>
                        </li>
<!--                        <li class="full">
                            <div class="list-title">
                                <strong>로고 첨부파일</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input-files :default="item ? item.files" comment="높이 최대 135px 사이즈를 권장합니다." @change="(data) => form.files = data" @removed="data => form.files_remove_ids = data" />

                                    <error :form="form" name="img" />
                                </div>
                            </div>
                        </li>-->
                    </ul>
                </div>
            </div>

            <div class="button-box flex-tr mt32">
                <a href="" class="btn btn-lightgray px45 mr10" @click.prevent="() => $router.back()">취소</a>
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

            users: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            userForm: new Form(this.$axios, {
                file: "",
                page: 1,
                company_id: "",
            }),

            form: new Form(this.$axios, {
                important: "",
                always: "",
                title: "",
                description: "",

                files: [],
                files_mobile: [],
                files_remove_ids: [],
            }),
        }
    },

    methods: {
        store(){
            this.$store.commit("setLoading", true);

            if(this.item)
                return this.form.post("/api/admin/notices/" + this.item.id)
                    .then(response => {
                        this.$router.push("/admin/notices");
                    });

            this.form.post("/api/admin/notices")
                .then(response => {
                    this.$router.push("/admin/notices");
                });
        },
    },


    mounted() {
        if(this.$route.query.id){
            return this.$axios.get("/api/admin/notices/" + this.$route.query.id)
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
