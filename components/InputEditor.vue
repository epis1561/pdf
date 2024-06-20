<template>
    <div class="ql-editor">
        <div ref="editor" :style="`min-height:${this.height}px;`"></div>
        <input type="file" :id="id" accept="image/*" style="position: absolute; z-index:-1; opacity:0; left:-1000px; bottom:-1000px;" @change="changeImg">
    </div>

</template>
<style>
.ql-snow .ql-tooltip[data-mode="formula"] {
    left:auto !important; right:20px !important;
}
</style>
<script>
export default {
    components: {},

    props: {
        default: "",

        required: {
            default: true
        },

        id: {
            default : "editor"
        },

        height: {
            default: 400
        }
    },

    data() {
        return {
            value: this.default,
            editor: "",
        }
    },

    methods: {
        changeImg(event) {
            let formData = new FormData();

            formData.append("file", event.target.files[0]);

            this.$axios.post("/api/images", formData)
                .then(response => {
                    let url = response.data;

                    const range = this.editor.getSelection();

                    if(range)
                        this.editor.insertEmbed(range.index, 'image', url);
                    else
                        this.editor.insertEmbed(range.index, 'image', url);
                    /*this.editor.root.innerHTML += `<img src="${response.data.data}" alt=""/>`
                    return response.data;*/
                });
        },

        changeContents() {
            this.$emit("change", this.editor.root.innerHTML);
        },

        imageHandler() {
            document.getElementById(this.id).click();
        },

        renderMath() {
            var mathElements = document.querySelectorAll('.math-tex');
            mathElements.forEach(function (element) {
                katex.render(element.textContent, element);
            });
        },

    },

    mounted() {
        let self = this;
        const toolbarOptions = [
            ['bold', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{'header': 1}, {'header': 2}],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            [{'script': 'sub'}, {'script': 'super'}],
            [{'indent': '-1'}, {'indent': '+1'}],
            [{'direction': 'rtl'}],
            [{'size': ['small', false, 'large', 'huge']}],
            [{'header': [1, 2, 3, 4, 5, 6, false]}],
            [{'color': []}, {'background': []}],
            [{'align': []}],
            ['clean', 'image'],
            ["link"]
        ]

        this.editor = new Quill(this.$refs.editor, {
            modules: {
                toolbar: {
                    container: toolbarOptions,
                    handlers: {
                        'image': self.imageHandler
                    }
                }
            },
            theme: 'snow',
            readOnly: true
        })

        this.editor.on("text-change", () => {
            // this.renderMath();
            this.changeContents();
        })

        setTimeout(function(){
            self.editor.enable();
            $("html, body").scrollTop(0);
        }, 10);

        this.editor.pasteHTML(this.default);

        // this.$refs.editor.quill.setContents(this.default);
        // this.$store.commit('setQuillInstance', quill)
    },


    watch: {
        value: function (value, oldValue) {
            this.$emit("change", value);
        }
    }
}
</script>
