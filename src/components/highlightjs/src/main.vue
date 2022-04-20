<template>
    <div class="moc-highlight">
        <ul class="moc-highlight-icons">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="moc-highlight-index">
            <li v-for="(item,index) in lines" :key="index">{{item}}</li>
        </ul>
        <div @click="copyActiveCode(data)" class="moc-highlight-copy">{{copyText}}</div>
        <div class="moc-highlight-lang">{{language}}</div>
        <pre ref="highlight">
            <code :class="language">{{data}}</code>
        </pre>
    </div>
</template>
<script>

    import hljs from 'highlight.js'
    import 'highlight.js/scss/monokai-sublime.scss'  //这里有多个样式，自己可以根据需要切换

    import CopyText from "@/utils/CopyText.js";

    export default {
        name: 'mocHighlight',
        componentName: 'mocHighlight',
        props: {
            data: {
                type: String,
                default: ''
            },
            language: {
                type: String,
                default: 'javascript'
            },
        },
        data() {
            return {
                lines: 0,
                copyText:"复制代码"
            };
        },
        watch: {
            data:{
                deep: true,
                immediate: true,
                handler: function(nData){
                    this.$nextTick(()=>{
                        this.lines = this.data.split('\n').length;
                        let targets = this.$refs.highlight.querySelectorAll('code')[0]
                        hljs.highlightBlock( targets );
                    })
                }
            }
        },
        mounted() {

        },
        methods: {
            copyActiveCode(text){
                CopyText( text, (e)=>{
                    this.copyText = '复制成功'
                    setTimeout(()=>{
                        this.copyText = '复制代码'
                    }, 3000)
                }, (e)=>{
                    this.$message({ type: 'waning', message: '该浏览器不支持自动复制' })
                })
            }
        }
    };
</script>
