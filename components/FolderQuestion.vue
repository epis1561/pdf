<template>
    <div class="write-body" ref="answer">
        <template v-if="folderQuestion.question.type === 'RADIO'">
            <div v-for="(folderQuestionOption, folderQuestionOptionIndex) in folderQuestion.folderQuestionOptions" :key="folderQuestionOption.id">
                <div class="check-box">
                    <input ref="input" type="radio" name="" :id="`${invest ? 'invest' : ''}folderQuestionOption-` + folderQuestionOption.id" :value="folderQuestionOption.id" v-model="form.answers[folderQuestionIndex].folder_question_option_id">
                    <label :for="`${invest ? 'invest' : ''}folderQuestionOption-` + folderQuestionOption.id"><p>{{ folderQuestionOption.option.title }}</p></label>
                </div>

                <!-- 추가필드 -->
                <dl v-if="needValueAdditional(folderQuestion.question, folderQuestionOption, folderQuestionIndex)" class="add-field">
                    <input ref="input" type="text" :placeholder="getValueAdditionalPlaceholder(folderQuestion.question, folderQuestionOption, folderQuestionIndex)" v-model="form.answers[folderQuestionIndex].value_additional">
                </dl>
            </div>
        </template>

        <template v-if="folderQuestion.question.type === 'SELECT'">
            <div>
                <select ref="input" name="" id="" v-model="form.answers[folderQuestionIndex].folder_question_option_id">
                    <option value="" disabled selected>선택해주세요.</option>
                    <option v-for="folderQuestionOption in folderQuestion.folderQuestionOptions" :key="folderQuestionOption.id" :value="folderQuestionOption.id">{{folderQuestionOption.option.title}}</option>

                    <option value="" v-if="folderQuestion.question.give_exception == 1" v-model="form.answers[folderQuestionIndex].exception" @change="(data) => syncException(data)">해당없음</option>
                </select>
            </div>
        </template>

        <template v-if="folderQuestion.question.type === 'TEXT'">
            <div>
                <input ref="input" type="text" placeholder="내용을 입력해주세요."  v-model="form.answers[folderQuestionIndex].value">
            </div>
        </template>

        <template v-if="folderQuestion.question.type === 'TEXTGROUP'">
            <div v-for="(folderQuestionOption, index) in folderQuestion.folderQuestionOptions" :key="folderQuestionOption.id">
                <b>{{ folderQuestionOption.option.label_before }}</b>
                <input ref="input" type="number" :placeholder="`내용을 입력해주세요.`" v-model="form.answers[folderQuestionIndex].value[index]">
                <em>{{folderQuestionOption.option.label_after}}</em>
            </div>
        </template>

        <template v-if="folderQuestion.question.type === 'NUMBER'">
            <div v-for="(year, index) in years" :key="year">
                <b>{{ year }}년</b>
                <input ref="input" type="number" :placeholder="`해당 연도의 ${folderQuestion.folderQuestionOptions[0].option.data_title}(을)를 입력해주세요.`" v-model="form.answers[folderQuestionIndex].value[index]">
                <em>{{folderQuestion.folderQuestionOptions[0].option.data_unit}}</em>
            </div>
        </template>

        <template v-if="folderQuestion.question.type === 'CHECKBOX'">
            <div v-for="(folderQuestionOption, folderQuestionOptionIndex) in folderQuestion.folderQuestionOptions" :key="folderQuestionOption.id">
                <div class="check-box">
                    <input ref="input" type="checkbox" name="" :id="`${invest ? 'invest' : ''}folderQuestionOption-` + folderQuestionOption.id" :value="folderQuestionOption.id" v-model="form.answers[folderQuestionIndex].folder_question_option_ids">
                    <label :for="`${invest ? 'invest' : ''}folderQuestionOption-` + folderQuestionOption.id"><p>{{ folderQuestionOption.option.title }}</p></label>
                </div>

                <!-- 추가필드 -->
                <dl v-if="needValueAdditional(folderQuestion.question, folderQuestionOption, folderQuestionIndex)" class="add-field">
                    <input ref="input" type="text" :placeholder="getValueAdditionalPlaceholder(folderQuestion.question, folderQuestionOption, folderQuestionIndex)" v-model="form.answers[folderQuestionIndex].values_additional[folderQuestionOptionIndex]">
                </dl>
            </div>
        </template>

        <div v-if="folderQuestion.question.give_exception == 1">
            <div class="check-box">
                <input data-type="empty" type="checkbox" name="" :id="`${invest ? 'empty invest' : 'empty'}FolderQuestion-` + folderQuestion.id" v-model="form.answers[folderQuestionIndex].exception" @change="event => syncException(event.target.checked)">
                <label :for="`${invest ? 'empty invest' : 'empty'}FolderQuestion-` + folderQuestion.id"><p>해당 없음</p></label>
            </div>
        </div>

        <!-- 첨부파일 -->
        <div v-if="!invest && folderQuestion.question.can_file">
            <input-user-files :only-show="onlyShow" :multiple="true" :default="folderQuestion.answer ? folderQuestion.answer.files : []" @change="data => form.answers[folderQuestionIndex].files = data" @removed="removed"/>
        </div>
    </div>
</template>
<script>
import NuxtLogo from "./NuxtLogo";
import folderQuestion from "@/components/FolderQuestion.vue";
export default {
    props: {
        survey: {
            required: true
        },
        invest: {
            default: false,
        },
        folderQuestion: {
            required: true,
        },
        folderQuestionIndex: {
            required: true,
        },
        form: {
            required: true,
        },
        onlyShow: {
            default: false
        },
    },

    data(){
        return {

        }
    },

    methods: {
        needValueAdditional(question, folderQuestionOption, index){

            if(question.type === 'CHECKBOX'){
                if(this.form.answers[index].folder_question_option_ids.some(id => id == folderQuestionOption.id) && folderQuestionOption.option.add_field == 1)
                    return true;

                return false;
            }

            if(question.type === 'RADIO'){
                if(this.form.answers[index].folder_question_option_id == folderQuestionOption.id && folderQuestionOption.option.add_field == 1)
                    return true;

                return false;
            }
        },

        getValueAdditionalPlaceholder(question, folderQuestionOption, index){
            if(question.type === 'CHECKBOX'){
                if(this.form.answers[index].folder_question_option_ids.includes(folderQuestionOption.id) && folderQuestionOption.option.add_field_placeholder)
                    return folderQuestionOption.option.add_field_placeholder;

                return "추가내용을 입력해주세요.";
            }

            if(question.type === 'RADIO'){
                if(this.form.answers[index].folder_question_option_id == folderQuestionOption.id && folderQuestionOption.option.add_field_placeholder)
                    return folderQuestionOption.option.add_field_placeholder;

                return "추가내용을 입력해주세요.";
            }

        },

        removed(data){
            this.form.answers[this.folderQuestionIndex].files_remove_ids = data;
        },

        syncException(exception = false){
            let answer = this.$refs.answer;
            let inputs = answer.querySelectorAll('input:not([data-type="empty"]), select, textarea');

            if(exception){
                inputs.forEach(input => {
                    input.disabled = true;
                });

                this.form.answers[this.folderQuestionIndex].folder_question_option_id = "";
                this.form.answers[this.folderQuestionIndex].folder_question_option_ids = [];

                // "true"로 넘어가서 boolean으로 바꿔줘야함
                this.form.answers[this.folderQuestionIndex].exception = 1;
            }else{
                inputs.forEach(input => {
                    input.disabled = false;
                });

                // "false"로 넘어가서 boolean으로 바꿔줘야함
                this.form.answers[this.folderQuestionIndex].exception = 0;
             }
        }
    },

    watch: {
        '$route'(to, from) {
``
        }
    },

    computed:{
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

    mounted() {
        if(this.form.answers[this.folderQuestionIndex].exception == 1)
            this.syncException(1);

        if(this.onlyShow && this.$refs.input) {
            Array.isArray(this.$refs.input)
                ? this.$refs.input.map(input => input.disabled = true)
                : this.$refs.input.disabled = true;
        }
    }
}
</script>
