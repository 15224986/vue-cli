<template>
    <div id="wrapper">
        <section class="section">
            <h3 class="title">没有导航</h3>
            <ul class="text">
                <li>通过钩子函数，调用通用的去除左导航/顶部导航的方法实现隐藏左道航</li>
            </ul>
            <el-button @click="onReturn()">返回</el-button>
        </section>
    </div>
</template>

<script>
export default {
    name: "corporateCulture",
    data() {
        return {
            formInline: {
                name: "",
                gender: ""
            },
            tableData: {}
        };
    },
    mounted() {
        this.$common.headerToggle();
        this.$common.sidebarToggle();
    },
    destroyed(){
        this.$common.headerToggle();
        this.$common.sidebarToggle();
    },
    watch: {},
    methods: {
        onReturn(){
            this.$router.push( { path:'/project/list2', query:{ id:2, name:'王花花' } } );
        }
    }
};
</script>

<style lang="scss" scoped>
.title {
    padding: 40px 0 10px;
    font-size: 18px;
    color: #333;
}
</style>
