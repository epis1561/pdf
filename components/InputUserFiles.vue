<template>
    <div class="m-input-files type01">
        <div class="file-box" :class="onlyShow ? 'onlyShow' : ''">
            <strong>{{title}}</strong>
            <div>
                <div v-for="(file, index) in defaultFiles" :key="index">
                    <a :href="file.url" download="">{{ file.name }}</a>
                    <a href="#" class="delete" v-if="!onlyShow" @click.prevent="remove(file, index)" >삭제</a>
                    <a :href="file.url" class="download" download="" v-else>
                        <i class="xi-download"></i>
                    </a>
                </div>

                <div v-for="(file, index) in files" :key="index">
                    <a :href="file.url" download="">{{ file.name }}</a>
                    <a href="#" class="delete" v-if="!onlyShow" @click.prevent="remove(file, index)" >삭제</a>
                    <a :href="file.url" class="download" download="" v-else>
                        <i class="xi-download"></i>
                    </a>
                </div>
            </div>

            <label :for="id" v-if="!onlyShow">첨부<input style="cursor:pointer;" type="file" name="file" :id="id" @change="changeFile" :multiple="multiple"></label>
        </div>
    </div>
</template>
<style>
.m-input-files.type01 {
    width:100%;
}
.m-input-files.type01 .m-input {
    display: flex; align-items: center;
}
.m-input-files.type01 .m-input .m-input-comment {
    margin-left:16px;
    font-size:14px; color:#999;
}
.m-input-files.type01 .m-input input {
    display: none;
}
.m-input-files.type01 .m-input .m-btn {
    display: inline-block;
    font-weight:500; color:#5DBBBB;
    cursor:pointer;
}
.m-input-files.type01 .m-files-wrap {
    margin-top:12px;
}
.m-input-files.type01 .m-files {
    display: flex; flex-wrap:wrap;
    margin:-8px;
}
.m-input-files.type01 .m-file-wrap {
    padding:8px;
}
.m-input-files.type01 .m-file {
    display:flex; align-items:center; justify-content:space-between; width: 100%;
    padding:6px 15px;
    position:relative; background-color:#F7F7F7;
}
.m-input-files.type01 .m-file-title {
    font-size:15px;
    font-weight:bold;
}
.m-input-files.type01 .m-file .m-btn-remove {
    margin-left:12px;
}
.m-input-files.type01 .m-file .m-btn-remove i {
    color:#000;
}
</style>
<script>
export default {
    props: {
        default: {
            default() {
                return []
            }
        },
        required: {
            default: true
        },
        multiple: {
            default: false
        },
        id: {
            default: "file"
        },
        onlyShow: {
            default: false,
        },
        max: {
            default: 10
        },
        maxBytes: {
            default: 1024 * 1024 * 1024 // 1GB
        },
        comment: {
            default: ""
        },
        title: {
            default: "첨부 파일"
        }
    },

    data(){
        return {
            defaultFiles: this.default,
            files: [],
            remove_ids: [],
        }
    },

    methods: {
        changeFile(event) {
            let hasByteOverFile = false;

            if(!this.multiple) {
                this.files = [];
                this.defaultFiles = [];
            }

            if(this.max && this.max < Array.from(event.target.files).length)
                return alert(`최대 ${this.max}개의 파일만 업로드할 수 있습니다.`);

            let files = Array.from(event.target.files).map(file => {
                if(file.size > this.maxBytes)
                    return hasByteOverFile = true;

                return {
                    name: file.name,
                    file: file,
                };
            });

            if(hasByteOverFile)
                return alert(`최대 ${(this.maxBytes / (1024 * 1024)).toLocaleString()}MB의 파일만 업로드할 수 있습니다.`);

            this.files = [...this.files, ...files];

            this.$emit("change", this.files);
        },

        remove(file, index){
            // 새로 업로드된 파일 목록 중 삭제
            if(file.id) {
                this.defaultFiles.splice(index, 1);

                this.remove_ids.push(file.id);

                return this.$emit("removed", this.remove_ids);
            }

            // 기존 업로드된 파일 목록 중 삭제
            this.files.splice(index, 1);

            this.$emit("change", this.files);
        }
    },

    mounted() {
    }
}
</script>
