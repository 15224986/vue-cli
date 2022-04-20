<template>
    <el-form label-position="left" :model="ruleForm2" ref="loginName" @keyup.enter.native="handleSubmit('loginName')" class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="username" :rules="[
                { required: true, message: '账号不能为空', trigger: 'blur'}
            ]">
            <el-input type="text" v-model="ruleForm2.username" autofocus placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password" :rules="[
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]">
            <el-input type="password" v-model="ruleForm2.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="handleSubmit('loginName')" :loading="logining" type="primary" class="btn-block">登录</el-button>
        </el-form-item>
    </el-form>
</template>
<script>

import { mapState, mapGetters, mapActions } from 'vuex';

import {
    getToken,
    setToken,
    removeToken,

    getTokenExpire,
    setTokenExpire,
    removeTokenExpire,

    getRefreshToken,
    setRefreshToken,
    removeRefreshToken
} from '@/utils/auth'



export default {
    data() {
        return {
            logining: false,
            ruleForm2: {
                username: '',
                password: ''
            }
        };
    },
    created() {

    },
    mounted() {
        console.log(this.renderSrc, this.maxNumber, this.$store.state)
    },
    computed:{
        ...mapGetters([
            'renderSrc',
            'maxNumber',
            'user'
        ])
    },
    methods: {
        handleSubmit(loginName) {


            this.$refs[loginName].validate((valid) => {
                if (valid) {
                    this.logining = true;
                    /**
                     * 通过vuex的方法进行登录
                     */
                    this.$store.dispatch('userInfo/LoginByUsername', this.ruleForm2).then(() => {
                        // 重定向到退出登录的页面
                        if( this.$store.getters.renderSrc ){
                            this.$router.push({ path: this.$store.getters.renderSrc })
                        }else{
                            this.$router.push({ path: '/home' })
                        }
                        this.logining = false;
                    }).catch(() => {
                        this.logining = false;
                        console.log(error);
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
};
</script>

<style>
    .btn-block{
        display: block;
        width: 100%;
    }
</style>
