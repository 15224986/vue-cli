<template>
    <div class="moc-ace-editor">
        <pre ref="ace" style="margin: 0;"></pre>
    </div>
</template>
<script>
    import ace from 'ace-builds'
    // 不导入 webpack-resolver，该模块路径会报错
    import 'ace-builds/webpack-resolver'
    // 导入对应主题库
    import 'ace-builds/src-min-noconflict/theme-dracula'
    import 'ace-builds/src-min-noconflict/theme-monokai'
    import 'ace-builds/src-min-noconflict/theme-chrome'
    import 'ace-builds/src-min-noconflict/theme-github'
    // 编辑提示
    import 'ace-builds/src-min-noconflict/ext-language_tools'
    // 导入对应语言库
    import 'ace-builds/src-min-noconflict/mode-html'
    import 'ace-builds/src-min-noconflict/mode-sass'
    import 'ace-builds/src-min-noconflict/mode-javascript'
    import 'ace-builds/src-min-noconflict/mode-json'

    export default {
        name: 'mocAceEditor',
        componentName:'mocAceEditor',
        props: {
            value: {
                type: String,
                required: true
            },
            // 默认语言
            language: {
                type: String,
                default: 'html'
            },
            // 主题，对应主题库 JS 需要提前引入
            theme: {
                type: String,
                default: 'monokai'
            },
            // 是否只读
            readonly: {
                type: Boolean,
                default: false
            },
            // 最小行数
            minLines:  {
                type: Number,
                default: 10
            },
            // 最大行数
            maxLines:  {
                type: Number,
                default: 30
            },
            // 字体大小
            fontSize:  {
                type: Number,
                default: 16
            },
            // 设置空格大小
            tabSize:  {
                type: Number,
                default: 4
            }
        },
        data() {
            return {
                loading: false,
                aceEditor: null,
                codeValue: this.value
            };
        },
        watch: {
            value(newVal) {
                if (this.aceEditor.getValue() !== newVal) {
                    this.aceEditor.setValue(newVal)
                    this.aceEditor.clearSelection()
                }
            }
        },
        mounted(){
            this.initEditor()
        },
        methods: {
            /**
             * 7、事件监听
             */
            // 监听改变事件:
            // editor.getSession().on('change', function(e) {
            //     e.type, etc
            // });
            // // 监听选择事件:
            // editor.getSession().selection.on('changeSelection', function(e) {
            // });
            // // 监听光标移动:
            // editor.getSession().selection.on('changeCursor', function(e) {
            // });

            initEditor(){
                this.aceEditor = ace.edit(this.$refs.ace, {
                    value: this.codeValue,
                    mode: `ace/mode/${this.language}`,          // 默认设置的语言模式
                    theme: `ace/theme/${this.theme}`,           // 默认设置的主题
                    minLines: this.minLines,                    // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
                    maxLines: this.maxLines,                    // 最大行数，超过会自动出现滚动条
                    fontSize: this.fontSize,                    // 编辑器内字体大小
                    tabSize: this.tabSize,                      // 制表符设置为 4 个空格大小
                    readOnly: this.readonly,                    // 是否只读
                    highlightActiveLine: !this.readonly         // 选中行是否高亮显示
                });
                // 设置属性等，具体需要可根据官方参数自行设置
                this.aceEditor.setOptions({
                    enableBasicAutocompletion: true,        // 启用基本自动完成
                    enableLiveAutocompletion: true,         // 启用实时自动完成
                    enableSnippets: true,                   // 启用代码片段
                    enableEmmet: true,                      // 启用Emmet
                    wrap: true                              // 换行
                })
                // 设置值改变监听
                this.aceEditor.on('change', () => {
                    this.$emit('input', this.aceEditor.getValue())
                })
            }
        }
    };
</script>
