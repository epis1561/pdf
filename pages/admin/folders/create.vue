<template>
    <div class="admin-right" v-if="!loading">
        <div class="admin-right-container">
            <div class="sca-box">
                <ul>
                    <li><p>대메뉴</p></li>
                    <li class="active"><p>중메뉴</p></li>
                </ul>
            </div>
            <div class="mt30">
                <div class="write-box">
                    <ul>
                        <li class="full">
                            <div class="list-title">
                                <strong>단문 텍스트</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해 주세요." v-model="form.text">

                                    <error :form="form" name="text" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="list-title">
                                <strong>주소</strong>
                            </div>

                            <input-address @change="(data) => form[data.name] = data.value" :form="form" />

                            <error :form="form" name="address" />
                            <error :form="form" name="address_detail" />
                            <error :form="form" name="address_zipcode" />
                        </li>
                        <li>
                            <div class="list-title">
                                <strong>선택</strong>
                            </div>
                            <div class="list-content">
                                <div class="select-box no-border">
                                    <select class="f18" v-model="form.select">
                                        <option value="" disabled>선택</option>
                                    </select>

                                    <error :form="form" name="select" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="list-title">
                                <strong>날짜</strong>
                            </div>
                            <div class="list-content">
                                <div class="date-box no-border">
                                    <input type="date" class="f18" placeholder="일자를 선택해주세요" v-model="form.date">

                                    <error :form="form" name="date" />
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="button-box flex-tr mt32">
                <a href="" class="btn btn-lightgray px45 mr10" @click.prevent="() => $router.back()">취소</a>
                <a href="" class="btn btn-blue px45" @click.prevent="store">등록</a>
            </div>

            <div class="line-box black my40"></div>

            <div class="flex flex-vc flex-tj">
                <div class="title-box">
                    <h2>소속 사용자</h2>
                </div>
                <div class="button-box">
                    <a href="" class="btn btn-active mr10">엑셀 업로드 양식</a>
                    <a href="" class="btn btn-active mr10">엑셀 업로드</a>
                    <a href="" class="btn btn-active-2">엑셀 다운로드</a>
                </div>
            </div>
            <div class="table-box mt24">
                <table>
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>기업명</th>
                        <th>사업자번호</th>
                        <th>연락처</th>
                        <th>대표자명</th>
                        <th>유효기간</th>
                        <th>활성여부</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>3525</td>
                        <td>Honest Family</td>
                        <td>000-00-00000</td>
                        <td>000-00-00000</td>
                        <td>김OO</td>
                        <td>2024-00-00</td>
                        <td>활성</td>
                        <td>
                            <div class="table-button-box">
                                <a href="" class="active">조회</a>
                                <a href="">삭제</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3525</td>
                        <td>Honest Family</td>
                        <td>000-00-00000</td>
                        <td>000-00-00000</td>
                        <td>김OO</td>
                        <td>2024-00-00</td>
                        <td>활성</td>
                        <td>
                            <div class="table-button-box">
                                <a href="" class="active">조회</a>
                                <a href="">삭제</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3525</td>
                        <td>Honest Family</td>
                        <td>000-00-00000</td>
                        <td>000-00-00000</td>
                        <td>김OO</td>
                        <td>2024-00-00</td>
                        <td>활성</td>
                        <td>
                            <div class="table-button-box">
                                <a href="" class="active">조회</a>
                                <a href="">삭제</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3525</td>
                        <td>Honest Family</td>
                        <td>000-00-00000</td>
                        <td>000-00-00000</td>
                        <td>김OO</td>
                        <td>2024-00-00</td>
                        <td>활성</td>
                        <td>
                            <div class="table-button-box">
                                <a href="" class="active">조회</a>
                                <a href="">삭제</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3525</td>
                        <td>Honest Family</td>
                        <td>000-00-00000</td>
                        <td>000-00-00000</td>
                        <td>김OO</td>
                        <td>2024-00-00</td>
                        <td>활성</td>
                        <td>
                            <div class="table-button-box">
                                <a href="" class="active">조회</a>
                                <a href="">삭제</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3525</td>
                        <td>Honest Family</td>
                        <td>000-00-00000</td>
                        <td>000-00-00000</td>
                        <td>김OO</td>
                        <td>2024-00-00</td>
                        <td>활성</td>
                        <td>
                            <div class="table-button-box">
                                <a href="" class="active">조회</a>
                                <a href="">삭제</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3525</td>
                        <td>Honest Family</td>
                        <td>000-00-00000</td>
                        <td>000-00-00000</td>
                        <td>김OO</td>
                        <td>2024-00-00</td>
                        <td>활성</td>
                        <td>
                            <div class="table-button-box">
                                <a href="" class="active">조회</a>
                                <a href="">삭제</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3525</td>
                        <td>Honest Family</td>
                        <td>000-00-00000</td>
                        <td>000-00-00000</td>
                        <td>김OO</td>
                        <td>2024-00-00</td>
                        <td>활성</td>
                        <td>
                            <div class="table-button-box">
                                <a href="" class="active">조회</a>
                                <a href="">삭제</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3525</td>
                        <td>Honest Family</td>
                        <td>000-00-00000</td>
                        <td>000-00-00000</td>
                        <td>김OO</td>
                        <td>2024-00-00</td>
                        <td>활성</td>
                        <td>
                            <div class="table-button-box">
                                <a href="" class="active">조회</a>
                                <a href="">삭제</a>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex flex-vc flex-tj mt32">
                <div class="blank">&nbsp;</div>
                <div class="paging-box">
                    <ul>
                        <li class="prev"><a href="">이전</a></li>
                        <li class="active"><a href="">1</a></li>
                        <li><a href="">2</a></li>
                        <li><a href="">3</a></li>
                        <li><a href="">4</a></li>
                        <li><a href="">5</a></li>
                        <li class="next"><a href="">다음</a></li>
                    </ul>
                </div>
                <div class="button-box">
                    <a href="" class="btn btn-blue px45">등록</a>
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

    props: {

    },

    data(){
        return {
            loading: true,
            keep: false,
            item: null,
            form: new Form(this.$axios, {
                title: "",
                address: "",
                address_detail: "",
                address_zipcode: "",
                url: "",

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
        store(){
            if(this.item)
                return this.form.post("/api/admin/examples/" + this.item.id)
                        .then(response => {
                            this.$router.push("/admin/examples");
                        });

            this.form.post("/api/admin/examples")
                    .then(response => {
                        this.$router.push("/admin/examples");
                    });
        },
    },


    mounted() {
        if(this.$route.query.id){
            this.$store.commit("setLoading", true);

            return this.$axios.get("/api/admin/examples/" + this.$route.query.id)
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
