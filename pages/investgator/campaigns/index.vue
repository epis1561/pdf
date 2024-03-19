<template>
    <div class="admin-right">
        <div class="admin-right-container">
            <div class="flex flex-vc flex-tj">
                <div class="sca-box">
                    <ul>
                        <li><p>캠페인 관리</p></li>
                        <li class="active"><p>캠페인</p></li>
                    </ul>
                </div>

            </div>
            <div class="line-box mt32"></div>
            <form class="mt16 flex flex-vc flex-tj" @submit.prevent="filter()">
                <div class="flex flex-vc">
                    <div class="select-box mr10">
                        <select v-model="form.take" @change="() => {form.page=1; filter();}">
                            <option value="">목록 수</option>
                            <option value="10">10개</option>
                            <option value="50">50개</option>
                            <option value="100">100개</option>
                        </select>
                    </div>

                    <div class="select-box mr10">
                        <select v-model="form.active" @change="() => {form.page=1; filter();}">
                            <option value="" selected>활성여부</option>
                            <option :value="1">활성</option>
                            <option :value="0">비활성</option>
                        </select>
                    </div>

                    <div class="select-box mr10">
                        <select v-model="form.column">
                            <option value="">검색 조건</option>
                            <option value="provider">공급사</option>
                            <option value="title">캠페인명</option>
                        </select>
                    </div>

                    <div class="search-box mr10">
                        <input type="text" placeholder="검색어를 입력해주세요." v-model="form.word">
                    </div>

                    <div class="button-box">
                        <button type="submit" class="btn btn-active-2" @click.prevent="filter">검색</button>
                    </div>
                </div>

                <div class="list-count-box">
                    <p>목록 <b>{{items.meta.total.toLocaleString()}}</b> 건</p>
                </div>
            </form>
            <div class="table-box mt24">
                <table>
                    <thead>
                    <tr>
                        <th>번호</th>

                        <th>공급사</th>
                        <th>캠페인명</th>
                        <th>시작일</th>
                        <th>종료일</th>
                        <th>상태</th>
                        <th>활성여부</th>
                        <th>
                            배정된
                            <br/>실사자 수
                        </th>

                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in items.data" :key="item.id">
                        <td>{{ item.id }}</td>

                        <td>{{ item.campaign.provider.title }}</td>
                        <td>{{ item.campaign.title }}</td>
                        <td>{{ item.campaign.format_survey_started_at }}</td>
                        <td>{{ item.campaign.format_survey_finished_at }}</td>
                        <td :class="`m-state type01 ${item.state}`">
                            {{ item.campaign.format_state }}
                        </td>
                        <td>{{ item.campaign.active ? '활성' : '비활성' }}</td>
                        <td>{{ item.campaign.count_investgator }}</td>

                        <td>
                            <div class="table-button-box">
                                <button type="button" class="active" @click.prevent="() => {targetItem = item; users.data = []; getUsers();}">배정</button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <empty v-if="items.data.length === 0" />


            <div class="flex flex-vc flex-tj mt32">
                <div class="blank">&nbsp;</div>

                <pagination :meta="items.meta" @paginate="(page) => {form.page = page; filter()}" />

                <div></div>
            </div>

            <div class="popup-box fixed" v-if="targetItem">
                <div class="box active" data-name="popup01">
                    <div class="popup-head">
                        <div class="title-box">
                            <h2>실사자 목록</h2>
                        </div>
                        <a href="#" class="close" @click.prevent="targetItem = null">닫기</a>
                    </div>
                    <div class="popup-body">
                        <div class="line-box mb15"></div>
                        <form class="flex flex-vc flex-tj" @submit.prevent="getUsers">
                            <div class="flex flex-vc">
                                <div class="select-box mr10">
                                    <select v-model="usersForm.column">
                                        <option value="">검색 조건</option>
                                        <option value="contact">연락처</option>
                                        <option value="email">이메일</option>
                                        <option value="name">이름</option>
                                    </select>
                                </div>
                                <div class="search-box">
                                    <input type="text" placeholder="검색어를 입력해주세요." v-model="usersForm.word">
                                </div>
                                <div class="button-box">
                                    <button type="submit" class="btn btn-active-2" @click.prevent="getUsers">검색</button>
                                </div>
                            </div>
                            <div class="list-count-box">
                                <p>목록 <b>{{ users.meta.total.toLocaleString() }}</b>건</p>
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
                                <tr v-for="user in users.data" :key="user.id">
                                    <td>{{ user.id}}</td>

                                    <td>{{ user.email}}</td>
                                    <td>{{ user.contact}}</td>
                                    <td>{{ user.name}}</td>

                                    <td>
                                        <div class="table-button-box">
                                            <a href="#" class="active" @click="detachUser(user)" v-if="user.investgator">배정취소</a>
                                            <a href="#" class="active" @click="attachUser(user)" v-else>배정</a>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <empty v-if="users.data.length === 0" />
                        </div>

                        <div class="mt24"></div>

                        <pagination :meta="users.meta" @paginate="(page) => {usersForm.page = page; getUsers()}" />
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import Form from "~/utils/Form";
export default {
    middleware: ["investgator"],

    layout: "admin",

    components: {},

    data() {
        return {
            items: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            users: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            form: new Form(this.$axios, {
                page: 1,
                take: "",
                word: "",
                column: "",
                file: "",

                active: "",
            }),

            usersForm: new Form(this.$axios, {
                campaign_company_id: "",
                user_id: "",
                page: 1,
                take: "",
                word: "",
                column: "",
                file: "",

                active: "",
            }),

            targetItem: null,
        }
    },

    methods: {
        filter(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/investgator/campaignCompanies", {
                params: this.form.data()
            }).then(response => {
                this.items = response.data;
            });
        },
        
        getUsers(){
            this.usersForm.campaign_company_id = this.targetItem.id;

            this.$store.commit("setLoading", true);

            this.$axios.get("/api/investgator/users", {
                params: this.usersForm.data()
            }).then(response => {
                this.users = response.data;
            });
        },

        detachUser(user){
            this.usersForm.compaign_company_id = this.targetItem.id;
            this.usersForm.user_id = user.id;

            this.$store.commit("setLoading", true);

            this.form.delete("/api/investgators")
                    .then(response => {
                        this.getUsers();
                    });
        },

        attachUser(user){
            this.usersForm.compaign_company_id = this.targetItem.id;
            this.usersForm.user_id = user.id;

            this.$store.commit("setLoading", true);

            this.form.post("/api/investgators")
                    .then(response => {
                        this.getUsers();
                    });
        },
    },

    computed: {


    },

    mounted() {
        this.filter();
    }
}
</script>
