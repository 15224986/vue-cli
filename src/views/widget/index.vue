<template>
    <article id="page-bodier">
        <aside id="sidebar">
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                router
            >
                <el-menu-item index="/widget/assembly">
                    <i class="el-icon-menu"></i>
                    <span slot="title">插件</span>
                </el-menu-item>
                <el-menu-item index="/widget/unit">
                    <i class="el-icon-setting"></i>
                    <span slot="title">组件</span>
                </el-menu-item>
                <el-menu-item index="/widget/static">
                    <i class="el-icon-goods"></i>
                    <span slot="title">静态资源11</span>
                </el-menu-item>
            </el-menu>
        </aside>
        <main id="content">
            <transition name="fade-transform" mode="out-in">
                <keep-alive>
                    <router-view />
                </keep-alive>
            </transition>
        </main>
    </article>
</template>
<script>
export default {
    name: 'widget',
    data() {
        return {};
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>
<style>
    #content{
        overflow: hidden
    }
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .fade-transform-enter-active,.fade-transform-leave-active {
        -webkit-transition: all .5s;
        transition: all .5s
    }
    .fade-transform-enter {
        opacity: 0;
        -webkit-transform: translateX(-30px);
        transform: translateX(-30px)
    }
    .fade-transform-leave-to {
        opacity: 0;
        -webkit-transform: translateX(30px);
        transform: translateX(30px)
    }
</style>
