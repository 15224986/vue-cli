<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section">
                <ul class="section-subhead">
                    <li>1.参考网址：<el-link href="https://www.dazhuanlan.com/jiangjiazhi/topics/1176603" type="primary" target="_blank">https://www.dazhuanlan.com/jiangjiazhi/topics/1176603</el-link></li>
                    <li>2.参考网址：<el-link href="https://blog.csdn.net/m0_37727560/article/details/108881113" type="primary" target="_blank">https://blog.csdn.net/m0_37727560/article/details/108881113</el-link></li>
                    <li>3.参考网址：<el-link href="https://www.jianshu.com/p/fb49c843a679" type="primary" target="_blank">https://www.jianshu.com/p/fb49c843a679</el-link></li>
                </ul>
                <div class="code-editor">
                    <moc-ace-editor v-model="codeValue"></moc-ace-editor>
                    <el-button @click="getValue" type="primary">查看值</el-button>
                </div>
            </section>

        </div>
    </article>
</template>
<script>



    export default {
        data() {
            let lt = '<';
            return {
                loading: false,

                codeValue: `<el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
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
${lt}script>
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
${lt}/script>
<style scoped lang="scss">
    #wrapper{
        background-color: transparent;
    }
    .section-breadcrumb{
        margin-bottom: 20px;
    }
    .section + .section{
        margin-top: 20px;
    }
    .section-title {
        padding: 0 0 10px;
    }
    .section-subhead{
        padding-bottom: 16px;
    }
    .section-title + .section-subhead{
        margin-top: -6px;
    }
</style>`
            };
        },
        mounted(){

        },
        methods: {
            getValue(){
                console.log( this.codeValue )
            }
        }
    };
</script>
<style scoped lang="scss">
    #wrapper{
        background-color: transparent;
    }
    .section-breadcrumb{
        margin-bottom: 20px;
    }
    .section + .section{
        margin-top: 20px;
    }
    .section-title {
        padding: 0 0 10px;
    }
    .section-subhead{
        padding-bottom: 16px;
    }
    .section-title + .section-subhead{
        margin-top: -6px;
    }
</style>
