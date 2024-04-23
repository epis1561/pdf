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
                                            <li v-for="(folder, index) in folders.data.filter(folder => folder.basic == 0 && !folder.folder_id)" :key="folder.id">
                                                <button type="button" data-type="depth">
                                                    <p><b>{{index + 1}}</b>{{ folder.title }}</p>
                                                    <div class="graph">
                                                        <em>100%</em>
                                                        <div><span style="width:100%;"></span></div>
                                                    </div>
                                                </button>
                                                <ul>
                                                    <li :class="activeFolder && activeFolder.id == subFolder.id ? 'active' : ''" v-for="(subFolder, subFolderIndex) in folder.folders" :key="subFolder.id">
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
                        <div class="button-box">
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
                                            <div class="write-body">
                                                <template v-if="folderQuestion.question.type === 'NUMBER'">
                                                    <div v-for="(year, index) in years" :key="year">
                                                        <b>{{ year }}년</b>
                                                        <input type="number" :placeholder="`해당 연도의 ${folderQuestion.question.options[0].data_title}(을)를 입력해주세요.`" v-model="answersForm.answers[folderQuestionIndex].value[index]">
                                                        <em>{{folderQuestion.question.options[0].data_unit}}</em>
                                                    </div>
                                                </template>

                                                <div v-if="needValueAdditional(folderQuestion, folderQuestionIndex)">
                                                    <input type="text" placeholder="필요 시, 관련 설명 작성 또는 URL 링크를 입력해주세요." v-model="answersForm.answers[folderQuestionIndex].value_additional">
                                                </div>

                                                <div v-if="folderQuestion.question.can_file">
                                                    <input-files :default="folderQuestion.question.answer ? folderQuestion.question.answer.files : []" @change="data => answersForm.answers[folderQuestionIndex].files = data" @removed="data => answersForm.answers[folderQuestionIndex].files_remove_ids = data"/>
                                                    <div class="file-box">
                                                        <strong>첨부파일</strong>
                                                        <div>
                                                            <p>부패 및 이해상충 채널.jpg</p>
                                                            <a href="" class="delete">삭제</a>
                                                        </div>
                                                        <label for="file">찾기<input type="file" name="file" id="file"></label>
                                                    </div>
                                                </div>

                                            </div>
                                            <error :form="answersForm" :name="`answers.${folderQuestionIndex}.value`" />
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

            activeFolder: "",

            loading: true,
        }
    },

    methods: {
        needValueAdditional(folderQuestion, index){
            return folderQuestion.question.options.find(option => option.id == this.answersForm.answers[index].option_id);
        },
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

        next(){

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

        storeAnswers(){
            this.$store.commit("setLoading", true);

            this.answersForm.post("/api/answers")
                    .then(response => {
                        if(this.step === 2){
                            this.survey.check_basic = 1;

                            this.step = 3;
                        }
                    });
        },

        tabClass(step){
            return step === this.step ? 'active' : '';
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

                            this.step = 2;

                            this.activeFolder = this.folders.data.find(folder => folder.basic == 1);

                            if(this.survey.check_basic == 1) {
                                this.step = 3;

                                this.activeFolder = null;
                            }
                        }

                        this.loading = false;
                    })
                })
        },
    },

    computed: {
        years(){
            let years = [];

            if(this.survey.campaign){
                for(let i = this.survey.campaign.year - 2; i<=this.survey.campaign.year; i++){
                    years.push(i);
                }
            }

            return years;
        },
    },

    watch: {
        activeFolder: {
            deep: true,
            handler(){
                let answer = null;

                console.log(this.activeFolder);

                if(this.activeFolder) {
                    this.activeFolder.folderQuestions.map(folderQuestion => {
                        answer = folderQuestion.answer;

                        if (!folderQuestion.answer)
                            answer = {
                                folder_question_id: folderQuestion.id,
                                option_id: "",
                                option_ids: [],
                                value: folderQuestion.question.type === "NUMBER" ? [0, 0, 0] : "",
                                value_additional: "",
                                files: [],
                                files_remove_ids: [],
                            }

                        this.answersForm.answers.push(answer)
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
