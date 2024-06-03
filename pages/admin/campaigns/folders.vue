<template>
    <div class="admin-right" v-if="campaign" @click="() => form.errors.clear()">
        <div class="admin-right-container">
            <div class="sca-box">
                <ul>
                    <li><p>캠페인 관리</p></li>
                    <li class="active"><p>캠페인</p></li>
                </ul>
            </div>
            <div class="line-box my30"></div>
            <div class="toggle-button-box">
                <a href="" class="open" @click.prevent="openAll">전체 펼침</a>
                <a href="" class="close" @click.prevent="closeAll">전체 닫기</a>

            </div>


            <div class="flex mt24">
                <div class="flex-1 mr40">
                    <div class="menu-list-box" style="height:700px;">
                        <ul>
                            <li :class="activeAll ? 'active' : ''">
                                <a href="#" class="depth" @click.prevent="">
                                    <button class="btn-toggle" @click.prevent="activeAll = !activeAll;">

                                    </button>
                                    <p>Top</p>
                                </a>

                                <template v-if="activeAll">
                                    <div :class="`${activeIds.includes(item.id) ? 'active' : ''}`" v-for="(item, index) in items.data" v-if="!item.folder_id" :key="item.id">
                                        <a href="#" class="depth" @click.prevent="">
                                            <button class="btn-toggle" @click.prevent="toggle(item);">

                                            </button>
                                            <p  @click.prevent="toggleFolder(item)" :class="targetFolder && targetFolder.id == item.id ? 'active' : ''">{{index}}. {{item.title}}</p>
                                        </a>
                                        <dl v-if="item.folders && activeIds.includes(item.id)">
                                            <dd :class="activeIds.includes(subItem.id) ? '' : ''" v-for="(subItem, subItemIndex) in item.folders" :key="subItem.id">
                                                <a href="#" @click.prevent="">
<!--                                                    <button class="btn-toggle" @click.prevent="toggle(subItem);">

                                                    </button>-->
                                                    <p @click.prevent="toggleFolder(subItem)" :class="targetFolder && targetFolder.id == subItem.id ? 'active' : ''">{{subItemIndex + 1}}. {{ subItem.title }}</p>
                                                </a>
                                            </dd>
                                        </dl>
                                    </div>
                                </template>
                            </li>
                        </ul>
                    </div>
                    <div class="button-box mt32 flex-tc">
                        <a href="" class="btn btn-active w120" @click.prevent="readyToCreateChild" v-if="form.basic == 0 && ((targetFolder && !targetFolder.folder_id) || !targetFolder)">하위분류생성</a>
                    </div>
                </div>
                <div class="flex-1">
                    <div class="text-box">
                        <dl>
                            <dd>캠페인 복제는 분류 생성 전에만 하실 수 있습니다.</dd>
                            <dd>설문 분류 관리는 2 뎁스 까지 생성 가능 합니다.</dd>
                            <dd>설문 제작은 2뎁스에서 가능합니다.</dd>
                            <dd>질의 순서 변경 전에 설문저장 후 질의 순서를 변경하십시오</dd>
                        </dl>
                    </div>
                    <div class="write-box">
                        <ul>
                            <li class="full">
                                <div class="list-title">
                                    <strong>캠페인</strong>
                                </div>
                                <div class="list-content flex flex-vc">
                                    <p class="flex-1 active">{{ campaign.title }}</p>
                                    <a href="" class="link" @click.prevent="activeCampaigns = true" v-if="form.basic == 0">다른캠페인 불러오기</a>
                                </div>
                            </li>
<!--                            <li class="full">
                                <div class="list-title">
                                    <strong>메뉴 ID</strong>
                                </div>
                                <div class="list-content flex flex-vc">
                                    <p class="flex-1 active">400101805</p>
                                </div>
                            </li>-->
<!--                            <li class="full">
                                <div class="list-title">
                                    <strong>메뉴 순서</strong>
                                </div>
                                <div class="list-content">
                                    <div class="input-box no-border">
                                        <input type="text" class="f18" placeholder="메뉴 순서를 숫자로 입력해주세요.">
                                    </div>
                                </div>
                            </li>-->
                            <li class="full">
                                <div class="list-title">
                                    <strong>메뉴 경로</strong>
                                </div>
                                <div class="list-content flex flex-vc">
                                    <p class="flex-1 active">
                                        {{ targetFolder ? (targetFolder.folder ? targetFolder.folder.title : targetFolder.title) : ''}}
                                    </p>
                                </div>
                            </li>
                            <!--<li class="full" v-if="targetFolder && !targetFolder.basic && !targetFolder.folder_id">
                                <div class="list-title">
                                    <strong>영역</strong>
                                </div>
                                <div class="list-content flex flex-vc">
                                    <div class="radio-box w120" v-for="domain in domains.data" :key="domain.value">
                                        <input type="radio" name="" :id="`radio_${domain.value}`" :value="domain.value" v-model="form.domain">
                                        <label :for="`radio_${domain.value}`">{{ domain.label }}</label>
                                    </div>

                                    <error :form="form" name="domain" />
                                </div>
                            </li>-->
                            <li class="full" v-if="form.basic == 0">
                                <div class="list-title">
                                    <strong>분류 명</strong>
                                </div>
                                <div class="list-content">
                                    <div class="input-box no-border">
                                        <input type="text" class="f18" placeholder="분류 명을 작성해주세요." v-model="form.title">

                                        <error :form="form" name="title" />
                                    </div>
                                </div>
                            </li>

                            <li class="full" v-if="form.basic == 0">
                                <div class="list-title">
                                    <strong>사용 여부</strong>
                                </div>
                                <div class="list-content flex flex-vc">
                                    <div class="radio-box w120">
                                        <input type="radio" name="radio01" id="radio01_01" :value="1" v-model="form.use">
                                        <label for="radio01_01">예</label>
                                    </div>
                                    <div class="radio-box w120">
                                        <input type="radio" name="radio01" id="radio01_02" :value="0" v-model="form.use">
                                        <label for="radio01_02">아니오</label>
                                    </div>

                                    <error :form="form" name="use" />
                                </div>
                            </li>
                            <li class="full">
                                <div class="list-title">
                                    <strong>메뉴 설명</strong>
                                </div>
                                <div class="list-content">
                                    <div class="input-box no-border">
                                        <input type="text" class="f18" placeholder="메뉴 설명을 입력해주세요." v-model="form.description">
                                        <error :form="form" name="description" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="button-box mt32 flex-tr" v-if="form.basic == 0">
                        <a href="" class="btn btn-red w120 mr10" v-if="form.id" @click.prevent="remove">삭제</a>
                        <a href="" class="btn btn-blue px25" v-if="form.id" @click.prevent="update">분류 수정</a>
                        <a href="" class="btn btn-blue px25" v-else @click.prevent="store">분류 생성</a>
                    </div>
                </div>
            </div>

            <template v-if="targetFolder && (targetFolder.basic || targetFolder.folder_id)">
                <div class="line-box black mt80"></div>
                <div class="title-box mt40">
                    <h2>[{{targetFolder.title}}] 질의 목록</h2>
                </div>
                <div class="faq-list-box mt25">
                    <ul>
                        <li v-for="(question, index) in form.questions" :key="question.id">
                            <div class="list-head">
                                <a :href="`/admin/questions/create?id=${question.id}`" target="_blank" class="name">[{{question.id}}] {{ question.format_type }}</a>
                                <a href="#" class="delete" @click.prevent="removeFolderQuestion(index)">삭제</a>
                            </div>
                            <div class="list-body">
                                <div class="list-body-left">
                                    <strong>{{ question.title}}</strong>
                                    <div class="check" v-if="question.type === 'TEXT' || question.type === 'TEXTGROUP' || question.type === 'NUMBER'">
                                        <input type="checkbox" name="check" id="check01" v-model="form.questions[index].use_excel">
                                        <label for="check01">엑셀다운로드 사용(관리자 data관리용)</label>
                                    </div>
                                </div>
                                <div class="list-body-right">
                                    <div class="write-box bt0">
                                        <ul>
                                            <li class="full">
                                                <div class="list-title">
                                                    <strong>설문번호</strong>
                                                </div>
                                                <div class="list-content">
                                                    <p class="active f18">{{index + 1}}</p>
                                                </div>
                                            </li>
                                            <li class="full">
                                                <div class="list-title">
                                                    <strong>보고서 노출 여부</strong>
                                                </div>
                                                <div class="list-content flex flex-vc">
                                                    <div class="radio-box w120">
                                                        <input type="radio" :id="`${index}-radio02_01`" :value="1" v-model="form.questions[index].open_reporter">
                                                        <label :id="`${index}-radio02_01`">예</label>
                                                    </div>
                                                    <div class="radio-box w120">
                                                        <input type="radio" :id="`${index}-radio02_02`" :value="0" v-model="form.questions[index].open_reporter">
                                                        <label :id="`${index}-radio02_02`">아니오</label>
                                                    </div>
                                                </div>
                                            </li>
                                            <!-- show options 참고
                                            <li class="full">
                                                <div class="list-title">
                                                    <strong>특정 조건 <br/>만족시에만 노출</strong>
                                                </div>
                                                <div class="list-content flex flex-vc">
                                                    <div class="radio-box w120">
                                                        <input type="radio" :id="`${index}-radio_show_01`" :value="1" v-model="form.questions[index].use_move_condition">
                                                        <label :id="`${index}-radio_show_01`">예</label>
                                                    </div>
                                                    <div class="radio-box w120">
                                                        <input type="radio" :id="`${index}-radio_show_02`" :value="0" v-model="form.questions[index].use_move_condition">
                                                        <label :id="`${index}-radio_show_02`">아니오</label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="full" v-if="form.questions[index].show_options">
                                                <div class="list-title">
                                                    <strong>조건 선택</strong>
                                                </div>
                                                <div class="list-content flex flex-vc">
                                                    <div class="radio-box w120">
                                                        <input type="radio" :id="`${index}-radio_show_01`" :value="1" v-model="form.questions[index].show_options">
                                                        <label :id="`${index}-radio_show_01`">예</label>
                                                    </div>
                                                    <div class="radio-box w120">
                                                        <input type="radio" :id="`${index}-radio_show_02`" :value="0" v-model="form.questions[index].use_move_condition">
                                                        <label :id="`${index}-radio_show_02`">아니오</label>
                                                    </div>
                                                </div>
                                            </li>-->

                                            <template v-if="form.questions[index].type === 'CHECKBOX' || form.questions[index].type === 'RADIO' || form.questions[index].type === 'SELECT'">
                                                <li class="full">
                                                    <div class="list-content">
                                                        <div class="line-box black"></div>
                                                        <div class="table-box sm">
                                                            <table>
                                                                <thead>
                                                                <tr>
                                                                    <th width="80">번호</th>
                                                                    <th width="160">배점</th>
                                                                    <th width="*">항목</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr v-for="(option, optionIndex) in form.questions[index]['options']">
                                                                    <td>{{optionIndex + 1}}</td>
                                                                    <td>
<!--                                                                        <p class="f18">{{form.questions[index]['options'][optionIndex].score}}</p>-->
                                                                        <div class="input-box">
                                                                            <input type="number" placeholder="" class="tc" v-model="form.questions[index]['options'][optionIndex].score">
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div class="flex flex-vc flex-tj">
                                                                            <p class="f18">{{option.title}}</p>
<!--                                                                            <div class="select-box" v-if="form.questions[index].use_move_condition">
                                                                                <select>
                                                                                    <option value="">질문선택</option>
                                                                                    <option :value="question.id" v-for="(question, questionIndex) in form.questions" v-if="question.id && questionIndex > index" v-model="form.questions[index]['options'][optionIndex].move_question_id">{{questionIndex + 1}}.
                                                                                        {{ question.title }}</option>
                                                                                </select>
                                                                            </div>-->
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="line-box black"></div>
                                                    </div>
                                                </li>
<!--                                                <li class="full">
                                                    <div class="list-title">
                                                        <strong>조건 사용</strong>
                                                    </div>
                                                    <div class="list-content">
                                                        <div class="select-box">
                                                            <select v-model="form.questions[index].use_move_condition">
                                                                <option value="">조건 여부</option>
                                                                <option :value="1">예</option>
                                                                <option :value="0">아니오</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </li>-->
                                            </template>

                                            <template v-if="form.questions[index].type === 'TEXT'">
                                                <li class="full">
                                                    <div class="list-content">
                                                        <div class="line-box black"></div>
                                                        <div class="table-box sm">
                                                            <table>
                                                                <thead>
                                                                <tr>
                                                                    <th>내용</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>{{form.questions[index].description}}</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="line-box black"></div>
                                                    </div>
                                                </li>
                                            </template>

                                            <template v-if="form.questions[index].type === 'TEXTGROUP'">
                                                <li class="full">
                                                    <div class="list-content">
                                                        <div class="line-box black"></div>
                                                        <div class="table-box sm">
                                                            <table>
                                                                <thead>
                                                                <tr>
                                                                    <th>번호</th>
                                                                    <th>라벨 before</th>
                                                                    <th>라벨 after</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr v-for="(option, optionIndex) in form.questions[index]['options']">
                                                                    <td>{{optionIndex + 1}}</td>
                                                                    <td>{{option.label_before}}</td>
                                                                    <td>{{option.label_after}}</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="line-box black"></div>
                                                    </div>
                                                </li>
                                            </template>

                                            <template v-if="form.questions[index].type === 'NUMBER'">
                                                <li class="full">
                                                    <div class="list-content">
                                                        <div class="line-box black"></div>
                                                        <div class="table-box sm">
                                                            <table>
                                                                <thead>
                                                                <tr>
                                                                    <th>번호</th>
                                                                    <th>데이터 이름</th>
                                                                    <th>데이터 단위</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr v-for="(option, optionIndex) in form.questions[index]['options']">
                                                                    <td>{{optionIndex + 1}}</td>
                                                                    <td>{{option.data_title}}</td>
                                                                    <td>{{option.date_unit}}</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="line-box black"></div>
                                                    </div>
                                                </li>
                                            </template>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="list-add-box mt25">
                    <a href="#" @click.prevent="activePop = true">질의 추가</a>
                </div>
                <div class="button-box mt32 flex-tr">
                    <a href="#" class="btn btn-blue px25" @click.prevent="syncQuestions">설문 저장</a>
                </div>
            </template>
        </div>

        <div class="popup-box fixed" v-if="activePop">
            <div class="box lg active" data-name="popup01">
                <div class="popup-head">
                    <div class="title-box">
                        <h2>질의 목록</h2>
                    </div>
                    <a href="#" class="close" @click.prevent="activePop = false">닫기</a>
                </div>
                <div class="popup-body">
                    <div class="line-box"></div>
                    <div class="flex flex-vc flex-tj mt15">
                        <form @submit.prevent="getQuestions" class="flex flex-vc">
<!--                            <div class="select-box mr10">
                                <select v-model="form.classification_id">
                                    <option value="">분류</option>
                                    <option :value="classification.title" v-></option>
                                </select>
                            </div>-->
                            <div class="select-box mr10">
                                <select v-model="questionsForm.type" @change="() => {questionsForm.page = 1; getQuestions();}">
                                    <option value="">질의유형</option>
                                    <option :value="type.value" v-for="type in types.data" :key="type.value">{{type.label}}</option>
                                </select>
                            </div>

                            <div class="search-box">
                                <input type="text" placeholder="검색라벨을 입력해주세요." v-model="questionsForm.word">
                            </div>

                            <div class="button-box ml10">
                                <button type="submit" class="btn btn-active-2" @click.prevent="getQuestions">검색</button>
                            </div>
                        </form>
                        <div class="list-count-box">
                            <p>목록 <b>{{ questions.meta.total.toLocaleString() }}</b>건</p>
                        </div>
                    </div>
                    <div class="table-box mt25">
                        <table>
                            <thead>
                            <tr>
                                <th width="65">번호</th>
                                <th width="260">검색라벨</th>
                                <th>제목</th>
                                <th width="120">유형</th>
                                <th width="120">선택</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="question in filteredQuestions" :key="question.id">
                                <td>{{ question.id }}</td>
                                <td>{{ question.label_search }}</td>
                                <td><a target="_blank" :href="`/admin/questions/create?id=${question.id}`" class="subject">{{ question.title }}</a></td>
                                <td>{{ question.format_type }}</td>
                                <td>
                                    <div class="table-button-box">
                                        <a href="#" class="active" @click.prevent="addQuestion(question)">선택</a>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mt24"></div>

                    <pagination :meta="questions.meta" @paginate="(page) => {questionsForm.page = page; getQuestions()}" />
                </div>
            </div>
        </div>

        <div class="popup-box fixed" v-if="activeCampaigns">
            <div class="box lg active">
                <div class="popup-head">
                    <div class="title-box">
                        <h2>캠페인 목록</h2>
                    </div>
                    <a href="#" class="close" @click.prevent="activeCampaigns = false">닫기</a>
                </div>
                <div class="popup-body">
                    <div class="line-box"></div>
                    <div class="flex flex-vc flex-tj mt15">
                        <form @submit.prevent="getCampaigns" class="flex flex-vc">
                            <!--                            <div class="select-box mr10">
                                                            <select v-model="form.classification_id">
                                                                <option value="">분류</option>
                                                                <option :value="classification.title" v-></option>
                                                            </select>
                                                        </div>-->
                            <div class="select-box mr10">
                                <select v-model="campaignsForm.column" @change="() => {campaignsForm.page = 1; getCampaigns();}">
                                    <option value="">검색조건</option>
                                    <option value="title">제목</option>
                                    <option value="provider">클라이언트명</option>
                                </select>
                            </div>

                            <div class="search-box">
                                <input type="text" placeholder="검색어를 입력해주세요." v-model="campaignsForm.word">
                            </div>

                            <div class="button-box ml10">
                                <button type="submit" class="btn btn-active-2" @click.prevent="getCampaigns">검색</button>
                            </div>
                        </form>
                        <div class="list-count-box">
                            <p>목록 <b>{{ campaigns.meta.total.toLocaleString() }}</b>건</p>
                        </div>
                    </div>
                    <div class="table-box mt25">
                        <table>
                            <thead>
                            <tr>
                                <th width="65">번호</th>
                                <th>클라이언트</th>
                                <th>캠페인명</th>
                                <th>상태</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="campaignData in campaigns.data" :key="campaignData.id" v-if="campaign.id != campaignData.id">
                                <td>{{ campaignData.id }}</td>
                                <td>{{ campaignData.provider.title }}</td>
                                <td><a target="_blank" :href="`/admin/campaigns/create?id=${campaignData.id}`" class="subject">{{ campaignData.title }}</a></td>
                                <td>{{ campaignData.format_state }}</td>
                                <td>
                                    <div class="table-button-box">
                                        <a href="#" class="active" @click.prevent="copyCampaign(campaignData)">선택</a>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mt24"></div>

                    <pagination :meta="campaigns.meta" @paginate="(page) => {campaignsForm.page = page; getCampaigns()}" />
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

            activeAll: true,
            activePop : false,
            activeCampaigns: false,


            domains : {
                data: []
            },

            items: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            folderQuestions: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            campaigns: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            campaign: null,

            targetFolder: null,

            form: new Form(this.$axios, {
                id: "",
                // domain: "",
                folder_id: this.targetFolder ? this.targetFolder.id : "",
                campaign_id: this.$route.query.campaign_id,

                title:"",
                use:"",
                basic: this.$route.query.basic,

                description: "",
                use_dashboard: "",

                files: [],
                files_mobile: [],
                files_remove_ids: [],

                questions: [],
            }),

            questions: {
                data: [],
                meta: {
                    current_page:1,
                    last_page:1,
                    total: 0,
                }
            },

            types: {
                data: [],
            },

            questionsForm: new Form(this.$axios, {
                column: "label_search",
                word: "",
                type: "",

            }),

            campaignsForm: new Form(this.$axios, {
                campaign_id: "",
                column: "",
                word: "",
                type: "",
            }),

            activeIds: [],

            question: {
                id: "",
                open_reporter : 1,
                use_move_condition: "",
                use_excel: "",
            }
        }
    },

    methods: {
        closeAll(){
            this.activeIds = [];
        },

        openAll(){
            this.activeIds = this.items.data.map(item => item.id);
        },

        toggle(item){
            this.activeIds = this.activeIds.includes(item.id)
                    ? this.activeIds.filter(id => id != item.id)
                    : [...this.activeIds, item.id];
        },
        toggleFolder(item){
            this.targetFolder = this.targetFolder == item
                    ? null
                    : item;

            this.clearForm();
        },

        /*getDomains(){
            this.$axios.get("/api/domains")
                    .then(response => {
                        this.domains = response.data;
                    });
        },*/

        getCampaign(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/admin/campaigns/" + this.$route.query.campaign_id)
                    .then(response => {
                        this.campaign = response.data.data;

                        this.loading = false;

                        $("html,body").scrollTop(0);
                    });
        },

        getCampaigns(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/admin/campaigns/" , {
                params: this.form.data()
            }).then(response => {
                this.campaigns = response.data;
            });
        },

        copyCampaign(campaign){
            this.campaignsForm.campaign_id = campaign.id;

            this.$store.commit("setLoading", true);

            this.campaignsForm.patch("/api/admin/campaigns/" + this.campaign.id + "/copy")
                    .then(response => {
                        this.getItems();

                        this.activeCampaigns = false;
                    });
        },

        getItems(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/admin/folders/" , {
                params: this.form.data()
            }).then(response => {
                this.items = response.data;

                this.openAll();
            });
        },

        readyToCreateChild(){
            this.form.set({
                id: "",
                folder_id: this.targetFolder ? this.targetFolder.id : "",
                campaign_id: this.$route.query.campaign_id,

                title:"",
                use:"",
                basic: 0,

                description: "",
                use_dashboard: "",

                questions:[],
            });
        },

        clearForm(){
            if(!this.targetFolder)
                return this.form.set({
                    id: "",
                    folder_id: this.targetFolder ? this.targetFolder.id : "",
                    campaign_id: this.$route.query.campaign_id,
                    use:"",

                    description: "",
                    use_dashboard: "",

                    questions:[],
                });

            return this.form.set({
                ...this.targetFolder,

                questions: [],
            });
        },

        ready(){
            return alert("준비중입니다.");
        },

        update(){
            this.form.patch("/api/admin/folders/" + this.form.id)
                    .then(response => {
                        this.$store.commit("setPop", {});

                        this.getItems();
                    });
        },

        store(){
            this.form.post("/api/admin/folders")
                    .then(response => {
                        console.log(response);
                        this.$store.commit("setPop", {});

                        this.getItems();
                    });
        },

        remove(){
            this.form.delete("/api/admin/folders/" + this.form.id )
                    .then(response => {
                        this.$store.commit("setPop", {});

                        this.getItems();
                    });
        },

        getFolderQuestions(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/admin/folderQuestions", {
                params: {
                    folder_id: this.targetFolder.id
                }
            }).then(response => {
                this.folderQuestions = response.data;

                this.form.questions = this.folderQuestions.data.map(folderQuestion => {
                    console.log(folderQuestion.folderQuestionOptions);

                    return {
                        ...folderQuestion,
                        ...folderQuestion.question,
                        options: folderQuestion.folderQuestionOptions.map(folderQuestionOption => {
                            return {
                                ...folderQuestionOption,
                                ...folderQuestionOption.option,
                            }
                        })
                    }
                });
                // this.form.questions = response.data.data;
            });
        },

        getQuestions(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/admin/questions" , {
                params: this.questionsForm.data()
            }).then(response => {
                this.questions = response.data;
            });
        },

        getTypes(){
            this.$axios.get("/api/admin/questions/types")
                    .then(response => {
                        this.types = response.data;
                    });
        },

        removeFolderQuestion(index){
            this.form.questions.splice(index, 1);
        },

        syncQuestions(){
            this.$store.commit("setLoading", true);


            this.form.questions = this.form.questions.map(question => question);

            this.form.post("/api/admin/folders/" + this.targetFolder.id + "/syncQuestions")
                    .then(response => {
                        this.$store.commit("setPop", {});

                        this.getFolderQuestions();
                    })
        },

        addQuestion(question){
            this.form.questions.push({
                open_reporter: 1,
                use_move_condition: "",
                use_excel: "",

                ...question,
                options: question.options.map(option => {
                    return {
                        ...option,
                        move_question_id: "",
                        score: question.options.length > 0 ? (1 / question.options.length).toFixed(2) : "",
                    }
                })
            });

            this.activePop = false;
        },

    },

    computed: {
        filteredQuestions(){
            return this.questions.data.filter(question => {
                if(this.form.questions.find(questionData => questionData.id == question.id))
                   return false;

                if(this.$route.query.basic == 1 && question.type !== 'TEXTGROUP')
                    return false;

                return true;
            })
        }
    },

    watch: {
        targetFolder: {
            handler(){
                if(this.targetFolder && (this.targetFolder.basic || this.targetFolder.folder_id))
                    this.getFolderQuestions();
            }
        },
    },


    mounted() {
        this.getTypes();

        this.getQuestions();

        this.getCampaign();

        this.getItems();

        this.getCampaigns();

        // this.getDomains();
    }

}
</script>
