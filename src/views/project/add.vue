<template>
    <div id="wrapper">
        <section class="h3" v-loading.fullscreen.lock="fullscreenLoading">
            <div class="text-left">
                <router-link :to="{path:'/project/list'}">
                    <el-button type="primary">返回</el-button>
                </router-link>
            </div>

            <h3>{{ text }}</h3>
            <h3>{{ text }}</h3>
            <h3>{{ text }}</h3>
            <h3>{{ text }}</h3>
            <h3>{{ text }}</h3>
            <h3>{{ text }}</h3>
            <h3>{{ text }}</h3>
            <h3>{{ text }}</h3>
            <h3>{{ text }}</h3>
            <h3>{{ text }}</h3>
        </section>
    </div>
</template>

<script>
export default {
    name: "corporateCulture",
    data() {
        return {
            fullscreenLoading: false,
            text: "这是新增页面"
        };
    },
    created() {
        this.fullscreenLoading = true;
        setTimeout(() => {
            this.fullscreenLoading = false;
        }, 2000);
    },
    watch: {},
    methods: {}
};
</script>

<style lang="scss" scoped>
.h3 {
    padding-top: 80px;
    text-align: center;
    line-height: 44px;
    color: #f00;
    h3 {
        color: #333;
        margin-bottom: 120px;
    }
}
</style>
