<template>
    <div id="wrapper">
        <section class="section">
            <h3 class="title">通过path加载路由，通过query传递参数</h3>
            <div class="text">Id：{{$route.query.id}}</div>
            <div class="text">姓名：{{$route.query.name}}</div>

            <h3 class="title">注意事项</h3>
            <ul class="text">
                <li>无特殊情况请选择这种方式</li>
            </ul>
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
    created() {},
    watch: {},
    methods: {}
};
</script>

<style lang="scss" scoped>
    .title {
        padding: 40px 0 10px;
        font-size: 18px;
        color: #333;
    }
</style>
