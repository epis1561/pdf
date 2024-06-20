<template>
    <div class="admin-right" v-if="!loading">
        <div class="admin-right-container">
            <div class="sca-box">
                <ul>
                    <li><p>게시판 관리</p></li>
                    <li class="active"><p>문의사항</p></li>
                </ul>
            </div>
            <div class="mt30">
                <div class="write-box">
                    <ul>
                        <li class="full">
                            <div class="list-title">
                                <strong>문의자</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="" v-model="item.user.name" disabled>
                                </div>
                            </div>
                        </li>

                        <li class="full">
                            <div class="list-title">
                                <strong>문의자 연락처</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="" v-model="item.user.contact" disabled>
                                </div>
                            </div>
                        </li>

                        <li class="full">
                            <div class="list-title">
                                <strong>문의자 이메일</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="" v-model="item.user.email" disabled>
                                </div>
                            </div>
                        </li>
                        
                        <li class="full">
                            <div class="list-title">
                                <strong>제목</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해 주세요." v-model="item.title" disabled>
                                </div>
                            </div>
                        </li>

                        <li class="full">
                            <div class="list-title">
                                <strong>내용</strong>
                            </div>
                            <div class="list-content">
                                <div class="textarea-box">
                                    <textarea name="" id="" cols="30" rows="10" v-model="item.description" disabled></textarea>
                                </div>
                            </div>
                        </li>

                        <li class="full">
                            <div class="list-title">
                                <strong>이미지</strong>
                            </div>
                            <div class="list-content">
                                <div class="textarea-box">
                                    <img :src="img.url" alt="" v-for="(img, index) in item.imgs" :key="index">
                                </div>
                            </div>
                        </li>

                        <li class="full">
                            <div class="list-title">
                                <strong>답변</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input-editor :default="form.answer" @change="data => form.answer = data" />

                                    <error :form="form" name="answer" />
                                </div>
                            </div>
                        </li>
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
                answer: "",

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
                return this.form.post("/api/admin/qnas/" + this.item.id)
                    .then(response => {
                        this.$router.push("/admin/qnas");
                    });

            this.form.post("/api/admin/qnas")
                .then(response => {
                    this.$router.push("/admin/qnas");
                });
        },
    },


    mounted() {
        if(this.$route.query.id){
            return this.$axios.get("/api/admin/qnas/" + this.$route.query.id)
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
