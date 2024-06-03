<template>
    <div class="admin-right" v-if="!loading">
        <div class="admin-right-container">
            <div class="sca-box">
                <ul>
                    <li><p>캠페인 관리</p></li>
                    <li class="active"><p>질의</p></li>
                </ul>
            </div>

            <div class="mt30">
                <div class="write-box">
                    <ul>
                        <li class="full">
                            <div class="list-title">
                                <strong>질의 제목</strong>
                            </div>
                            <div class="list-content flex flex-vc">
                                <div class="input-box no-border" style="width:100%;">
                                    <input type="text" class="f18" placeholder="내용을 입력해주세요." v-model="form.title">
                                </div>

                                <error :form="form" name="title" />
                            </div>
                        </li>
                        <li class="flex-vt">
                            <div class="list-title pt25">
                                <strong>카테고리 설정</strong>
<!--                                <small>필수</small>-->
                            </div>
                            <div class="list-content">
                                <div class="select-box no-border bb1">
                                    <select class="h70 f18" v-model="domain" @change="category_id = ''; form.category_id = '';">
                                        <option value="">분류</option>
                                        <option :value="domain.value" v-for="domain in domains.data" :key="domain.value">{{domain.label}}</option>
                                    </select>

                                    <error :form="form" name="classification_id" />
                                </div>

                                <div class="select-box no-border bb1">
                                    <select class="h70 f18" v-model="category_id" @change="() => {form.category_id = '';}">
                                        <option value="">1차 카테고리</option>
                                        <option :value="category.id" v-for="category in categories.data" v-if="!category.category && category.domain === domain" :key="category.id">{{category.title}}</option>
                                    </select>
                                </div>
                                <div class="select-box no-border bb1">
                                    <select class="h70 f18" v-model="form.category_id">
                                        <option value="">2차 카테고리</option>
                                        <option :value="category.id" v-for="category in categories.data" v-if="category.category && category.category.id == category_id" :key="category.id">{{category.title}}</option>
                                    </select>

                                    <error :form="form" name="category_id" />
                                </div>
                            </div>
                        </li>
                        <li class="flex-vt">
                            <ul class="col-12">
                                <li class="full">
                                    <div class="list-title">
                                        <strong>검색용 라벨</strong>
                                    </div>
                                    <div class="list-content">
                                        <div class="input-box no-border">
                                            <input type="text" class="f18" placeholder="내용을 입력해주세요." v-model="form.label_search">

                                            <error :form="form" name="label_search" />
                                        </div>
                                    </div>
                                </li>

                                <li class="full">
                                    <div class="list-title">
                                        <strong>필수 여부</strong>
                                    </div>
                                    <div class="list-content flex flex-vc">
                                        <div class="radio-box w120">
                                            <input type="radio" name="radio01" id="radio01_01" :value="1" v-model="form.required">
                                            <label for="radio01_01" class="f18">예</label>
                                        </div>
                                        <div class="radio-box w120">
                                            <input type="radio" name="radio01" id="radio01_02" :value="0" v-model="form.required">
                                            <label for="radio01_02" class="f18">아니오</label>
                                        </div>
                                        <error :form="form" name="required" />
                                    </div>
                                </li>
                                <li class="full">
                                    <div class="list-title">
                                        <strong>해당없음 여부</strong>
                                    </div>
                                    <div class="list-content flex flex-vc">
                                        <div class="radio-box w120">
                                            <input type="radio" name="radio02" id="radio02_01" :value="1" v-model="form.give_exception">
                                            <label for="radio02_01" class="f18">예</label>
                                        </div>
                                        <div class="radio-box w120">
                                            <input type="radio" name="radio02" id="radio02_02" :value="0" v-model="form.give_exception">
                                            <label for="radio02_02" class="f18">아니오</label>
                                        </div>

                                        <error :form="form" name="required" />
                                    </div>
                                </li>
<!--                                <li class="full" v-if="form.give_exception == 1">
                                    <div class="list-title">
                                        <strong>&nbsp;</strong>
                                    </div>
                                    <div class="list-content">
                                        <div class="input-box no-border">
                                            <input type="text" class="f18" placeholder="예 선택시 대체문구 입력" v-model="form.give_exception_comment">

                                            <error :form="form" name="give_exception_comment" />
                                        </div>
                                    </div>
                                </li>-->
                            </ul>
                        </li>
                        <li class="full">
                            <div class="list-title">
                                <strong>첨부파일 여부</strong>
                            </div>
                            <div class="list-content flex flex-vc">
                                <div class="radio-box w120">
                                    <input type="radio" name="radio03" id="radio03_01" :value="1" v-model="form.can_file">
                                    <label for="radio03_01" class="f18">예</label>
                                </div>
                                <div class="radio-box w120">
                                    <input type="radio" name="radio03" id="radio03_02" :value="0" v-model="form.can_file">
                                    <label for="radio03_02" class="f18">아니오</label>
                                </div>

                                <error :form="form" name="can_file" />
                            </div>
                        </li>
                        <li class="full" v-if="form.can_file == 1">
                            <div class="list-title">
                                <strong>첨부파일 필수여부</strong>
                            </div>
                            <div class="list-content flex flex-vc">
                                <div class="radio-box w120">
                                    <input type="radio" name="radio03-1" id="radio03-1_01" :value="1" v-model="form.required_file">
                                    <label for="radio03-1_01" class="f18">예</label>
                                </div>
                                <div class="radio-box w120">
                                    <input type="radio" name="radio03-1" id="radio03-1_02" :value="0" v-model="form.required_file">
                                    <label for="radio03-1_02" class="f18">아니오</label>
                                </div>

                                <error :form="form" name="required_file" />
                            </div>
                        </li>
                        <li class="full">
                            <div class="list-title">
                                <strong>유형</strong>
                            </div>
                            <div class="list-content flex flex-vc">
                                <div class="radio-box w120" v-for="type in types.data" :key="type.value">
                                    <input type="radio" name="radio04" :id="`type-${type.value}`" :value="type.value" v-model="form.type" @change="() => {form.options = [{...option}]}">
                                    <label :id="`type-${type.value}`" class="f18">{{ type.label }}</label>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="mt60">
                <div class="line-box black mb40"></div>
                <div class="title-box">
                    <h2>질의 상세 설정</h2>
                </div>
                <div class="write-box mt32">
                    <ul>
                        <template v-if="form.type === 'RADIO' || form.type === 'CHECKBOX' || form.type === 'SELECT'">
                            <li class="full flex-vt">
                                <div class="list-title pt25">
                                    <strong>문항등록</strong>
                                </div>
                                <div style="flex:1;">
                                    <div class="list-content" v-for="(option, index) in form.options" :key="index">
                                        <ul class="col-12">
                                            <li class="full">
                                                <div class="list-content flex flex-vc">
                                                    <b class="mr24">{{index + 1}}.</b>
                                                    <div class="input-box no-border flex-1">
                                                        <input type="text" class="f18" placeholder="답변 제목을 작성해주세요." v-model="form.options[index].title">

                                                        <button type="button" class="red" style="color:red;" @click.prevent="removeOption(index)">삭제</button>
                                                    </div>
                                                    <error :form="form" :name="`options.${index}.title`" />
                                                </div>
                                            </li>
                                            <li class="full">
                                                <div class="list-content flex flex-vc">
                                                    <div class="select-box no-border flex-1 mr45">
                                                        <select class="f18" v-model="form.options[index].type_satisfaction">
                                                            <option value="">충족 여부</option>
                                                            <option value="SATISFY">충족</option>
                                                            <option value="UNSATISFY">미충족</option>
                                                            <option value="NONE">무효</option>
                                                        </select>

                                                        <error :form="form" :name="`options.${index}.type_satisfaction`" />
                                                    </div>
                                                    <div class="select-box no-border flex-1 mr45" v-if="form.type !== 'CHECKBOX'">
                                                        <select class="f18" v-model="form.options[index].add_field">
                                                            <option value="">추가 필드</option>
                                                            <option :value="1">예</option>
                                                            <option :value="0">아니오</option>
                                                        </select>
                                                        <error :form="form" :name="`options.${index}.add_field`" />
                                                    </div>
                                                    <div class="input-box no-border flex-1" v-if="form.options[index].add_field == 1">
                                                        <input type="text" class="f18" placeholder="추가 필드 입력가이드 (ex. 인증명)" v-model="form.options[index].add_field_placeholder">
                                                        <error :form="form" :name="`options.${index}.add_field_placeholder`" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="full">
                                                <div class="list-content">
                                                    <div class="input-box no-border col-12">
                                                        <input type="text" class="f18" placeholder="충족 시 멘트" v-model="form.options[index].comment_satisfy">
                                                        <error :form="form" :name="`options.${index}.comment_satisfy`" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="full">
                                                <div class="list-content">
                                                    <div class="input-box no-border col-12">
                                                        <input type="text" class="f18" placeholder="비충족 시 멘트" v-model="form.options[index].comment_unsatisfy">
                                                        <error :form="form" :name="`options.${index}.comment_unsatisfy`" />
                                                    </div>
                                                </div>
                                            </li>
                                            <!--
                                            <li class="full">
                                                <div class="list-content">
                                                    <div class="input-box no-border col-12">
                                                        <input type="text" class="f18" placeholder="법규 정보 등록" v-model="form.options[index].comment_law">
                                                        <error :form="form" :name="`options.${index}.comment_law`" />
                                                    </div>
                                                </div>
                                            </li>-->
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="full">
                                <div class="list-content">
                                    <a href="#" class="write" @click.prevent="addOption">문항 등록 추가</a>
                                </div>
                            </li>
                        </template>

                        <template v-if="form.type === 'TEXT'">
                            <li class="full">
                                <div class="list-title">
                                    <strong>문항등록</strong>
                                </div>
                                <div class="list-content">
                                    <div class="input-box no-border">
                                        <input type="text" class="f18" placeholder="내용을 입력해주세요." v-model="form.description">

                                        <error :form="form" name="description" />
                                    </div>
                                </div>
                            </li>
                        </template>

                        <template v-if="form.type === 'TEXTGROUP'">
                            <li class="full flex-vt">
                                <div class="list-title pt25">
                                    <strong>문항등록</strong>
                                </div>
                                <div style="flex:1;">
                                    <div class="list-content" v-for="(option, index) in form.options" :key="index">
                                        <ul class="col-12">
                                            <li>
                                                <div class="list-content flex flex-vc">
                                                    <b class="mr24">{{index + 1}}.</b>
                                                    <div class="input-box no-border flex-1">
                                                        <input type="text" class="f18" placeholder="라벨 제목(before)을 입력해주세요." v-model="form.options[index].label_before">

                                                        <error :form="form" :name="`options.${index}.label_before`" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="list-content">
                                                    <div class="input-box no-border">
                                                        <input type="text" class="f18" placeholder="라벨 제목(after)을 입력해주세요." v-model="form.options[index].label_after">

                                                        <button type="button" class="red" style="color:red;" @click.prevent="removeOption(index)">삭제</button>

                                                        <error :form="form" :name="`options.${index}.label_after`" />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="full">
                                <div class="list-content">
                                    <a href="#" class="write" @click.prevent="addOption">문항 등록 추가</a>
                                </div>
                            </li>
                        </template>

                        <template v-if="form.type === 'NUMBER'">
                            <li class="full flex-vt">
                                <div class="list-title pt25">
                                    <strong>문항등록</strong>
                                </div>
                                <div style="flex:1;">
                                    <div class="list-content" v-for="(option, index) in form.options" :key="index">
                                        <ul class="col-12">
                                            <li>
                                                <div class="list-content flex flex-vc">
<!--                                                    <b class="mr24">{{index + 1}}.</b>-->
                                                    <div class="input-box no-border flex-1">
                                                        <input type="text" class="f18" placeholder="데이터의 이름을 입력해주세요." v-model="form.options[index].data_title">

                                                        <error :form="form" :name="`options.${index}.data_title`" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="list-content">
                                                    <div class="input-box no-border">
                                                        <input type="text" class="f18" placeholder="데이터의 단위를 입력해주세요." v-model="form.options[index].data_unit">

                                                        <button type="button" class="red" style="color:red;" @click.prevent="removeOption(index)">삭제</button>

                                                        <error :form="form" :name="`options.${index}.data_unit`" />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
<!--                            <li class="full">
                                <div class="list-content">
                                    <a href="#" class="write" @click.prevent="addOption">문항 등록 추가</a>
                                </div>
                            </li>-->
                        </template>

                        <li class="full">
                            <div class="list-title">
                                <strong>도움말</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input-editor :default="form.help" @change="data => form.help = data" />
                                </div>
                            </div>
                        </li>

                        <li class="full">
                            <div class="list-title">
                                <strong>메모</strong>
                            </div>
                            <div class="list-content">
                                <div class="textarea-box">
                                    <textarea class="f18" placeholder="내용을 입력해주세요." v-model="form.memo" style="padding:16px; border:1px solid #e1e1e1;"></textarea>

                                    <error :form="form" name="memo" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <error :form="form" name="options" />

            <div class="button-box flex-tr mt32">
                <a href="#" class="btn btn-lightgray px45 mr10" @click.prevent="() => {$router.back();}">취소</a>
                <a href="" class="btn btn-red px45 mr10" @click.prevent="remove">삭제</a>
                <a href="#" class="btn btn-blue px45" @click.prevent="store">등록</a>
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
                category_id: "",
                classification_id: "",
                industry_id: "",

                label_search: "",
                title: "",
                description: "",
                level: "",
                required: 1,
                give_exception: 0,
                give_exception_comment: "",
                can_file: 0,
                required_file: 0,
                help: "",
                type: "CHECKBOX",
                memo: "",

                options: [],

                files: [],
                files_mobile: [],
                files_remove_ids: [],
            }),

            domain: "",
            category_id: "",

            categories: {
                data: [],
            },

            classifications: {
                data: [],
            },

            industries: {
                data: [],
            },

            types: {
                data: [],
            },

            domains: {
                data: []
            },

            option: {
                id: "",
                order: "",
                question_id:"",
                title: "",
                add_field: 0,
                add_field_placeholder: "",
                type_satisfaction: "",
                comment_satisfy: "",
                comment_unsatisfy: "",
                comment_law: "",

                label_before: "",
                label_after: "",

                data_title: "",
                data_unit: "",
            }

        }
    },

    methods: {
        remove(){
            let confirmed = window.confirm("정말로 삭제하시겠습니까?");

            if(confirmed)
                this.form.delete("/api/admin/questions/" + this.item.id)
                        .then(response => {
                            this.$router.back();
                        });
        },

        store(){
            this.$store.commit("setLoading", true);

            if(this.item)
                return this.form.post("/api/admin/questions/" + this.item.id)
                        .then(response => {
                            this.$router.push("/admin/questions");
                        }).catch(() => {});

            this.form.post("/api/admin/questions")
                    .then(response => {
                        this.$router.push("/admin/questions");
                    }).catch(() => {});
        },

        getDomains(){
            this.$axios.get("/api/domains")
                    .then(response => {
                        this.domains = response.data;
                    });
        },

        getCategories(){
            this.$axios.get("/api/admin/categories")
                    .then(response => {
                        this.categories = response.data;
                    });
        },

        getTypes(){
            this.$axios.get("/api/admin/questions/types")
                    .then(response => {
                        this.types = response.data;
                    });
        },

        addOption(){
            this.form.options.push({...this.option});
        },

        removeOption(index){
            this.form.options.splice(index, 1);
        }
    },


    mounted() {
        this.form.options = [{...this.option}];

        this.getDomains();

        this.getTypes();

        this.getCategories();


        if(this.$route.query.id){
            this.$store.commit("setLoading", true);

            return this.$axios.get("/api/admin/questions/" + this.$route.query.id)
                    .then(response => {
                        this.item = response.data.data;

                        if(this.item.category && this.item.category.category)
                            this.category_id = this.item.category.category.id;

                        this.form.set({
                            ...this.form,
                            ...this.item
                        });

                        this.domain = this.item.category.domain;

                        this.loading = false;

                        $("html,body").scrollTop(0);
                    })
        }

        this.loading = false;


    }

}
</script>
