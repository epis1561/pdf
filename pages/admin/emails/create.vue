<template>
    <div class="admin-right" v-if="!loading">
        <div class="admin-right-container">
            <div class="sca-box">
                <ul>
                    <li><p>시스템 관리</p></li>
                    <li class="active"><p>이메일</p></li>
                </ul>
            </div>
            <div class="mt30">
                <div class="write-box">
                    <ul>
                        <li>
                            <div class="list-title">
                                <strong>이메일</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="email" class="f18" placeholder="내용을 입력해 주세요." v-model="form.email">

                                    <error :form="form" name="email" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="list-title">
                                <strong>담당자명</strong>
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
                                <strong>유형</strong>
                            </div>
                            <div class="list-content">
                                <div class="select-box no-border">
                                    <select class="f18" v-model="form.type">
                                        <option value="" disabled>선택</option>
                                        <option :value="type.value" v-for="type in types.data" :key="type.value">{{ type.label }}</option>
                                    </select>

                                    <error :form="form" name="type" />
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
                email: "",
                name: "",
                type: "",
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
                this.form.delete("/api/admin/emails/" + this.item.id)
                        .then(response => {
                            this.$router.back();
                        });
        },

        store(){
            if(this.item)
                return this.form.post("/api/admin/emails/" + this.item.id)
                    .then(response => {
                        this.$router.push("/admin/emails");
                    });

            this.form.post("/api/admin/emails")
                .then(response => {
                    this.$router.push("/admin/emails");
                });
        },

        getTypes(){
            this.$axios.get("/api/admin/emails/types")
                .then(response => {
                    this.types = response.data;
                });
        },
    },


    mounted() {
        this.getTypes();

        if(this.$route.query.id){
            return this.$axios.get("/api/admin/emails/" + this.$route.query.id)
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
