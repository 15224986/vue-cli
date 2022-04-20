<template>
    <div id="wrapper">
        <section class="form-section">
            <el-form :model="form" status-icon ref="formName" label-width="120px">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="姓名" prop="name" :rules="[
                            { required: true, message: '请输入登录人姓名', trigger: 'blur' },
                            { min: 2, max: 30, message: '长度在 2 到 30 个字符', trigger: 'blur' }
                        ]">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="性别" prop="gender" :rules="[
                            { required: true, message: '请选择性别', trigger: 'change' }
                        ]">
                            <el-radio-group v-model="form.gender">
                                <el-radio :label="1">男</el-radio>
                                <el-radio :label="2">女</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit1('formName')" v-if="$route.query.userId">修改</el-button>
                    <el-button type="primary" @click="onSubmit2('formName')" v-else>新增</el-button>
                    <el-button @click="onCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>
<script>
export default {
    name: 'echartsLine',
    data() {
        return {
            form: {
                name: '',
                gender: '',
            },
        };
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        onSubmit1(formName) { // 修改
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log('验证通过！');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        onSubmit2(formName) { // 新增
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log('验证通过！');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        onCancel() {
            this.$router.push({ path: '/jurisdiction/list' });
        },
    },
};
</script>