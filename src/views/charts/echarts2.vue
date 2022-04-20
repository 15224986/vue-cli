<template>
    <section class="section">
        <h3 class="section-title">使用echarts和highcharts自定义的charts方法</h3>
        <el-row>
            <el-col :span="12">
                <div id="myCharts1" class="echarts-item"></div>
            </el-col>
            <el-col :span="12">
                <div id="myCharts2" class="echarts-item"></div>
            </el-col>
        </el-row>
        <div id="myCharts3" class="echarts-item" style="background-color: #000000;"></div>
    </section>
</template>

<script>

    /**
     * 引入 myCharts 方法
     */
    import myCharts from '@/utils/myCharts.js'



    export default {
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
            this.$nextTick(()=>{
                /**
                 * highcharts的3D饼图
                 */
                var make3DpieData=[{
                    type: 'pie',
                    size: '100%',
                    data: [
                        ['商用广告类', 3258585],
                        ['涉黑类', 2952073],
                        ['诈骗类', 2844903],
                        ['涉黄类', 2718117],
                        ['政治类', 3158815],
                        ['其他', 3607137]
                    ]
                }];
                myCharts.make3Dpie("myCharts1", make3DpieData, function(options){
                    options.title = {
                        text: 'highcharts 的 3D 饼图',
                        y: 40
                    };
                    options.chart.options3d.alpha =  55;
                    options.tooltip.pointFormat =  '{point.y}';
                    options.plotOptions.pie.dataLabels = {
                        textShadow:false,
                        distance: 10,
                        formatter: function() {
                            return '<span class="highcharts-plot-options">'+ this.point.name+ '</span>';
                            // return '<span class="highcharts-plot-options">'+ this.point.name+ '</span><br/><span class="highcharts-plot-options">' + this.point.y +'</span>';
                        }
                    };
                });


                /**
                 * echarts的柱形图
                 */
                var makeBarData = {
                    legend: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
                    xAxisData: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
                    title: {
                        text: '阶梯瀑布图',
                        subtext: 'From ExcelHome',
                        sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
                    },
                    series: [
                        {
                            name: '直接访问',
                            type: 'bar',
                            stack: '总量',
                			barWidth : '30%',
                            label: {
                                show: true,
                                position: 'insideRight'
                            },
                            data: [320, 302, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '邮件营销',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                show: true,
                                position: 'insideRight'
                            },
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                show: true,
                                position: 'insideRight'
                            },
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                show: true,
                                position: 'insideRight'
                            },
                            data: [150, 212, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '搜索引擎',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                show: true,
                                position: 'insideRight'
                            },
                            data: [820, 832, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                }
                myCharts.makeBar("myCharts2", makeBarData, function(options){
                    options.color = ['#7792d9', '#5f21d1', '#0986bf', '#df9360', '#00aa00', '#00f7e5', '#fe76b4', '#2e6cc8', '#c86f2e'];
                }, makeBarClick);
                function makeBarClick(params){
                    console.log( params );
                }

                /**
                 * HighCharts 线形图
                 */
                myCharts.makeAreaspline("myCharts3");
            })

        },
        watch: {

        },
        methods: {

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
