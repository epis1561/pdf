<template>

    <div class="mypage-right">
        <div class="title-box">
            <h2>문의내역</h2>
        </div>
        <div class="mypage-qna-box">
            <div class="qna-top">
                <p>
                    산업안전보건법 제 41조 시행령에 근거하여 2018년 10월 18일 부터 산업안전보건법에 따라 고객응대근로자 보호조치를 시행하고 있습니다.
                    고객응대근로자에게 폭언, 폭행 등을 하지 말아주세요.
                </p>
            </div>
            <div class="qna-left">
                <div class="board-write-box sm">
                    <ul>
                        <li>
                            <div class="write-content">
                                <div class="content-group">
                                    <div class="group-title">
                                        <h3>문의 분류</h3>
                                    </div>
                                    <div class="group-content">
                                        <categories @change="setId" />
                                        <error :form="form" name="qna_category_id" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="write-content">
                                <div class="content-group">
                                    <div class="group-title">
                                        <h3>문의 제목</h3>
                                    </div>
                                    <div class="group-content">
                                        <div class="input-box">
                                            <input type="text" placeholder="문의제목을 작성해주세요." v-model="form.title">
                                        </div>
                                        <error :form="form" name="title" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="write-content">
                                <div class="content-group">
                                    <div class="group-title">
                                        <h3>문의 내용</h3>
                                    </div>
                                    <div class="group-content">
                                        <div class="textarea-box">
                                            <textarea placeholder="문의내용을 작성해주세요." v-model="form.description"></textarea>
                                        </div>
                                        <error :form="form" name="description" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="write-content">
                                <div class="content-group">
                                    <div class="group-title">
                                        <h3>파일첨부</h3>
                                    </div>
                                    <div class="group-content">
                                        <input-images @change="data => {form.imgs = data}" />
                                    </div>
                                    <error :form="form" name="imgs" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="qna-right">
                <div class="board-faq-box sm">
                    <h3>FAQ</h3>
                        <ul>
                            <faq :item="item" v-for="item in items.data" :key="item.id"></faq>
                        </ul>
                </div>
            </div>
        </div>
        <div class="button-box mt40">
            <div class="w400 flex-lg-1 mr24 mr-lg-10">
                <a href="" class="btn btn-lightgray bdr4 lg" @click.prevent="() => {$router.push('/mypage/qnas')}">취소</a>
            </div>
            <div class="w400 flex-lg-1">
                <a href="" class="btn btn-skyblue bdr4 lg" @click.prevent="store"> 문의하기</a>
            </div>
        </div>
    </div>

</template>
<script>

import Form from "@/utils/Form";
export default {
    middleware: ["user"],
    layout: "mypage",

    data() {
        return {
            form: new Form(this.$axios, {
                page:1,
                title:"",
                description: "",
                qna_category_id:"",
                imgs:[],
            }),

            items:{
                data: [],
                meta: {
                    current_page:1,
                    last_page:10,
                }

            },

            active:false,

        }

    },

    methods: {
        filter(){
            this.$axios.get("api/qnas",{
                prams:this.form.data(),
            }).then(response => {
                this.items = response.data;
            })
        },

        store(){
            this.form.post("/api/qnas",{

            }).then(response => {
                /*this.$store.commit("setPop", {
                    description: "성공적으로 처리되었습니다."
                });*/

                this.$router.push("/mypage/qnas");
            })
        },

        setId(id){
            this.form.qna_category_id=id;
        },

    },

    computed: {


    },

    mounted() {
        this.filter();
    }
}
</script>