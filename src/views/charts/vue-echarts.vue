<template>
    <div id="wrapper">
        <section class="section">
            <el-row>
                    <el-col :span="12">
                        <chart ref="chart1" :options="orgOption1" :auto-resize="true" class="echarts-item"></chart>
                    </el-col>
                    <el-col :span="12">
                        <chart ref="chart2" :options="orgOption2" :auto-resize="true" class="echarts-item"></chart>
                    </el-col>
                </el-row>

        </section>

        <section class="section">
            <el-row>
                <el-col :span="12">
                    <chart ref="chart3" :options="orgOption3" :auto-resize="true" class="echarts-item"></chart>
                </el-col>
                <el-col :span="12">
                    <chart ref="chart4" :options="orgOption4" :auto-resize="true" class="echarts-item"></chart>
                </el-col>
            </el-row>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'echartsLine',
        data() {
            return {
                orgOption1: {},
                orgOption2: {},
                orgOption3: {},
                orgOption4: {},
            };
        },
        created() {

        },
        mounted() {
            this.orgOption1 = {
                title: {
                    text: 'vue-echarts Line',
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
            },
            this.orgOption2 = {
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
            },
            this.orgOption3 = {
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
            },
            this.orgOption4 = {
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
            };
        },
        watch: {

        },
        methods: {

        },
    };
</script>
<style>
    .section + .section{
        margin-top: 20px;
    }
</style>
