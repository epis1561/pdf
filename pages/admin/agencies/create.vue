<template>
    <div class="admin-right" v-if="!loading">
        <div class="admin-right-container">
            <div class="sca-box">
                <ul>
                    <li><p>회원 관리</p></li>
                    <li class="active"><p>실사파트너</p></li>
                </ul>
            </div>
            <div class="mt30">
                <div class="write-box">
                    <ul>
                        <li>
                            <div class="list-title">
                                <strong>실사파트너명</strong>
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
                                <strong>담당자명</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해주세요." v-model="form.name">

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
                <a href="" class="btn btn-red px45 mr10" @click.prevent="remove">삭제</a>
                <a href="" class="btn btn-blue px45" @click.prevent="store">등록</a>
            </div>

            <template v-if="item">
                <div class="line-box black my40"></div>

                <div class="flex flex-vc flex-tj">
                    <div class="title-box">
                        <h2>실사자</h2>
                    </div>
                </div>
                <div class="table-box mt24">
                    <table>
                        <thead>
                        <tr>
                            <th>번호</th>
                            <th>이메일</th>
                            <th>연락처</th>
                            <th>이름</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="user in includeUsers.data" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.contact }}</td>
                            <td>{{ user.name }}</td>
                            <td>
                                <div class="table-button-box">
<!--                                    <nuxt-link :to="`/admin/users/create?id=${user.id}`" class="active">조회</nuxt-link>-->
                                    <a href="#" @click.prevent="unmaster(user)" v-if="user.masterOfAgency == 1">관리자 해제</a>
                                    <a href="#" @click.prevent="master(user)" v-else>관리자 지정</a>
                                    <a href="#" @click.prevent="detachUser(user)">제외</a>
                                </div>
                            </td>
                        </tr>

                        </tbody>
                    </table>

                    <empty v-if="includeUsers.data.length === 0" />
                </div>
                <div class="flex flex-vc flex-tj mt32">
                    <div class="blank">&nbsp;</div>

                    <pagination :meta="includeUsers.meta" @paginate="(page) => {includeUsersForm.page = page; getIncludeUsers()}" />

                    <div class="button-box">
                        <a href="#" class="btn btn-blue px45" @click.prevent="activePop = true">추가</a>
                    </div>
                </div>

                <div class="popup-box fixed" v-if="activePop">
                    <div class="box active" data-name="popup01">
                        <div class="popup-head">
                            <div class="title-box">
                                <h2>회원 목록</h2>
                            </div>
                            <a href="#" class="close" @click.prevent="activePop = false">닫기</a>
                        </div>
                        <div class="popup-body">
                            <div class="line-box mb15"></div>
                            <form class="flex flex-vc flex-tj" @submit.prevent="getExcludeUsers">
                                <div class="flex flex-vc">
                                    <div class="select-box mr10">
                                        <select v-model="excludeUsersForm.column">
                                            <option value="">검색 조건</option>
                                            <option value="contact">연락처</option>
                                            <option value="email">이메일</option>
                                            <option value="name">이름</option>
                                        </select>
                                    </div>
                                    <div class="search-box">
                                        <input type="text" placeholder="검색어를 입력해주세요." v-model="excludeUsersForm.word">
                                    </div>
                                    <div class="button-box">
                                        <button type="submit" class="btn btn-active-2" @click.prevent="getExcludeUsers">검색</button>
                                    </div>
                                </div>
                                <div class="list-count-box">
                                    <p>목록 <b>{{ excludeUsers.meta.total.toLocaleString() }}</b>건</p>
                                </div>
                            </form>
                            <div class="table-box mt24">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>번호</th>

                                        <th>이메일</th>
                                        <th>연락처</th>
                                        <th>이름</th>

                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="user in excludeUsers.data" :key="user.id">
                                        <td>{{ user.id}}</td>

                                        <td>{{ user.email}}</td>
                                        <td>{{ user.contact}}</td>
                                        <td>{{ user.name}}</td>

                                        <td>
                                            <div class="table-button-box">
                                                <a href="#" class="active" @click="attachUser(user)">추가</a>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                                <empty v-if="excludeUsers.data.length === 0" />
                            </div>

                            <div class="mt24"></div>

                            <pagination :meta="includeUsers.meta" @paginate="(page) => {includeUsersForm.page = page; getIncludeUsers()}" />

                        </div>
                    </div>
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

            activePop : false,

            includeUsers: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            excludeUsers: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            includeUsersForm: new Form(this.$axios, {
                file: "",
                page: 1,
                agency_id: this.$route.query.id,
            }),

            excludeUsersForm: new Form(this.$axios, {
                file: "",
                column: "",
                word: "",
                page: 1,
                agency_id: this.$route.query.id,
            }),

            form: new Form(this.$axios, {
                file: "",
                user_id: "",
                agency_id: "",

                title: "",
                business_number: "",
                name: "",
                contact: "",
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
        remove(){
            let confirmed = window.confirm("정말로 삭제하시겠습니까?");

            if(confirmed)
                this.form.delete("/api/admin/agencies/" + this.item.id)
                        .then(response => {
                            this.$router.back();
                        });
        },

        store(){
            if(this.item)
                return this.form.post("/api/admin/agencies/" + this.item.id)
                    .then(response => {
                        this.$router.push("/admin/agencies");
                    });

            this.form.post("/api/admin/agencies")
                .then(response => {
                    this.$router.push("/admin/agencies");
                });
        },

        getIncludeUsers(){
            this.$axios.get("/api/admin/agencies/" + this.$route.query.id + "/includeUsers", {
                params: this.includeUsersForm.data()
            }).then(response => {
                this.includeUsers = response.data;
            });
        },

        getExcludeUsers(){
            this.$axios.get("/api/admin/agencies/" + this.$route.query.id + "/excludeUsers", {
                params: this.excludeUsersForm.data()
            }).then(response => {
                this.excludeUsers = response.data;
            });
        },

        detachUser(user){
            this.form.user_id = user.id;

            this.$store.commit("setLoading", true);

            this.form.patch("/api/admin/agencies/" + this.item.id + "/detach")
                    .then(response => {
                        this.getExcludeUsers();
                        this.getIncludeUsers();
                    });
        },

        attachUser(user){
            this.form.user_id = user.id;

            this.$store.commit("setLoading", true);

            this.form.patch("/api/admin/agencies/" + this.item.id + "/attach")
                    .then(response => {
                        this.getExcludeUsers();
                        this.getIncludeUsers();
                    });
        },

        master(user){
            this.form.user_id = user.id;

            this.$store.commit("setLoading", true);

            this.form.patch("/api/admin/agencies/" + this.item.id + "/master")
                    .then(response => {
                        this.getIncludeUsers();
                    });
        },

        unmaster(user){
            this.form.user_id = user.id;

            this.$store.commit("setLoading", true);

            this.form.patch("/api/admin/agencies/" + this.item.id + "/unmaster")
                    .then(response => {
                        this.getIncludeUsers();
                    });
        },
    },


    mounted() {
        if(this.$route.query.id){
            this.getIncludeUsers();
            this.getExcludeUsers();

            return this.$axios.get("/api/admin/agencies/" + this.$route.query.id)
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
