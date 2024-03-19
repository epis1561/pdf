<template>
    <div class="admin-right">
        <div class="admin-right-container">
            <div class="flex flex-vc flex-tj">
                <div class="sca-box">
                    <ul>
                        <li><p>대메뉴</p></li>
                        <li class="active"><p>소메뉴</p></li>
                    </ul>
                </div>
                <div class="button-box">
                    <a href="/asset/files/회사업로드양식.xlsx" class="btn btn-active mr10">엑셀 업로드 양식</a>

                    <input type="file" id="excel" style="position: absolute; z-index:-1; left:-100000px;" @change="importExcel">
                    <label for="excel" class="btn btn-active mr10">엑셀 업로드</label>

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
                        <select v-model="form.column">
                            <option value="">검색 조건</option>
                            <option value="">조건명</option>
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

                        <th>내용</th>
                        <th>활성여부</th>

                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in items.data" :key="item.id">
                        <td>{{ item.id }}</td>

                        <td>{{ item.title }}</td>
                        <td>{{ item.active ? '활성' : '비활성' }}</td>

                        <td>
                            <div class="table-button-box">
                                <nuxt-link :to="`/admin/examples/create?id=${item.id}`" class="active">조회</nuxt-link>
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
                    <nuxt-link to="/admin/examples/create" class="btn btn-blue px45">등록</nuxt-link>
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
        filter(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/admin/examples", {
                params: this.form.data()
            }).then(response => {
                this.items = response.data;
            });
        },

        remove(item){
            let confirmed = window.confirm("정말로 삭제하시겠습니까?");

            if(confirmed)
                this.form.delete("/api/admin/examples/" + item.id)
                        .then(response => {
                            this.items.data = this.items.data.filter(itemData => itemData.id != item.id);
                        });
        },

        up(item){
            let index = this.items.data.indexOf(item);

            if (index > 0) {
                const itemToMove = this.items.data.splice(index, 1)[0]; // Remove the item from the array

                this.items.data.splice(index - 1, 0, itemToMove); // Insert the item one position ahead

                this.form.patch("/api/admin/examples/" + item.id + "/up");
            }
        },

        down(item){
            let index = this.items.data.indexOf(item);

            if (index < this.items.data.length - 1) {
                const itemToMove = this.items.data.splice(index, 1)[0]; // Remove the item from the array

                this.items.data.splice(index + 1, 0, itemToMove); // Insert the item one position ahead

                this.form.patch("/api/admin/examples/" + item.id + "/down");

            }

        },

        importExcel(e){
            this.form.file = e.target.files[0];

            e.target.value = "";

            this.$store.commit("setLoading", true);

            this.form.post("/api/admin/examples/import")
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

            this.form.post("/api/admin/examples/export")
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
