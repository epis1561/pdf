<template>
    <div class="admin-right">
        <div class="admin-right-container">
            <div class="flex flex-vc flex-tj">
                <div class="sca-box">
                    <ul>
                        <li><p>회원 관리</p></li>
                        <li class="active"><p>회원</p></li>
                    </ul>
                </div>
                <div class="button-box">
                    <a href="#" style="opacity:0; position:absolute; left:-10000px;" id="download"></a>
                    <a href="#" class="btn btn-active-2" @click.prevent="exportExcel">엑셀 다운로드</a>
                </div>
            </div>
            <div class="line-box mt32"></div>
            <div class="mt16 flex flex-vc flex-tj">
                <form class="flex flex-vc" @submit.prevent="filter">
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
                            <option value="">활성여부</option>
                            <option :value="1">활성</option>
                            <option :value="0">비활성</option>
                        </select>
                    </div>

                    <div class="select-box mr10">
                        <select v-model="form.type" @change="() => {form.page=1; filter();}">
                            <option value="">권한 유형</option>
                            <option :value="type.value" v-for="type in types" :key="type.value">{{ type.label }}</option>
                            <option value="COMPANY_ADMIN">회사 관리자</option>
                        </select>
                    </div>

                    <div class="select-box mr10">
                        <select v-model="form.role" @change="() => {form.page=1; filter();}">
                            <option value="">소속 유형</option>
                            <option value="PROVIDER">클라이언트</option>
                            <option value="COMPANY">회사</option>
                            <option value="INVESTIGATOR">실사파트너</option>
                        </select>
                    </div>

                    <div class="select-box mr10">
                        <select v-model="form.column">
                            <option value="">검색 조건</option>
                            <option value="ids">아이디</option>
                            <option value="contact">연락처</option>
                            <option value="name">담당자명</option>
                        </select>
                    </div>

                    <div class="search-box mr10">
                        <input type="text" placeholder="검색어를 입력해주세요." v-model="form.word">
                    </div>

                    <div class="button-box">
                        <button type="submit" class="btn btn-active-2" @click.prevent="filter">검색</button>
                    </div>
                </form>

                <div class="list-count-box">
                    <p>목록 <b>{{items.meta.total.toLocaleString()}}</b> 건</p>
                </div>
            </div>
            <div class="table-box mt24">
                <table>
                    <thead>
                    <tr>
                        <th>번호</th>

                        <th>권한 유형</th>
                        <th>소속 유형</th>
                        <th>기업명</th>
                        <th>아이디</th>
                        <th>연락처</th>
                        <th>담당자명</th>
                        <th>가입일</th>
                        <th>활성여부</th>

                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in items.data" :key="item.id">
                        <td>{{ item.id }}</td>

                        <td>{{ item.format_type }}</td>
                        <td>{{ item.role }}</td>
                        <td>{{ item.company ? item.company.title : "" }}</td>
                        <td>{{ item.ids }}</td>
                        <td>{{ item.contact }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.format_created_at }}</td>
                        <td>{{ item.active ? '활성' : '비활성' }}</td>

                        <td style="white-space: nowrap;">
                            <div class="table-button-box">
                                <nuxt-link :to="`/admin/users/create?id=${item.id}`" class="active">조회</nuxt-link>
                                <a href="#" @click.prevent="remove(item)">삭제</a>
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

                <div class="button-box">
                    <nuxt-link to="/admin/users/create" class="btn btn-blue px45">등록</nuxt-link>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import Form from "@/utils/Form";
export default {
    middleware: ["admin"],

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
            types: {
                data: [],
            },

            form: new Form(this.$axios, {
                page: 1,
                type: "",
                take: "",
                word: "",
                role: "",
                column: "",
                file: "",

                active: "",
            }),
        }
    },

    methods: {
        filter(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/admin/users", {
                params: this.form.data()
            }).then(response => {
                this.items = response.data;
            });
        },

        remove(item){
            let confirmed = window.confirm("정말로 삭제하시겠습니까?");

            if(confirmed)
                this.form.delete("/api/admin/users/" + item.id)
                        .then(response => {
                            this.items.data = this.items.data.filter(itemData => itemData.id != item.id);
                        });
        },

        up(item){
            let index = this.items.data.indexOf(item);

            if (index > 0) {
                const itemToMove = this.items.data.splice(index, 1)[0]; // Remove the item from the array

                this.items.data.splice(index - 1, 0, itemToMove); // Insert the item one position ahead

                this.form.patch("/api/admin/users/" + item.id + "/up");
            }
        },

        down(item){
            let index = this.items.data.indexOf(item);

            if (index < this.items.data.length - 1) {
                const itemToMove = this.items.data.splice(index, 1)[0]; // Remove the item from the array

                this.items.data.splice(index + 1, 0, itemToMove); // Insert the item one position ahead

                this.form.patch("/api/admin/users/" + item.id + "/down");

            }

        },

        importExcel(e){
            this.form.file = e.target.files[0];

            e.target.value = "";

            this.$store.commit("setLoading", true);

            this.form.post("/api/admin/users/import")
                    .then(response => {
                        this.$store.commit("setPop", {
                            description: "",
                        });

                        this.filter();

                        if(response.data){
                            let a = document.getElementById("download");

                            a.href = response.data;

                            a.click();
                        }
                    })
        },

        exportExcel(){
            this.$store.commit("setLoading", true);

            this.form.post("/api/admin/users/export")
                    .then(response => {
                        if(response.data){
                            let a = document.getElementById("download");

                            a.href = response.data;

                            a.click();
                        }
                    });
        },

        getTypes(){
            this.$axios.get("/api/admin/users/types")
                    .then(response => {
                        this.types = response.data.data;
                    });
        }

    },

    computed: {


    },

    mounted() {
        this.getTypes();

        this.filter();
    }
}
</script>
