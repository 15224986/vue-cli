<template>
    <aside id="sidebar">
        <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            router
        >
            <el-menu-item index="/project/list">
                <i class="el-icon-menu"></i>
                <span slot="title">导航一(不需要登录)</span>
            </el-menu-item>
            <el-menu-item index="/project/list1">
                <i class="el-icon-document"></i>
                <span slot="title">导航三(不需要登录)</span>
            </el-menu-item>
            <el-menu-item
                index="/project/list2"
                :route="{ path:'/project/list2', query:{ id:2, name:'王花花' } }"
            >
                <i class="el-icon-setting"></i>
                <span slot="title">path路由(必须登录)</span>
            </el-menu-item>
            <el-menu-item
                index="projectList3"
                :route="{ name:'projectList3', params:{ id:3, name:'王花花' } }"
            >
                <i class="el-icon-setting"></i>
                <span slot="title">name路由(必须登录)</span>
            </el-menu-item>
            <el-menu-item
                index="/project/noleftnav"
                :route="{ path:'/project/noleftnav', query:{ id:4, name:'王花花4' } }"
            >
                <i class="el-icon-setting"></i>
                <span slot="title">没有左道航(必须登录)</span>
            </el-menu-item>
            <el-menu-item
                index="/project/noheadernav"
                :route="{ path:'/project/noheadernav', query:{ id:5, name:'王花花' } }"
            >
                <i class="el-icon-setting"></i>
                <span slot="title">没有顶部导航(必须登录)</span>
            </el-menu-item>
            <el-menu-item
                index="/project/nonav"
                :route="{ path:'/project/nonav', query:{ id:5, name:'王花花' } }"
            >
                <i class="el-icon-setting"></i>
                <span slot="title">没有导航(必须登录)</span>
            </el-menu-item>
        </el-menu>
    </aside>
</template>

<script>
export default {
    name: "corporateCulture",
    data() {
        return {};
    },
    created() {},
    watch: {},
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>
