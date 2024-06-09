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
                        <th>업체명</th>
                        <th>초대자</th>
                        <th>초대일자</th>
                        <th>상태</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in items.data" :key="item.id">
                        <td>{{ item.company.title }}</td>
                        <td>{{ item.user.name }}</td>
                        <td>{{ item.format_created_at }}</td>

                        <td v-if="item.state==='WAIT'" style="display:flex; align-items: center; justify-content: center; gap:8px;">
                            <a style="color:#4A51FF; padding-right:3px;" @click.prevent="accept(item)">수락</a>
                            <span class="hyphen" style="color:#999; font-size:12px;">|</span>
                            <a style="color:#F61212; padding-left:3px;" @click.prevent="deny(item)">거절</a>
                        </td>
                        <td v-else>{{ item.format_state }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <empty v-if="items.data.length === 0"/>

            <pagination :meta="items.meta" @paginate="(page) => {form.page = page; filter()}"/>

        </div>
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
            form: new Form(this.$axios, {
                page: 1,
            }),

            items: {
                data: [],
                meta: {
                    current_page: 1,
                    last_page: 1,
                }
            },
        }

    },

    methods: {
        filter() {
            this.$axios.get("/api/invitations", {
                prams: this.form.data(),
            }).then(response => {
                this.items = response.data;
            });
        },
        accept(item) {
            this.form.patch("/api/invitations/accept/" + item.id)
                .then(response => {
                    this.items.data = this.items.data.map(itemData => {
                        if(itemData.id == item.id)
                            return response.data;

                        return itemData;
                    });

                    this.$auth.fetchUser();
                });
        },
        deny(item) {
            this.$store.commit("setLoading", true);

            this.form.patch("/api/invitations/deny/" + item.id)
                    .then(response => {
                        this.items.data = this.items.data.map(itemData => {
                            if(itemData.id == item.id)
                                return response.data;

                            return itemData;
                        })
                    });
        }
    },

    computed: {},

    watch: {},

    mounted() {
        this.filter();

    }
}
</script>