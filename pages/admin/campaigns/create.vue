<template>
    <div class="admin-right" v-if="!loading">
        <div class="admin-right-container">
            <div class="sca-box">
                <ul>
                    <li><p>캠페인 관리</p></li>
                    <li class="active"><p>캠페인</p></li>
                </ul>
            </div>
            <div class="mt30">
                <div class="write-box">
                    <ul>
                        <li>
                            <div class="list-title">
                                <strong>캠페인명</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해 주세요." v-model="form.title">

                                    <error :form="form" name="title" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>클라이언트</strong>
                            </div>
                            <div class="list-content">
                                <div class="select-box no-border">
                                    <select class="f18" v-model="form.provider_id">
                                        <option value="" disabled>선택</option>
                                        <option :value="provider.id" v-for="provider in providers.data" :key="provider.id">{{ provider.title }}</option>
                                    </select>

                                    <error :form="form" name="provider_id" />
                                </div>
                            </div>
                        </li>

                        <li class="full">
                            <div class="list-title">
                                <strong>캠페인 설명</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <textarea class="f18" name="" id="" placeholder="내용을 입력해 주세요." v-model="form.description"></textarea>

                                    <error :form="form" name="description" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>설문 시작일</strong>
                            </div>
                            <div class="list-content">
                                <div class="date-box no-border">
                                    <input type="date" class="f18" placeholder="일자를 선택해주세요" v-model="form.survey_started_at" @change="clearDate('survey_started_at')">

                                    <error :form="form" name="survey_started_at" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>설문 종료일</strong>
                            </div>
                            <div class="list-content">
                                <div class="date-box no-border">
                                    <input type="date" class="f18" placeholder="일자를 선택해주세요" v-model="form.survey_finished_at" :min="form.survey_started_at" @change="clearDate('survey_finished_at')">

                                    <error :form="form" name="survey_finished_at" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>개선관제 시작일</strong>
                            </div>
                            <div class="list-content">
                                <div class="date-box no-border">
                                    <input type="date" class="f18" placeholder="일자를 선택해주세요" v-model="form.improve_started_at" :min="form.survey_finished_at" @change="clearDate('improve_started_at')">

                                    <error :form="form" name="improve_started_at" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>개선관제 종료일</strong>
                            </div>
                            <div class="list-content">
                                <div class="date-box no-border">
                                    <input type="date" class="f18" placeholder="일자를 선택해주세요" v-model="form.improve_finished_at" :min="form.improve_started_at">

                                    <error :form="form" name="improve_finished_at" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>E 가중치</strong>
                            </div>
                            <div class="list-content">
                                <div class="no-border">
                                    <input type="number" class="f18" placeholder="0 ~ 100 (미입력 시 0)" v-model="form.ratio_e">

                                    <error :form="form" name="ratio_e" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="list-title">
                                <strong>S1 가중치</strong>
                            </div>
                            <div class="list-content">
                                <div class="no-border">
                                    <input type="number" class="f18" placeholder="0 ~ 100 (미입력 시 0)" v-model="form.ratio_s1">

                                    <error :form="form" name="ratio_s1" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="list-title">
                                <strong>S2 가중치</strong>
                            </div>
                            <div class="list-content">
                                <div class="no-border">
                                    <input type="number" class="f18" placeholder="0 ~ 100 (미입력 시 0)" v-model="form.ratio_s2">

                                    <error :form="form" name="ratio_s2" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="list-title">
                                <strong>G 가중치</strong>
                            </div>
                            <div class="list-content">
                                <div class="no-border">
                                    <input type="number" class="f18" placeholder="0 ~ 100 (미입력 시 0)" v-model="form.ratio_g">

                                    <error :form="form" name="ratio_g" />
                                </div>
                            </div>
                        </li>

                        <li class="full">
                            <div class="list-title">
                                <strong>개인정보처리방침 제목</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해주세요." v-model="form.privacy_title">

                                    <error :form="form" name="privacy_title" />
                                </div>
                            </div>
                        </li>
                        <li class="full">
                            <div class="list-title">
                                <strong>개인정보처리방침 내용</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <textarea class="f18" name="" id="" placeholder="내용을 입력해 주세요." v-model="form.privacy_description"></textarea>

                                    <error :form="form" name="privacy_description" />
                                </div>
                            </div>
                        </li>

                        <li class="full">
                            <div class="list-title">
                                <strong>제3자 정보동의 제목</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해주세요." v-model="form.give_information_title">

                                    <error :form="form" name="give_information_title" />
                                </div>
                            </div>
                        </li>
                        <li class="full">
                            <div class="list-title">
                                <strong>제3자 정보동의 내용</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <textarea class="f18" name="" id="" placeholder="내용을 입력해 주세요." v-model="form.give_information_description"></textarea>

                                    <error :form="form" name="give_information_description" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>결과보고서 배포허용</strong>
                            </div>
                            <div class="list-content">
                                <div class="select-box no-border">
                                    <select class="f18" v-model="form.allow_report_redeploy">
                                        <option value="" disabled>선택</option>
                                        <option :value="1">예</option>
                                        <option :value="0">아니오</option>
                                    </select>

                                    <error :form="form" name="allow_report_redeploy" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>제공자 파일 배포허용</strong>
                            </div>
                            <div class="list-content">
                                <div class="select-box no-border">
                                    <select class="f18" v-model="form.allow_provider_file">
                                        <option value="" disabled>선택</option>
                                        <option :value="1">예</option>
                                        <option :value="0">아니오</option>
                                    </select>

                                    <error :form="form" name="allow_provider_file" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>종합/임시점수 비활성화</strong>
                            </div>
                            <div class="list-content">
                                <div class="select-box no-border">
                                    <select class="f18" v-model="form.inactive_score">
                                        <option value="" disabled>선택</option>
                                        <option :value="1">예</option>
                                        <option :value="0">아니오</option>
                                    </select>

                                    <error :form="form" name="inactive_score" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>보고서스킨 파일명</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해 주세요." v-model="form.file_skin">

                                    <error :form="form" name="file_skin" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>작성자/부서</strong>
                            </div>
                            <div class="list-content">
                                <div class="input-box no-border">
                                    <input type="text" class="f18" placeholder="내용을 입력해 주세요." v-model="form.writer">

                                    <error :form="form" name="writer" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="list-title">
                                <strong>활성여부</strong>
                            </div>
                            <div class="list-content">
                                <div class="select-box no-border">
                                    <select class="f18" v-model="form.active">
                                        <option value="" disabled>선택</option>
                                        <option :value="1">활성</option>
                                        <option :value="0">비활성</option>
                                    </select>

                                    <error :form="form" name="active" />
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="button-box flex-tr mt32">
                <a href="" class="btn btn-lightgray px45 mr10" @click.prevent="() => $router.back()">취소</a>
                <a href="" class="btn btn-red px45 mr10" @click.prevent="remove">삭제</a>
                <a href="" class="btn btn-blue px45" @click.prevent="store">등록</a>

                <template v-if="item">
                    <a href="#" class="btn btn-active px45 ml10" @click="() => moveFolders(1)">기본 정보 등록</a>
                    <a href="#" class="btn btn-active-2 px45 ml10" @click="() => moveFolders(0)">설문 정보 등록</a>
                </template>
            </div>

            <template v-if="item">
                <div class="line-box black my40"></div>

                <div class="flex flex-vc flex-tj">
                    <div class="title-box">
                        <h2>협력사</h2>
                    </div>

                    <div class="button-box">
                        <a href="/asset/files/협력사업로드양식.xlsx" class="btn btn-active mr10">엑셀 업로드 양식</a>

                        <input type="file" id="excel" style="position: absolute; z-index:-1; left:-100000px;" @change="importExcel">
                        <label for="excel" class="btn btn-active mr10">엑셀 업로드</label>

                        <a href="#" style="opacity:0; position:absolute; left:-10000px;" id="download"></a>
                        <a href="#" class="btn btn-active-2" @click.prevent="activePop = true">추가</a>
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
                            <th>실사파트너</th>

                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="company in includeCompanies.data" :key="company.id">
                            <td>{{ company.id }}</td>

                            <td>{{ company.title }}</td>
                            <td>{{ company.business_number }}</td>
                            <td>{{ company.contact }}</td>
                            <td>{{ company.president }}</td>
                            <td>{{ company.agency ? company.agency.title : '' }}</td>

                            <td>
                                <div class="table-button-box">
<!--                                    <nuxt-link :to="`/admin/users/create?id=${user.id}`" class="active">조회</nuxt-link>-->
                                    <a href="#" class="accent" @click.prevent="targetCompany = company">실사파트너 배정</a>
                                    <a href="#" @click.prevent="detachCompany(company)">제외</a>
                                </div>
                            </td>
                        </tr>

                        </tbody>
                    </table>

                    <empty v-if="includeCompanies.data.length === 0" />
                </div>

                <div class="flex flex-vc flex-tj mt32">
                    <div class="blank">&nbsp;</div>

                    <pagination :meta="includeCompanies.meta" @paginate="(page) => {includeCompanies.page = page; getIncludeCompanies()}" />

                    <div class="button-box">

                    </div>
                </div>

                <div class="popup-box fixed" v-if="activePop">
                    <div class="box active" data-name="popup01">
                        <div class="popup-head">
                            <div class="title-box">
                                <h2>협력사</h2>
                            </div>
                            <a href="#" class="close" @click.prevent="activePop = false">닫기</a>
                        </div>
                        <div class="popup-body">
                            <div class="line-box mb15"></div>
                            <form class="flex flex-vc flex-tj" @submit.prevent="getExcludeCompanies">
                                <div class="flex flex-vc">
                                    <div class="select-box mr10">
                                        <select v-model="excludeCompaniesForm.column">
                                            <option value="">검색 조건</option>
                                            <option value="title">협력사명</option>
                                            <option value="president">대표자명</option>
                                            <option value="contact">연락처</option>
                                            <option value="business_number">사업자등록번호</option>
                                        </select>
                                    </div>
                                    <div class="search-box">
                                        <input type="text" placeholder="검색어를 입력해주세요." v-model="excludeCompaniesForm.word">
                                    </div>
                                    <div class="button-box">
                                        <button type="submit" class="btn btn-active-2" @click.prevent="getExcludeCompanies">검색</button>
                                    </div>
                                </div>
                                <div class="list-count-box">
                                    <p>목록 <b>{{ excludeCompanies.meta.total.toLocaleString() }}</b>건</p>
                                </div>
                            </form>
                            <div class="table-box mt24">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>번호</th>

                                        <th>협력사명</th>
                                        <th>대표자명</th>
                                        <th>연락처</th>
                                        <th>사업자등록번호</th>

                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="company in excludeCompanies.data" :key="company.id">
                                        <td>{{ company.id}}</td>

                                        <td>{{ company.title}}</td>
                                        <td>{{ company.president}}</td>
                                        <td>{{ company.contact}}</td>
                                        <td>{{ company.business_number}}</td>

                                        <td>
                                            <div class="table-button-box">
                                                <a href="#" class="active" @click.prevent="attachCompany(company)">추가</a>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                                <empty v-if="excludeCompanies.data.length === 0" />
                            </div>

                            <div class="mt24"></div>

                            <pagination :meta="excludeCompanies.meta" @paginate="(page) => {excludeCompaniesForm.page = page; getExcludeCompanies()}" />

                        </div>
                    </div>
                </div>

                <div class="popup-box fixed" v-if="targetCompany">
                    <div class="box active" data-name="popup01">
                        <div class="popup-head">
                            <div class="title-box">
                                <h2>실사파트너</h2>
                            </div>
                            <a href="#" class="close" @click.prevent="targetCompany = null">닫기</a>
                        </div>
                        <div class="popup-body">
                            <div class="line-box mb15"></div>
                            <form class="flex flex-vc flex-tj" @submit.prevent="getAgencies">
                                <div class="flex flex-vc">
                                    <div class="select-box mr10">
                                        <select v-model="agenciesForm.column">
                                            <option value="">검색 조건</option>
                                            <option value="title">실사파트너사</option>
                                            <option value="name">담당자명</option>
                                            <option value="contact">연락처</option>
                                            <option value="business_number">사업자등록번호</option>
                                        </select>
                                    </div>
                                    <div class="search-box">
                                        <input type="text" placeholder="검색어를 입력해주세요." v-model="agenciesForm.word">
                                    </div>
                                    <div class="button-box">
                                        <button type="submit" class="btn btn-active-2" @click.prevent="getAgencies">검색</button>
                                    </div>
                                </div>
                                <div class="list-count-box">
                                    <p>목록 <b>{{ agencies.meta.total.toLocaleString() }}</b>건</p>
                                </div>
                            </form>
                            <div class="table-box mt24">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>번호</th>

                                        <th>실사파트너명</th>
                                        <th>담당자명</th>
                                        <th>연락처</th>
                                        <th>사업자등록번호</th>

                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="agency in agencies.data" :key="agency.id">
                                        <td>{{ agency.id}}</td>

                                        <td>{{ agency.title}}</td>
                                        <td>{{ agency.name}}</td>
                                        <td>{{ agency.contact}}</td>
                                        <td>{{ agency.business_number}}</td>

                                        <td>
                                            <div class="table-button-box">
                                                <a href="#" class="active" @click.prevent="attachAgency(agency)">배정</a>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                                <empty v-if="agencies.data.length === 0" />
                            </div>

                            <div class="mt24"></div>

                            <pagination :meta="agencies.meta" @paginate="(page) => {agencies.page = page; getAgencies()}" />

                        </div>
                    </div>
                </div>
            </template>
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

            activePop : false,

            providers: {
                data: [],
            },

            agencies: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            includeCompanies: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            excludeCompanies: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            includeCompaniesForm: new Form(this.$axios, {
                file: "",
                page: 1,
                campaign_id: this.$route.query.id,
            }),

            excludeCompaniesForm: new Form(this.$axios, {
                file: "",
                column: "",
                word: "",
                page: 1,
                campaign_id: this.$route.query.id,
            }),

            agenciesForm: new Form(this.$axios, {
                active: 1,
                file: "",
                column: "",
                word: "",
                page: 1,
            }),

            targetCompany : null,

            form: new Form(this.$axios, {
                file: "",
                company_id: "",
                agency_id: "",

                active: 1,
                title: "",
                provider_id: "",
                description: "",
                privacy_title: "",
                privacy_description: "",
                give_information_title: "",
                give_information_description: "",

                ratio_e: "",
                ratio_s1: "",
                ratio_s2: "",
                ratio_g: "",

                survey_started_at: "",
                survey_finished_at: "",
                improve_started_at: "",
                improve_finished_at: "",

                allow_report_redeploy: 0,
                allow_provider_file: 0,
                inactive_score: 0,

                file_skin: "",
                writer: "",

                files: [],
                files_mobile: [],
                files_remove_ids: [],
            }),


        }
    },

    methods: {
        remove(){
            let confirmed = window.confirm("정말로 삭제하시겠습니까?");

            if(confirmed)
                this.form.delete("/api/admin/campaigns/" + this.item.id)
                        .then(response => {
                            this.$router.replace("/admin/campaigns");
                        });
        },

        moveFolders(basic = 0){
            if(this.item.state !== "BEFORE")
                return this.$store.commit("setPop", {
                    description: "이미 시작된 캠페인은 수정할 수 없습니다."
                });

            return this.$router.push(`/admin/campaigns/folders?campaign_id=${this.item.id}&basic=${basic}`);
        },

        store(){
            this.$store.commit("setLoading", true);

            if(this.item)
                return this.form.post("/api/admin/campaigns/" + this.item.id)
                    .then(response => {
                       this.$store.commit("setPop", {});
                        //  this.$router.push("/admin/campaigns");

                    }).catch(() => {});

            this.form.post("/api/admin/campaigns")
                .then(response => {
                    this.$store.commit("setPop", {});
                    // this.$router.push("/admin/campaigns");
                    this.item = response.data;
                    this.includeCompaniesForm.campaign_id = this.item.id;
                    this.excludeCompaniesForm.campaign_id = this.item.id;

                    this.getIncludeCompanies();
                    this.getExcludeCompanies();
                }).catch(() => {});
        },

        getProviders(){
            this.$store.commit("setLoading", true);
            this.$axios.get("/api/admin/providers")
                    .then(response => {
                        this.providers = response.data;
                    });
        },

        getIncludeCompanies(){
            this.$store.commit("setLoading", true);
            this.$axios.get("/api/admin/campaigns/" + this.$route.query.id + "/includeCompanies", {
                params: this.includeCompaniesForm.data()
            }).then(response => {
                this.includeCompanies = response.data;
            });
        },

        getExcludeCompanies(){
            this.$store.commit("setLoading", true);
            this.$axios.get("/api/admin/campaigns/" + this.$route.query.id + "/excludeCompanies", {
                params: this.excludeCompaniesForm.data()
            }).then(response => {
                this.excludeCompanies = response.data;
            });
        },

        getAgencies(){
            this.$store.commit("setLoading", true);
            this.$axios.get("/api/admin/agencies", {
                params: this.agenciesForm.data()
            }).then(response => {
                this.agencies = response.data;
            });
        },

        detachCompany(company){
            this.form.company_id = company.id;

            this.$store.commit("setLoading", true);

            this.form.patch("/api/admin/campaigns/" + this.item.id + "/detachCompany")
                    .then(response => {
                        this.getExcludeCompanies();
                        this.getIncludeCompanies();
                    });
        },

        attachCompany(company){
            this.form.company_id = company.id;

            this.$store.commit("setLoading", true);

            this.form.patch("/api/admin/campaigns/" + this.item.id + "/attachCompany")
                    .then(response => {
                        this.getExcludeCompanies();
                        this.getIncludeCompanies();
                    });
        },

        attachAgency(agency){
            this.form.company_id = this.targetCompany.id;
            this.form.agency_id = agency.id;

            this.$store.commit("setLoading", true);

            this.form.patch("/api/admin/campaigns/" + this.item.id + "/attachAgency")
                    .then(response => {
                        this.targetCompany = null;

                        this.getIncludeCompanies();
                    });
        },

        importExcel(e){
            this.form.file = e.target.files[0];

            e.target.value = "";

            this.$store.commit("setLoading", true);

            this.form.post("/api/admin/campaigns/" + this.item.id + "/importCompanies")
                    .then(response => {
                        this.$store.commit("setPop", {
                            description: "",
                        });

                        this.getIncludeCompanies();
                        this.getExcludeCompanies();

                        if(response.data){
                            let a = document.getElementById("download");

                            a.href = response.data;

                            a.click();
                        }
                    })
        },

        clearDate(column){
            if(column === 'survey_started_at'){
                this.form.survey_finished_at = "";
                this.form.improve_started_at = "";
                this.form.improve_finished_at = "";
            }

            if(column === 'survey_finished_at'){
                this.form.improve_started_at = "";
                this.form.improve_finished_at = "";
            }

            if(column === 'improve_started_at'){
                this.form.improve_finished_at = "";
            }
        }
    },

    computed: {

    },


    mounted() {
        this.getProviders();
        this.getAgencies();

        if(this.$route.query.id){
            this.getIncludeCompanies();
            this.getExcludeCompanies();

            return this.$axios.get("/api/admin/campaigns/" + this.$route.query.id)
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
