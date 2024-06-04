<template>
    <div class="admin-right">
        <div class="admin-right-container">
            <div class="flex flex-vc flex-tj">
                <div class="sca-box">
                    <ul>
                        <li><p>캠페인 관리</p></li>
                        <li class="active"><p>질의</p></li>
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

<!--                    <div class="select-box mr10">
                        <select v-model="form.active" @change="() => {form.page=1; filter();}">
                            <option value="">활성여부</option>
                            <option :value="1">활성</option>
                            <option :value="0">비활성</option>
                        </select>
                    </div>-->

                    <div class="select-box mr10">
                        <select v-model="form.domain" @change="() => {form.page=1; filter();}">
                            <option value="">도메인</option>
                            <option :value="domain.value" v-for="domain in domains.data" :key="domain.value">{{ domain.label }}</option>
                        </select>
                    </div>
                    <div class="select-box mr10">
                        <select v-model="form.category_id" @change="() => {form.page=1; form.sub_category_id = ''; filter();}">
                            <option value="">1차 카테고리</option>
                            <option :value="category.id" v-for="category in categories.data" :key="category.id" v-if="!category.category_id">{{ category.title }}</option>
                        </select>
                    </div>
                    <div class="select-box mr10">
                        <select v-model="form.sub_category_id" @change="() => {form.page=1; filter();}">
                            <option value="">2차 카테고리</option>
                            <option :value="category.id" v-for="category in categories.data" :key="category.id" v-if="category.category_id == form.category_id">{{ category.title }}</option>
                        </select>
                    </div>

                    <div class="select-box mr10">
                        <select v-model="form.column">
                            <option value="">검색 조건</option>
                            <option value="label_search">검색용 라벨</option>
                            <option value="title">제목</option>
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
                        <th>고유번호</th>

                        <th>영역</th>
                        <th>1차 카테고리</th>
                        <th>2차 카테고리</th>
                        <th>
                            제목
<!--                            <button class="btn-sort" @click.prevent="() => {form.order_by='title'; form.align = form.align === 'desc' ? 'asc' : 'desc'; form.page = 1; filter();}">
                                <i class="xi-renew"></i>
                            </button>-->
                        </th>
<!--                        <th>유형</th>
                        <th>필수</th>
                        <th>해당없음</th>
                        <th>첨부파일</th>-->

                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in items.data" style="cursor:pointer;" :key="item.id" @click.prevent="() => {$router.push(`/admin/questions/create?id=${item.id}`)}">
                        <td>{{item.category.symbol_domain}}-{{ item.id }}</td>

                        <td>{{ item.category ? item.category.format_domain : '' }}</td>
                        <td>{{ item.category && item.category.category ? item.category.category.title : item.category.title }}</td>
                        <td>{{ item.category ? item.category.title : '' }}</td>
                        <td>{{ item.title.length > 15 ? item.title.slice(0, 15) + "..." : item.title }}</td>
<!--                        <td>{{ item.label_search }}</td>-->

<!--                        <td>{{ item.format_type }}</td>
                        <td>{{ item.required ? 'Y' : 'N' }}</td>
                        <td>{{ item.give_exception ? 'Y' : 'N' }}</td>
                        <td>{{ item.required_file ? 'Y' : 'N' }}</td>-->

                        <td>
                            <div class="table-button-box" style="display: flex; gap:12px;">
                                <nuxt-link :to="`/admin/questions/create?id=${item.id}`" class="active">조회</nuxt-link>
                                <a href="#" class="active" @click.prevent.stop="copy(item)">복사</a>
<!--                                <a href="#" @click.prevent="remove(item)">삭제</a>-->
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
                    <nuxt-link :to="`/admin/questions/create?domain=${form.domain}`" class="btn btn-blue px45">등록</nuxt-link>
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

            this.$axios.get("/api/admin/questions", {
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

            this.$axios.patch("/api/admin/questions/copy/" + item.id)
                    .then(response => {
                    this.filter();
                });
        },

        remove(item){
            let confirmed = window.confirm("정말로 삭제하시겠습니까?");

            if(confirmed)
                this.form.delete("/api/admin/questions/" + item.id)
                        .then(response => {
                            this.items.data = this.items.data.filter(itemData => itemData.id != item.id);
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
