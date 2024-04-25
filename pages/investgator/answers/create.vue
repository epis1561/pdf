<template>
    <section>
        <div class="container">
            <div class="sub-box" v-if="!loading">
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
                                <li :class="`cate05 ${tabClass(1)}`"><a href="#" @click.prevent="changeStep(1)">
                                    <p>종합 의견</p></a>
                                </li>
                                <li :class="`cate06 ${tabClass(2)}`">
                                    <button type="button" @click.prevent="(e) => changeStep(2,e)"><p>평가 진행</p></button>
                                    <div>
                                        <ul>
                                            <li :class="`folder folder${folder.id} ${activeFolder && activeFolder.folder_id == folder.id ? 'active' : ''}`" v-for="(folder, index) in folders.data.filter(folder => folder.basic == 0 && !folder.folder_id)" :key="folder.id">
                                                <button type="button" data-type="depth">
                                                    <p><b>{{index + 1}}</b>{{ folder.title }}</p>
<!--                                                    <div class="graph">
                                                        <em>{{folder.progress}}%</em>
                                                        <div><span :style="`width:${folder.progress}%;`"></span></div>
                                                    </div>-->
                                                </button>
                                                <ul>
                                                    <li :class="activeFolder && activeFolder.id == subFolder.id ? `subFolder subFolder${subFolder.id} active` : `subFolder subFolder${subFolder.id}`" v-for="(subFolder, subFolderIndex) in folder.folders" :key="subFolder.id">
                                                        <a href="#" @click.prevent="changeFolder(subFolder)">{{index+1}}.{{subFolderIndex + 1}}. {{ subFolder.title }}</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="sub-right-box" v-if="step === 1">
                    <div class="title-box border sticky">
                        <h2 class="sm">{{ survey.campaign.title }}</h2>

                        <div class="button-box col-lg-12 flex-lg-tr mt-lg-15">
                            <a href="#" class="btn btn-blue md px60 px-lg-30" @click.prevent="storeInvest">저장</a>
                        </div>
                    </div>
                    <div class="company-write-box">
                        <div class="write-left">
                            <div class="write-head">
                                <strong>종합의견</strong>
                            </div>
                            <div class="write-body">
                                <div class="line"></div>
                                <textarea placeholder="내용을 입력해주세요." v-model="form.comment_total"></textarea>
                                <error :form="form" name="comment_total" />
                            </div>
                        </div>
                        <div class="write-right">
                            <ul>
                                <li>
                                    <div class="write-head">
                                        <strong>1. 환경</strong>
                                    </div>
                                    <div class="write-body">
                                        <input type="text" placeholder="제목을 입력해주세요." v-model="form.title_e">
                                        <div class="line"></div>
                                        <textarea placeholder="내용을 입력해주세요." v-model="form.comment_e"></textarea>

                                        <error :form="form" name="title_e" />
                                        <error :form="form" name="comment_e" />
                                    </div>
                                </li>
                                <li>
                                    <div class="write-head">
                                        <strong>2. 노동 및 인권</strong>
                                    </div>
                                    <div class="write-body">
                                        <input type="text" placeholder="제목을 입력해주세요." v-model="form.title_s">
                                        <div class="line"></div>
                                        <textarea placeholder="내용을 입력해주세요." v-model="form.comment_s"></textarea>

                                        <error :form="form" name="title_s" />
                                        <error :form="form" name="comment_s" />
                                    </div>
                                </li>
                                <li>
                                    <div class="write-head">
                                        <strong>3. 사회 및 윤리</strong>
                                    </div>
                                    <div class="write-body">
                                        <input type="text" placeholder="제목을 입력해주세요." v-model="form.title_g">
                                        <div class="line"></div>
                                        <textarea placeholder="내용을 입력해주세요." v-model="form.comment_g"></textarea>

                                        <error :form="form" name="title_g" />
                                        <error :form="form" name="comment_g" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div style="padding:8px 0 ; margin-top:32px; border-top:1px solid #ccc; border-bottom:1px solid #ccc;">
                        <input-user-files :multiple="true" title="방문확인증" :default="survey ? survey.files_invest_visit : []" @change="data => form.files = data" @removed="(data) => {form.files_remove_ids = data}"/>
                    </div>
                </div>

                <div class="sub-right-box" v-if="step === 2 && activeFolder">
                    <div class="title-box border sticky">
                        <h2>{{ activeFolder.title }}</h2>

                        <div class="button-box col-lg-12 flex-lg-tr mt-lg-15">
                            <template v-if="step === 2">
                                <a href="" class="btn btn-lightgray md mr10 mr-lg-5" @click.prevent="prevFolder">이전</a>
                                <a href="" class="btn btn-black md mr10 mr-lg-5" @click.prevent="nextFolder">다음</a>
                            </template>

                            <a href="" class="btn btn-blue md px60 px-lg-30" @click.prevent="storeAnswers">저장</a>
                        </div>
                    </div>
                    <div class="write-reply-box" v-for="(folderQuestion, folderQuestionIndex) in activeFolder.folderQuestions" :key="folderQuestion.id">
                        <div class="reply-left pb0">
                            <div class="check-write-box full">
                                <ul>
                                    <li>
                                        <div class="write-left">
                                            <b>{{folderQuestionIndex < 10 ? "0" + (folderQuestionIndex + 1) : folderQuestionIndex}}</b>
                                            <div>
                                                <p>{{ folderQuestion.question.title }}</p>
                                            </div>
                                        </div>
                                        <div class="write-right">
                                            <dl>
                                                <dd>
                                                    <folder-question :only-show="true" :survey="survey" :folder-question-index="folderQuestionIndex" :folder-question="folderQuestion" :form="answersForm" />
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="reply-right">
                            <div class="check-write-box full">
                                <ul>
                                    <li>
                                        <div class="write-right">
                                            <dl>
                                                <dd>
                                                    <folder-question :only-show="survey.invest_at ? true : false" :invest="true" :survey="survey" :folder-question-index="folderQuestionIndex" :folder-question="folderQuestion" :form="investForm" />
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="company-write-box full mt30 mt-lg-15">
                                <div class="write-right">
                                    <ul>
                                        <template v-if="survey.invest_at">
                                            <li>
                                                <div class="write-head">
                                                    <strong>실사(현장)진단 사항</strong>
                                                </div>
                                                <div class="write-body">
                                                    <p v-text="survey.comment_invest || '-'" style="white-space: pre-line"></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="write-head">
                                                    <strong>개선진단 사항</strong>
                                                </div>
                                                <div class="write-body">
                                                    <textarea placeholder="내용을 입력해주세요." v-model="investForm.answers[folderQuestionIndex].comment_improve"></textarea>
                                                </div>
                                            </li>
                                        </template>

                                        <li v-else>
                                            <div class="write-head">
                                                <strong>실사(현장)진단 사항</strong>
                                            </div>
                                            <div class="write-body">
                                                <textarea placeholder="내용을 입력해주세요." v-model="investForm.answers[folderQuestionIndex].comment_invest"></textarea>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="reply-bottom">
                            <input-user-files :only-show="survey.invest_at ? true : false" :multiple="true" :default="folderQuestion.answer ? folderQuestion.answer.files_invest : []" @removed="data => investForm.answers[folderQuestionIndex].files_remove_ids = data" @change="data => investForm.answers[folderQuestionIndex].files = data" />
                        </div>
                    </div>
<!--                    <div class="button-box mt40">
                        <a href="" class="btn btn-blue lg more">저장 후 답변작성</a>
                    </div>-->
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
            agree_give_information: "",
            agree_privacy: "",
            form: new Form(this.$axios, {
                page: 1,
                comment_total: "",
                title_e: "",
                comment_e: "",
                title_s: "",
                comment_s: "",
                title_g: "",
                comment_g: "",
                files: [],
            }),

            folderQuestionsForm: new Form(this.$axios, {
                folder_id: "",
                survey_id: "",
            }),

            answersForm: new Form(this.$axios, {
                survey_id: this.$route.query.survey_id,
                answers: [],
            }),

            investForm: new Form(this.$axios, {
                invest: true,
                survey_id: this.$route.query.survey_id,
                answers: [],
            }),

            activeFolder: "",

            loading: true,

        }
    },

    methods: {
        ready(){
            return alert("준비중입니다.");
        },

        storeInvest(){
            this.$store.commit("setLoading", true);

            this.form.patch("/api/investgator/surveys/" + this.survey.id)
                    .then(response => {
                        this.survey = response.data;

                        //this.step = 2;
                        let folder = this.folders.data.filter(data => data.basic == 0)[0];

                        this.activeFolder = folder.folders[0];
                    });
        },

        changeFolder(folder){
            this.storeAnswers(false);

            this.step = 2;

            this.activeFolder = folder;
        },

        changeStep(step, event){
            if(step === 1)
                return this.step = 1;

            if(step === 2) {
                let folder = this.folders.data.filter(folder => folder.basic == 0)[0];

                this.activeFolder = folder.folders[0];

                return this.step = 2;
            }
        },

        getFolders(onSuccess = () => {}){
            this.$axios.get("/api/folders", {
                params: {
                    campaign_id: this.$route.query.campaign_id,
                    survey_id: this.$route.query.survey_id,
                },
            }).then(response => {
                this.folders = response.data;

                onSuccess();
            });
        },

        prevFolder(){
            this.storeAnswers(false);

            let folderIndex = 0;

            let targetFolder;

            let subFolderIndex = 0;

            targetFolder = this.folders.data.find(folder => {
                if(folder.id == this.activeFolder.folder_id)
                    return true;

                folderIndex += 1;
            });

            targetFolder.folders.some(subFolder => {
                if(subFolder.id == this.activeFolder.id)
                    return true;

                subFolderIndex += 1;
            });

            // 이전 서브폴더가 없다면
            if(subFolderIndex <= 0){
                // 이전 폴더가 없다면
                if(folderIndex <= 0)
                    return null;

                // 이전 폴더로 이동
                if(this.folders.data[folderIndex - 1].basic == 1)
                    return null;

                return this.activeFolder = this.folders.data[folderIndex - 1].folders[0];
            }

            // 이전 서브폴더로 이동
            return this.activeFolder = targetFolder.folders[subFolderIndex - 1];
        },

        nextFolder(){
            this.storeAnswers(false);

            let folderIndex = 0;

            let targetFolder;

            let subFolderIndex = 0;

            targetFolder = this.folders.data.find(folder => {
                if(folder.id == this.activeFolder.folder_id)
                    return true;

                folderIndex += 1;
            });

            targetFolder.folders.some(subFolder => {
                if(subFolder.id == this.activeFolder.id)
                    return true;

                subFolderIndex += 1;
            });

            // 다음 서브폴더가 없다면
            if(subFolderIndex >= targetFolder.folders.length - 1){
                // 다음 폴더가 없다면
                if(folderIndex >= this.folders.data.length - 1) {
                    this.storeAnswers(false);

                    return this.finish();
                }

                // 다음 폴더로 이동
                return this.activeFolder = this.folders.data[folderIndex + 1].folders[0];
            }

            // 다음 서브폴더로 이동
            return this.activeFolder = targetFolder.folders[subFolderIndex + 1];
        },

        finish(){
            this.$store.commit("setLoading", true);

            this.form.patch("/api/investgator/surveys/finishImprove/" + this.survey.id)
                    .then(response => {
                        this.$store.commit("setPop", {
                            description: "성공적으로 처리되었습니다."
                        });

                        this.$router.push("/investgator/surveys?campaign_id=" + this.survey.campaign_id);
                    })
        },

        /*setLatestFolder(){
            let lastFolder = null;
            let targetSubFolder = null;

            this.folders.data.some(folder => {
                folder.folders.find(subFolder => {
                    subFolder.folderQuestions.map(folderQuestion => {
                        if(!folderQuestion.answer)
                            targetSubFolder = subFolder;
                    });

                    if(targetSubFolder)
                        return true;

                    return false;
                });
            });

            if(!targetSubFolder){
                lastFolder = this.folders.data[this.folders.data.length - 1];
                targetSubFolder = lastFolder.folders[lastFolder.folders.length - 1];
            }

            this.activeFolder = targetSubFolder;
        },*/

        storeAnswers(needNext = true){
            this.$store.commit("setLoading", true);

            this.investForm.post("/api/investgator/answers")
                    .then(response => {
                        this.getFolders();

                        if(needNext)
                            this.nextFolder();
                    });
        },

        tabClass(step){
            return step == this.step ? 'active' : '';
        },

        getSurvey(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/surveys/" + this.$route.query.survey_id)
                .then(response => {

                    this.survey = response.data.data;

                    this.form.set({
                        ...this.survey,
                        files: [],
                        files_remove_ids: []
                    });

                    this.getFolders(() => {
                        this.loading = false;

                        this.$nextTick(() => {
                            $(".folder > ul, .folder ul *").unbind("click").bind("click", function(e){
                                e.stopPropagation();
                                e.preventDefault();
                            });

                            $(".folder > button").unbind("click").bind("click", function(){
                                $(this).parent("li").toggleClass("active");
                            });
                        });
                    })
                })
        },

        setForm(formName, folderQuestion){
            let answer = null;

            if(folderQuestion.answer){
                if(formName === "investForm"){
                    folderQuestion.answer.value = folderQuestion.answer.invest_value || folderQuestion.answer.value;
                    folderQuestion.answer.value_additional = folderQuestion.answer.invest_value_additional || folderQuestion.answer.value_additional;
                    folderQuestion.answer.folder_question_option_id = folderQuestion.answer.invest_folder_question_option_id || folderQuestion.answer.folder_question_option_id;
                    folderQuestion.answer.folder_question_option_ids = folderQuestion.answer.invest_folder_question_option_ids || folderQuestion.answer.folder_question_option_ids;
                }

                answer = {
                    ...folderQuestion.answer,
                    value: Array.isArray(folderQuestion.answer.value) ? [...folderQuestion.answer.value] : folderQuestion.answer.value,
                    folder_question_option_id: folderQuestion.answer.folder_question_option_id,
                    folder_question_option_ids: Array.isArray(folderQuestion.answer.folder_question_option_ids) ? [...folderQuestion.answer.folder_question_option_ids] : folderQuestion.answer.folder_question_option_ids,
                    files: [],
                    files_remove_ids: [],
                }
            }


            if (!folderQuestion.answer) {
                answer = {
                    folder_question_id: folderQuestion.id,
                    folder_question_option_id: "",
                    folder_question_option_ids: [],
                    value: "",
                    value_additional: "",
                    comment_invest: "",
                    files: [],
                    files_remove_ids: [],
                }

                if(folderQuestion.question.type === 'NUMBER')
                    answer.value = [0,0,0];

                if(folderQuestion.question.type === 'TEXTGROUP')
                    answer.value = folderQuestion.folderQuestionOptions.map(folderQuestionOption => "");
            }

            this[formName].answers.push({...answer});

            this[formName].answers = [...this[formName].answers];
        },
    },

    computed: {

    },

    watch: {
        activeFolder: {
            handler(newFolder, oldFolder){
                if(newFolder) {
                    this.answersForm.answers = [];
                    this.investForm.answers = [];

                    newFolder.folderQuestions.map(folderQuestion => {
                        this.setForm("answersForm", folderQuestion);
                        this.setForm("investForm", folderQuestion);
                    })
                }
            }
        }
    },

    mounted() {
        this.getSurvey();
    }
}
</script>
