<template>
    <div id="wrapper">

        <echarts1></echarts1>

        <echarts2></echarts2>
        
        <echarts3></echarts3>

    </div>
</template>

<script>
    export default {
        data() {
            return {

            };
        },
        components: {
            echarts1:()=>import('./echarts1.vue'),
            echarts2:()=>import('./echarts2.vue'),
            echarts3:()=>import('./echarts3.vue'),
        },
        created() {

        },
        mounted() {

        },
        watch: {

        },
        methods: {

        }
    };
</script>
<style>
    .section-title {
        padding: 0 0 10px;
    }
    .section-subhead{
        padding-bottom: 16px;
    }
    .section-title + .section-subhead{
        margin-top: -6px;
    }
    .section + .section{
        margin-top: 20px;
    }
</style>
