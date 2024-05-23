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
                                <li :class="`cate04 ${tabClass(1)}`"><a href="#" @click.prevent="changeStep(1)"><p>평가 안내</p></a></li>
                                <li :class="`cate05 ${tabClass(2)}`"><a href="#" @click.prevent="changeStep(2)">
                                    <p>기본 정보</p></a>
                                </li>
                                <li :class="`cate06 ${tabClass(3)}`">
                                    <button type="button" @click.prevent="(e) => changeStep(3,e)"><p>답변 작성</p></button>
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
                    <div class="title-box border">
                        <h2>{{ survey.campaign.title }}</h2>
                        <time>{{ survey.campaign.survey_started_at }} ~ {{ survey.campaign.survey_finished_at }}</time>
                    </div>
                    <div class="agree-list-box">
                        <div class="list-body">
                            <ul>
                                <li>
                                    <div class="list-head">
                                        <p v-text="survey.campaign.privacy_title"></p>
                                        <div>
                                            <input type="checkbox" name="" id="check01" v-model="agree_privacy">
                                            <label for="check01">동의함</label>
                                        </div>
                                    </div>
                                    <div class="list-body">
                                        <p style="white-space: pre-line;" v-text="survey.campaign.privacy_description"></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="list-head">
                                        <p v-text="survey.campaign.give_information_title"></p>
                                        <div>
                                            <input type="checkbox" name="" id="check02" v-model="agree_give_information">
                                            <label for="check02">동의함</label>
                                        </div>
                                    </div>
                                    <div class="list-body">
                                        <p style="white-space:pre-line;" v-text="survey.campaign.give_information_description"></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="list-foot">
                            <div class="list-foot-space">
                                <p>위 개인정보 처리방침 및 제3자 정보제공 동의에 모두 동의합니다.</p>
                                <div>
                                    <input type="checkbox" name="" id="" checked disabled v-if="agree_privacy && agree_give_information" style="display: none;">
                                    <input type="checkbox" name="" id="" disabled v-else style="display: none;">
                                    <label for="" @click.prevent="agreeAll">전체 동의</label>
                                </div>
                            </div>
                            <div class="list-foot-button">
                                <a href="#" @click.prevent="agree">진단 시작</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sub-right-box" v-if="step !== 1 && activeFolder">
                    <div class="title-box border sticky">
                        <h2>{{ step === 2 ? '기본 정보' : activeFolder.title }}</h2>

                        <div class="button-box col-lg-12 flex-lg-tr mt-lg-15">
                            <template v-if="step === 3">
                                <a href="" class="btn btn-lightgray md mr10 mr-lg-5" @click.prevent="prevFolder">이전</a>
                                <a href="" class="btn btn-black md mr10 mr-lg-5" @click.prevent="nextFolder">다음</a>
                            </template>

                            <a href="" class="btn btn-blue md px60 px-lg-30" @click.prevent="storeAnswers">저장</a>
                        </div>
                    </div>
                    <div class="check-write-box">
                        <ul>
                            <li v-for="(folderQuestion, folderQuestionIndex) in activeFolder.folderQuestions" :key="folderQuestion.id">
                                <div class="write-left">
                                    <b>{{folderQuestionIndex < 10 ? "0" + (folderQuestionIndex + 1) : folderQuestionIndex}}</b>
                                    <div>
                                        <p>{{ folderQuestion.question.title }}</p>
                                        <small>
                                            <editor-content :description="folderQuestion.question.help" />
                                        </small>
                                    </div>
                                </div>
                                <div class="write-right">
                                    <dl>
                                        <dd>
                                            <div class="write-head">
                                                <strong>{{ folderQuestion.question.title }}</strong>
                                            </div>

                                            <folder-question :survey="survey" :folder-question-index="folderQuestionIndex" :folder-question="folderQuestion" :form="answersForm" />

                                            <template v-if="problemFolderQuestions[folderQuestionIndex]">
                                                <div class="m-input-error" v-for="error in problemFolderQuestions[folderQuestionIndex]">{{error}}</div>
                                            </template>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                        </ul>
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
                word: "",
            }),

            folderQuestionsForm: new Form(this.$axios, {
                folder_id: "",
                survey_id: "",
            }),

            answersForm: new Form(this.$axios, {
                survey_id: this.$route.query.survey_id,
                answers: [],
            }),

            problemFolderQuestions: [],

            activeFolder: "",

            loading: true,
        }
    },

    methods: {
        agree(){
            if(!this.agree_give_information || !this.agree_give_information)
                return this.$store.commit("setPop", {
                    description: "필수항목에 동의해주세요."
                })

            this.$store.commit("setLoading", true);

            this.form.patch("/api/surveys/agree/" + this.survey.id)
                    .then(response => {
                        this.survey.check_agree = 1;

                        this.activeFolder = this.folders.data.find(folder => folder.basic == 1);

                        this.step = 2;

                        $("html, body").scrollTop(0);
                    });
        },

        agreeAll(){
            this.agree_privacy = true;
            this.agree_give_information = true;
        },

        ready(){
            return alert("준비중입니다.");
        },

        changeFolder(folder){
            this.step = 3;

            this.activeFolder = folder;
        },

        changeStep(step, event){
            if(step === 1)
                return this.step = 1;

            if(step === 2) {
                if(this.survey.check_agree != 1)
                    return this.$store.commit("setPop", {
                        description: "필수항목에 먼저 동의해주세요."
                    });

                this.activeFolder = this.folders.data.find(folder => folder.basic == 1);

                this.step = 2;
            }

            if(step === 3) {
                if(this.survey.check_agree != 1) {
                    event.stopPropagation();
                    event.preventDefault();
                    return this.$store.commit("setPop", {
                        description: "필수항목에 먼저 동의해주세요."
                    });
                }

                if(this.survey.check_basic != 1) {
                    event.stopPropagation();
                    event.preventDefault();
                    return this.$store.commit("setPop", {
                        description: "기본 정보를 먼저 입력해주세요."
                    });
                }

                this.setLatestFolder();

                this.step = 3;
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

                // 기본 정보라면 넘어가지 않기
                if(this.folders.data[folderIndex - 1].basic == 1)
                    return null;

                return this.activeFolder = this.folders.data[folderIndex - 1].folders[0];
            }

            // 이전 서브폴더로 이동
            return this.activeFolder = targetFolder.folders[subFolderIndex - 1];
        },

        nextFolder(){
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
                if(folderIndex >= this.folders.data.length - 1)
                    return this.storeAnswers(false, () => {this.finish()});

                // 다음 폴더로 이동
                return this.activeFolder = this.folders.data[folderIndex + 1].folders[0];
            }

            // 다음 서브폴더로 이동
            return this.activeFolder = targetFolder.folders[subFolderIndex + 1];
        },

        finish(){
            this.$store.commit("setLoading", true);

            this.form.patch("/api/surveys/finish/" + this.survey.id)
                    .then(response => {
                        this.$store.commit("setPop", {
                            description: "성공적으로 처리되었습니다."
                        });

                        this.$router.push("/campaigns");
                    })
        },

        setLatestFolder(){
            let lastFolder = null;
            let targetSubFolder = null;

            this.folders.data.filter(folder => folder.basic == 0).some(folder => {
                lastFolder = folder.folders.find(subFolder => {
                    subFolder.folderQuestions.some(folderQuestion => {
                        if(!folderQuestion.answer) {
                            targetSubFolder = subFolder;

                            return true;
                        }

                        return false;
                    });

                    if(targetSubFolder)
                        return true;

                    return false;
                });

                if(lastFolder)
                    return true;

                return false;
            });

            if(!targetSubFolder){
                lastFolder = this.folders.data[this.folders.data.length - 1];
                targetSubFolder = lastFolder.folders[lastFolder.folders.length - 1];
            }

            this.activeFolder = targetSubFolder;
        },

        storeAnswers(needNext = true, onSuccess = () => {}){
            if(!this.checkValidation()) {
                return this.$store.commit("setPop", {
                    description: "입력 내용을 롹인해주세요."
                });
            }

            this.$store.commit("setLoading", true);

            this.answersForm.post("/api/answers")
                    .then(response => {
                        onSuccess();

                        this.getFolders();

                        if(this.step === 2){
                            this.survey.check_basic = 1;

                            this.setLatestFolder();

                            return this.step = 3;
                        }

                        if(this.step === 3 && needNext)
                            this.nextFolder();
                    });
        },

        checkValidation(){
            this.problemFolderQuestions = [];

            let targetFolderQuestion;
            let problemFolderQuestion;
            let validate = true;

            this.answersForm.answers.map(answer => {
                let errors = [];

                targetFolderQuestion = this.activeFolder.folderQuestions.find(folderQuestion => folderQuestion.id == answer.folder_question_id);

                // 해당없음이면 검사 안함
                if(answer.exception != 1) {
                    if(targetFolderQuestion.question.type === "RADIO"){
                        if(targetFolderQuestion.question.required == 1 && answer.folder_question_option_id === ""){
                            problemFolderQuestion = targetFolderQuestion;
                            errors.push("필수항목문항에는 값을 반드시 입력해야합니다.");
                        }
                    }

                    if(targetFolderQuestion.question.type === "SELECT"){
                        if(targetFolderQuestion.question.required == 1 && answer.folder_question_option_id === ""){
                            problemFolderQuestion = targetFolderQuestion;
                            errors.push("필수항목문항에는 값을 반드시 입력해야합니다.");
                        }
                    }

                    if(targetFolderQuestion.question.type === "CHECKBOX"){
                        console.log(answer);
                        if(targetFolderQuestion.question.required == 1 && (!answer.folder_question_option_ids || answer.folder_question_option_ids.length === 0)){
                            problemFolderQuestion = targetFolderQuestion;
                            errors.push("필수항목문항에는 값을 반드시 입력해야합니다.");
                        }
                    }

                    if(targetFolderQuestion.question.type === "TEXT"){
                        if(targetFolderQuestion.question.required == 1 && answer.value === ""){
                            problemFolderQuestion = targetFolderQuestion;
                            errors.push("필수항목문항에는 값을 반드시 입력해야합니다.");
                        }
                    }

                    if(targetFolderQuestion.question.type === "TEXTGROUP"){
                        if(targetFolderQuestion.question.required == 1){
                            if(answer.value.some(value => value === "")) {
                                problemFolderQuestion = targetFolderQuestion;
                                errors.push("필수항목문항에는 값을 반드시 입력해야합니다.");
                            }
                        }
                    }

                    if(targetFolderQuestion.question.type === "NUMBER"){
                        if(targetFolderQuestion.question.required == 1){
                            if(answer.value.some(value => value === "")) {
                                problemFolderQuestion = targetFolderQuestion;
                                errors.push("필수항목문항에는 값을 반드시 입력해야합니다.");
                            }
                        }
                    }

                    // 추후에는 삭제하는 file_remove_ids 개수가 기존거 다 지울만한 개수인지 확인해야돼(그럼 사실상 파일첨부가 0개니까)
                    if(targetFolderQuestion.question.can_file && targetFolderQuestion.question.required_file && answer.files.length === 0 && (!targetFolderQuestion.answer.files || targetFolderQuestion.answer.files.length === 0)){
                        problemFolderQuestion = targetFolderQuestion;

                        errors.push("파일을 업로드해주세요.");
                    }
                }


                if(errors.length > 0)
                    validate = false;

                this.problemFolderQuestions.push(errors);
            });


            console.log(this.problemFolderQuestions);
            return validate;
        },

        tabClass(step){
            return step == this.step ? 'active' : '';
        },

        getSurvey(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/surveys/" + this.$route.query.survey_id)
                .then(response => {
                    this.survey = response.data.data;

                    this.getFolders(() => {
                        if(this.survey.check_agree){
                            this.agree_privacy = true;
                            this.agree_give_information = true;


                            if(this.survey.check_basic == 0){
                                this.step = 2;
                                this.activeFolder = this.folders.data.find(folder => folder.basic == 1);
                            }

                            if(this.survey.check_basic == 1) {
                                this.step = 3;

                                this.setLatestFolder();
                            }
                        }

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
    },

    computed: {

    },

    watch: {
        activeFolder: {
            handler(){
                let answer = null;

                this.problemFolderQuestions = [];

                if(this.activeFolder) {
                    this.answersForm.answers = [];

                    this.activeFolder.folderQuestions.map(folderQuestion => {
                        answer = folderQuestion.answer ? {
                            ...folderQuestion.answer,
                            files: [],
                            files_remove_ids: [],
                        } : null;

                        if (!folderQuestion.answer) {
                            answer = {
                                folder_question_id: folderQuestion.id,
                                folder_question_option_id: "",
                                folder_question_option_ids: [],
                                value: "",
                                value_additional: "",
                                exception: 0,
                                files: [],
                                files_remove_ids: [],
                            }

                            if(folderQuestion.question.type === 'NUMBER')
                                answer.value = [0,0,0];

                            if(folderQuestion.question.type === 'TEXTGROUP')
                                answer.value = folderQuestion.folderQuestionOptions.map(folderQuestionOption => "");
                        }

                        this.answersForm.answers.push(answer);
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
