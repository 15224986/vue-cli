<template>
    <div id="page-container" class="body-bg-default">
        <pageHeader/>
        <router-view></router-view>
    </div>
</template>

<script>
    // 加载资源
    import pageHeader from './public/header'
    export default {
        name: "home",
        components: {
            pageHeader
        },
        mounted(){
            /**
             * 调用计算高度事件
             */
            this.$common.pageMinHeight();
            window.addEventListener('resize', this.$common.pageMinHeight);
        },
        destroyed: function () {
            /**
             * 销毁计算高度事件
             */
            window.removeEventListener('resize', this.$common.pageMinHeight);
        },
    }
</script>
