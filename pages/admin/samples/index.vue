<template>
    <div class="admin-right">
        <div class="admin-right-container">
            <div class="flex flex-vc flex-tj">
                <div class="sca-box">
                    <ul>
                        <li><p>게시판 관리</p></li>
                        <li class="active"><p>공지사항</p></li>
                    </ul>
                </div>
                <div class="button-box">
                    <a href="#" class="btn btn-red" @click.prevent="removeAll">삭제</a>
                </div>
            </div>
            <div class="line-box mt32"></div>
            <form class="mt16 flex flex-vc flex-tj" @submit.prevent="filter()">
                <div class="flex flex-vc">
                    <div class="select-box mr10">
                        <select v-model="form.column">
                            <option value="" selected>검색 조건</option>
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
                        <th>
                            <div class="m-input-checkbox type01" @click="toggle">
                                <input type="checkbox" id="" name="" checked
                                       v-if="form.selected_ids.length === items.data.length">
                                <input type="checkbox" id="" name="" v-else>
                                <label for=""></label>
                            </div>
                        </th>
                        <th>번호</th>
                        <th>제목</th>
                        <th>등록일자</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in items.data" :key="item.id">
                        <td>
                            <div class="m-input-checkbox type01">
                                <input type="checkbox" :id="item.id" :value="item.id" v-model="form.selected_ids">
                                <label :for="item.id"></label>
                            </div>
                        </td>
                        <td>{{ item.id }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.created_at }}</td>
                        <td>
                            <div class="table-button-box">
                                <nuxt-link :to="`/admin/notices/create?id=${item.id}`" class="active">조회</nuxt-link>
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
                    <nuxt-link to="/admin/notices/create" class="btn btn-blue px45">등록</nuxt-link>
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

            form: new Form(this.$axios, {
                selected_ids: [],
                password: "",

                page: 1,
                take: "",
                word: "",
                column: "",
                file: "",

                active: "",
            }),
        }
    },

    methods: {
        toggle(){
            if(this.form.selected_ids.length === this.items.data.length)
                return this.form.selected_ids = [];

            return this.form.selected_ids = this.items.data.map(item => item.id);
        },

        filter(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/admin/notices", {
                params: this.form.data()
            }).then(response => {
                this.items = response.data;
            });
        },

        removeAll(){
            this.form.password = prompt("비밀번호를 입력해주세요.");

            this.form.delete("/api/admin/notices/removeAll")
                    .then(response => {
                        this.items.data = this.items.data.filter(itemData => !this.form.selected_ids.includes(itemData.id));

                        this.form.selected_ids = [];
                    });
        },

        up(item){
            let index = this.items.data.indexOf(item);

            if (index > 0) {
                const itemToMove = this.items.data.splice(index, 1)[0]; // Remove the item from the array

                this.items.data.splice(index - 1, 0, itemToMove); // Insert the item one position ahead

                this.form.patch("/api/admin/notices/" + item.id + "/up");
            }
        },

        down(item){
            let index = this.items.data.indexOf(item);

            if (index < this.items.data.length - 1) {
                const itemToMove = this.items.data.splice(index, 1)[0]; // Remove the item from the array

                this.items.data.splice(index + 1, 0, itemToMove); // Insert the item one position ahead

                this.form.patch("/api/admin/notices/" + item.id + "/down");

            }

        },

        importExcel(e){
            this.form.file = e.target.files[0];

            e.target.value = "";

            this.$store.commit("setLoading", true);

            this.form.post("/api/admin/notices/import")
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

            this.form.post("/api/admin/notices/export")
                    .then(response => {
                        if(response.data){
                            let a = document.getElementById("download");

                            a.href = response.data;

                            a.click();
                        }
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
