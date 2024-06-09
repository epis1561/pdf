<template>
    <div class="admin-right">
        <div class="admin-right-container">
            <div class="flex flex-vc flex-tj">
                <div class="sca-box">
                    <ul>
                        <li><p>제안 관리</p></li>
                        <li class="active"><p>제안</p></li>
                    </ul>
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
                    <colgroup>
                        <col style="width:10%">

                        <col style="width:10%">
                        <col style="width:10%">
                        <col style="width:10%">
                        <col style="width:20%">
                        <col style="width:30%">

                        <col style="width:10%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th>고유번호</th>

                        <th>회사</th>
                        <th>담당자명</th>
                        <th>연락처</th>
                        <th>제목</th>
                        <th>내용</th>

                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in items.data" :key="item.id">
                        <td>{{ item.id }}</td>

                        <td>{{ item.company }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.contact }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.description }}</td>
                        <td>
                            <div class="table-button-box" style="display: flex; gap:12px;" v-if="item.check == 0">
                                <a href="#" @click.prevent="check(item)">확인</a>
                            </div>
                            <template v-else>확인됨</template>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <empty v-if="items.data.length === 0" />
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

            domains: {
                data: [],
            },

            form: new Form(this.$axios, {
                page: 1,

                take: 100,

                word: "",
                column: "",
                file: "",

                domain: this.$route.query.domain || "",
                category_id: "",
                sub_category_id: "",


                order_by: "",
                align: "",

                active: "",
            }),

        }
    },

    methods: {
        filter(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/admin/suggestions", {
                params: this.form.data()
            }).then(response => {
                this.items = response.data;
            });
        },

        getDomains(){
            this.$axios.get("/api/domains")
                    .then(response => {
                        this.domains = response.data;
                    });
        },

        copy(item){
            this.$store.commit("setLoading", true);

            this.$axios.patch("/api/admin/suggestions/copy/" + item.id)
                    .then(response => {
                    this.filter();
                });
        },

        check(item){
            this.form.patch("/api/admin/suggestions/check/" + item.id)
                    .then(response => {
                        this.items.data = this.items.data.map(itemData => {
                            if(itemData.id == response.data.id)
                                return response.data;

                            return itemData;
                        });
                    });
        },


    },

    watch: {
        "$route.query.domain": {
            handler(){
                this.form.domain = this.$route.query.domain;

                this.filter();
            }
        }
    },

    computed: {

        categories(){
            return this.$store.state.categories;
        }
    },

    mounted() {
        this.getDomains();

        this.filter();
    }
}
</script>
