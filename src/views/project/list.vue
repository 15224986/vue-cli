<template>
    <div id="wrapper">
        <section class="section" v-loading.fullscreen="fullscreenLoading">
            <div class="text-left">
                <router-link :to="{path:'/project/add'}">
                    <el-button type="primary">新增</el-button>
                </router-link>
            </div>

            <h3>{{ text }}</h3>
            <p>{{ number + 1 }}</p>
            <p>{{ number - 1 > 16 ? '成年':'未成年'}}</p>
            <p>{{ ok ? 'YES' : 'NO' }}</p>
            <p>{{ message.split('').reverse().join('') }}</p>
            <h3>{{ title }}</h3>
            <input type="text" v-model="val" style="border: #ccc 1px solid;">
            <span>{{val}}</span>
        </section>
    </div>
</template>

<script>
export default {
    name: "corporateCulture",
    data() {
        return {
            fullscreenLoading: false,
            text: "模板语法",
            number: 22,
            ok: false,
            message: "helloWorld",
            title: "双向绑定",
            val: "hello my name is "
        };
    },
    created() {
        this.fullscreenLoading = true;
        setTimeout(() => {
            this.fullscreenLoading = false;
        }, 750);
    },
    watch: {},
    methods: {}
};
</script>
