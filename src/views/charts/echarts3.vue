<template>
    <section class="section">
        <el-row>
            <el-col :span="12">
                <div id="echarts1" class="echarts-item"></div>
            </el-col>
            <el-col :span="12">
                <div id="echarts2" class="echarts-item"></div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div id="echarts3" class="echarts-item"></div>
            </el-col>
            <el-col :span="12">
                <div id="echarts4" class="echarts-item"></div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    export default {
        name: 'echartsLine',
        data() {
            return {

            };
        },
        created() {

        },
        mounted() {

            /**
             * 请求数据成功后调用
             */
            this.drawCharts();
        },
        watch: {

        },
        methods: {
            drawCharts() {
                const chart1 = this.$echarts.init(document.getElementById('echarts1'));
                chart1.setOption({
                    title: {
                        text: 'ECharts Line',
                    },
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        data: ['邮件营销', '联盟广告', '搜索引擎'],
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    },
                    yAxis: {
                        type: 'value',
                    },
                    series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210],
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310],
                        },
                        {
                            name: '搜索引擎',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                        },
                    ],
                });

                const chart2 = this.$echarts.init(document.getElementById('echarts2'));
                chart2.setOption({
                    legend: {},
                    tooltip: {},
                    dataset: {
                        source: [
                            ['product', '2015', '2016', '2017'],
                            ['Matcha Latte', 43.3, 85.8, 93.7],
                            ['Milk Tea', 83.1, 73.4, 55.1],
                            ['Cheese Cocoa', 86.4, 65.2, 82.5],
                            ['Walnut Brownie', 72.4, 53.9, 39.1],
                        ],
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {},
                    // Declare several bar series, each will be mapped
                    // to a column of dataset.source by default.
                    series: [
                        {
                            type: 'bar'
                        },
                        {
                            type: 'bar'
                        },
                        {
                            type: 'bar'
                        },
                    ],
                });

                const chart3 = this.$echarts.init(document.getElementById('echarts3'));
                chart3.setOption({
                    title: {
                        text: '某站点用户访问来源',
                        subtext: '纯属虚构',
                        x: 'center',
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)',
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                {
                                    value: 335,
                                    name: '直接访问'
                                },
                                {
                                    value: 310,
                                    name: '邮件营销'
                                },
                                {
                                    value: 234,
                                    name: '联盟广告'
                                },
                                {
                                    value: 135,
                                    name: '视频广告'
                                },
                                {
                                    value: 1548,
                                    name: '搜索引擎'
                                },
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                                },
                            },
                        },
                    ],
                });

                const chart4 = this.$echarts.init(document.getElementById('echarts4'));
                chart4.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)',
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center',
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold',
                                    },
                                },
                            },
                            labelLine: {
                                normal: {
                                    show: false,
                                },
                            },
                            data: [
                                {
                                    value: 335,
                                    name: '直接访问'
                                },
                                {
                                    value: 310,
                                    name: '邮件营销'
                                },
                                {
                                    value: 234,
                                    name: '联盟广告'
                                },
                                {
                                    value: 135,
                                    name: '视频广告'
                                },
                                {
                                    value: 1548,
                                    name: '搜索引擎'
                                },
                            ],
                        },
                    ],
                });
            },
        },
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
