<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">高亮代码块</h3>
                <dl class="section-subhead">
                    <dt>需求插件：highlight.js、clipboard</dt>
                    <dd>1、highlight.js 官网：<a href="https://highlightjs.org" target="_blank">https://highlightjs.org</a></dd>
                    <dd>2、highlight.js 中文网：<a href="https://fenxianglu.cn/highlight.html" target="_blank">https://fenxianglu.cn/highlight.html</a></dd>
                    <dt>clipboard 进行二次封装 CopyText</dt>
                    <dd>3、clipboard 参考文档：<a href="https://www.cnblogs.com/taohuaya/p/12407898.html" target="_blank">https://www.cnblogs.com/taohuaya/p/12407898.html</a></dd>
                    <dd>4、clipboard 参考文档：<a href="https://www.jb51.net/article/149157.htm" target="_blank">https://www.jb51.net/article/149157.htm</a></dd>
                </dl>

                <h3 class="moc-highlight-box-tit">javascript 语言高亮</h3>
                <moc-highlight :data="sourcecode"></moc-highlight>
                <h3 class="moc-highlight-box-tit">html 语言高亮</h3>
                <moc-highlight :data="sourcecode1" language="html"></moc-highlight>
                <h3 class="moc-highlight-box-tit">vue 语言高亮</h3>
                <moc-highlight :data="sourcecode2" language="html"></moc-highlight>
            </section>

        </div>
    </article>
</template>
<script>



    export default {
        name: "sectorCss3",
        data() {

            let lt = '<';

            return {
                loading: false,

                sourcecode: `<div class="zh-title">
    <strong>Hello World！</strong>
<div>
<script>
    function foo() {
        var str = 'Hello World !';
        console.log(str);
    }
    function show_msg(a,b){
        var mgs = "卿本老兔子";
        alert(msg);
    }
${lt}/script>`,
                sourcecode1: `<div class="zh-title">
    <strong>Hello World！</strong>
<div>`,




                sourcecode2: `<el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
    <el-form-item
        label="邮箱"
        prop="email"
        :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]"
    >
        <el-input v-model="dynamicValidateForm.email"></el-input>
    </el-form-item>
    <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains" :key="domain.key"
        :label="'域名' + index"
        :prop="'domains.' + index + '.value'"
        :rules="{
            required: true, message: '域名不能为空', trigger: 'blur'
        }"
    >
        <el-input v-model="domain.value"></el-input>
        <el-button @click.prevent="removeDomain(domain)">删除</el-button>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="addDomain">新增域名</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
    </el-form-item>
</el-form>
<script>
    export default {
        data() {
            return {
                dynamicValidateForm: {
                    domains: [{
                        value: ''
                    }],
                    email: ''
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            removeDomain(item) {
                var index = this.dynamicValidateForm.domains.indexOf(item)
                if (index !== -1) {
                    this.dynamicValidateForm.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.dynamicValidateForm.domains.push({
                    value: '',
                    key: Date.now()
                });
            }
        }
    }
${lt}/script>`
            };
        },

        mounted(){

        },
        methods: {

        }
    };
</script>
