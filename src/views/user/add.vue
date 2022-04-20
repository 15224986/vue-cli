<template>
    <div id="wrapper">
        <section class="form-section">
            <el-form ref="form" :model="form" label-width="120px" status-icon>
                <el-row>
                    <el-col :span="16">
                        <el-form-item
                            label="头像"
                            prop="fileList"
                            :rules="[
                                { required: true, message: '请上传头像', trigger: 'change' }
                            ]"
                        >
                            <el-upload
                                class="upload-picture-card"
                                :action="uploadUrl"
                                list-type="picture-card"
                                :file-list="form.fileList"
                                :on-success="handleUploadSuccess"
                                :on-error="handleUploaderror"
                                :on-remove="handleUploadRemove"
                                multiple
                            >
                                <i class="el-icon-plus"></i>
                                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item class="form-btns">
                    <el-button type="primary" @click="onSubmit4">获取要保存信息</el-button>
                </el-form-item>
                <el-row>
                    <el-col :span="8">
                        <el-form-item
                            label="姓名"
                            prop="name"
                            :rules="[
                                { required: true, message: '请输入登录人姓名', trigger: 'blur' },
                                { min: 2, max: 30, message: '长度在 2 到 30 个字符', trigger: 'blur' }
                            ]"
                        >
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="性别"
                            prop="gender"
                            :rules="[
                            { required: true, message: '请选择性别', trigger: 'change' }
                        ]"
                        >
                            <el-radio-group v-model="form.gender">
                                <el-radio :label="1">男</el-radio>
                                <el-radio :label="2">女</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item
                            label="电话号码"
                            prop="phone"
                            :rules="{ required: true, message: '请输入手机号' }"
                        >
                            <el-input v-model="form.phone"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="出生日期"
                            prop="birthday"
                            :rules="{ required: true, message: '请选择出生日期' }"
                        >
                            <el-date-picker
                                v-model="form.birthday"
                                type="date"
                                format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd"
                                placeholder="选择日期"
                                style="width: 100%;"
                            ></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item
                            label="用户名"
                            prop="username"
                            :rules="[
                            { required: true, message: '登录账号不能为空'},
                            { validator: rulesNumberEnglish, message:'只能输入数字及字母'},
                            { min: 3, max: 30, message: '长度在 3 到 30 位', trigger: 'blur' }
                        ]"
                        >
                            <el-input v-model="form.username"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" v-if="!$route.query.userId">
                        <el-form-item
                            label="密码"
                            prop="passwd"
                            :rules="{ validator: validatePassword, trigger: 'blur' }"
                        >
                            <el-input v-model="form.passwd"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item class="form-btns">
                    <el-button
                        type="primary"
                        @click="onSubmit1('form')"
                        v-if="$route.query.userId"
                    >修改</el-button>
                    <el-button type="primary" @click="onSubmit2('form')" v-else>新增</el-button>
                    <el-button @click="onSubmit3">取消</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
import rulesNumberEnglish from "@/mixins/rulesNumberEnglish.js";
import validatePassword from "@/mixins/validatePassword.js";

export default {
    name: "corporateCulture",
    mixins: [rulesNumberEnglish, validatePassword],
    data() {
        return {
            form: {
                name: "",
                gender: "",
                phone: "",
                birthday: "",
                username: "",
                passwd: "",
                fileList: [
                    {
                        name: "demo3.jpg",
                        percentage: 100,
                        response: {
                            msg: "success",
                            code: 0,
                            url: "1555636634087.jpg"
                        },
                        size: 382251,
                        status: "success",
                        uid: 1555636677035,
                        url: "blob:http://localhost:8280/1f52c0e3-5c6c-4413-9e84-e8bcd4092d3b"
                    },
                    {
                        name: "demo3.jpg",
                        percentage: 100,
                        response: {
                            msg: "success",
                            code: 0,
                            url: "1555636634087.jpg"
                        },
                        size: 382251,
                        status: "success",
                        uid: 1555636677036,
                        url: "blob:http://localhost:8280/1f52c0e3-5c6c-4413-9e84-e8bcd4092d3b"
                    }
                ]
            }
        };
    },
    created() {
        /**
         * 编辑页面
         * 获取数据
         */
        if (this.$route.query.userId) {
            this.$http
                .get(`sys/user/${this.$route.query.userId}`)
                .then(response => {
                    this.form = response.data.data;
                    delete this.form.createTime;
                    delete this.form.deleteTime;
                })
                .catch(error => {
                    console.log(error);
                });
        }
        /**
         * 对数据里面的路径进行处理
         */
        this.form.fileList.map( (el,index)=>{
            el.url = this.$baseSrc + el.response.url;
        });
    },
    mounted(){
        
    },
    computed: {
        uploadUrl(){
            return this.$baseSrc+"common/upload"
        }
    },
    methods: {
        handleUploadSuccess(response, file, fileList) {
            this.form.fileList = fileList;
        },
        handleUploaderror(err, file, fileList){
            console.log( err, file, fileList );
        },
        handleUploadRemove(file, fileList){
            this.form.fileList = fileList;
            console.log( this.form.fileList.length );
        },
        onSubmit1(formRef) {
            // 修改
            this.$refs[formRef].validate(valid => {
                if (valid) {
                    this.$http
                        .post("sys/user/update", this.form)
                        .then(response => {
                            console.log(response);
                            if (response.data.msg == "success") {
                                this.$router.push({ path: "/user/list" });
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        onSubmit2(formRef) {
            // 新增
            this.$refs[formRef].validate(valid => {
                if (valid) {
                    this.$http
                        .post("sys/user/add", this.form)
                        .then(response => {
                            if (response.data.msg == "success") {
                                this.$router.push({
                                    path: "/user/details",
                                    query: { userId: response.data.user.id }
                                });
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        onSubmit3() {
            this.$router.push({ path: "/user/list" });
        },
        onSubmit4() {
            console.log( this.form.fileList );
        }
    }
};
</script>
