<template>
    <div class="admin-right" v-if="!loading">
        <div class="admin-right-container">
            <div class="sca-box">
                <ul>
                    <li><p>회원 관리</p></li>
                    <li class="active"><p>회사</p></li>
                </ul>
            </div>
            <div class="mt30">
                <div class="write-box">
                    <ul>
                        <li>
                            <div class="list-title">
                                <strong>기업명</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해 주세요." v-model="form.title">

                                    <error :form="form" name="title" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="list-title">
                                <strong>사업자번호</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해 주세요." v-model="form.business_number">

                                    <error :form="form" name="business_number" />
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
                                <strong>대표자명</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해주세요." v-model="form.president">

                                    <error :form="form" name="president" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="list-title">
                                <strong>표준사업분류</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해 주세요." v-model="form.category">

                                    <error :form="form" name="category" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="list-title">
                                <strong>주요제품</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해 주세요." v-model="form.products">

                                    <error :form="form" name="products" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>유효기간</strong>
                            </div>
                            <div class="list-content">
                                <div class="date-box no-border">
                                    <input type="date" class="f18" placeholder="일자를 선택해주세요" v-model="form.expired_at">

                                    <error :form="form" name="expired_at" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>활성여부</strong>
                            </div>
                            <div class="list-content">
                                <div class="select-box no-border">
                                    <select class="f18" v-model="form.active">
                                        <option value="" disabled>선택</option>
                                        <option :value="1">활성</option>
                                        <option :value="0">비활성</option>
                                    </select>

                                    <error :form="form" name="active" />
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
                    </ul>
                </div>
            </div>

            <div class="button-box flex-tr mt32">
                <a href="" class="btn btn-lightgray px45 mr10" @click.prevent="() => $router.back()">취소</a>
                <a href="" class="btn btn-blue px45" @click.prevent="store">등록</a>
            </div>

            <template v-if="item">
                <div class="line-box black my40"></div>

                <div class="flex flex-vc flex-tj">
                    <div class="title-box">
                        <h2>소속 사용자</h2>
                    </div>
                    <div class="button-box">
<!--                        <a href="/asset/files/사용자업로드양식.xlsx" class="btn btn-active mr10">엑셀 업로드 양식</a>

                        <input type="file" id="excel" style="position: absolute; z-index:-1; left:-100000px;" @change="importExcel">
                        <label for="excel" class="btn btn-active mr10">엑셀 업로드</label>

                        <a href="#" style="opacity:0; position:absolute; left:-10000px;" id="download"></a>
                        <a href="#" class="btn btn-active-2 mr10" @click.prevent="exportExcel">엑셀 다운로드</a>-->

                        <nuxt-link :to="`/admin/users/create?company_id=${item.id}`" class="btn btn-blue">사용자 추가</nuxt-link>
                    </div>
                </div>
                <div class="table-box mt24">
                    <table>
                        <thead>
                        <tr>
                            <th>번호</th>
                            <th>아이디</th>
                            <th>연락처</th>
                            <th>이름</th>
                            <th>활성여부</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="user in users.data" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.ids }}</td>
                            <td>{{ user.contact }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.active ? '활성' : '비활성' }}</td>
                            <td>
                                <div class="table-button-box">
                                    <nuxt-link :to="`/admin/users/create?id=${user.id}`" class="active">조회</nuxt-link>
                                    <a href="#" @click.prevent="detachUser(user)">삭제</a>
                                </div>
                            </td>
                        </tr>

                        </tbody>
                    </table>

                    <empty v-if="users.data.length === 0" />
                </div>
                <div class="flex flex-vc flex-tj mt32">
                    <div class="blank">&nbsp;</div>

                    <pagination :meta="users.meta" @paginate="(page) => {userForm.page = page; getUsers()}" />

                    <!--                    <div class="button-box">
                                            <a href="" class="btn btn-blue px45">등록</a>
                                        </div>-->
                </div>
            </template>
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
                file: "",
                user_id: "",
                company_id: "",

                title: "",
                business_number: "",
                contact: "",
                president: "",
                category: "",
                products: "",
                address: "",
                address_detail: "",
                address_zipcode: "",
                expired_at: "",
                active: 1,

                files: [],
                files_mobile: [],
                files_remove_ids: [],
            }),

            categories: {
                data: [],
            }
        }
    },

    methods: {
        store(){
            this.$store.commit("setLoading", true);

            if(this.item)
                return this.form.post("/api/admin/companies/" + this.item.id)
                    .then(response => {
                        this.$router.push("/admin/companies");
                    });

            this.form.post("/api/admin/companies")
                .then(response => {
                    this.$router.push("/admin/companies");
                });
        },

        getUsers(){
            this.userForm.company_id = this.$route.query.id;

            this.$axios.get("/api/admin/users", {
                params: this.userForm.data()
            }).then(response => {
                this.users = response.data;
            });
        },

        importExcel(e){
            this.form.file = e.target.files[0];

            e.target.value = "";

            this.$store.commit("setLoading", true);

            this.form.post("/api/admin/companies/" + this.$route.query.id  + "/importUsers")
                    .then(response => {
                        this.$store.commit("setPop", {
                            description: "",
                        });

                        this.getUsers();

                        if(response.data){
                            let a = document.getElementById("download");

                            a.href = response.data;

                            a.click();
                        }
                    })
        },

        exportExcel(){
            this.$store.commit("setLoading", true);

            this.form.company_id = this.$route.query.id;

            this.form.post("/api/admin/users/export")
                    .then(response => {
                        if(response.data){
                            let a = document.getElementById("download");

                            a.href = response.data;

                            a.click();
                        }
                    });
        },

        detachUser(user){
            this.form.user_id = user.id;

            this.$store.commit("setLoading", true);

            this.form.post("/api/admin/companies/" + this.item.id + "/detachUser")
                    .then(response => {
                        this.getUsers();
                    });
        },
    },


    mounted() {
        if(this.$route.query.id){
            this.getUsers();

            return this.$axios.get("/api/admin/companies/" + this.$route.query.id)
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
