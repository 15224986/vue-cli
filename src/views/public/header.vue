<template>
    <header id="page-header">
        <div class="logo">logo.png</div>
        <ul class="nav">
            <li>
                <router-link :to="{path:'/home'}">首页</router-link>
                <!-- <router-link :to="{path:'/home'}" exact>首页</router-link> -->
            </li>
            <li>
                <router-link :to="{path:'/user'}">人员列表</router-link>
            </li>
            <li>
                <router-link :to="{path:'/project'}">路由改进</router-link>
            </li>
            <li>
                <router-link :to="{path:'/charts'}">echarts使用</router-link>
            </li>
            <li>
                <router-link :to="{path:'/widget'}">插件组件&内容动画</router-link>
            </li>
            <li>
                <router-link :to="{path:'/jurisdiction'}">权限管理</router-link>
            </li>
            <li>
                <router-link :to="{path:'/400'}">400</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'container', params: {id:sysUserName, name:sysUserAvatar }}">动态路由1</router-link>
            </li>
            <li>
                <router-link :to="{ path:'/layout/container/container1/table' }">动态路由2</router-link>
            </li>
        </ul>
        <div class="user">
            <button class="btn-text">设置</button>
            <el-dropdown trigger="hover" :show-timeout="50" :hide-timeout="300">
                <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>我的消息</el-dropdown-item>
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item divided @click.native="signInOut">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>
<script>
    import {mapState,mapGetters,mapActions} from 'vuex';
	export default {
	    data() {
	        return {
	            sysUserAvatar: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
	            sysUserName: '',
	        };
	    },
	    created() {
            this.sysUserName = this.userInfo.user

            // console.log(this.userInfo)
        },
        computed:{
            ...mapGetters([
                'userInfo'
            ])
        },
	    methods: {
	        signInOut() {
                this.logining = true;
                this.$store.dispatch('userInfo/FedLogOut', this.ruleForm2).then(() => {
                    this.$router.push({ path: '/login' })
                    this.logining = false;
                }).catch(() => {
                    this.logining = false;
                    console.log(error);
                })

	        }
	    },
	};
</script>
