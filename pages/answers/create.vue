<template>
    <section>
        <div class="container">
            <div class="sub-box" v-if="survey">
                <div class="sub-left-box">
                    <div class="sub-left-head">
                        <img src="/asset/images/logo.png">
                        <a href="javascript:;" class="close" onclick="menuClose();">닫기</a>
                    </div>
                    <div class="sub-left-body">
                        <div class="sub-left-main">
                            <ul>
                                <li><a href="">COMPANY</a></li>
                                <li><a href="">SERVICES</a></li>
                                <li><a href="">PORTFOLIO</a></li>
                                <li><a href="">INSIGHTS</a></li>
                                <li><a href="">CONTACT</a></li>
                            </ul>
                        </div>
                        <div class="sub-left-category">
                            <ul>
                                <li :class="`cate04 ${tabClass(1)}`"><a href="#" @click.prevent="step = 1"><p>평가 안내</p></a></li>
                                <li :class="`cate05 ${tabClass(2)}`"><a href="#" @click.prevent="step = 2"><p>기본 정보</p></a></li>
                                <li :class="`cate06 ${tabClass(3)}`">
                                    <button type="button"><p>답변 작성</p></button>
                                    <div>
                                        <ul>
                                            <li v-for="(folder, index) in folders.data" :key="folder.id" v-if="!folder.basic && !folder.folder_id">
                                                <button type="button" data-type="depth">
                                                    <p><b>{{index + 1}}</b>{{ folder.title }}</p>
                                                    <div class="graph">
                                                        <em>100%</em>
                                                        <div><span style="width:100%;"></span></div>
                                                    </div>
                                                </button>
                                                <ul>
                                                    <li :class="activeFolder && activeFolder.id == subFolder.id ? 'active' : ''"><a href="#" @click.prevent="changeFolder(subFolder)" v-for="(subFolder, subFolderIndex) in folder.folders" :key="subFolder.id">{{ subFolder.title }}</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="sub-right-box">
                    <div class="title-box border">
                        <h2>기본 정보</h2>
                        <div class="button-box">
                            <a href="" class="btn btn-blue md px60 px-lg-30">저장</a>
                        </div>
                    </div>
                    <div class="check-write-box">
                        <ul>
                            <li>
                                <div class="write-left">
                                    <b>01</b>
                                    <div>
                                        <p>귀사의 전체/정규직/비정규직(계약별 구분) 수를 기입하여 주십시오.</p>
                                        <small>
                                            매년 12월 31일 기준으로 입력해 주십시오.<br>
                                            정규직수와 비정규직수의 합계는 문항1. 전 임직원 수와 일치해야 합니다.
                                        </small>
                                    </div>
                                </div>
                                <div class="write-right">
                                    <dl>
                                        <dd>
                                            <div class="write-head">
                                                <strong>전체 임직원</strong>
                                            </div>
                                            <div class="write-body">
                                                <div>
                                                    <b>2020년</b>
                                                    <input type="text" placeholder="해당 연도의 전체 임직원 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                                <div>
                                                    <b>2021년</b>
                                                    <input type="text" placeholder="해당 연도의 전체 임직원 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                                <div>
                                                    <b>2022년</b>
                                                    <input type="text" placeholder="해당 연도의 전체 임직원 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd>
                                            <div class="write-head">
                                                <strong>정규직</strong>
                                            </div>
                                            <div class="write-body">
                                                <div>
                                                    <b>2020년</b>
                                                    <input type="text" placeholder="해당 연도의 전체 정규직 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                                <div>
                                                    <b>2021년</b>
                                                    <input type="text" placeholder="해당 연도의 전체 정규직 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                                <div>
                                                    <b>2022년</b>
                                                    <input type="text" placeholder="해당 연도의 전체 정규직 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd>
                                            <div class="write-head">
                                                <strong>비정규직</strong>
                                            </div>
                                            <div class="write-body">
                                                <div>
                                                    <b>2020년</b>
                                                    <input type="text" placeholder="해당 연도의 전체 비정규직 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                                <div>
                                                    <b>2021년</b>
                                                    <input type="text" placeholder="해당 연도의 전체 비정규직 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                                <div>
                                                    <b>2022년</b>
                                                    <input type="text" placeholder="해당 연도의 전체 비정규직 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li>
                                <div class="write-left">
                                    <b>02</b>
                                    <div>
                                        <p>귀사의 남성/여성 임직원(성별 구분) 수를 기입하여 주십시오.</p>
                                        <small>
                                            매년 12월 31일 기준으로 입력해 주십시오.<br>
                                            남성 임직원수와 여성 임직원수의 합계는 총 임직원 수와 일치해야 합니다.
                                        </small>
                                    </div>
                                </div>
                                <div class="write-right">
                                    <dl>
                                        <dd>
                                            <div class="write-head">
                                                <strong>남성 임직원</strong>
                                            </div>
                                            <div class="write-body">
                                                <div>
                                                    <b>2020년</b>
                                                    <input type="text" placeholder="해당 연도의 남성 임직원 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                                <div>
                                                    <b>2021년</b>
                                                    <input type="text" placeholder="해당 연도의 남성 임직원 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                                <div>
                                                    <b>2022년</b>
                                                    <input type="text" placeholder="해당 연도의 남성 임직원 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd>
                                            <div class="write-head">
                                                <strong>여성 임직원</strong>
                                            </div>
                                            <div class="write-body">
                                                <div>
                                                    <b>2020년</b>
                                                    <input type="text" placeholder="해당 연도의 여성 임직원 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                                <div>
                                                    <b>2021년</b>
                                                    <input type="text" placeholder="해당 연도의 여성 임직원 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                                <div>
                                                    <b>2022년</b>
                                                    <input type="text" placeholder="해당 연도의 여성 임직원 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li>
                                <div class="write-left">
                                    <b>03</b>
                                    <div>
                                        <p>귀사의 외국인 수를 기입하여 주십시오.</p>
                                        <small>매년 12월 31일 기준으로 입력해 주십시오.</small>
                                    </div>
                                </div>
                                <div class="write-right">
                                    <dl>
                                        <dd>
                                            <div class="write-head">
                                                <strong>외국인 직원</strong>
                                            </div>
                                            <div class="write-body">
                                                <div>
                                                    <b>2020년</b>
                                                    <input type="text" placeholder="해당 연도의 외국인 직원 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                                <div>
                                                    <b>2021년</b>
                                                    <input type="text" placeholder="해당 연도의 외국인 직원 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                                <div>
                                                    <b>2022년</b>
                                                    <input type="text" placeholder="해당 연도의 외국인 직원 수를 작성해주세요.">
                                                    <em>명</em>
                                                </div>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li>
                                <div class="write-left">
                                    <b>04</b>
                                    <div>
                                        <p>귀사의 전체 및 모비스 품목 관련 매출액을 기입하여 주십시오.</p>
                                    </div>
                                </div>
                                <div class="write-right">
                                    <dl>
                                        <dd>
                                            <div class="write-head">
                                                <strong>전체 매출액</strong>
                                            </div>
                                            <div class="write-body">
                                                <div>
                                                    <b>2020년</b>
                                                    <input type="text" placeholder="해당 연도의 전체 매출액을 작성해주세요.">
                                                    <em>억원</em>
                                                </div>
                                                <div>
                                                    <b>2021년</b>
                                                    <input type="text" placeholder="해당 연도의 전체 매출액을 작성해주세요.">
                                                    <em>억원</em>
                                                </div>
                                                <div>
                                                    <b>2022년</b>
                                                    <input type="text" placeholder="해당 연도의 전체 매출액을 작성해주세요.">
                                                    <em>억원</em>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd>
                                            <div class="write-head">
                                                <strong>모비스 품목 관리 매출액</strong>
                                            </div>
                                            <div class="write-body">
                                                <div>
                                                    <b>2020년</b>
                                                    <input type="text" placeholder="해당 연도의 모비스 품목 관련 매출액을 작성해주세요.">
                                                    <em>억원</em>
                                                </div>
                                                <div>
                                                    <b>2021년</b>
                                                    <input type="text" placeholder="해당 연도의 모비스 품목 관련 매출액을 작성해주세요.">
                                                    <em>억원</em>
                                                </div>
                                                <div>
                                                    <b>2022년</b>
                                                    <input type="text" placeholder="해당 연도의 모비스 품목 관련 매출액을 작성해주세요.">
                                                    <em>억원</em>
                                                </div>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="button-box mt40">
                        <a href="" class="btn btn-blue lg more">저장 후 답변작성</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Form from "@/utils/Form";
export default {
    middleware: ["auth"],

    components: {},

    data() {
        return {
            step: 1,

            survey: null,

            folders: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            form: new Form(this.$axios, {
                page: 1,
                word: "",
            }),

            folderQuestionsForm: new Form(this.$axios, {
                folder_id: "",
                survey_id: "",
            }),

            activeFolder: "",
        }
    },

    methods: {
        ready(){
            return alert("준비중입니다.");
        },

        changeFolder(folder){
            this.step = 3;

            this.activeFolder = folder;
        },

        getFolders(){
            this.$axios.get("/api/folders", {
                params: {
                    campaign_id: this.$route.query.campaign_id,
                },
            }).then(response => {
                this.folders = response.data;
            });
        },

        tabClass(state){
            return state === this.form.surveyState ? 'active' : '';
        },

        getSurvey(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/surveys/" + this.$route,query.survey_id)
                .then(response => {
                    this.survey = response.data.data;
                })
        },
    },

    computed: {


    },

    mounted() {
        this.getSurvey();

        this.getFolders();
    }
}
</script>
