<template>
    <div id="wrapper">
        <section class="form-section form-details">
            <el-form ref="form" :model="form" label-width="120px">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="姓名">
                            <p class="form-text">{{ form.name }}</p>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="性别">
                            <p class="form-text">{{ form.gender | sexText }}</p>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="电话号码">
                            <p class="form-text">{{ form.phone }}</p>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="出生日期">
                            <p class="form-text">{{ form.birthday }}</p>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="用户名">
                            <p class="form-text">{{ form.username }}</p>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item class="form-btns">
                    <el-button @click="onCancel">返回</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
    import sexText from "@/mixins/sexText.js";

    export default {
        name: "corporateCulture",
        mixins: [sexText],
        data() {
            return {
                form: {
                    name: "",
                    gender: 1,
                    phone: "",
                    birthday: "",
                    username: "",
                    passwd: ""
                }
            };
        },
        created() {
            this.$http
                .get(`sys/user/${this.$route.query.userId}`)
                .then(response => {
                    console.log(response);
                    this.form = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        watch: {},
        methods: {
            onCancel() {
                this.$router.push({ path: "/user/list" });
            }
        }
    };
</script>
