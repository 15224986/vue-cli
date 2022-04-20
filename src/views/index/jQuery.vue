<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section m-t-20" v-mocTitle="$route.meta.title">
                <h2 id="jq">测试是否引入了jq</h2>
                <br />
                <br />
                <h2>
                    <router-link :to="{path: '/home/requiredType', query:{ title:'我是通过 touter-link 到来的'}}">
                        <span>切换必填状态 测试 tagsView 显示的文字，通过参数获取</span>
                    </router-link>
                </h2>
                <br />
            </section>

            <svg-icons-view></svg-icons-view>

            <break-for></break-for>

            <deep></deep>

            <array-test></array-test>

            <string-test></string-test>

            <lodash></lodash>

        </div>
    </article>
</template>
<script>
    export default {
        name: "jQuery",
        components: {
            svgIconsView:()=>import('./components/jQuery/svgIconsView.vue'),
            breakFor:()=>import('./components/jQuery/breakFor.vue'),
            deep:()=>import('./components/jQuery/deep.vue'),
            arrayTest:()=>import('./components/jQuery/arrayTest.vue'),
            stringTest:()=>import('./components/jQuery/stringTest.vue'),
            lodash:()=>import('./components/jQuery/lodash.vue'),
        },
        data() {
            return {
                loading: false
            };
        },
        mounted() {
            /**
             * jQuery 相关的方法
             */
            this.$nextTick(() => {
                $("#jq, .text-red").css('color', '#f00');
            });
        },
        methods:{
        }
    };
</script>
<style scoped lang="scss">
    #wrapper {
        background-color: transparent;
    }
    .section-breadcrumb {
        margin-bottom: 20px;
    }
    .section+.section {
        margin-top: 20px;
    }
    .section-title {
        padding: 0 0 10px;
    }
    .section-subhead {
        padding-bottom: 16px;
    }
    .section-title+.section-subhead {
        margin-top: -6px;
    }
</style>
<style>
    .body-bg-default{
        background-color: #F0F0F0;
    }
    pre{
        padding: 0;
        line-height: 1.5;
        background-color: #e9ecef;
        overflow: auto
    }
    pre code{
        overflow-wrap: normal;
        white-space: inherit
    }
    h2{
        color: #409EFF;
    }
</style>
