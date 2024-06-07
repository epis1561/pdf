<template>
    <div class="mypage-right">
        <div>
            <div class="title-box">
                <h2>소속직원 관리</h2>
                <div class="button-box">
                    <a href="" class="btn btn-lightgray sm bdr4 h45 h-lg-35 px-lg-10 f18 f-lg-13 mr12 mr-lg-5">선택삭제</a>
                    <!--                                @click.prevent="remove"-->
                    <a href="" class="btn btn-black sm bdr4 h45 h-lg-35 px-lg-10 f18 f-lg-13" @click.prevent="activeInvitation = true">직원초대</a>
                </div>
            </div>
            <div class="mypage-table-box">
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>부서</th>
                        <th>직급</th>
                        <th>이름</th>
                        <th>이메일</th>
                        <th>등록일자</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in items.data" :key="item.id">

                        <td>
                            <input type="checkbox" name="check" id="check" :value="item.id" v-model="form.ids">
                        </td>
                        <td>{{ item.department }}</td>
                        <td>{{ item.position }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.format_created_at }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <empty v-if="items.data.length === 0"/>

            <div class="paging-box">
                <ul>
                    <pagination :meta="items.meta" @paginate="(page) => {form.page = page; filter()}"/>
                </ul>
            </div>
        </div>
        <pop-invitation v-if="activeInvitation" @close="activeInvitation = false"/>
    </div>


</template>

<style>

</style>
<script>
import Form from "~/utils/Form";

export default {
    middleware: ["user"],

    layout: "mypage",

    data() {
        return {
            activeInvitation: false,
            isChecked: false,
            form: new Form(this.$axios, {
                page: 1,
                ids: [],
            }),

            items: {
                data: [],
                meta: {
                    current_page: 1,
                    last_page: 10,
                }
            },

        }

    },

    methods: {
        filter() {
            this.$axios.get("/api/members", {
                prams: this.form.data(),
            }).then(response => {

                this.items = response.data;
            });
        },
        // checkbox(){
        //     this.isChecked= ! this.isChecked;
        //     if(this.isChecked){
        //         this.ids.push(this.item.id);
        //     }
        //     else{
        //         const index = this.ids.indexOf(this.item.id);
        //         if (index > -1) {
        //             this.ids.splice(index, 1);
        //         }
        //     }
        // },
        remove(){
            this.form.delete("/api/admin/examples/1")

                    // .then(response => {
                    //     this.items.data = this.items.data.filter(itemData => !this.form.selected_ids.includes(itemData.id));
                    //     this.form.selected_ids = [];
                    // });
        },
    },

    computed: {},

    watch: {},

    mounted() {
        this.filter();

    }
}
</script>

