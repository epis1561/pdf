<template>
    <div :class="{ 'background': isInvite, 'cover_black': isInvite ,}" class="mypage-right">

        <div>
            <div class="title-box">
                <h2>받은초대</h2>
            </div>
            <div class="mypage-table-box">
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>업체명</th>
                        <th>초대자</th>
                        <th>초대일자</th>
                        <th>상태</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in items.data" :key="item.id">
                        <td><input type="checkbox" name="check" id="check"></td>
                        <td>{{ item.company.title }}</td>
                        <td>이민호</td>
                        <td>2024.00.00</td>
                            <td v-show="item.state==='WAIT'"><a style="color:#4A51FF; padding-right:3px;" @click.prevent="accepted">수락</a>|<a style="color:#F61212; padding-left:3px;" @click.prevent="denied">거절</a></td>
                            <td v-show="item.state==='ACCEPT'">{{ item.format_state }}</td>
                            <td v-show="item.state==='DENY'">{{ item.format_state }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <empty v-if="items.data.length === 0" />

            <div class="paging-box">
                <ul>
                    <pagination :meta="items.meta" @paginate="(page) => {form.page = page; filter()}" />
                </ul>
            </div>
        </div>
        <pop-invitation :isInvite="isInvite" v-show="isInvite"/>
    </div>



</template>

<style>

</style>
<script>
import Form from "~/utils/Form";

export default {
    middleware: ["auth"],

    layout: "mypage",
    data(){
        return {
            isInvite:false,
            isChecked:false,
            form: new Form(this.$axios, {
                page: 1,
            }),

            items: {
                data: [],
                meta: {
                    current_page: 1,
                    last_page: 10,
                }
            },
            ids:[],

        }

    },

    methods: {
        filter(){
            this.$axios.get("/api/invitations", {
                prams: this.form.data(),
            }).then(response => {

                console.log(response.data);
                this.items = response.data;
            });
        },
        accepted(){
           this.items.data.state = 'ACCEPT';
            // this.form.patch("/api/invitations/accept/{id}")
            //         .then(response => {
            //
            //         });
        },
        denied(){
            this.items.data.state = 'DENY';
            // this.form.patch("/api/invitations/deny/{this.items.id}")
            //         .then(response => {
            //
            //         });
        }
    },

    computed: {

    },

    watch: {

    },

    mounted() {
        this.filter();

    }
}
</script>